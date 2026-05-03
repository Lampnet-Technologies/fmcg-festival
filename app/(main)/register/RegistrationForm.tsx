"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { processRegistration } from "@/app/actions/register";

const TIER_DETAILS: Record<
  string,
  {
    type: string;
    title: string;
    description: string;
    price: string;
  }
> = {
  visitor: {
    type: "Visitor Pass",
    title: "Visitor Pass",
    description: "Access all sessions, networking areas, and event content at no cost.",
    price: "Free Registration",
  },
  exhibitor: {
    type: "Exhibitor Booth",
    title: "Exhibitor Booth",
    description: "Includes 3x3m booth, 2 staff passes, and branding visibility.",
    price: "$450.00 / ₦250,000",
  },
  sponsorship_bronze: {
    type: "Bronze Sponsorship",
    title: "Bronze Sponsorship",
    description: "Logo placement, exhibition space, and 2 delegate passes.",
    price: "₦5M / $5,000",
  },
  sponsorship_silver: {
    type: "Silver Sponsorship",
    title: "Silver Sponsorship",
    description: "Standard booth, media coverage, and logo exposure.",
    price: "₦12M / $12,000",
  },
  sponsorship_gold: {
    type: "Gold Sponsorship",
    title: "Gold Sponsorship",
    description: "Prime booth, keynote visibility, and premium branding.",
    price: "₦25M / $25,000",
  },
};

export default function RegistrationForm({
  initialTier,
}: {
  initialTier: string;
}) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tierData = TIER_DETAILS[selectedTier];
  const isSponsorshipTier = selectedTier.startsWith("sponsorship");
  const buttonText = selectedTier === "visitor" ? "Complete Registration" : "Continue to Payment";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    formData.append("tier", selectedTier);

    try {
      const result = await processRegistration(formData);

      if (result.type === "payment") {
        window.location.href = result.authorizationUrl;
        return;
      }

      setIsPending(false);
      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while processing your registration. Please try again.");
      setIsPending(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
      >
        {tierData && (
          <div className="mb-8 rounded-3xl border border-gray-200 bg-[#F6FFF0] p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {tierData.type}
                </p>
                <h2 className="text-2xl font-black text-[#0A2E1F] mt-2">
                  {tierData.title}
                </h2>
                <p className="text-sm text-gray-600 mt-3">{tierData.description}</p>
              </div>
              <span className="inline-flex rounded-full bg-[#E5F7DB] px-4 py-2 text-sm font-bold text-[#0A2E1F]">
                {tierData.price}
              </span>
            </div>

            {isSponsorshipTier && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                  You selected a sponsorship tier. All sponsorship registrations are paid and will continue to Paystack.
                </p>
                <Link
                  href="/sponsorship#sponsorship-tiers"
                  className="inline-flex items-center justify-center rounded-sm border border-[#0A2E1F] px-4 py-2 text-sm font-semibold text-[#0A2E1F] hover:bg-[#F0F7EA] transition"
                >
                  Choose another sponsorship tier
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
            Full Name
          </label>
          <input
            required
            name="fullName"
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
            Organization
          </label>
          <input
            required
            name="organization"
            type="text"
            placeholder="Company Ltd"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
            Email Address
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
            Phone Number
          </label>
          <input
            required
            name="phone"
            type="text"
            placeholder="+234 000 0000"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {!isSponsorshipTier && (
        <>
          <h3 className="text-sm font-bold text-[#0A2E1F] mb-4">Select Ticket Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div
              onClick={() => setSelectedTier("visitor")}
              className={`cursor-pointer border-2 p-4 rounded-lg transition-colors ${selectedTier === "visitor" ? "border-[#0A2E1F] bg-green-50" : "border-gray-200"}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-[#0A2E1F]">Visitor Pass</h4>
                <div
                  className={`w-4 h-4 rounded-full border-2 ${selectedTier === "visitor" ? "border-[#0A2E1F] bg-[#0A2E1F]" : "border-gray-300"}`}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Access to all sessions and networking areas.</p>
              <p className="text-xs font-bold text-green-700">Free Registration</p>
            </div>

            <div
              onClick={() => setSelectedTier("exhibitor")}
              className={`cursor-pointer border-2 p-4 rounded-lg transition-colors ${selectedTier === "exhibitor" ? "border-[#0A2E1F] bg-green-50" : "border-gray-200"}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-[#0A2E1F]">Exhibitor Booth</h4>
                <div
                  className={`w-4 h-4 rounded-full border-2 ${selectedTier === "exhibitor" ? "border-[#0A2E1F] bg-[#0A2E1F]" : "border-gray-300"}`}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Includes 3x3m booth, 2 staff passes, and branding.</p>
              <p className="text-xs font-bold text-[#0A2E1F]">$450.00 / ₦250,000</p>
            </div>
          </div>
        </>
      )}

      {/* Warning for Sponsorship URLs */}
      {selectedTier.includes("sponsorship") && (
        <div className="bg-[#C5FA00]/20 p-4 rounded-md mb-8 border border-[#C5FA00]">
          <p className="text-sm font-bold text-[#0A2E1F]">
            You have pre-selected the{" "}
            {selectedTier.replace("sponsorship_", "").toUpperCase()} Sponsorship
            Tier.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="border-t border-gray-200 pt-6">
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-[#C5FA00] text-[#0A2E1F] font-bold py-4 rounded-sm hover:bg-[#b0df00] transition-colors disabled:opacity-50"
        >
          {isPending ? "Initializing Secure Payment..." : buttonText}
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">
          {selectedTier === "visitor"
            ? "No payment is required for Visitor Pass."
            : "Payments are processed securely via Paystack."}
        </p>
      </div>
    </form>

    {showSuccessModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-black text-[#0A2E1F] mb-4">Registration Completed</h2>
          <p className="text-gray-600 mb-6">
            Your visitor pass is confirmed. You can now access your ticket on the dashboard and return to it anytime.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/dashboard");
              }}
              className="w-full rounded-sm bg-[#0A2E1F] text-white py-3 font-bold hover:bg-[#062015] transition"
            >
              View Dashboard
            </button>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-sm border border-gray-300 py-3 font-bold text-[#0A2E1F] hover:bg-gray-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
}
