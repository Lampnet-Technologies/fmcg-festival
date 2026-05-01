import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import QRCode from "react-qr-code";
import RefreshButton from "./RefreshButton";

// Next.js 15 requires searchParams to be a Promise
export default async function DashboardPage(props: { 
  searchParams: Promise<{ reference?: string; verify?: string }> 
}) {
  const user = await currentUser();
  const searchParams = await props.searchParams;
  
  if (!user?.id) {
    redirect("/sign-in");
  }

  // 1. Check database status
  const userRegistration = await db
    .select()
    .from(registrations)
    .where(eq(registrations.userId, user.id))
    .limit(1);

  const registration = userRegistration[0];

  if (!registration) {
    redirect("/register");
  }

  // --- THE FIX: HYBRID VERIFICATION ---
  // If it's pending AND we just came back from Paystack (reference in URL)
  if (registration.status === "pending" && searchParams.reference) {
    try {
      // Manually ask Paystack if this specific transaction was successful
      const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${searchParams.reference}`, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        cache: "no-store"
      });
      
      const verifyData = await verifyRes.json();

      if (verifyData.data?.status === "success") {
        // Update the registration to successful
        await db.update(registrations)
          .set({ status: 'successful' })
          .where(eq(registrations.paystackReference, searchParams.reference));

        // Update user role if they bought a sponsorship/exhibitor pass
        if (registration.purchaseType !== 'visitor') {
          await db.update(users)
            .set({ role: registration.purchaseType })
            .where(eq(users.id, user.id));
        }

        // Manually update our local variable so the UI renders the ticket immediately
        registration.status = "successful";
      }
    } catch (err) {
      console.error("Manual verification failed:", err);
    }
  }

  // 3. Handle pending state (if verification above didn't pass or they navigated here directly)
  if (registration.status === "pending") {
    return (
      <main className="flex-1 bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center max-w-md">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#0A2E1F] rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-[#0A2E1F] mb-2">Confirming Payment...</h2>
          <p className="text-gray-500 mb-6 text-sm">
            We are waiting for final confirmation from Paystack. This usually takes just a few seconds.
          </p>
          <RefreshButton />
        </div>
      </main>
    );
  }

  // 4. Format the tier display name
  const displayTier = registration.purchaseType.replace('sponsorship_', '').toUpperCase();

  return (
    <main className="flex-1 bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-[#0A2E1F] mb-2">
            Welcome, {user.firstName || "Attendee"}!
          </h1>
          <p className="text-gray-600">Here is your official pass for the 2026 FMCG Festival.</p>
        </div>

        {/* The Digital Pass */}
        <div className="bg-[#0A2E1F] rounded-xl flex flex-col md:flex-row shadow-2xl overflow-hidden relative">
          <div className="w-full md:w-3 bg-[#C5FA00]"></div>

          <div className="p-8 md:p-12 flex-1 text-white flex flex-col justify-between">
            <div>
              <span className="bg-white/10 text-[#C5FA00] px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-6 inline-block border border-white/20">
                {displayTier} PASS
              </span>
              <h2 className="text-3xl font-bold mb-1">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-400 text-sm mb-8">{user.emailAddresses[0]?.emailAddress}</p>

              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Date</p>
                  <p className="font-semibold text-sm">Nov 24 - 26, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-semibold text-sm">Grand Convention Center, VI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 flex flex-col items-center justify-center border-l-2 border-dashed border-gray-200 relative">
             <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0A2E1F] rounded-full hidden md:block"></div>
             <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-50 rounded-full hidden md:block"></div>
             
             <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm mb-4">
                <QRCode 
                  value={registration.paystackReference || user.id} 
                  size={150} 
                  fgColor="#0A2E1F"
                />
             </div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scan for Entry</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
           <Link href="/line-up" className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
              <div>
                <h3 className="font-bold text-[#0A2E1F]">View Event Schedule</h3>
                <p className="text-sm text-gray-500 mt-1">Plan your day and bookmark sessions.</p>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform text-[#C5FA00]">→</span>
           </Link>
           <Link href="/exhibitors" className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
              <div>
                <h3 className="font-bold text-[#0A2E1F]">Exhibitor Map</h3>
                <p className="text-sm text-gray-500 mt-1">Locate booths and interactive demos.</p>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform text-[#C5FA00]">→</span>
           </Link>
        </div>

      </div>
    </main>
  );
}