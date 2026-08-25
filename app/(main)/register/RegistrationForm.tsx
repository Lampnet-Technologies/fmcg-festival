"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { processRegistration } from "@/app/actions/register";
import { TIER_DETAILS, type TicketTier } from "@/lib/event";

function isTicketTier(value: string): value is TicketTier {
  return value in TIER_DETAILS;
}

export default function RegistrationForm({
  initialTier,
}: {
  initialTier: string;
}) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [selectedTier] = useState(initialTier);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolvedTier = isTicketTier(selectedTier) ? selectedTier : "visitor";
  const tierData = TIER_DETAILS[resolvedTier];
  const isSponsorshipTier = resolvedTier.startsWith("sponsorship");
  const isPaidTier = resolvedTier !== "visitor";
  const buttonText = resolvedTier === "visitor" ? "Complete Registration" : "Continue to Payment";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    formData.append("tier", resolvedTier);

    try {
      const result = await processRegistration(formData);

      // Narrow the type and handle server action failure gracefully
      if (!result.success) {
        setError(result.error);
        setIsPending(false);
        return;
      }

      if (result.type === "payment") {
        window.location.href = result.authorizationUrl;
        return;
      }

      setIsPending(false);
      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
      setError("Registration could not be completed right now. Please try again or contact support if the issue continues.");
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

            {isPaidTier && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                  You selected a paid tier. Payments are processed securely via Paystack.
                </p>
                <Link
                  href={isSponsorshipTier ? "/sponsorship#sponsorship-tiers" : "/exhibitors"}
                  className="inline-flex items-center justify-center rounded-sm border border-[#0A2E1F] px-4 py-2 text-sm font-semibold text-[#0A2E1F] hover:bg-[#F0F7EA] transition"
                >
                  {isSponsorshipTier ? "Choose another sponsorship tier" : "Choose another exhibitor booth"}
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              First Name
            </label>
            <input
              required
              name="firstName"
              type="text"
              placeholder="John"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Last Name
            </label>
            <input
              required
              name="lastName"
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Company Name
            </label>
            <input
              required
              name="companyName"
              type="text"
              placeholder="Company Ltd"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Position Held
            </label>
            <input
              required
              name="positionHeld"
              type="text"
              placeholder="Director of Operations"
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
              Contact Number
            </label>
            <input
              required
              name="contactNumber"
              type="text"
              placeholder="+234 700 000 0000"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Whatsapp Number
            </label>
            <input
              name="whatsappNumber"
              type="text"
              placeholder="+234 700 000 0000"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Country of Residence
            </label>
            <input
              required
              name="country"
              type="text"
              placeholder="Nigeria"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              City of Residence
            </label>
            <input
              required
              name="city"
              type="text"
              placeholder="Lagos"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-[#0A2E1F] mb-2">
              Other Information
            </label>
            <textarea
              name="otherInfo"
              rows={3}
              placeholder="Any special requirements, interests, or questions..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        {/* Warning for Sponsorship URLs */}
        {isSponsorshipTier && (
          <div className="bg-[#C5FA00]/20 p-4 rounded-md mb-8 border border-[#C5FA00]">
            <p className="text-sm font-bold text-[#0A2E1F]">
              You have pre-selected the{" "}
              {resolvedTier.replace("sponsorship_", "").toUpperCase()} Sponsorship
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
            {resolvedTier === "visitor"
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