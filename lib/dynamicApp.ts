// The static export (cPanel) doesn't run Clerk, Postgres, or Paystack.
// Anything that needs those lives on the Vercel deployment instead.
export const DYNAMIC_APP_URL =
    process.env.NEXT_PUBLIC_DYNAMIC_APP_URL || "https://app.thefmcgfestival.com";
