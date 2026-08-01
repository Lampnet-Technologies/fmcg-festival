// One-off generator for a standalone "scan to visit the website" QR code,
// for print/flyer use (not embedded on the site). Reuses react-qr-code
// (already a dependency, used for ticket QR codes) rendered server-side.
import { createRequire } from "node:module";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const QRCode = require("react-qr-code").default;
const sharp = require("sharp");

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(rootDir, "deliverables");
mkdirSync(outDir, { recursive: true });

const url = "https://thefmcgfestival.com";
const size = 1024;

const svgMarkup = renderToStaticMarkup(
  React.createElement(QRCode, {
    value: url,
    size,
    bgColor: "#FFFFFF",
    fgColor: "#0A2E1F",
    level: "M",
  })
);

const svgFile = `<?xml version="1.0" encoding="UTF-8"?>\n${svgMarkup}`;
writeFileSync(join(outDir, "fmcg-festival-qr.svg"), svgFile);

await sharp(Buffer.from(svgFile))
  .resize(size, size)
  .png()
  .toFile(join(outDir, "fmcg-festival-qr.png"));

console.log(`QR code (linking to ${url}) written to:`);
console.log(` - deliverables/fmcg-festival-qr.svg`);
console.log(` - deliverables/fmcg-festival-qr.png`);
