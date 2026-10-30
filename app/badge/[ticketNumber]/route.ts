import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { eq, or } from "drizzle-orm";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ ticketNumber: string }> }
) {
    const { ticketNumber } = await params;

    if (!ticketNumber) {
        return new NextResponse("Ticket number is required", { status: 400 });
    }

    try {
        // Fetch registration record
        const [reg] = await db
            .select()
            .from(registrations)
            .where(
                or(
                    eq(registrations.ticketNumber, ticketNumber),
                    eq(registrations.paystackReference, ticketNumber)
                )
            )
            .limit(1);

        const fullName = reg ? `${reg.firstName || ""} ${reg.lastName || ""}`.trim() || "Visitor" : "Visitor";
        const businessName = reg?.companyName || "Trader / Business Owner";
        const location = [reg?.city, reg?.country].filter(Boolean).join(", ") || "Lagos, Nigeria";
        const displayTicket = reg?.ticketNumber || ticketNumber;

        const qrPayload = [
            "THE FMCG FESTIVAL 2026",
            `Name: ${fullName}`,
            `Business: ${businessName}`,
            `Pass No: ${displayTicket}`,
            `Type: Market Visitor Pass`,
            `Dates: Nov 09 - 11, 2026`,
            `Venue: Oriental Hotel, Lagos`,
            `Status: VALID ENTRY`,
        ].join("\n");

        const qrDataUrl = await QRCode.toDataURL(qrPayload, {
            margin: 1,
            width: 300,
            color: {
                dark: "#0A2E1F",
                light: "#FFFFFF",
            },
        });

        // HTML responsive badge page optimized for mobile phone viewing & screenshotting
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Badge - ${fullName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background: #0A2E1F; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
    .card { background: #ffffff; border-radius: 20px; max-width: 380px; width: 100%; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4); border: 2px solid #C5FA00; }
    .header { background: #0A2E1F; padding: 24px 20px; text-align: center; color: #ffffff; position: relative; }
    .badge-pill { display: inline-block; background: #C5FA00; color: #0A2E1F; font-size: 11px; font-weight: 900; text-transform: uppercase; padding: 4px 14px; border-radius: 999px; letter-spacing: 0.1em; margin-bottom: 8px; }
    .fest-title { font-size: 16px; font-weight: 900; color: #ffffff; letter-spacing: 0.05em; }
    .fest-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
    .content { padding: 24px 20px; text-align: center; }
    .name { font-size: 22px; font-weight: 800; color: #0A2E1F; line-height: 1.2; word-break: break-word; }
    .business { font-size: 14px; color: #059669; font-weight: 700; margin-top: 6px; }
    .qr-box { background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px; padding: 14px; margin: 20px auto; width: 220px; }
    .qr-img { width: 100%; height: auto; display: block; border-radius: 8px; }
    .ticket-id { font-family: monospace; font-size: 12px; font-weight: 700; color: #64748b; margin-top: 6px; letter-spacing: 0.08em; }
    .details { background: #f1f5f9; border-radius: 12px; padding: 12px; margin-top: 14px; text-align: left; font-size: 12px; color: #334155; line-height: 1.6; }
    .details div { display: flex; justify-content: space-between; margin-bottom: 4px; }
    .details div:last-child { margin-bottom: 0; }
    .details strong { color: #0A2E1F; }
    .footer { background: #f8fafc; padding: 14px 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .instructions { font-size: 12px; color: #e11d48; font-weight: 700; margin-top: 12px; }
    .btn-print { margin-top: 14px; background: #0A2E1F; color: #C5FA00; border: none; padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 12px; cursor: pointer; text-transform: uppercase; width: 100%; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge-pill">OFFICIAL PASS</div>
      <div class="fest-title">THE FMCG FESTIVAL 2026</div>
      <div class="fest-sub">Africa's Premier B2B & Consumer Goods Expo</div>
    </div>
    <div class="content">
      <div class="name">${fullName}</div>
      <div class="business">${businessName}</div>
      
      <div class="qr-box">
        <img src="${qrDataUrl}" alt="Badge QR Code" class="qr-img" />
        <div class="ticket-id">${displayTicket}</div>
      </div>

      <div class="details">
        <div><span>Date:</span> <strong>Nov 09 - 11, 2026</strong></div>
        <div><span>Venue:</span> <strong>Oriental Hotel, Lagos</strong></div>
        <div><span>Access:</span> <strong>VIP Exhibition Floors</strong></div>
        <div><span>Market / Area:</span> <strong>${location}</strong></div>
      </div>

      <p class="instructions">📸 Take a screenshot of this badge or show it at the gate for fast-track entry.</p>

      <button class="btn-print" onclick="window.print()">Save / Screenshot Pass</button>
    </div>
    <div class="footer">
      Organized by MABA in partnership with NICCI & reGenesis
    </div>
  </div>
</body>
</html>`;

        return new NextResponse(html, {
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch (err: any) {
        console.error("Badge generation failed:", err);
        return new NextResponse("Error generating badge", { status: 500 });
    }
}
