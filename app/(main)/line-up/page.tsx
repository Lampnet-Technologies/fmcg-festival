/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Shirt, Users, Rocket, Banknote } from "lucide-react";

// ── Hardcoded Event Data ──────────────────────────────────────────────────
const EVENT_SCHEDULE: Record<string, any[]> = {
  day0: [
    {
      id: "d1-1",
      time: "Day 01",
      title: "Opening Ceremony/Conference & Exhibition",
      stage: "MAIN STAGE",
      stageBg: "bg-gray-100 text-gray-500",
      iconBg: "bg-[#0A2E1F]",
      Icon: Mic,
      description:
        "FMCG Industry professionals will engage in thought provoking conferences, panel discussions by global leaders. Opportunity to showcase products, services and innovations by exhibitors from local and international brands thus providing a networking, trade, partnership, investment and business expansion platform to all exhibitors.",
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
      time: "Day 02",
      title: "Conference & Exhibition",
      stage: "RUNWAY HALL",
      stageBg: "bg-[#FDF2F2] text-[#9B4848]",
      iconBg: "bg-[#4A2028]",
      Icon: Shirt,
      description:
        "The conference will further provide deep insights into current trends, standards and strategies essential for transforming the FMCG sector, alongside B2B exhibition for further networking.",
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
      time: "Day 03",
      title: "Pitch competition/Fashion show/Closing ceremony",
      stage: "STRATEGY ROOM",
      stageBg: "bg-[#F7FBEB] text-[#718F2E]",
      iconBg: "bg-[#4B5E1E]",
      Icon: Users,
      description:
        "Emerging entrepreneurs and start ups in the FMCG sector will pitch great ideas to investors. Winners will be awarded funding, mentorship and global market opportunities. Top and emerging designers, fashionpreneurs and creative industry leaders across the globe will showcase their creative craft expressing arts, culture and the dynamic evolution through fashion.",

      speakers: [
        { id: "s3", image: "/eventprofile3.png" },
        { id: "s4", image: "/eventprofile4.png" },
        { id: "s5", image: "/eventprofile5.png" },
      ],
      extraSpeakersCount: 2,
    },
  ],

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
  { key: "day0", label: "EVENT LINE UP" },
  /*   { key: "day1", label: "DAY 01: THE FUTURE OF FMCG" },
    { key: "day2", label: "DAY 02: SUSTAINABILITY & LOGISTICS" },
    { key: "day3", label: "DAY 03: THE GLOBAL MARKETPLACE" }, */
];

export default function LineUpPage() {
  // State to track which day is currently active
  const [activeDay, setActiveDay] = useState<string>("day0");

  // Retrieve the events for the selected day
  const currentEvents = EVENT_SCHEDULE[activeDay] || [];

  return (
    <main className="flex-1 bg-[#FAFAFA]">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-80 w-full overflow-hidden bg-[#0A2E1F]">
        <Image
          src="/eventlineup1.png"
          alt="Event stage"
          fill
          className="object-cover opacity-40"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(197,250,0,0.12),transparent_70%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
          <p className="text-gray-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Event Line Up
          </p>
          <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Three days of high-performance FMCG excellence, featuring industry
            titans, visionary designers, and innovative business leaders.
          </p>
        </div>
      </section>

      {/* ── Tabs & Timeline ─────────────────────────────────────────────── */}
      <section className="mx-auto px-4 md:px-6 py-0 max-w-5xl mt-8">
        {/* Tab Bar */}
        <div className="flex border-b border-gray-200 overflow-x-auto bg-white pt-4 md:pt-8 px-4 md:px-6 rounded-t-xl -mt-8 relative z-20 shadow-sm scrollbar-hide">
          {DAY_TABS.map((tab) => {
            const isActive = activeDay === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveDay(tab.key)}
                className={`shrink-0 px-4 md:px-8 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors border-b-2 -mb-px ${isActive
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
        <div className="py-8 md:py-12 bg-white px-4 md:px-6 rounded-b-xl shadow-sm mb-12">
          {currentEvents.length > 0 ? (
            currentEvents.map((session, idx) => {
              const isLast = idx === currentEvents.length - 1;
              const IconComponent = session.Icon;

              return (
                <div key={session.id} className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10">
                  {/* Desktop Left Column: Icon + Vertical Line (Hidden on Mobile) */}
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div
                      className={`w-10 h-10 ${session.iconBg} rounded-md flex items-center justify-center text-white relative z-10`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* The connecting vertical line */}
                    {!isLast && (
                      <div className="w-px flex-1 bg-gray-200 mt-2 -mb-10" />
                    )}
                  </div>

                  {/* Center Column: Time & Mobile Icon */}
                  <div className="flex items-center gap-3 shrink-0 md:w-24 md:pt-2">
                    {/* Mobile-only icon */}
                    <div
                      className={`md:hidden w-8 h-8 ${session.iconBg} rounded-md flex items-center justify-center text-white shrink-0`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-black text-[#0A2E1F]">
                      {session.time}
                    </span>
                  </div>

                  {/* Right Column: Card */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between md:items-start mb-3 gap-2 md:gap-4">
                      <h3 className="text-base font-black text-[#0A2E1F] leading-snug order-2 md:order-1">
                        {session.title}
                      </h3>
                      {session.stage && (
                        <span
                          className={`text-[10px] w-fit font-black px-3 py-1 rounded-sm uppercase tracking-widest shrink-0 order-1 md:order-2 ${session.stageBg}`}
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
                      <div className="flex flex-wrap md:flex-nowrap gap-2 mb-5">
                        {session.images.map((img: string, i: number) => (
                          <div
                            key={i}
                            className="relative h-20 md:h-24 w-[calc(50%-0.25rem)] md:w-auto md:flex-1 rounded-md overflow-hidden bg-gray-100"
                          >
                            <Image
                              src={img}
                              alt="Session highlight"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Speakers & Prize Footer */}
                    {(session.speakers || session.prize) && (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        {/* Speakers Section */}
                        {session.speakers && (
                          <div className="flex items-center">
                            {/* Stacked Avatars Logic */}
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
                                        sizes="(max-width: 768px) 100vw, 50vw"
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
                              <div className="flex flex-wrap gap-4">
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
                                          sizes="(max-width: 768px) 100vw, 50vw"
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

                        {/* Prize Section */}
                        {session.prize && (
                          <div className="flex items-center gap-2 text-sm font-bold text-[#0A2E1F] bg-[#F0F8F4] px-3 py-2 rounded-md sm:bg-transparent sm:p-0">
                            <Banknote className="w-5 h-5 text-[#295A40] shrink-0" />
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
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-black text-white mb-2 md:mb-1">
              Don&apos;t Miss Out on the Action
            </h3>
            <p className="text-gray-400 text-sm">
              Limited seats available for Day 02 and Day 03 workshop sessions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="#"
              className="bg-[#C5FA00] text-[#0A2E1F] px-6 py-3 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors w-full sm:w-auto text-center"
            >
              Download Full PDF Schedule
            </Link>
            <Link
              href="/register"
              className="border border-white/30 text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Secure Your Pass
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}