"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";

const PRICING = {
    visitor: 0,
    // Exhibitor Tiers
    exhibitor: 25000000,        // ₦250,000
    exhibitor_4sqm: 70000000,   // ₦700,000
    exhibitor_6sqm: 140000000,  // ₦1,400,000
    exhibitor_9sqm: 210000000,  // ₦2,100,000
    exhibitor_15sqm: 300000000, // ₦3,000,000
    // Sponsorship Tiers
    sponsorship_bronze: 500000000,   // ₦5,000,000
    sponsorship_silver: 1000000000,  // ₦10,000,000
    sponsorship_gold: 2000000000,    // ₦20,000,000
    sponsorship_category: 4000000000, // ₦40,000,000
    sponsorship_headline: 5000000000  // ₦50,000,000
} as const;

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

    const tier = tierValue as keyof typeof PRICING;
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
            callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?verify=true`,
            metadata: {
                userId: user.id,
                purchaseType: tier,
                organization: formData.get("organization"),
            },
        }),
    });

    const data = await response.json();

    if (!data.status) {
        throw new Error("Payment initialization failed");
    }

    return { success: true, type: "payment", authorizationUrl: data.data.authorization_url };
}