// Builds the cPanel-ready static export into `out/`.
//
// This repo is also deployed dynamically to Vercel (Clerk auth, the
// dashboard, registration/payments, and webhooks all need a real Node
// server + Postgres, which cPanel static hosting can't provide). To keep
// both working from one codebase, this script temporarily swaps in
// Clerk-free variants of the layout/Navbar/register/dashboard files and
// excludes the API routes, runs `next build` with `output: "export"`, then
// restores everything — regardless of whether the build succeeds.
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const p = (...segments) => join(rootDir, ...segments);

// [real file, static replacement file]
const swaps = [
  [p("app", "(main)", "layout.tsx"), p("app", "(main)", "layout.static.tsx")],
  [p("components", "Navbar.tsx"), p("components", "Navbar.static.tsx")],
  [p("app", "(main)", "register", "page.tsx"), p("app", "(main)", "register", "page.static.tsx")],
  [p("app", "(main)", "dashboard", "page.tsx"), p("app", "(main)", "dashboard", "page.static.tsx")],
];

// Dynamic-only route trees that don't belong in a static export. Moved
// *outside* app/ (not just renamed in place) so Next's router stops seeing
// them as routes entirely.
// Note: app/api/health/sanity is deliberately NOT excluded — it's a GET-only
// route with `dynamic = "force-static"`, so Next bakes it into a static file
// and SanityNotice's client-side fetch to it still works on the static site.
const excludedDirs = [p("app", "api", "webhooks")];
const holdingDir = p(".static-build-excluded");

const backups = new Map();

function backupAndSwap() {
  for (const [realPath, staticPath] of swaps) {
    backups.set(realPath, readFileSync(realPath, "utf8"));
    writeFileSync(realPath, readFileSync(staticPath, "utf8"));
  }
  if (existsSync(holdingDir)) {
    throw new Error(`${holdingDir} already exists — a previous run may not have cleaned up.`);
  }
  mkdirSync(holdingDir);
  for (const dir of excludedDirs) {
    if (existsSync(dir)) {
      const dest = join(holdingDir, dir.slice(rootDir.length));
      mkdirSync(dirname(dest), { recursive: true });
      renameSync(dir, dest);
    }
  }
}

function restore() {
  for (const [realPath, original] of backups) {
    writeFileSync(realPath, original);
  }
  for (const dir of excludedDirs) {
    const movedPath = join(holdingDir, dir.slice(rootDir.length));
    if (existsSync(movedPath) && !existsSync(dir)) {
      renameSync(movedPath, dir);
    }
  }
  if (existsSync(holdingDir)) {
    rmSync(holdingDir, { recursive: true, force: true });
  }
}

let buildFailed = false;
try {
  backupAndSwap();
  execSync("npx next build", {
    cwd: rootDir,
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "1" },
  });
} catch (err) {
  buildFailed = true;
  console.error("\nStatic export build failed.");
  console.error(err);
} finally {
  restore();
}

if (buildFailed) {
  process.exit(1);
}

console.log(`\nStatic export ready at: ${p("out")}`);
console.log("Upload the contents of the out/ folder to your cPanel public_html (or subfolder).");
