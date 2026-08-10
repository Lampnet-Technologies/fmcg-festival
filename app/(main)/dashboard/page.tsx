import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import RefreshButton from "./RefreshButton";
import TicketCard from "@/components/TicketCard";
import { EVENT_DETAILS } from "@/lib/event";

// Next.js 15 requires searchParams to be a Promise
export default async function DashboardPage(props: { 
  searchParams: Promise<{ reference?: string; verify?: string }> 
}) {
  try {
  const user = await currentUser();
  const searchParams = await props.searchParams;
  
  if (!user?.id) {
    redirect("/sign-in");
  }

  type DashboardRegistration = {
    id: string;
    userId?: string | null;
    purchaseType?: string | null;
    amountPaid?: number | null;
    status?: string | null;
    paystackReference?: string | null;
    ticketNumber?: string | null;
    createdAt?: Date | string | null;
  };

  // 1. Fetch ALL registrations for this user (Removed .limit(1))
  const userRegistrations = (await db
    .select()
    .from(registrations)
    .where(eq(registrations.userId, user.id))) as DashboardRegistration[];

  // If they have no tickets at all, send them to register
  if (!userRegistrations || userRegistrations.length === 0) {
    redirect("/register");
  }

  // --- THE FIX: HYBRID VERIFICATION ---
  let showFullPendingScreen = false;

  // Check if we just came back from Paystack (reference in URL)
  if (searchParams.reference) {
    // Find the specific ticket that matches this Paystack reference
    const pendingReg = userRegistrations.find(
      (r: { status?: string | null; paystackReference?: string | null }) =>
        r.status === "pending" && r.paystackReference === searchParams.reference
    );

    if (pendingReg) {
      try {
        // Manually ask Paystack if this specific transaction was successful
        if (!process.env.PAYSTACK_SECRET_KEY) {
          throw new Error("Payment service is not configured.");
        }

        const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(searchParams.reference)}`, {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          },
          cache: "no-store"
        });
        
        const verifyData = await verifyRes.json().catch(() => null);

        if (
          verifyRes.ok &&
          verifyData?.data?.status === "success" &&
          verifyData.data.amount === pendingReg.amountPaid
        ) {
          // Update the specific registration to successful
          await db.update(registrations)
            .set({ status: 'successful' })
            .where(eq(registrations.paystackReference, searchParams.reference));

          // Update user role if they bought a sponsorship/exhibitor pass
          if (pendingReg.purchaseType !== 'visitor') {
            await db.update(users)
              .set({ role: pendingReg.purchaseType })
              .where(eq(users.id, user.id));
          }

          // Manually update our local variable so the UI renders the ticket immediately
          pendingReg.status = "successful";
        } else {
          // If Paystack says it is not successful yet, show the full-page loader
          showFullPendingScreen = true;
        }
      } catch (err) {
        console.error("Manual verification failed:", err);
        showFullPendingScreen = true;
      }
    }
  }

  // 3. Handle pending state ONLY for the ticket currently being processed
  if (showFullPendingScreen) {
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

  return (
    <main className="flex-1 bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-[#0A2E1F] mb-2">
            Welcome, {user.firstName || "Attendee"}!
          </h1>
          <p className="text-gray-600">
            {userRegistrations.length > 1 
              ? `Here are your official passes for the ${EVENT_DETAILS.year} FMCG Festival.`
              : `Here is your official pass for the ${EVENT_DETAILS.year} FMCG Festival.`}
          </p>
        </div>

        {/* Map through all the user's tickets */}
        <div className="space-y-8">
          {userRegistrations.map((registration: {
            id?: string | null;
            paystackReference?: string | null;
            status?: string | null;
            purchaseType?: string | null;
            amountPaid?: number | null;
            ticketNumber?: string | null;
            createdAt?: Date | string | null;
            userId?: string | null;
          }) => (
            <TicketCard
              key={registration.id || registration.paystackReference}
              registration={registration}
              user={{
                firstName: user.firstName || "Attendee",
                lastName: user.lastName || "",
                email: user.emailAddresses[0]?.emailAddress || "",
              }}
            />
          ))}
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
            <Link href="/exhibitors#directory" className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
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
  } catch (error: any) {
    if (
      error &&
      (error.digest === "NEXT_REDIRECT" ||
        error.digest === "DYNAMIC_SERVER_USAGE" ||
        error.message?.includes("Dynamic server usage") ||
        error.message === "NEXT_REDIRECT")
    ) {
      throw error;
    }
    console.error("FATAL ERROR: Failed to render DashboardPage:", error);
    return (
      <main className="flex-1 bg-gray-50 flex items-center justify-center py-16 px-6 min-h-[50vh]">
        <div className="bg-white border border-red-100 p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-black text-red-700 mb-4">Dashboard Error</h1>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            There was an error loading your dashboard or verifying your ticket.
          </p>
          <p className="text-xs text-gray-400 bg-gray-50 p-3 rounded border font-mono break-all text-left">
            Error: {error instanceof Error ? error.message : String(error)}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-block bg-[#0A2E1F] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#062015] transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
