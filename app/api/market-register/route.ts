import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, registrations } from "@/db/schema";
import { sendTermiiWhatsApp, formatNigerianPhone } from "@/lib/termii";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, businessName, whatsappNumber, marketLocation } = body;

        if (!fullName || !whatsappNumber) {
            return NextResponse.json(
                { success: false, error: "Full Name and WhatsApp number are required" },
                { status: 400 }
            );
        }

        const formattedPhone = formatNigerianPhone(whatsappNumber);
        if (formattedPhone.length < 11) {
            return NextResponse.json(
                { success: false, error: "Please provide a valid Nigerian phone number" },
                { status: 400 }
            );
        }

        // Split name into first and last
        const parts = fullName.trim().split(/\s+/);
        const firstName = parts[0] || fullName.trim();
        const lastName = parts.slice(1).join(" ") || "";

        // Generate synthetic internal user ID & email (since market owners don't provide email)
        const syntheticUserId = `market_${formattedPhone}`;
        const syntheticEmail = `${formattedPhone}@market.thefmcgfestival.com`;

        // Generate unique ticket number
        const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
        const ticketNumber = `FMCG-MKT-${formattedPhone.slice(-4)}-${randomSuffix}`;

        // 1. Ensure user record exists in database
        await db
            .insert(users)
            .values({
                id: syntheticUserId,
                email: syntheticEmail,
                firstName: firstName,
                lastName: lastName,
                role: "visitor",
            })
            .onConflictDoUpdate({
                target: users.id,
                set: {
                    firstName,
                    lastName,
                },
            });

        // 2. Insert into registrations
        await db.insert(registrations).values({
            userId: syntheticUserId,
            purchaseType: "market_visitor",
            amountPaid: 0,
            status: "successful",
            ticketNumber: ticketNumber,
            paystackReference: ticketNumber,
            firstName,
            lastName,
            companyName: businessName || "Market Business",
            whatsappNumber: formattedPhone,
            contactNumber: formattedPhone,
            country: "Nigeria",
            city: marketLocation || "Lagos",
            otherInfo: `Local Market Quick Pass: ${marketLocation || "General"}`,
        });

        // 3. Resolve the public URL for the badge
        const origin =
            process.env.NEXT_PUBLIC_BASE_URL ||
            req.headers.get("origin") ||
            "https://app.thefmcgfestival.com";
        const badgeUrl = `${origin}/badge/${ticketNumber}`;

        // 4. Trigger automated WhatsApp / SMS dispatch via Termii in background
        sendTermiiWhatsApp({
            to: formattedPhone,
            firstName,
            businessName: businessName || "Trader",
            ticketNumber,
            badgeUrl,
        }).catch((err) => console.error("Termii async error:", err));

        return NextResponse.json({
            success: true,
            ticketNumber,
            badgeUrl,
            message: "Registration successful! Pass has been generated and dispatched to WhatsApp.",
        });
    } catch (err: any) {
        console.error("Market registration error:", err);
        return NextResponse.json(
            { success: false, error: err.message || "Failed to process registration" },
            { status: 500 }
        );
    }
}
