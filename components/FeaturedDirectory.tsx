/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function FeaturedDirectory({ exhibitors }: { exhibitors: any[] }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Show only 3 cards by default, or all of them if expanded
    const displayedExhibitors = isExpanded ? exhibitors : exhibitors.slice(0, 3);

    return (
        <section id="directory" className="py-20 px-6 bg-[#f8f8f5]">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-xl font-normal text-[#0A2E1F]">
                        Featured Exhibitors
                    </h2>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-sm font-semibold text-[#0A2E1F] flex items-center gap-1 hover:text-[#84A900] transition-colors focus:outline-none"
                    >
                        {isExpanded ? "Collapse Directory ↑" : "View Full Directory →"}
                    </button>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">

                    {/* 1. Hardcoded Wide Premium Card (Spans 2 columns) */}
                    <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm">
                        {/* Left Color Block */}
                        <div className="relative w-full md:w-1/2 bg-[#319B91] p-8 flex flex-col justify-center items-center text-center min-h-62.5">
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#0A2E1F] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                                    Food Tech
                                </span>
                            </div>
                            <div className="w-54 h-54 relative mb-4 opacity-90">
                                <Image src="/FoodTech.png" alt="Saffe Work" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-2xl font-black uppercase tracking-widest">Food Tech</h3>
                            <p className="text-white/80 font-medium tracking-widest uppercase text-sm mt-1">Saffe Work</p>
                        </div>
                        {/* Right Content Block */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-xl font-black text-[#0A2E1F] mb-3">VitaHarvest Global</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                Leading the transition to plant-based proteins with proprietary extrusion technology and sustainable sourcing networks across 40 countries.
                            </p>
                            {/*  <div className="flex flex-wrap gap-2">
                                <span className="bg-[#F2F4EF] text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">Sustainability</span>
                                <span className="bg-[#F2F4EF] text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">Supply Chain</span>
                                <span className="bg-[#F2F4EF] text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">B2B</span>
                            </div> */}
                        </div>
                    </div>

                    {/* 2. Mapped Sanity Cards */}
                    {displayedExhibitors.map((exhibitor) => (
                        <div key={exhibitor._id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-black text-[#506600] uppercase tracking-widest flex items-center gap-1.5 mb-3">
                                    {exhibitor.companyName}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#84A900] rounded-md overflow-hidden relative shrink-0 border border-gray-200">
                                    <Image
                                        src={exhibitor.logo ? urlFor(exhibitor.logo).url() : "/default.png"}
                                        alt="logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* 3. Hardcoded CTA Card (Always at the end) */}
                    <div className="bg-[#0A2E1F] rounded-xl p-8 flex flex-col items-center justify-center text-center text-white shadow-md">
                        <div className="w-12 h-12 bg-white text-[#0A2E1F] rounded-full flex items-center justify-center text-2xl font-light mb-4">
                            +
                        </div>
                        <h3 className="text-lg font-black mb-3">Join the Roster</h3>
                        <p className="text-xs text-gray-300 leading-relaxed mb-8">
                            Last few booth spaces available for the 2024 Festival. Showcase your brand to 15,000+ buyers.
                        </p>
                        <Link href="/register" className="bg-[#C5FA00] text-[#0A2E1F] px-8 py-3 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors w-full text-center">
                            Inquire Now
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}