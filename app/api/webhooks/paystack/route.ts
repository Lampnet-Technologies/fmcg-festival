import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/db";
import { registrations, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const signature = req.headers.get("x-paystack-signature");

    if (!secret) {
        return NextResponse.json({ message: "Payment service is not configured" }, { status: 500 });
    }

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

    let event;
    try {
        event = JSON.parse(body);
    } catch {
        return NextResponse.json({ message: "Invalid webhook payload" }, { status: 400 });
    }

    // 2. Handle successful charge
    if (event.event === "charge.success") {
        const { amount, reference, metadata } = event.data;

        try {
            const [registration] = await db
                .select()
                .from(registrations)
                .where(eq(registrations.paystackReference, reference))
                .limit(1);

            if (!registration || registration.amountPaid !== amount) {
                console.error(`Paystack amount mismatch for reference: ${reference}`);
                return NextResponse.json({ message: "Payment amount mismatch" }, { status: 400 });
            }

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
