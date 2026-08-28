import { Resend } from "resend";
import QRCode from "qrcode";
import { EVENT_DETAILS } from "@/lib/event";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
    email: string;
    firstName: string;
    lastName: string;
    companyName: string | null;
    positionHeld: string | null;
    contactNumber: string | null;
    whatsappNumber: string | null;
    country: string | null;
    city: string | null;
    otherInfo: string | null;
    ticketNumber: string;
    purchaseType: string;
}

export async function sendConfirmationEmail({
    email,
    firstName,
    lastName,
    companyName,
    positionHeld,
    contactNumber,
    whatsappNumber,
    country,
    city,
    otherInfo,
    ticketNumber,
    purchaseType
}: EmailParams) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is not configured. Skipping confirmation email.");
        return;
    }

    try {
        // Format ticket type display
        let ticketName = "Visitor Pass";
        if (purchaseType.startsWith("ticket_vip")) ticketName = "VIP Pass";
        else if (purchaseType.startsWith("sponsorship")) ticketName = "Sponsor Pass";
        else if (purchaseType.startsWith("exhibitor")) ticketName = "Exhibitor Pass";

        // Build same dynamic QR payload as dashboard ticket
        const qrPayload = [
            "FMCG FESTIVAL TICKET",
            `Name: ${firstName} ${lastName}`.trim(),
            `Email: ${email}`,
            `Company: ${companyName || "N/A"}`,
            `Position: ${positionHeld || "N/A"}`,
            `Contact: ${contactNumber || "N/A"}`,
            `Whatsapp: ${whatsappNumber || "N/A"}`,
            `Location: ${city || "N/A"}, ${country || "N/A"}`,
            `Ticket: ${ticketName}`,
            `Type: ${purchaseType.startsWith("sponsorship") ? "Sponsor Tier" : purchaseType.startsWith("exhibitor") ? "Exhibitor Booth" : "Ticket Type"}`,
            `Status: PAID`,
            `Reference: ${ticketNumber}`,
            otherInfo ? `Other Info: ${otherInfo}` : "",
        ]
            .filter(Boolean)
            .join("\n");

        const qrCodeDataUrl = await QRCode.toDataURL(qrPayload, { margin: 1, width: 250 });
        const base64Data = qrCodeDataUrl.split(',')[1];

        const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Registration Confirmation</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    .wrapper { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e4e4e7; }
    .header { background: #0A2E1F; padding: 30px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 0.05em; text-transform: uppercase; color: #C5FA00; }
    .content { padding: 40px 30px; color: #27272a; line-height: 1.6; }
    .content h2 { margin-top: 0; font-size: 18px; font-weight: 700; color: #0A2E1F; }
    .details-box { background: #f8f9fa; border-radius: 6px; padding: 20px; border: 1px solid #e4e4e7; margin: 25px 0; }
    .details-item { display: flex; align-items: flex-start; margin-bottom: 12px; font-size: 14px; }
    .details-item:last-child { margin-bottom: 0; }
    .details-icon { margin-right: 12px; font-size: 16px; line-height: 1; }
    .badge-btn { display: block; width: fit-content; margin: 30px auto 20px auto; background: #84A900; color: #ffffff; text-decoration: none; padding: 14px 28px; font-weight: 700; border-radius: 4px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; }
    .qr-container { text-align: center; margin: 30px 0 10px 0; }
    .qr-image { width: 180px; height: 180px; border: 1px solid #e4e4e7; padding: 10px; border-radius: 8px; background: #ffffff; }
    .footer { background: #fafafa; padding: 20px 30px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>THE FMCG FESTIVAL 2026</h1>
    </div>
    
    <div class="content">
      <h2>Hi ${firstName || 'Attendee'},</h2>
      <p>Thank you for registering to attend <strong>The FMCG Festival 2026</strong>, Africa's premier B2B and consumer goods exhibition.</p>
      
      <p>We look forward to welcoming you to the event. Here are your registration details:</p>
      
      <div class="details-box">
        <div class="details-item">
          <span class="details-icon">🎫</span>
          <div><strong>Ticket Type:</strong> ${ticketName}</div>
        </div>
        <div class="details-item">
          <span class="details-icon">📅</span>
          <div><strong>Date:</strong> November 09 - 11, 2026</div>
        </div>
        <div class="details-item">
          <span class="details-icon">📍</span>
          <div><strong>Venue:</strong> Oriental Hotel, Victoria Island, Lagos, Nigeria</div>
        </div>
        <div class="details-item">
          <span class="details-icon">🕒</span>
          <div><strong>Time:</strong> 9:00 AM - 5:00 PM daily</div>
        </div>
      </div>
      
      <a href="${EVENT_DETAILS.baseUrl}/dashboard" class="badge-btn">Access Your Dashboard</a>
      
      <div class="qr-container">
        <p style="margin-bottom: 15px; font-size: 14px; font-weight: bold; color: #52525b;">Below is your badge QR code:</p>
        <img src="cid:badge-qr" alt="Visitor Badge QR Code" class="qr-image" />
        <p style="font-size: 12px; color: #71717a; margin-top: 8px;">Show this QR code at the registration desk for fast-track entry.</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Need help? Contact our support team at <a href="mailto:support@thefmcgfestival.com" style="color: #84A900; text-decoration: none; font-weight: bold;">support@thefmcgfestival.com</a></p>
      <p style="margin-top: 10px;">&copy; 2026 The FMCG Festival. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `;

        // Default sender to no-reply@thefmcgfestival.com but allow overriding via environment variable
        const fromEmail = process.env.RESEND_FROM_EMAIL || "The FMCG Festival <no-reply@thefmcgfestival.com>";

        await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: 'Your Visitor Registration Confirmation - The FMCG Festival 2026',
            html: html,
            attachments: [
                {
                    filename: 'badge-qr.png',
                    content: Buffer.from(base64Data, 'base64'),
                    cid: 'badge-qr'
                } as any
            ]
        });

        console.log(`Confirmation email sent successfully to ${email}`);
    } catch (error) {
        console.error("Failed to send confirmation email:", error);
    }
}
