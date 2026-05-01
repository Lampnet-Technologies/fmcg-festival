/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Shirt, Users, Rocket, Banknote } from "lucide-react";

// ── Hardcoded Event Data ──────────────────────────────────────────────────
const EVENT_SCHEDULE: Record<string, any[]> = {
  day1: [
    {
      id: "d1-1",
      time: "09:00 AM",
      title: "Opening Keynote: Scaling FMCG Brands in the Digital Era",
      stage: "MAIN STAGE",
      stageBg: "bg-gray-100 text-gray-500",
      iconBg: "bg-[#0A2E1F]",
      Icon: Mic,
      description:
        "A visionary look into how traditional consumer goods are adapting to the rapidly evolving digital landscape and hyper-connected consumer base.",
      speakers: [
        {
          id: "s1",
          name: "Sir Arthur Sterling",
          role: "CEO, Global Consumer Dynamics",
          image: "/eventprofile1.png",
        },
      ],
    },
    {
      id: "d1-2",
      time: "11:30 AM",
      title: "The FMCG Couture: Sustainable Materials on the Runway",
      stage: "RUNWAY HALL",
      stageBg: "bg-[#FDF2F2] text-[#9B4848]",
      iconBg: "bg-[#4A2028]",
      Icon: Shirt,
      description:
        "Blending high fashion with industrial sustainability. A curated collection featuring wearable tech and biodegradable consumer textiles.",
      images: ["/EP1.png", "/Ep2.png", "/EP3.png"],
      speakers: [
        {
          id: "s2",
          name: "Elena Vane",
          role: "Creative Director, Eco-Luxe Collective",
          image: "/eventprofile2.png",
        },
      ],
    },
    {
      id: "d1-3",
      time: "02:30 PM",
      title: "Panel: The Future of Global Supply Chains",
      stage: "STRATEGY ROOM",
      stageBg: "bg-[#F7FBEB] text-[#718F2E]",
      iconBg: "bg-[#4B5E1E]",
      Icon: Users,
      description:
        "Industry experts discuss the shift from just-in-time to just-in-case logistics and the impact of AI on distribution.",

      speakers: [
        { id: "s3", image: "/eventprofile3.png" },
        { id: "s4", image: "/eventprofile4.png" },
        { id: "s5", image: "/eventprofile5.png" },
      ],
      extraSpeakersCount: 2,
    },
    {
      id: "d1-4",
      time: "04:30 PM",
      title: "FMCG Ignite: Startup Pitch Final",
      stage: "INNOVATION HUB",
      stageBg: "bg-[#F0F8F4] text-[#3D7858]",
      iconBg: "bg-[#295A40]",
      Icon: Rocket,
      description:
        "Watch the top 5 FMCG startups pitch their disruptive business models to a panel of venture capitalists and retail giants.",
      prize: "$250,000 Equity Investment Prize",
    },
  ],
  day2: [
    {
      id: "d2-1",
      time: "09:30 AM",
      title: "Masterclass: Zero-Waste Packaging Innovations",
      stage: "INNOVATION HUB",
      stageBg: "bg-[#F0F8F4] text-[#3D7858]",
      iconBg: "bg-[#295A40]",
      Icon: Rocket,
      description:
        "An interactive breakdown of biodegradable polymers and how global brands are eliminating single-use plastics from their supply lines by 2030.",
      speakers: [
        {
          id: "s6",
          name: "Dr. Amina Bello",
          role: "Head of R&D, GreenPack Solutions",
          image: "/eventprofile1.png",
        },
      ],
    },
    {
      id: "d2-2",
      time: "01:00 PM",
      title: "Fireside Chat: The Cold Chain Logistics Crisis",
      stage: "STRATEGY ROOM",
      stageBg: "bg-[#F7FBEB] text-[#718F2E]",
      iconBg: "bg-[#4B5E1E]",
      Icon: Users,
      description:
        "Navigating the complexities of temperature-sensitive FMCG transport across emerging markets.",
      speakers: [
        { id: "s7", image: "/eventprofile3.png" },
        { id: "s8", image: "/eventprofile4.png" },
      ],
    },
  ],
  day3: [
    {
      id: "d3-1",
      time: "10:00 AM",
      title: "Keynote: Penetrating the African Consumer Market",
      stage: "MAIN STAGE",
      stageBg: "bg-gray-100 text-gray-500",
      iconBg: "bg-[#0A2E1F]",
      Icon: Mic,
      description:
        "Understanding cultural nuances, localized pricing strategies, and distribution hurdles in the world's fastest-growing consumer demographic.",
      speakers: [
        {
          id: "s9",
          name: "Marcus Adeyemi",
          role: "Director of Market Expansion, Unilever",
          image: "/eventprofile2.png",
        },
      ],
    },
  ],
};

const DAY_TABS = [
  { key: "day1", label: "DAY 01: THE FUTURE OF FMCG" },
  { key: "day2", label: "DAY 02: SUSTAINABILITY & LOGISTICS" },
  { key: "day3", label: "DAY 03: THE GLOBAL MARKETPLACE" },
];

