"use client";

import { useMemo } from "react";
import QRCode from "react-qr-code";
import { DownloadCloud } from "lucide-react";

type Registration = {
    id: string;
    purchaseType: string;
    status: string | null;
    paystackReference: string | null;
    amountPaid: number;
};

type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
};

type TicketCardProps = {
    registration: Registration;
    user: UserDetails;
};

const TIER_LABELS: Record<string, string> = {
    visitor: "Visitor Pass",
    exhibitor: "Exhibitor Booth",
    exhibitor_4sqm: "4 sqm Exhibitor Booth",
    exhibitor_6sqm: "6 sqm Exhibitor Booth",
    exhibitor_9sqm: "9 sqm Exhibitor Booth",
    exhibitor_15sqm: "15 sqm Exhibitor Booth",
    sponsorship_bronze: "Bronze Sponsorship",
    sponsorship_silver: "Silver Sponsorship",
    sponsorship_gold: "Gold Sponsorship",
    sponsorship_category: "Category Sponsorship",
    sponsorship_headline: "Headline Sponsorship",
};

const TIER_STYLES: Record<
    string,
    {
        card: string;
        border: string;
        accent: string;
        heading: string;
        subtext: string;
    }
> = {
    visitor: {
        card: "bg-white",
        border: "border border-gray-200",
        accent: "bg-gray-100 text-gray-700",
        heading: "text-gray-900",
        subtext: "text-gray-600",
    },

    exhibitor: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },
    exhibitor_4sqm: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },
    exhibitor_6sqm: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },
    exhibitor_9sqm: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },
    exhibitor_15sqm: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },

    sponsorship_bronze: {
        card: "bg-yellow-950",
        border: "border border-yellow-500/30",
        accent: "bg-yellow-100 text-yellow-900",
        heading: "text-white",
        subtext: "text-yellow-200",
    },
    sponsorship_silver: {
        card: "bg-slate-950",
        border: "border border-slate-500/30",
        accent: "bg-slate-100 text-slate-900",
        heading: "text-white",
        subtext: "text-slate-200",
    },
    sponsorship_gold: {
        card: "bg-amber-950",
        border: "border border-amber-500/30",
        accent: "bg-amber-100 text-amber-900",
        heading: "text-white",
        subtext: "text-amber-200",
    },
    sponsorship_category: {
        card: "bg-fuchsia-950",
        border: "border border-fuchsia-500/30",
        accent: "bg-fuchsia-100 text-fuchsia-900",
        heading: "text-white",
        subtext: "text-fuchsia-200",
    },
    sponsorship_headline: {
        card: "bg-slate-950",
        border: "border border-white/20",
        accent: "bg-white text-slate-950",
        heading: "text-white",
        subtext: "text-slate-200",
    },
};

function formatTicketLabel(purchaseType: string) {
    return TIER_LABELS[purchaseType] || purchaseType.replace(/_/g, " ").toUpperCase();
}

function formatPaymentLabel(purchaseType: string) {
    if (purchaseType.startsWith("sponsorship")) return "Sponsor Tier";
    if (purchaseType.startsWith("exhibitor")) return "Exhibitor Booth";
    return "Ticket Type";
}

function buildQrPayload(registration: Registration, user: UserDetails, ticketLabel: string) {
    return [
        "FMCG FESTIVAL TICKET",
        `Name: ${user.firstName} ${user.lastName}`.trim(),
        `Email: ${user.email}`,
        `Ticket: ${ticketLabel}`,
        `Type: ${formatPaymentLabel(registration.purchaseType)}`,
        `Status: ${registration.status === "successful" ? "PAID" : "PENDING"}`,
        `Reference: ${registration.paystackReference}`,
    ]
        .filter(Boolean)
        .join("\n");
}

export default function TicketCard({ registration, user }: TicketCardProps) {
    const ticketLabel = formatTicketLabel(registration.purchaseType);
    const ticketStyle = TIER_STYLES[registration.purchaseType] || TIER_STYLES.visitor;
    const statusLabel = registration.status === "successful" ? "PAID" : "PENDING";
    const qrValue = useMemo(
        () => buildQrPayload(registration, user, ticketLabel),
        [registration, user, ticketLabel]
    );

    const handleDownload = () => {
        const contents = [
            "FMCG FESTIVAL TICKET",
            `Name: ${user.firstName} ${user.lastName}`.trim(),
            `Email: ${user.email}`,
            `Ticket: ${ticketLabel}`,
            `Status: ${statusLabel}`,
            `Reference: ${registration.paystackReference}`,
            "",
            "Scan the QR code to verify this ticket.",
        ]
            .filter(Boolean)
            .join("\n");

        const blob = new Blob([contents], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `FMCG-Ticket-${ticketLabel.replace(/\s+/g, "-").toLowerCase()}-${registration.paystackReference}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className={`rounded-3xl overflow-hidden shadow-2xl ${ticketStyle.border} ${ticketStyle.card}`}>
            <div className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] ${ticketStyle.accent}`}>
                            {ticketLabel}
                        </span>
                        <h3 className={`mt-4 text-2xl font-black ${ticketStyle.heading}`}>
                            {user.firstName} {user.lastName}
                        </h3>
                        <p className={`mt-2 text-sm ${ticketStyle.subtext}`}>
                            {formatPaymentLabel(registration.purchaseType)} • {statusLabel}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleDownload}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            registration.purchaseType === 'visitor'
                                ? 'border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200'
                                : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                        }`}
                    >
                        <DownloadCloud className="w-4 h-4" />
                        Download
                    </button>
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_220px] items-center">
                    <div className="space-y-4">
                        <div className="rounded-3xl bg-white/10 p-5">
                            <p className={`text-xs uppercase tracking-[0.3em] ${ticketStyle.subtext}`}>
                                Registration Details
                            </p>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <div>
                                    <p className={`text-[10px] uppercase tracking-[0.35em] ${ticketStyle.subtext}`}>
                                        Tier
                                    </p>
                                    <p className={`font-semibold ${ticketStyle.heading}`}>
                                        {ticketLabel}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-[10px] uppercase tracking-[0.35em] ${ticketStyle.subtext}`}>
                                        Reference
                                    </p>
                                    <p className={`font-semibold ${ticketStyle.heading}`}>{registration.paystackReference}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-white p-4 flex items-center justify-center">
                        <QRCode value={qrValue} size={160} fgColor="#0A2E1F" />
                    </div>
                </div>
            </div>
        </div>
    );
}
