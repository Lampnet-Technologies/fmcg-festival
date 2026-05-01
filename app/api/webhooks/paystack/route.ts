import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const secret = process.env.PAYSTACK_SECRET_KEY!;
    const signature = req.headers.get("x-paystack-signature");

    if (!signature) {
        return NextResponse.json({ message: "No signature found" }, { status: 400 });
    }

    // To verify the signature, we need the raw text body
    const body = await req.text();

    const hash = crypto
        .createHmac("sha512", secret)
        .update(body)
        .digest("hex");

    // 1. Authenticate that the request is genuinely from Paystack
    if (hash !== signature) {
        return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(body);

    // 2. Handle successful charge
    if (event.event === "charge.success") {
        const { reference, metadata } = event.data;

        try {
            // Update Registration status to 'successful'
            await db.update(registrations)
                .set({ status: 'successful' })
                .where(eq(registrations.paystackReference, reference));

            // Optional: Promote the user's role to 'exhibitor' or 'sponsor' 
            // if they purchased a higher tier
            if (metadata.purchaseType !== 'visitor') {
                await db.update(users)
                    .set({ role: metadata.purchaseType })
                    .where(eq(users.id, metadata.userId));
            }

            console.log(`Payment confirmed for reference: ${reference}`);
        } catch (err) {
            console.error("Database update failed inside Webhook", err);
            // Still return 200 to Paystack so they don't keep retrying, 
            // but you would log this to an error tracking service in production.
        }
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
}