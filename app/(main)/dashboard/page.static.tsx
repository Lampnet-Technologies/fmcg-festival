"use client";

import { useEffect } from "react";
import { DYNAMIC_APP_URL } from "@/lib/dynamicApp";

// Static-export build: the dashboard needs live Clerk auth + Postgres data,
// which only exist on the Vercel app, so this page just hands off to it.
export default function DashboardRedirectPage() {
  useEffect(() => {
    window.location.replace(`${DYNAMIC_APP_URL}/dashboard${window.location.search}`);
  }, []);

  return (
    <main className="flex-1 bg-gray-50 py-24 px-6 flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black text-[#0A2E1F] mb-4">
          Taking you to your dashboard...
        </h1>
        <p className="text-gray-600 mb-6">
          Your tickets and profile are managed on our secure event portal.
        </p>
        <a
          href={`${DYNAMIC_APP_URL}/dashboard`}
          className="inline-flex items-center justify-center rounded-sm bg-[#0A2E1F] px-6 py-3 text-sm font-black text-white hover:bg-[#062015] transition-colors"
        >
          Continue to Dashboard
        </a>
      </div>
    </main>
  );
}
