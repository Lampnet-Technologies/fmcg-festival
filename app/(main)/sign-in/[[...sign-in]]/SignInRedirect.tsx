"use client";

import { useEffect } from "react";
import { DYNAMIC_APP_URL } from "@/lib/dynamicApp";

// Static-export build: Clerk sign-in only runs on the live Vercel app, so
// this page just hands off to it, preserving any ?redirect_url= param.
export default function SignInRedirect() {
  useEffect(() => {
    window.location.replace(`${DYNAMIC_APP_URL}/sign-in${window.location.search}`);
  }, []);

  return (
    <main className="flex-1 bg-[#f8f8f5] py-24 px-6 flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black text-[#0A2E1F] mb-4">
          Taking you to sign in...
        </h1>
        <p className="text-gray-600 mb-6">
          Sign in is handled on our secure event portal.
        </p>
        <a
          href={`${DYNAMIC_APP_URL}/sign-in`}
          className="inline-flex items-center justify-center rounded-sm bg-[#C5FA00] px-6 py-3 text-sm font-black text-[#0A2E1F] hover:bg-[#b0df00] transition-colors"
        >
          Continue to Sign In
        </a>
      </div>
    </main>
  );
}
