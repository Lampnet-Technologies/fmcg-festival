import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/exhibitors',
  '/line-up',
  '/sponsorship',
  '/contact',
  '/press',
  '/privacy',
  '/terms',
  '/updates(.*)',
  '/visitor-profile',
  '/partner',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/robots.txt',
  '/sitemap.xml',
  '/api/health/sanity',
  '/api/webhooks/clerk',
  '/api/webhooks/paystack',
  '/studio(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
