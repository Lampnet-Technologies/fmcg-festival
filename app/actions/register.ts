"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { EVENT_DETAILS, PRICING, type TicketTier } from "@/lib/event";

type RegistrationResult =
    | { success: true; type: "free" }
    | { success: true; type: "payment"; authorizationUrl: string };

export async function processRegistration(formData: FormData): Promise<RegistrationResult> {
    const user = await currentUser();
    if (!user?.id) throw new Error("You must be logged in to register.");

    const tierValue = formData.get("tier");
    if (typeof tierValue !== "string" || !(tierValue in PRICING)) {
        throw new Error("Invalid ticket tier selected.");
    }

    const tier = tierValue as TicketTier;
    const amountInKobo = PRICING[tier];
    const reference = `FMCG_${new Date().getTime()}_${user.id.slice(-5)}`;

    const primaryEmail = user.emailAddresses[0]?.emailAddress;

    if (!primaryEmail) {
        throw new Error("No valid email found for this user.");
    }

    // --- THE BULLETPROOF SYNC ---
    // Check if the user exists by EMAIL, not just ID, to prevent unique constraint crashes
    const existingUserByEmail = await db
        .select()
        .from(users)
        .where(eq(users.email, primaryEmail))
        .limit(1);

    if (existingUserByEmail.length === 0) {
        // 100% safe to insert, no email conflicts exist
        await db.insert(users).values({
            id: user.id,
            email: primaryEmail,
            firstName: user.firstName || "Attendee",
            lastName: user.lastName || "",
            role: "visitor",
        });
    } else if (existingUserByEmail[0].id !== user.id) {
        // Edge case: Email exists but ID changed (e.g., deleted and recreated in Clerk)
        // Update the existing database row with the new Clerk ID so they don't lose their data
        await db.update(users)
            .set({ id: user.id })
            .where(eq(users.email, primaryEmail));
    }
    // ---------------------------------

    // 1. If it is a free Visitor Pass
    if (amountInKobo === 0) {
        await db.insert(registrations).values({
            userId: user.id,
            purchaseType: tier,
            amountPaid: 0,
            status: "successful",
            paystackReference: reference,
        });
        return { success: true, type: "free" };
    }

    // 2. For paid tiers, create a "pending" record
    await db.insert(registrations).values({
        userId: user.id,
        purchaseType: tier,
        amountPaid: amountInKobo,
        status: "pending",
        paystackReference: reference,
    });

    // 3. Initialize Paystack Transaction
    if (!process.env.PAYSTACK_SECRET_KEY) {
        throw new Error("Payment service is not configured.");
    }

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: formData.get("email") || primaryEmail,
            amount: amountInKobo,
            reference: reference,
            callback_url: `${EVENT_DETAILS.baseUrl}/dashboard?verify=true`,
            metadata: {
                userId: user.id,
                purchaseType: tier,
                organization: formData.get("organization"),
            },
        }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.status || !data?.data?.authorization_url) {
        throw new Error("Payment initialization failed");
    }

    return { success: true, type: "payment", authorizationUrl: data.data.authorization_url };
}
