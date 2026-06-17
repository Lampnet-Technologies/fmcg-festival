# FMCG Festival Maintenance Readiness Notes

Last reviewed: June 16, 2026

## Current Readiness Changes

- Centralized event date, venue, support email, ticket tiers, and Paystack kobo amounts in `lib/event.ts`.
- Replaced the static homepage hero numbers with a real countdown timer using the event start time.
- Added graceful fallbacks for Sanity-powered exhibitors and updates so CMS downtime does not crash public pages.
- Hardened Paystack initialization and verification by checking missing configuration, malformed responses, and amount mismatches.
- Added App Router SEO metadata, `robots.ts`, and `sitemap.ts`.
- Added a route error boundary for recoverable user-facing failures.

## Payment Source Of Truth

All registration amounts should be changed in `lib/event.ts` first. Paystack expects amounts in kobo.

Current values:

- Visitor: NGN 0
- Exhibitor: NGN 250,000
- 4 sqm exhibitor booth: NGN 700,000
- 6 sqm exhibitor booth: NGN 1,400,000
- 9 sqm exhibitor booth: NGN 2,100,000
- 15 sqm exhibitor booth: NGN 3,000,000
- Bronze sponsorship: NGN 5,000,000
- Silver sponsorship: NGN 10,000,000
- Gold sponsorship: NGN 20,000,000
- Category sponsorship: NGN 30,000,000
- Headline sponsorship: NGN 40,000,000

Before deployment, confirm foreign currency display values with the finance or sales owner. The application currently charges only the NGN kobo values.

## Third-Party Services And Fallbacks

### Clerk

Used for authentication and user profile data. Public pages should remain usable during Clerk issues, but protected pages such as registration and dashboard depend on Clerk sessions.

Recommended future work:

- Add a branded auth outage page if Clerk throws during protected route access.
- Add monitoring around Clerk webhook failures.
- Keep `CLERK_WEBHOOK_SECRET` and Clerk publishable/secret keys scoped per environment.

### Paystack

Used for paid registrations. The app now validates initialization responses and checks verified amounts before marking registrations successful.

Recommended future work:

- Add an admin reconciliation view for pending payments.
- Store Paystack gateway response data for auditability.
- Add rate limiting on payment initialization.
- Add structured logging or error tracking for failed payment initialization and webhook mismatches.

### Sanity

Used for exhibitors and updates. The app now returns empty/fallback UI if Sanity fetches fail.

Recommended future work:

- Add cached fallback content for high-value pages.
- Use preview/draft mode only behind authenticated access.
- Add alerts when Sanity fetch failures increase.
- Review Sanity image alt text before launch.

### Postgres/Drizzle

Used for users and registrations.

Recommended future work:

- Add database backups and restore testing before launch.
- Add a unique business-level ticket number if tickets will be scanned onsite.
- Add status transition constraints so a paid ticket cannot move from successful back to pending by accident.

## Reliability Recommendations

- Add production error tracking such as Sentry or another approved provider.
- Add uptime monitoring for the homepage, registration page, dashboard, and Paystack webhook endpoint.
- Add smoke tests for registration tier routing, free visitor registration, and paid payment initialization.
- Add an environment validation step during build or server boot.
- Add CI checks for `npm run lint`, `npm run build`, and dependency audit.
- Add backup contact instructions anywhere users depend on external payment or CMS services.

## Security And Technical Debt

- Keep all secrets out of the client bundle. Only `NEXT_PUBLIC_*` values should be visible to browser code.
- Do not trust client-submitted tier or amount values. The server now maps the tier to the central kobo amount.
- Paystack webhook and dashboard verification now check the paid amount, but production should still reconcile payment logs.
- Some pages still contain static/mock marketing content. Replace placeholder sponsor, partner, and update content before final launch.
- Several components use broad `any` types for Sanity portable text and directory data. Tighten these once the final Sanity schemas are locked.
- Add tests around registration and webhook behavior before high-traffic launch.

## Future Maintenance Prompt

Use this prompt for future readiness passes:

```text
Review this Next.js project for launch readiness. Read AGENTS.md and the local Next.js docs in node_modules/next/dist/docs before editing. Preserve the current design direction while checking SEO, accessibility, security, payment consistency, third-party failure handling, environment configuration, stale dates/copy, technical debt, and deployment risks. Centralize duplicated business values, add graceful fallbacks where external services can fail, and document any unresolved risks in docs/maintenance-readiness.md. Run lint/build/audit checks where available and summarize exact files changed plus any remaining blockers.
```
