/**
 * Termii WhatsApp / SMS integration helper
 * Documentation: https://developers.termii.com
 */

interface SendWhatsAppParams {
    to: string; // Phone number in international format e.g. "2348012345678" or local "08012345678"
    firstName: string;
    businessName: string;
    ticketNumber: string;
    badgeUrl: string;
}

/**
 * Clean and format a Nigerian phone number to international E.164 without '+' (e.g. 2348012345678)
 */
export function formatNigerianPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.startsWith("234") && cleaned.length === 13) {
        return cleaned;
    }
    if (cleaned.startsWith("0") && cleaned.length === 11) {
        return "234" + cleaned.substring(1);
    }
    if (cleaned.length === 10) {
        return "234" + cleaned;
    }
    return cleaned;
}

/**
 * Send WhatsApp confirmation message with ticket QR & details via Termii
 */
export async function sendTermiiWhatsApp({
    to,
    firstName,
    businessName,
    ticketNumber,
    badgeUrl,
}: SendWhatsAppParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const apiKey = process.env.TERMII_API_KEY;

    if (!apiKey) {
        console.warn("⚠️ TERMII_API_KEY is not configured. Skipping WhatsApp message.");
        return { success: false, error: "TERMII_API_KEY is not configured" };
    }

    const formattedNumber = formatNigerianPhone(to);

    const messageText = `*THE FMCG FESTIVAL 2026 - VISITOR PASS* 🎟️

Hello *${firstName}* (${businessName || "Valued Trader"}),

Your registration for *The FMCG Festival 2026* is confirmed!

📅 *Date:* November 09 - 11, 2026
📍 *Venue:* Oriental Hotel, Victoria Island, Lagos
🕒 *Time:* 9:00 AM - 5:00 PM Daily
🎫 *Pass No:* ${ticketNumber}

👉 *Your Digital Badge & QR Code:*
${badgeUrl}

Please show the QR code on your phone at the entrance for instant free entry. We look forward to seeing you!`;

    try {
        // Termii Messaging API
        // Termii allows direct messaging via their /api/sms/send endpoint (with channel="whatsapp" or "generic" fallback)
        const response = await fetch("https://api.ng.termii.com/api/sms/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: formattedNumber,
                from: process.env.TERMII_SENDER_ID || "FMCG Fest",
                sms: messageText,
                type: "plain",
                channel: "whatsapp", // Termii WhatsApp channel
                api_key: apiKey,
            }),
        });

        const data = await response.json();

        if (response.ok && (data.code === "ok" || data.message_id)) {
            console.log(`✅ Termii WhatsApp dispatched to ${formattedNumber}:`, data);
            return { success: true, messageId: data.message_id };
        }

        // If WhatsApp channel is not yet approved/configured on Termii account, fallback to high-priority SMS
        console.warn("WhatsApp channel returned non-ok, falling back to SMS:", data);
        const fallbackResponse = await fetch("https://api.ng.termii.com/api/sms/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: formattedNumber,
                from: process.env.TERMII_SENDER_ID || "FMCGFest",
                sms: `Hi ${firstName}, your FMCG Festival 2026 Visitor Pass is confirmed! Pass No: ${ticketNumber}. View your entry badge & QR: ${badgeUrl}`,
                type: "plain",
                channel: "generic",
                api_key: apiKey,
            }),
        });

        const fallbackData = await fallbackResponse.json();
        return { success: fallbackResponse.ok, messageId: fallbackData.message_id, error: data.message };
    } catch (err: any) {
        console.error("❌ Failed to send Termii WhatsApp/SMS:", err);
        return { success: false, error: err.message || "Network error" };
    }
}
