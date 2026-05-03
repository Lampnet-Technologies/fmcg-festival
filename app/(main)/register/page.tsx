import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "./RegistrationForm";
import { Calendar, MapPin, CheckIcon, Mail } from "lucide-react";

export default async function RegisterPage(props: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const session = await auth();

  // Protect the route - ensure they are logged in before registering
  if (!session?.userId) {
    redirect("/sign-in?redirect_url=/register");
  }

  const searchParams = await props.searchParams;
  const initialTier = searchParams.tier || "visitor";
  const isSponsorTier = initialTier.startsWith("sponsorship");

  return (
    <main className="flex-1 bg-[#f8f8f5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-[#0A2E1F] mb-2">
              Secure Your Spot
            </h1>
            <p className="text-gray-600">
              Join the largest gathering of FMCG stakeholders, innovators, and
              leaders. Choose your ticket type below.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-sm border border-[#0A2E1F] bg-white px-5 py-3 text-sm font-semibold text-[#0A2E1F] hover:bg-[#f0f7eb] transition"
              >
                View Dashboard
              </Link>
              {isSponsorTier && (
                <Link
                  href="/sponsorship#sponsorship-tiers"
                  className="inline-flex items-center justify-center rounded-sm bg-[#C5FA00] px-5 py-3 text-sm font-semibold text-[#0A2E1F] hover:bg-[#b0df00] transition"
                >
                  Choose another sponsorship tier
                </Link>
              )}
            </div>
          </div>

          {/* We extract the form to a Client Component to handle state/submission */}
          <RegistrationForm initialTier={initialTier} />
        </div>

        {/* Right Info Sidebar (Matches the design) */}
        <div className="space-y-6">
          <div className="bg-[#0A2E1F] text-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">What&apos;s included</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <CheckIcon className="w-4 h-4 text-[#C5FA00]" />
                Full access to 15+ Speaker Sessions
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-4 h-4 text-[#C5FA00]" /> Access to the
                Exhibition Floor
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-4 h-4 text-[#C5FA00]" /> Networking
                Lunch & Coffee Breaks
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-4 h-4 text-[#C5FA00]" /> Certificate of
                Attendance
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="h-32 bg-gray-200 rounded-md mb-4 relative overflow-hidden">
              {/* Decorative image placeholder */}
              <div className="absolute inset-0 bg-[#0A2E1F]/10">
                <Image
                  src="/background.png"
                  alt="Venue"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A2E1F] mb-4">
              Venue & Date
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                November 24 - 26, 2026
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lagos Oriental Hotel, Victoria Island
              </p>
            </div>
          </div>

          <div className="bg-[#eaff97] p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-bold text-[#0A2E1F] mb-4">
              Need Help?
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              If you are experiencing issues with registration or have bulk booking inquiries, contact our team.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4" />
                support@fmcgfestival.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
