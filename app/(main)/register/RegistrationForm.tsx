"use client";

import { useState } from "react";
import { processRegistration } from "@/app/actions/register";

export default function RegistrationForm({
  initialTier,
}: {
  initialTier: string;
}) {
  const [isPending, setIsPending] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    formData.append("tier", selectedTier);

    try {
      await processRegistration(formData);
    } catch (error) {
      console.error(error);
      setIsPending(false);
      alert("Something went wrong initializing your payment.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
    >
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

      <h3 className="text-sm font-bold text-[#0A2E1F] mb-4">
        Select Ticket Type
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Visitor Pass */}
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
          <p className="text-sm text-gray-500 mb-2">
            Access to all sessions and networking areas.
          </p>
          <p className="text-xs font-bold text-green-700">Free Registration</p>
        </div>

        {/* Exhibitor Booth */}
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
          <p className="text-sm text-gray-500 mb-2">
            Includes 3x3m booth, 2 staff passes, and branding.
          </p>
          <p className="text-xs font-bold text-[#0A2E1F]">$450.00 / ₦250,000</p>
        </div>
      </div>

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

      <div className="border-t border-gray-200 pt-6">
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-[#C5FA00] text-[#0A2E1F] font-bold py-4 rounded-sm hover:bg-[#b0df00] transition-colors disabled:opacity-50"
        >
          {isPending ? "Initializing Secure Payment..." : "Continue to Payment"}
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">
          Payments are processed securely via Paystack.
        </p>
      </div>
    </form>
  );
}