export default function LineUpPage() {
  // State to track which day is currently active
  const [activeDay, setActiveDay] = useState<string>("day1");

  // Retrieve the events for the selected day
  const currentEvents = EVENT_SCHEDULE[activeDay] || [];

  return (
    <main className="flex-1 bg-[#FAFAFA]">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-80 w-full overflow-hidden rounded-t-xl bg-[#0A2E1F]">
        <Image
          src="/eventlineup1.png"
          alt="Event stage"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(197,250,0,0.12),transparent_70%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-3">
            Event Line Up
          </p>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed">
            Three days of high-performance FMCG excellence, featuring industry
            titans, visionary designers, and innovative business leaders.
          </p>
        </div>
      </section>

      {/* ── Tabs & Timeline ─────────────────────────────────────────────── */}
      <section className="mx-auto px-6 py-0 max-w-7xl mt-8">
        {/* Tab Bar */}
        <div className="flex border-b border-gray-200 overflow-x-auto pt-8 px-6 rounded-t-xl -mt-8 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {DAY_TABS.map((tab) => {
            const isActive = activeDay === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveDay(tab.key)}
                className={`shrink-0 px-8 py-5 text-xs font-black uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                  isActive
                    ? "border-[#0A2E1F] text-white bg-[#0A2E1F]"
                    : "border-transparent text-gray-400 hover:text-gray-700 bg-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="py-12 bg-[#FAFAFA] px-6 mb-10">
          {currentEvents.length > 0 ? (
            currentEvents.map((session, idx) => {
              const isLast = idx === currentEvents.length - 1;
              const IconComponent = session.Icon;

              return (
                <div key={session.id} className="flex gap-6 mb-10">
                  {/* Left Column: Icon + Vertical Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-10 h-10 ${session.iconBg} rounded-md flex items-center justify-center text-white relative z-10`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* The connecting vertical line */}
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 mt-2 -mb-50" />
                    )}
                  </div>

                  {/* Center Column: Time */}
                  <div className="shrink-0 w-24 pt-2">
                    <span className="text-sm font-black text-[#0A2E1F]">
                      {session.time}
                    </span>
                  </div>

                  {/* Right Column: Card */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-base font-black text-[#0A2E1F] leading-snug">
                        {session.title}
                      </h3>
                      {session.stage && (
                        <span
                          className={`text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest shrink-0 ${session.stageBg}`}
                        >
                          {session.stage}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {session.description}
                    </p>

                    {/* Inline Images (Runway Hall Style) */}
                    {session.images && (
                      <div className="flex gap-2 mb-5">
                        {session.images.map((img: string, i: number) => (
                          <div
                            key={i}
                            className="relative h-24 flex-1 rounded-md overflow-hidden bg-gray-100"
                          >
                            {/* Fallback styling in case image fails to load during dev */}
                            <Image
                              src={img}
                              alt="Session highlight"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Speakers & Prize Footer */}
                    {(session.speakers || session.prize) && (
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {/* Speakers Section */}
                        {session.speakers && (
                          <div className="flex items-center">
                            {/* Stacked Avatars Logic (Strategy Room Style) */}
                            {session.extraSpeakersCount ? (
                              <div className="flex items-center">
                                <div className="flex -space-x-3">
                                  {session.speakers.map((sp: any) => (
                                    <div
                                      key={sp.id}
                                      className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white bg-gray-200 shadow-sm"
                                    >
                                      <Image
                                        src={sp.image}
                                        alt="Speaker"
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <span className="ml-2 w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                                  +{session.extraSpeakersCount}
                                </span>
                              </div>
                            ) : (
                              /* Standard Single/Double Speaker Logic */
                              <div className="flex gap-4">
                                {session.speakers.map((speaker: any) => (
                                  <div
                                    key={speaker.id}
                                    className="flex items-center gap-3"
                                  >
                                    {speaker.image && (
                                      <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-200 border border-gray-100 shrink-0">
                                        <Image
                                          src={speaker.image}
                                          alt={speaker.name || "Speaker"}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                    )}
                                    {speaker.name && (
                                      <div>
                                        <p className="text-sm font-bold text-[#0A2E1F]">
                                          {speaker.name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                          {speaker.role}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Prize Section (Innovation Hub Style) */}
                        {session.prize && (
                          <div className="flex items-center gap-2 text-sm font-bold text-[#0A2E1F]">
                            <Banknote className="w-5 h-5 text-[#295A40]" />
                            {session.prize}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-400 py-20 font-medium">
              Lineup for this day will be announced soon.
            </p>
          )}
        </div>
      </section>

      {/* ── Bottom CTA Banner ─────────────────────────────────────────── */}
      <section className="bg-[#0A2E1F] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white mb-1">
              Don&apos;t Miss Out on the Action
            </h3>
            <p className="text-gray-400 text-sm">
              Limited seats available for Day 02 and Day 03 workshop sessions.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="#"
              className="bg-[#C5FA00] text-[#0A2E1F] px-6 py-3 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors"
            >
              Download Full PDF Schedule
            </Link>
            <Link
              href="/register"
              className="border border-white/30 text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-white/10 transition-colors"
            >
              Secure Your Pass
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
