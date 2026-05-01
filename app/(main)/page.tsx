/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { featuredSpeakersQuery } from "@/sanity/queries";
import {
  Users,
  Building2,
  Globe,
  Mic2,
  UtensilsCrossed,
  Droplets,
  Settings,
  Package,
  Truck,
  CreditCard,
  Home,
  Heart,
  Camera,
  CircleCheck,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const STATS = [
  { icon: "Users", value: "12k+", label: "Attendees" },
  { icon: "Building2", value: "450+", label: "Exhibitors" },
  { icon: "Globe", value: "65+", label: "Countries" },
  { icon: "Mic2", value: "120+", label: "Speakers" },
];

const WHY_EXHIBIT = [
  {
    icon: "CircleCheck",
    text: "Access to 12,000+ high-intent trade buyers from 65+ countries.",
  },
  {
    icon: "CircleCheck",
    text: "Showcase innovations in dedicated high-traffic Category Zones.",
  },
  {
    icon: "CircleCheck",
    text: "Pre-scheduled B2B meetings with regional retail giants.",
  },
];

const WHY_VISIT = [
  {
    icon: "BadgeCheck",
    text: "Discover over 1,500+ new product launches across 8 FMCG sectors.",
  },
  {
    icon: "BadgeCheck",
    text: "Gain insights from 120+ global visionaries at the Main Stage.",
  },
  {
    icon: "BadgeCheck",
    text: "Stay ahead of consumer trends and sustainable packaging shifts.",
  },
];

const EXHIBITION_SECTORS = [
  {
    icon: "UtensilsCrossed",
    label: "Food & Beverage",
    count: "350+ Exhibitors",
  },
  { icon: "Droplets", label: "Beauty & Hygiene", count: "120+ Exhibitors" },
  { icon: "Settings", label: "Tech & Automation", count: "80+ Exhibitors" },
  { icon: "Package", label: "Sustainable Pack", count: "80+ Exhibitors" },
  { icon: "Truck", label: "Supply Chain", count: "60+ Exhibitors" },
  { icon: "CreditCard", label: "FinTech & Retail", count: "45+ Exhibitors" },
  { icon: "Home", label: "Household Care", count: "120+ Exhibitors" },
  { icon: "Heart", label: "Health & Wellness", count: "100+ Exhibitors" },
];

// For demo purposes, these are hardcoded. In a real app, you'd fetch this from your CMS or an API.
const NEWS_ITEMS = [
  {
    tag: "PRESS RELEASE",
    tagColor: "text-gray-500",
    date: "OCT 12, 2024",
    title: '"Circular Hub" Zone announced for the 2024 Main Floor.',
    desc: "The festival expands its sustainability footprint with a dedicated pavilion for circular packaging.",
    cta: "Read More →",
    img: "/blog-img1.png",
    imgDark: true,
  },
  {
    tag: "SOCIAL FEED",
    tagColor: "text-gray-500",
    date: "3 HOURS AGO",
    title:
      "Just finalized our exhibit plans for #FMCGFestival2024. Can't wait!!",
    desc: "@GlobalRetailer: Looking forward to meeting the next generation of supply chain disruptors in this hub.",
    cta: "Read More →",
    img: null,
    center: true,
  },
  {
    tag: "SPEAKER SPOTLIGHT",
    tagColor: "text-gray-500",
    date: "OCT 16, 2024",
    title: "Q&A: Julian Vance on the future of GenAI in FMCG packaging.",
    desc: "Discover how artificial intelligence is slashing prototyping times for major global brands by up to 70%.",
    cta: "Read Interview →",
    img: "/blog-img2.png",
    imgDark: false,
  },
];

const SPEAKERS = [
  {
    name: "Dr. Marcus Chen",
    role: "CEO, GREENFOODS",
    quote: "The Pivot to Regenerative FMCG Systems",
    image: "/team1.png",
  },
  {
    name: "Elena Rodriquez",
    role: "VP MARKETING, RETAILFLOW",
    quote: "Consumer Behavior in Post-Digital Era",
    image: "/team2.png",
  },
  {
    name: "Julian Vance",
    role: "FOUNDER, PACKWISE AI",
    quote: "Generative AI in Product Management",
    image: "/team3.png",
  },
  {
    name: "Sarah Whitlock",
    role: "DIR. INNOVATION, PUREGROUP",
    quote: "Redifining Clean Beauty Standards",
    image: "/team4.png",
  },
];

const BOTTOM_CTA = [
  {
    bg: "bg-[#0A2E1F]",
    eyebrow: "Exhibitor Space",
    body: "Connect with major distributors and high-volume buyers in our state-of-the-art exhibition zones.",
    cta: "Book Your Stand",
    ctaStyle: "bg-[#C5FA00] text-[#0A2E1F] hover:bg-[#b0df00]",
    href: "/exhibitors",
  },
  {
    bg: "bg-[#f4f4f0]",
    eyebrow: "Visitor Registration",
    body: "Gain access to the full summit, networking lounges, and interactive product demo floors.",
    cta: "Get All-Access Pass",
    ctaStyle: "border bg-white text-[#0A2E1F] hover:bg-gray-200",
    href: "/register",
  },
];

export default async function HomePage() {
  const iconMap: Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  > = {
    Users,
    Building2,
    Globe,
    Mic2,
    UtensilsCrossed,
    Droplets,
    Settings,
    Package,
    Truck,
    CreditCard,
    Home,
    Heart,
    Camera,
    CircleCheck,
    BadgeCheck,
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Container.png"
            alt="FMCG Festival"
            fill
            sizes="100wv"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-14 px-16 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-[#C5FA00] text-[#0A2E1F] font-light text-xs px-4 py-2 rounded-sm uppercase tracking-widest">
              October 24–26, 2026 • The Innovation Hub
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-white leading-[1.05] max-w-2xl">
              The Future of <span className="text-[#C5FA00]">FMCG</span> is
              Here.
            </h1>

            <p className="text-white text-lg max-w-xl leading-relaxed">
              Connect with 500+ global brands, industry disruptors, and retail
              giants at the definitive festival for high-performance FMCG
              excellence.
            </p>

            <p className="text-white text-lg max-w-xl leading-relaxed flex items-center">
              <MapPin size={20} className="mr-2 text-[#C5FA00] shrink-0" />
              Federal Palace Hotel, Victoria Island, Lagos
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/exhibitors"
                className="bg-[#C5FA00] border border-[#C5FA00] text-[#0A2E1F] px-8 py-4 font-black text-sm rounded-sm hover:bg-[#0A2E1F] hover:text-[#C5FA00] transition-colors"
              >
                Join Exhibitors
              </Link>
              <Link
                href="/sponsorship"
                className="border border-white/20 text-white px-8 py-4 font-bold text-sm rounded-sm hover:bg-white/10 transition-colors"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>

          {/* Right Countdown */}
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 w-full max-w-lg">
              <p className="text-white text-lg font-semibold mb-6">
                Countdown to Festival
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-black text-black">182</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">
                    Days
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-black">14</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">
                    Hours
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-black">45</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">
                    Minutes
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-black">22</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column - Text and Stats */}
          <div>
            <h2 className="text-2xl md:text-2xl font-black text-[#0A2E1F] mb-4">
              About the FMCG Festival
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Driving the Future of Africa&apos;s FMCG Sector
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The FMCG Festival is more than just a trade show; it&apos;s a
              strategic platform where the world&apos;s most influential brands
              meet disruptive innovators. In an era of rapid digital
              transformation and evolving consumer behaviors, we provide the
              space for the industry to align, innovate, and grow.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start gap-4 p-6 bg-white border border-gray-300 rounded-lg"
                >
                  <div className="text-[#0A2E1F]">{getIcon(s.icon)}</div>
                  <div>
                    <p className="font-normal text-lg text-[#0A2E1F]">
                      {s.value}
                    </p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="inline-block bg-[#0A2E1F] text-white px-8 py-4 rounded-sm text-sm font-black hover:bg-[#062015] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right column - Image with floating quote card */}
          <div className="relative">
            <div className="relative h-100 md:h-150 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/homepage2.png"
                alt="Handshake at festival"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -left-4 bg-[#C5FA00] border rounded-xl px-6 py-5 max-w-xs">
              <p className="text-sm text-[#0A2E1F] italic leading-snug">
                &ldquo;The catalyst for retail transformation in Lagos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Exhibit & Visit ───────────────────────────────── */}
      <section className="pt-20 pb-10 px-6 bg-white border-2 border-gray-200">
        <div className="mx-14">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-normal text-[#0A2E1F] mb-4">
              Why Exhibit & Visit?
            </h2>
            <div className="w-20 h-1 bg-[#506600] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Why Exhibit */}
            <div>
              <h3 className="font-normal border-l-3 border-[#506600] pl-4 text-[#0A2E1F] text-base mb-6">
                Why Exhibit?
              </h3>
              <ul className="space-y-4">
                {WHY_EXHIBIT.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="text-[#84A900] mt-0.5 shrink-0">
                      {getIcon(item.icon)}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/exhibitors"
                className="mt-8 inline-block bg-[#0A2E1F] text-white px-6 py-3 rounded-sm text-sm font-black hover:bg-[#062015] transition-colors"
              >
                Book Your Stand
              </Link>
            </div>

            {/* Center image */}
            <div className="relative w-full h-80 md:h-150 rounded-2xl overflow-hidden">
              <Image
                src="/homepage3.png"
                alt="Exhibition"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="eager"
                className="object-cover"
              />
            </div>

            {/* Why Visit */}
            <div>
              <h3 className="font-normal border-l-3 border-[#506600] pl-4 text-[#0A2E1F] text-base mb-6">
                Why Visit?
              </h3>
              <ul className="space-y-4">
                {WHY_VISIT.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="text-[#84A900] mt-0.5 shrink-0">
                      {getIcon(item.icon)}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-8 inline-block border border-[#0A2E1F] text-[#0A2E1F] px-6 py-3 rounded-sm text-sm font-bold hover:bg-gray-50 transition-colors"
              >
                Register to Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Sponsors Sectors ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold text-[#0A2E1F] mb-4 uppercase tracking-widest">
            Our Sponsors
          </h2>
          <p className="text-gray-500 text-sm">
            Proudly partnering with industry leaders to drive innovation and
            excellence in FMCG.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="shrink-0 flex flex-col items-center gap-2">
              <Image
                src={`/partner${i + 1}.png`}
                alt={`Partner ${i + 1}`}
                width={120}
                height={50}
                className="object-contain opacity-80 "
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Exhibition Sectors ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="mx-14">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-[#0A2E1F] mb-1">
              Exhibition Sectors
            </h2>
            <p className="text-gray-500 text-sm">
              A comprehensive showcase of the entire FMCG value chain.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {EXHIBITION_SECTORS.map((sector) => (
              <div
                key={sector.label}
                className="bg-white border border-gray-300 rounded-xl p-10 flex flex-col items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer"
              >
                <div className="text-[#0f1b16] rounded-xl p-5 bg-[#F2F4EF]">
                  {getIcon(sector.icon)}
                </div>
                <div>
                  <p className="font-normal text-[#0A2E1F] text-lg">
                    {sector.label}
                  </p>
                  <p className="text-[11px] text-gray-400 font-light mt-0.5 items-center flex flex-col gap-1 uppercase tracking-widest">
                    {sector.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/exhibitors"
              className="bg-[#0A2E1F] text-white px-6 py-3 rounded-sm font-semibold text-xl hover:bg-[#062015] transition-colors inline-block"
            >
              Book Your Stand
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2024 Keynote Lineup ───────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="mx-14">
          <div className="text-center mb-12">
            <p className="text-x1 font-normal text-[#506600] uppercase tracking-widest mb-2">
              2024 Keynote Lineup
            </p>
            <h2 className="text-lg font-normal text-[#0A2E1F]">
              Industry Visionaries
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SPEAKERS.map((speaker: any) => (
              <div
                key={speaker._id || speaker.name}
                className="group cursor-pointer"
              >
                <div className="relative h-100 w-full rounded-xl overflow-hidden bg-gray-200 flex flex-col justify-end">
                  {speaker.image && (
                    <Image
                      src={
                        typeof speaker.image === "string"
                          ? speaker.image
                          : urlFor(speaker.image).url()
                      }
                      alt={speaker.name}
                      fill
                      className="object-cover h-150 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#002E16]/40 to-transparent" />
                  <div className="relative p-4 flex flex-col gap-1">
                    <h3 className="text-xl font-normal text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-[#b0df00]">{speaker.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 font-normal mt-3 italic leading-snug">
                  &ldquo;{speaker.quote || "Shaping the future of FMCG."}
                  &rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/line-up"
              className="bg-[#0A2E1F] text-white px-6 py-3 rounded-sm font-semibold text-xl hover:bg-[#062015] transition-colors inline-block"
            >
              View All 120+ Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* ── #FMCGFestival Updates ─────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="mx-14">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black text-[#0A2E1F]">
              #FMCGFestival Updates
            </h2>
            <div className="flex gap-2">
              <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50">
                ‹
              </button>
              <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50">
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`rounded-sm overflow-hidden border border-gray-100 flex flex-col ${
                  item.center ? "bg-white" : "bg-white"
                }`}
              >
                {/* Image top */}
                {item.img && (
                  <div
                    className={`relative h-44 w-full shrink-0 ${
                      item.imgDark ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={`object-cover ${item.imgDark ? "opacity-60" : "opacity-80"}`}
                    />
                  </div>
                )}
                {/* No image — centered icon */}
                {!item.img && item.center && (
                  <div className="h-44 flex items-center justify-center bg-gray-50">
                    <div className="text-gray-300">{getIcon("Camera")}</div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-gray-300 font-bold">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm font-black text-[#0A2E1F] leading-snug mb-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  {item.cta && (
                    <Link
                      href="#"
                      className="mt-4 text-xs font-black text-[#0A2E1F] hover:underline"
                    >
                      {item.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Become Part of the Movement ───────────────────────── */}
      <section className="py-20 px-6 bg-[#0A2E1F] text-white">
        <div className="mx-14">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-normal mb-2">
              Become Part of the Movement
            </h2>
            <p className="text-sm text-gray-100 max-w-xl mx-auto">
              Whether you&apos;re looking to exhibit your latest innovations or
              gain exclusive industry insights, FMCG Festival is your gateway to
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
            {BOTTOM_CTA.map((block) => (
              <div
                key={block.eyebrow}
                className={`border border-gray-600 bg-white/10 opacity-90 rounded-sm p-8 flex flex-col gap-4`}
              >
                <h3 className="text-lg font-normal text-white">
                  {block.eyebrow}
                </h3>
                <p className="text-sm text-gray-100 leading-relaxed max-w-2xl">
                  {block.body}
                </p>
                <Link
                  href={block.href}
                  className={`mt-2 mr-40 inline-block px-6 py-3 rounded-xs text-sm font-black transition-colors ${block.ctaStyle}`}
                >
                  {block.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
