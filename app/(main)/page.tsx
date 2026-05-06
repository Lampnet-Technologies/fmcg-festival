/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Building2,
  Globe,
  CircleStarIcon,
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
import { urlFor } from "@/sanity/lib/image";


const SCHEDULE_PREVIEW = [
  {
    day: "Day 1 · 09:00 AM",
    title: "Opening Ceremony/Conference & Exhibition",
    desc: "Keynotes from industry leaders set the stage for three days of innovation and networking.",
    img: "/event1.png",
  },
  {
    day: "Day 2 · 09:00 AM",
    title: "Conference & Exhibition",
    desc: "Panels explore the rise of direct-to-consumer brands and sustainable packaging innovations.",
    img: "/event2.png",
  },
  {
    day: "Day 3 · 10:00 AM",
    title: "Pitch competition/Fashion show/Closing ceremony",
    desc: "Finalists present innovations in sustainable packaging to a panel of retail giants.",
    img: "/event3.png",
  },
];

const STATS = [
  { icon: "Users", value: "5k", label: "Attendees" },
  { icon: "Building2", value: "450+", label: "Exhibitors" },
  { icon: "Globe", value: "20+", label: "Countries" },
  { icon: "CircleStarIcon", value: "95+", label: "Local & Global Brand" },
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
  { icon: "UtensilsCrossed", label: "Food & Beverage", count: "350+ Exhibitors" },
  { icon: "Droplets", label: "Beauty & Hygiene", count: "120+ Exhibitors" },
  { icon: "Settings", label: "Tech & Automation", count: "80+ Exhibitors" },
  { icon: "Package", label: "Sustainable Pack", count: "80+ Exhibitors" },
  { icon: "Truck", label: "Supply Chain", count: "60+ Exhibitors" },
  { icon: "CreditCard", label: "FinTech & Retail", count: "45+ Exhibitors" },
  { icon: "Home", label: "Household Care", count: "120+ Exhibitors" },
  { icon: "Heart", label: "Health & Wellness", count: "100+ Exhibitors" },
];

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
    title: "Just finalized our exhibit plans for #FMCGFestival2024. Can't wait!!",
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
    CircleStarIcon,
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
    <main className="flex-1 flex flex-col overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/mainhero.png"
            alt="FMCG Festival"
            fill
            sizes="90vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Removed mx-14, used standard max-w-7xl fluid container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-[#C5FA00] text-[#0A2E1F] font-light text-xs px-4 py-2 rounded-sm uppercase tracking-widest text-center md:text-left">
              October 24–26, 2026 • The Innovation Hub
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] max-w-2xl">
              The <span className="text-[#C5FA00]">FMCG</span> Festival
            </h1>

            <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
              A global platform connecting the FMCG value chain, fostering
              innovation, and driving growth across the continent.
            </p>

            <p className="text-white text-sm md:text-base max-w-xl leading-relaxed flex items-center">
              <MapPin size={20} className="mr-2 text-[#C5FA00] shrink-0" />
              Federal Palace Hotel, Victoria Island, Lagos
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/exhibitors"
                className="bg-[#C5FA00] border border-[#C5FA00] text-[#0A2E1F] px-8 py-4 font-black text-sm rounded-sm hover:bg-[#0A2E1F] hover:text-[#C5FA00] transition-colors text-center w-full sm:w-auto"
              >
                Join Exhibitors
              </Link>
              <Link
                href="/sponsorship"
                className="border border-white/20 text-white px-8 py-4 font-bold text-sm rounded-sm hover:bg-white/10 transition-colors text-center w-full sm:w-auto"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>

          {/* Right Countdown */}
          <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 md:p-8 w-full max-w-lg">
              <p className="text-white text-base md:text-lg font-semibold mb-6 text-center lg:text-left">
                Countdown to Festival
              </p>
              {/* Stacked 2x2 on mobile, 4 columns on tablets+ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-black text-white">182</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white">14</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white">45</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">Minutes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-white">22</p>
                  <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text and Stats */}
          <div>
            <h2 className="text-3xl font-black text-[#0A2E1F] mb-4">
              About the FMCG Festival
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-semibold">
              Driving the Future of Africa&apos;s FMCG Sector
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              The FMCG Festival is more than just a trade show; it&apos;s a
              strategic platform where the world&apos;s most influential brands
              meet disruptive innovators. In an era of rapid digital
              transformation and evolving consumer behaviors, we provide the
              space for the industry to align, innovate, and grow.
            </p>

            {/* Stats row - 2 columns */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start gap-4 p-4 md:p-6 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="text-[#0A2E1F]">{getIcon(s.icon)}</div>
                  <div>
                    <p className="font-bold text-lg text-[#0A2E1F]">{s.value}</p>
                    <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#0A2E1F] text-white px-8 py-4 rounded-sm text-sm font-black hover:bg-[#062015] transition-colors w-full sm:w-auto text-center"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right column - Image with floating quote card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Fixed invalid height classes */}
            <div className="relative h-100 md:h-125 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/homepage2.png"
                alt="Handshake at festival"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating quote - adjusted positioning for mobile */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:left-[-8] md:translate-x-0 bg-[#C5FA00] rounded-xl px-6 py-5 w-11/12 max-w-100 shadow-lg">
              <p className="text-sm text-[#0A2E1F] italic leading-snug font-medium text-center md:text-left">
                &ldquo;The catalyst for retail transformation in Lagos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Exhibit & Visit ───────────────────────────────── */}
      <section className="pt-20 pb-10 px-6 bg-white border-y-2 border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A2E1F] mb-4">
              Why Exhibit & Visit?
            </h2>
            <div className="w-20 h-1 bg-[#506600] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Why Exhibit */}
            <div className="order-2 lg:order-1">
              <h3 className="font-bold border-l-4 border-[#506600] pl-4 text-[#0A2E1F] text-lg mb-6">
                Why Exhibit?
              </h3>
              <ul className="space-y-6">
                {WHY_EXHIBIT.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-4 text-sm text-gray-600 leading-relaxed"
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
                className="mt-8 inline-block bg-[#0A2E1F] text-white px-8 py-4 rounded-sm text-sm font-black hover:bg-[#062015] transition-colors w-full sm:w-auto text-center"
              >
                Book Your Stand
              </Link>
            </div>

            {/* Center image */}
            <div className="relative w-full h-75 md:h-100 lg:h-125 rounded-2xl bg-white overflow-hidden order-1 lg:order-2 isolate">
              <Image
                src="/homepage3.png"
                alt="Exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Why Visit */}
            <div className="order-3">
              <h3 className="font-bold border-l-4 border-[#506600] pl-4 text-[#0A2E1F] text-lg mb-6">
                Why Visit?
              </h3>
              <ul className="space-y-6">
                {WHY_VISIT.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-4 text-sm text-gray-600 leading-relaxed"
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
                className="mt-8 inline-block border-2 border-[#0A2E1F] text-[#0A2E1F] px-8 py-4 rounded-sm text-sm font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
              >
                Register to Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Sponsors Sectors ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2E1F] mb-4 uppercase tracking-widest">
              Our Sponsors
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Proudly partnering with industry leaders to drive innovation and
              excellence in FMCG.
            </p>
          </div>
          {/* Changed layout for better scaling on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="shrink-0 flex justify-center max-w-auto max-h-auto">
                <Image
                  src={`/partner${i + 1}.png`}
                  alt={`Partner ${i + 1}`}
                  width={200}
                  height={150}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/sponsorship"
              className="bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#062015] transition-colors inline-block w-full sm:w-auto"
            >
              Become A Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Exhibition Sectors ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#0A2E1F] mb-2">
              Exhibition Sectors
            </h2>
            <p className="text-gray-500 text-sm">
              A comprehensive showcase of the entire FMCG value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXHIBITION_SECTORS.map((sector) => (
              <div
                key={sector.label}
                className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-[#0A2E1F] rounded-full p-4 bg-[#F2F4EF]">
                  {getIcon(sector.icon)}
                </div>
                <div>
                  <p className="font-bold text-[#0A2E1F] text-lg">
                    {sector.label}
                  </p>
                  <p className="text-[11px] text-gray-500 font-bold mt-2 uppercase tracking-widest">
                    {sector.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/exhibitors"
              className="bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#062015] transition-colors inline-block w-full sm:w-auto"
            >
              Book Your Stand
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2024 Keynote Lineup ───────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#506600] uppercase tracking-widest mb-2">
              2026 Keynote Lineup
            </p>
            <h2 className="text-3xl font-black text-[#0A2E1F]">
              Industry Visionaries
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPEAKERS.map((speaker: any) => (
              <div
                key={speaker._id || speaker.name}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-75 md:h-90 w-full rounded-xl overflow-hidden bg-gray-200 flex flex-col justify-end">
                  {speaker.image && (
                    <Image
                      src={
                        typeof speaker.image === "string"
                          ? speaker.image
                          : urlFor(speaker.image).url()
                      }
                      alt={speaker.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#002E16]/80 via-transparent to-transparent" />
                  <div className="relative p-5 flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C5FA00]">
                      {speaker.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 italic leading-relaxed">
                  &ldquo;{speaker.quote || "Shaping the future of FMCG."}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/line-up"
              className="bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#062015] transition-colors inline-block w-full sm:w-auto"
            >
              View All 120+ Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* ── Event Line-up Preview ────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0A2E1F]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center md:text-left">
            <h2 className="text-3xl font-black text-white mb-4">
              Event Line-up
            </h2>
            <p className="text-[#7CB48C] max-w-2xl text-sm md:text-base leading-relaxed">
              A carefully curated schedule featuring global keynotes,
              interactive panels, and networking galas.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full mx-auto isolate">
            {SCHEDULE_PREVIEW.map((item, i) => {
              const isReversed = i % 2 !== 0;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col w-full bg-none rounded-xl overflow-hidden min-h-75 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                  {/* The Mid White Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2 z-10" />

                  {/* The Small Green Circle */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#C5FA00] transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_15px_rgba(197,250,0,0.5)]" />

                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 h-56 md:h-auto border border-white/10 rounded-t-xl md:rounded-xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/5 md:bg-transparent rounded-b-xl md:rounded-none border border-white/10 border-t-0 md:border-0">
                    <p
                      className={`w-full text-[#C5FA00] text-xs font-bold uppercase tracking-widest mb-3 ${isReversed ? "md:text-right" : "md:text-left"
                        }`}
                    >
                      {item.day}
                    </p>

                    <h3
                      className={`w-full text-white text-xl md:text-2xl font-bold mb-3 leading-snug ${isReversed ? "md:text-right" : "md:text-left"
                        }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`w-full text-gray-300 text-sm leading-relaxed ${isReversed ? "md:text-right" : "md:text-left"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="#"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-white hover:text-[#0A2E1F] transition-colors inline-block w-full sm:w-auto"
            >
              Download Full Schedule (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* ── #FMCGFestival Updates ─────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F2F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A2E1F]">
              #FMCGFestival Updates
            </h2>
            <div className="flex gap-2">
              {/* Replaced text arrows with actual navigation logic/buttons */}
              <Link
                href="/updates"
                className="bg-white border border-gray-300 px-6 py-2.5 rounded-full text-sm font-bold text-[#0A2E1F] hover:bg-[#0A2E1F] hover:text-white transition-colors"
              >
                View All Updates
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Assuming NEWS_ITEMS is mapped from your Sanity fetch */}
            {NEWS_ITEMS.map((item, i) => (
              <Link
                href={`/updates/${i}`} // Dynamic route linking
                key={i}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Zoom Hover Effect */}
                {item.img ? (
                  <div className={`relative h-56 w-full shrink-0 overflow-hidden ${item.imgDark ? "bg-gray-900" : "bg-gray-100"}`}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.imgDark ? "opacity-70" : "opacity-100"}`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-56 flex items-center justify-center bg-gray-50 border-b border-gray-100 overflow-hidden">
                    <div className="text-gray-400 group-hover:scale-110 transition-transform duration-500">
                      {getIcon("Camera")}
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#84A900]">
                      {item.tag || "UPDATE"}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2E1F] leading-snug mb-3 group-hover:text-[#84A900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex items-center text-xs font-black text-[#0A2E1F] group-hover:text-[#84A900] transition-colors">
                    Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Become Part of the Movement ───────────────────────── */}
      <section className="py-20 px-6 bg-[#0A2E1F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black mb-4">
              Become Part of the Movement
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking to exhibit your latest innovations or
              gain exclusive industry insights, FMCG Festival is your gateway to
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BOTTOM_CTA.map((block) => (
              <div
                key={block.eyebrow}
                className="border border-white/20 bg-white/5 rounded-xl p-8 md:p-10 flex flex-col justify-between gap-6 hover:bg-white/10 transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {block.eyebrow}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                    {block.body}
                  </p>
                </div>
                {/* Removed mr-40 to fix mobile overflow */}
                <Link
                  href={block.href}
                  className={`inline-block px-8 py-4 rounded-sm text-sm font-bold transition-colors w-full sm:w-max text-center ${block.ctaStyle}`}
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