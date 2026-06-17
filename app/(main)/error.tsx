"use client";

import { useEffect } from "react";

export default function MainError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 bg-[#F2F4EF] px-6 py-24">
      <div className="mx-auto max-w-xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#84A900]">
          Something went wrong
        </p>
        <h1 className="mt-3 text-2xl font-black text-[#0A2E1F]">
          We could not load this page.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          Please retry. If the issue continues, the event team can still help with registration, booth, and sponsorship enquiries.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="mt-6 rounded-sm bg-[#0A2E1F] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#062015]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
