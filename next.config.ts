import type { NextConfig } from "next";

// STATIC_EXPORT is set only by `npm run build:static` (see scripts/build-static.mjs).
// The normal `npm run build` (used by the Vercel deployment) stays fully dynamic
// so Clerk auth, the dashboard, registration/payments, and webhooks keep working there.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    unoptimized: isStaticExport,
    localPatterns: [
      {
        pathname: '/**',
        search: '?v=20260719',
      },
      {
        pathname: '/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
