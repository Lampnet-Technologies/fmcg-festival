"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Loader2, Sparkles, Phone, Store, User, MapPin } from "lucide-react";

export default function MarketRegisterPage() {
    const [fullName, setFullName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [marketLocation, setMarketLocation] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{
        ticketNumber: string;
        badgeUrl: string;
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/market-register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    businessName,
                    whatsappNumber,
                    marketLocation,
                }),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || "Failed to complete registration");
            }

            setResult({
                ticketNumber: data.ticketNumber,
                badgeUrl: data.badgeUrl,
            });
        } catch (err: any) {
            setError(err.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A2E1F] text-white flex flex-col justify-between selection:bg-[#C5FA00] selection:text-[#0A2E1F]">
            {/* Minimal Header */}
            <header className="border-b border-white/10 py-4 px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-black text-xl tracking-tight text-white">
                        THE FMCG <span className="text-[#C5FA00]">FESTIVAL</span>
                    </span>
                </Link>
                <span className="bg-[#C5FA00]/20 text-[#C5FA00] text-xs font-bold px-3 py-1 rounded-full border border-[#C5FA00]/30">
                    Trader Fast-Pass ⚡
                </span>
            </header>

            {/* Main Form Container */}
            <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
                <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    {!result ? (
                        <>
                            {/* Heading */}
                            <div className="text-center mb-8">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5FA00] uppercase tracking-wider mb-2">
                                    <Sparkles className="w-3.5 h-3.5" /> Free Market Entry Pass
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-black text-white">
                                    Local Traders & Business Pass
                                </h1>
                                <p className="text-sm text-gray-300 mt-2">
                                    No email needed. Fill below to get your digital badge and entrance QR code sent to your WhatsApp immediately!
                                </p>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs">
                                    {error}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                                        Your Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="e.g. Chief Emeka Nwosu"
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C5FA00] text-sm transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                                        Business / Shop Name *
                                    </label>
                                    <div className="relative">
                                        <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            required
                                            value={businessName}
                                            onChange={(e) => setBusinessName(e.target.value)}
                                            placeholder="e.g. Nwosu Provisions & Packaging"
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C5FA00] text-sm transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                                        WhatsApp Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            required
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                            placeholder="e.g. 0803 123 4567"
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C5FA00] text-sm transition"
                                        />
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1">
                                        Your pass QR code will be sent to this WhatsApp number.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                                        Market / Area (Optional)
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            value={marketLocation}
                                            onChange={(e) => setMarketLocation(e.target.value)}
                                            placeholder="e.g. Trade Fair, Alaba, Balogun, Kano..."
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#C5FA00] text-sm transition"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-6 bg-[#C5FA00] hover:bg-[#b0e000] text-[#0A2E1F] font-black py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 text-sm tracking-wide uppercase"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Generating Pass...
                                        </>
                                    ) : (
                                        <>
                                            Get Free WhatsApp Pass
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Success View */
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-[#C5FA00]/20 border border-[#C5FA00] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5FA00]">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-black text-white">Registration Successful!</h2>
                            <p className="text-sm text-gray-300 mt-2 mb-6">
                                Your pass has been created. A message with your digital badge has been dispatched to{" "}
                                <strong className="text-[#C5FA00]">{whatsappNumber}</strong>.
                            </p>

                            <div className="bg-white/10 rounded-xl p-4 border border-white/10 mb-6 text-left">
                                <div className="text-xs text-gray-400">Your Pass Number:</div>
                                <div className="text-lg font-mono font-bold text-[#C5FA00]">{result.ticketNumber}</div>
                            </div>

                            <a
                                href={result.badgeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#C5FA00] text-[#0A2E1F] font-black py-3.5 px-6 rounded-xl hover:bg-[#b0e000] transition text-center text-sm uppercase tracking-wider"
                            >
                                View / Screenshot Your Badge Now 📲
                            </a>

                            <button
                                onClick={() => {
                                    setResult(null);
                                    setFullName("");
                                    setBusinessName("");
                                    setWhatsappNumber("");
                                    setMarketLocation("");
                                }}
                                className="mt-4 text-xs text-gray-400 hover:text-white transition underline"
                            >
                                Register another trader
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-4 text-center text-xs text-gray-400 px-4">
                The FMCG Festival 2026 &bull; Nov 9–11, 2026 &bull; Oriental Hotel, Lagos
            </footer>
        </div>
    );
}
