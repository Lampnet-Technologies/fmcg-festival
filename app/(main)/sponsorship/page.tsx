"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, TrendingUp, BadgeCheck, Download, CheckCircle2Icon } from "lucide-react";

const WHY_SPONSOR = [
  {
    icon: <Users />,
    title: "Unmatched Industry Access",
    desc: "Connect with over 2,000+ senior executives from Top-tier FMCG brands, supply chain giants, and retail conglomerates under one roof.",
    accent: false,
    wide: true,
  },
  {
    icon: <TrendingUp />,
    title: "Direct ROI",
    desc: "Drive qualified leads through dedicated exhibition booths and high-visibility digital integration during the event.",
    accent: true,
    wide: false,
  },
  {
    icon: <BadgeCheck />,
    title: "Brand Prestige",
    desc: "Position your company as a thought leader in sustainability, innovation, and digital transformation in FMCG.",
    accent: false,
    wide: false,
  },
  {
    title: "Massive Media Reach",
    desc: "Get featured in our extensive regional media coverage, press releases, and digital campaigns reaching over 500k professionals.",
    stats: [
      { value: "15+", label: "Media Partners" },
      { value: "2M", label: "Impressions" },
    ],
    wide: true,
  },
];

const TIERS = [
  {
    name: "Bronze",
    price: "₦5M / $5,000",
    features: [
      "Logo on official website",
      "9 Sqr mtr exhibition Booth",
      "Logo on official visitor bag to be given to 5000 visitors at the event",
    ],
    param: "sponsorship_bronze",
    popular: false,
    dark: false,
  },
  {
    name: "Headline/ Category",
    price: "₦50M / $50,000",
    features: [
      "20 Sqr Exhibition Booth",
      "Exclusive headline sponsor credit",
      "Company logo on billboards and outdoor adverts",
      "Distribute promotional items and host private networking event in the event lounge during the 3 days",
      "Keynote Speech opportunity",
    ],
    param: "sponsorship_headline",
    popular: true, // Tagged as Premium in image
    dark: true,
  },
  {
    name: "Silver",
    price: "₦10M / $10,000",
    features: [
      "Logo on official website",
      "12 Sqr mtr exhibition Booth",
      "Distribute promotional items and host private networking event in the event lounge during the 3 days",
      "Logo on official visitor bag to be given to 5000 visitors at the event",
    ],
    param: "sponsorship_silver",
    popular: false,
    dark: false,
  },
  {
    name: "Category",
    price: "₦40M / $40,000",
    features: [
      "20 Sqr mtr exhibition Booth",
      "Exclusive headline sponsor credit",
      "Company logo on billboards and outdoor adverts",
      "Keynote Speech opportunity",
    ],
    param: "sponsorship_category",
    popular: true,
    dark: true,
  },
  {
    name: "Gold",
    price: "₦20M / $20,000",
    features: [
      "Logo on official website",
      "15 Sqr mtr exhibition Booth",
      "Gold Sponsor credit on all event communications",
      "Distribute promotional items and host private networking event in the event lounge during the 3 days",
      "Logo on official visitor bag to be given to 5000 visitors at the event",
    ],
    param: "sponsorship_gold",
    popular: false,
    dark: false,
  },
];

// Separated into two arrays for the new layout
const INTERNATIONAL_SPONSORS = [
  "/support1.png",
  "/support2.png",
  "/support3.png",
  "/support4.png",
  "/support5.png",
];

const LOCAL_SPONSORS = [
  "/support1.png",
  "/support2.png",
  "/support3.png",
  "/support4.png",
  "/support5.png",
];

// Mock data for the "Meet Our Sponsors" section
const MEET_SPONSORS_DATA = [
  {
    tier: "Headline/Category Sponsor",
    sponsors: [
      { id: 1, name: "COMPANY NAME" },
      { id: 2, name: "COMPANY NAME" },
      { id: 3, name: "COMPANY NAME" },
    ],
  },
  {
    tier: "Bronze Sponsor",
    sponsors: [
      { id: 4, name: "COMPANY NAME" },
      { id: 5, name: "COMPANY NAME" },
      { id: 6, name: "COMPANY NAME" },
    ],
  },
  {
    tier: "Silver Sponsor",
    sponsors: [
      { id: 7, name: "COMPANY NAME" },
      { id: 8, name: "COMPANY NAME" },
      { id: 9, name: "COMPANY NAME" },
    ],
  },
  {
    tier: "Gold Sponsor",
    sponsors: [
      { id: 10, name: "COMPANY NAME" },
      { id: 11, name: "COMPANY NAME" },
      { id: 12, name: "COMPANY NAME" },
    ],
  },
];

