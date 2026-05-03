"use client";

export default function RefreshButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="bg-[#C5FA00] text-[#0A2E1F] px-6 py-2 rounded-sm font-bold w-full hover:bg-[#b0df00] transition-colors"
    >
      Refresh Page
    </button>
  );
}