export default function SponsorshipPage() {
  // State to manage the visibility of all sponsor tiers
  const [showAllSponsors, setShowAllSponsors] = useState(false);

  // Show only the first 2 tiers initially, show all if button is clicked
  const visibleSponsorTiers = showAllSponsors
    ? MEET_SPONSORS_DATA
    : MEET_SPONSORS_DATA.slice(0, 2);

  return (
    <main className="flex-1 bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[62vh] min-h-80 overflow-hidden bg-[#0A2E1F]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/sponsorhero1.png"
            alt="FMCG Event Sponsorship Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <p className="text-[#C5FA00] text-xs font-normal uppercase tracking-[0.3em] mb-3">
            Elevate Your Brand
          </p>
          <h1 className="text-xl md:text-2xl font-normal text-white mb-4">
            Partner With Us
          </h1>
          <p className="text-[#9AD4AA] max-w-xl text-sm leading-relaxed">
            Align your brand with the future of FMCG. Reach industry leaders,
            innovators, and decision-makers at the region&apos;s premier
            consumer goods festival.
          </p>
        </div>
      </section>

      {/* ── Why Sponsor ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-xl font-normal text-[#0A2E1F] mb-3">
              Why Sponsor?
            </h2>
            <div className="w-16 h-1 bg-[#C5FA00] mx-auto rounded-full" />
          </div>

          {/* 5-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WHY_SPONSOR.map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center ${item.wide ? "md:col-span-3" : "md:col-span-2"
                  }`}
              >
                <div
                  className={`flex ${item.stats
                    ? "flex-col lg:flex-row lg:items-center gap-8 justify-between"
                    : "flex-col gap-5"
                    }`}
                >
                  <div className="flex-1 flex flex-col gap-4">
                    {item.icon && (
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 ${item.accent
                          ? "bg-[#C5FA00] text-[#0A2E1F]"
                          : "bg-[#A8EAC2] text-[#0A2E1F]"
                          }`}
                      >
                        {item.icon}
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-medium text-[#0A2E1F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {item.stats && (
                    <div className="bg-[#EBEBE8] rounded-md py-6 px-8 flex items-center justify-center gap-8 shrink-0">
                      {item.stats.map((s, index) => (
                        <div key={s.label} className="text-center">
                          <p className="text-lg font-medium text-[#0A2E1F]">
                            {s.value}
                          </p>
                          <p className="text-[10px] text-[#0A2E1F]/70 mt-1">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsorship Tiers ─────────────────────────────────── */}
      <section id="sponsorship-tiers" className="py-20 px-6 bg-[#EDEEE9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-normal text-[#0A2E1F] mb-2">
              Sponsorship Tiers
            </h2>
            <p className="text-gray-500 text-sm">
              Choose the level of visibility that fits your strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch justify-items-center">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl p-7 flex flex-col w-full max-w-sm ${tier.dark
                  ? "bg-[#0A2E1F] text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200 text-[#0A2E1F]"
                  }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5FA00] text-[#0A2E1F] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Premium
                  </span>
                )}

                <h3
                  className={`text-lg font-normal mb-1 ${tier.dark ? "text-white" : "text-[#0A2E1F]"
                    }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-xs font-bold mb-6 ${tier.dark ? "text-gray-400" : "text-[#0A2E1F]"
                    }`}
                >
                  {tier.price}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${tier.dark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                      <span
                        className={`mt-0.5 shrink-0 ${tier.dark ? "text-[#C5FA00]" : "text-[#84A900]"
                          }`}
                      >
                        <CheckCircle2Icon className="w-4 h-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/register?tier=${tier.param}`}
                  className={`block w-full text-center py-3 rounded-sm font-black text-sm transition-colors ${tier.dark
                    ? "bg-[#C5FA00] text-[#0A2E1F] hover:bg-[#b0df00]"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  Select Tier
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proudly Supported By ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-normal text-[#0A2E1F] text-center mb-16">
            Proudly Supported By
          </h2>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* International Sponsors Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h3 className="text-xl md:text-2xl font-normal text-[#0A2E1F] whitespace-nowrap">
                International Sponsors
              </h3>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8 flex-1">
                {INTERNATIONAL_SPONSORS.map((logoPath, i) => (
                  <div
                    key={`intl-${i}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <Image
                      src={logoPath}
                      alt={`International Sponsor ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Local Sponsors Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logos container: Shows first on desktop, second on mobile */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 flex-1 order-2 md:order-1">
                {LOCAL_SPONSORS.map((logoPath, i) => (
                  <div
                    key={`local-${i}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <Image
                      src={logoPath}
                      alt={`Local Sponsor ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-[#0A2E1F] whitespace-nowrap order-1 md:order-2">
                Local Sponsors
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Sponsors ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="max-w-6xl mx-auto">
          {/* Small Top Heading */}
          <h2 className="text-sm font-bold text-[#0A2E1F] mb-12 uppercase tracking-wide">
            Meet Our Sponsors
          </h2>

          <div className="flex flex-col gap-12">
            {visibleSponsorTiers.map((tierGroup, index) => (
              <div key={index}>
                {/* Tier Title */}
                <h3 className="text-2xl font-bold text-[#0A2E1F] mb-6">
                  {tierGroup.tier}
                </h3>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tierGroup.sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="flex flex-col">
                      <p className="text-xs font-bold text-[#0A2E1F] mb-3 uppercase tracking-wider">
                        {sponsor.name}
                      </p>
                      {/* Dark Placeholder Box matching the design */}
                      <div className="w-full aspect-square bg-[#2d2d2d]"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          {!showAllSponsors && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllSponsors(true)}
                className="bg-[#0A2E1F] text-white px-8 py-3 rounded-sm text-sm font-bold hover:bg-[#062015] transition-colors"
              >
                See all Sponsors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8f8f5]">
        <div className="max-w-5xl mx-auto bg-[#0d3725] rounded-2xl p-18 text-center">
          <h2 className="text-xl font-normal text-white mb-8">
            Ready to lead the conversation?
          </h2>
          <p className="text-[#9AD4AA] text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Download our detailed 2024 sponsorship prospectus to explore the
            full range of custom activations and branding opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#"
              className="bg-[#C5FA00] text-[#0A2E1F] px-7 py-4 rounded-sm text-sm font-normal hover:bg-[#b0df00] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Sponsorship Prospectus
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-7 py-4 rounded-sm text-sm font-normal hover:bg-white/10 transition-colors"
            >
              Contact Sponsorship Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}