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
import { FestivalCountdown } from "@/components/FestivalCountdown";
import { EVENT_DETAILS, HOMEPAGE_INTERNATIONAL_PARTNERS, HOMEPAGE_LOCAL_PARTNERS } from "@/lib/event";

const SCHEDULE_PREVIEW = [
  {
    day: "Day 1",
    title: "Opening Ceremony/Conference & Exhibition Day",
    desc: "Keynotes from industry leaders set the stage for three days of innovation and networking.",
    img: "/event1.png",
  },
  {
    day: "Day 2",
    title: "Conference & Exhibition Day",
    desc: "Panels explore the rise of direct-to-consumer brands and sustainable packaging innovations.",
    img: "/event2.png",
  },
  {
    day: "Day 3",
    title: "Pitch competition/Fashion show/Closing ceremony",
    desc: "Finalists present innovations in sustainable packaging to a panel of retail giants.",
    img: "/event4.png",
  },
];

const STATS = [
  { icon: "Users", value: "5k+", label: "Attendees" },
  { icon: "Building2", value: "70+", label: "Exhibitors" },
  { icon: "Globe", value: "20+", label: "Countries" },
  { icon: "CircleStarIcon", value: "95+", label: "Local & Global Brand" },
];

const WHY_EXHIBIT = [
  {
    icon: "CircleCheck",
    text: "The FMCG Festival is a one stop shop for the FMCG industry",
  },
  {
    icon: "CircleCheck",
    text: "FMCG offers a unique platform connecting the FMCG value chain from raw materials to production to packaging/labeling to distribution of consumer goods.",
  },
  {
    icon: "CircleCheck",
    text: "Nigeria has the largest and most dynamic FMCG markets on the African continent",
  },
];

const WHY_VISIT = [
  {
    icon: "BadgeCheck",
    text: "Discover over 1,500+ new product launches across 8 FMCG sectors.",
  },
  {
    icon: "BadgeCheck",
    text: "Network with global manufacturers and key distribution companies and suppliers",
  },
  {
    icon: "BadgeCheck",
    text: "Stay ahead of consumer trends and sustainable packaging shifts.",
  },
];

const EXHIBITION_SECTORS = [
  { icon: "UtensilsCrossed", label: "Food & Beverage", count: "350+ Exhibitors" },
  { icon: "Droplets", label: "Beauty, Hygiene & Household Care", count: "120+ Exhibitors" },
  { icon: "Settings", label: "Tech & Automation", count: "85+ Exhibitors" },
  { icon: "Package", label: "Sustainable Pack", count: "90+ Exhibitors" },
  { icon: "Truck", label: "Logistics & Supply Chain", count: "60+ Exhibitors" },
  { icon: "CreditCard", label: "FinTech & Retail", count: "45+ Exhibitors" },
  { icon: "Home", label: "Manufacturing", count: "70+ Exhibitors" },
  { icon: "Heart", label: "Health & Wellness", count: "110+ Exhibitors" },
];

const NEWS_ITEMS = [
  {
    tag: "PRESS RELEASE",
    tagColor: "text-gray-500",
    date: "AUG 24, 2026",
    title: "Opay becomes the Fintech Headline Sponsor for The FMCG Festival 2026",
    desc: "Nigeria's leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry.",
    cta: "/updates/opay-fintech-headline-sponsor-fmcg-festival-2026",
    img: "/partner9.png",
    imgDark: false,
  },
  {
    tag: "PRESS RELEASE",
    tagColor: "text-gray-500",
    date: "OCT 12, 2024",
    title: '"Circular Hub" Zone announced for the 2024 Main Floor.',
    desc: "The festival expands its sustainability footprint with a dedicated pavilion for circular packaging.",
    cta: "/updates/circular-hub-zone-announced-for-the-2024-main-floor",
    img: "/blog-img1.png",
    imgDark: true,
  },
  {
    tag: "SOCIAL FEED",
    tagColor: "text-gray-500",
    date: "3 HOURS AGO",
    title: "Just finalized our exhibit plans for #FMCGFestival2024. Can't wait!!",
    desc: "@GlobalRetailer: Looking forward to meeting the next generation of supply chain disruptors in this hub.",
    cta: "/updates/just-finalized-our-exhibit-plans-for-fmcgfestival2024-can-t-wait",
    img: null,
    center: true,
  },
  {
    tag: "SPEAKER SPOTLIGHT",
    tagColor: "text-gray-500",
    date: "OCT 16, 2024",
    title: "Q&A: Julian Vance on the future of GenAI in FMCG packaging.",
    desc: "Discover how artificial intelligence is slashing prototyping times for major global brands by up to 70%.",
    cta: "/updates/q-and-a-julian-vance-on-the-future-of-genai-in-fmcg-packaging",
    img: "/blog-img2.png",
    imgDark: false,
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
            src="/homepage-main-hero.png"
            alt="FMCG Festival"
            fill
            sizes="90vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-[#C5FA00] text-[#0A2E1F] font-light text-xs px-4 py-2 rounded-sm uppercase tracking-widest text-center md:text-left">
              {EVENT_DETAILS.heroDate} - The Innovation Hub
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] max-w-2xl">
              The <span className="text-[#C5FA00]">FMCG</span> Festival
            </h1>

            <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
              A global platform connecting the FMCG value chain, fostering
              innovation, and driving growth across the globe.
            </p>

            <p className="text-white text-sm md:text-base max-w-xl leading-relaxed flex items-center">
              <MapPin size={20} className="mr-2 text-[#C5FA00] shrink-0" />
              {EVENT_DETAILS.venueFull}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/exhibitors"
                className="bg-[#0A2E1F] border border-[#0A2E1F] text-[#C5FA00] px-8 py-4 font-black text-sm rounded-sm hover:bg-[#C5FA00] hover:text-[#0A2E1F] transition-colors text-center w-full sm:w-auto"
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
            <FestivalCountdown startsAt={EVENT_DETAILS.startsAt} />
          </div>
        </div>
      </section>

      {/* ── Mission Section ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f9f5]">
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
              className="inline-block bg-[#0A2E1F] text-white px-8 py-4 rounded-sm text-sm font-black hover:bg-[#C5FA00] hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right column - Image with floating quote card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-100 md:h-125 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/homepage2.png"
                alt="Handshake at festival"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
                className="mt-8 inline-block bg-[#0A2E1F] text-white px-8 py-4 rounded-sm text-sm font-black hover:bg-[#C5FA00] hover:text-white transition-colors w-full sm:w-auto text-center"
              >
                Book Your Stand
              </Link>
            </div>

            {/* Center image */}
            <div className="relative w-full h-75 md:h-100 lg:h-125 rounded-2xl bg-white overflow-hidden order-1 lg:order-2 isolate">
              <Image
                src="/homepage3.png?v=20260719"
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

      {/* ── Headline Sponsor Section ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A2E1F] to-[#124430] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logo & Headline */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="bg-[#C5FA00] text-[#0A2E1F] text-[10px] font-black px-4 py-2 uppercase tracking-widest rounded-sm mb-6 inline-block">
              Fintech Headline Sponsor
            </span>
            <div className="relative w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-center mb-6">
              <div className="relative w-36 h-36">
                <Image
                  src="/partner9.png"
                  alt="OPay Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Opay becomes the Fintech Headline Sponsor for The FMCG Festival 2026
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Nigeria&apos;s leading Fintech brand, Opay headlines the premier B2B exhibition for the fast moving consumer goods industry.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              A B2B exhibition organized by MABA in partnership with the Nigerian-Indonesian Chamber of Commerce and Industry and reGenesis, a US based Agri-tech company alongside other local and international partners. The FMCG Festival, Africa&apos;s premier B2B and consumer goods exhibition will be hosting over 5,000 visitors and over 100 local and international exhibitors at the prestigious Oriental hotel Victoria Island Lagos Nigeria from 9-11th November 2026.
            </p>
            <Link
              href="/updates/opay-fintech-headline-sponsor-fmcg-festival-2026"
              className="inline-flex items-center bg-[#C5FA00] text-[#0A2E1F] px-8 py-4 font-black text-sm rounded-sm hover:bg-[#b5e500] transition-colors"
            >
              Read Official Press Release
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Partners ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8f9f5]">
        <div className="max-w-7xl mx-auto">
          {/* Header & Buttons */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2E1F] mb-3 uppercase tracking-widest">
              Our Partners
            </h2>
            <p className="text-[#0A2E1F] text-base mb-8">
              Supported by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/sponsorship"
                className="bg-[#0A2E1F] border-2 border-[#0A2E1F] text-white px-8 py-4 rounded text-sm font-bold hover:bg-white hover:text-[#0A2E1F] hover:border-[#062015] transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                href="/sponsorship#sponsorship-tiers"
                className="bg-transparent border-2 border-[#0A2E1F] text-[#0A2E1F] px-8 py-4 rounded text-sm font-bold hover:bg-[#0A2E1F]/5 transition-colors"
              >
                See all Sponsors
              </Link>
            </div>
          </div>

          {/* Partner Rows */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* International Partners Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A2E1F] w-full md:w-1/5 text-center md:text-left leading-tight">
                International<br className="hidden md:block" /> Partners
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full md:w-4/5">
                {HOMEPAGE_INTERNATIONAL_PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="relative h-28 md:h-32 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={`${partner.src}?v=20260719`}
                      alt={partner.alt}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 50vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Local Partners Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Logos on the left for desktop, ordered first for mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full md:w-4/5 order-2 md:order-1">
                {HOMEPAGE_LOCAL_PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="relative h-28 md:h-32 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={`${partner.src}?v=20260719`}
                      alt={partner.alt}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 50vw, 15vw"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0A2E1F] w-full md:w-1/5 text-center md:text-right leading-tight order-1 md:order-2">
                Local<br className="hidden md:block" /> Partners
              </h3>
            </div>
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
              className="bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#C5FA00] hover:text-white transition-colors inline-block w-full sm:w-auto"
            >
              Book Your Stand
            </Link>
          </div>
        </div>
      </section>

      {/* ── Event Line-up Preview ────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0A2E1F]">
        <div className="max-w-7xl mx-auto">
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
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 gap-4 flex flex-col sm:flex-row justify-center">
            <Link
              href="/line-up"
              className="border-2 border-white/30 bg-white text-[#0A2E1F] px-8 py-4 rounded-sm text-sm font-bold transition-colors inline-block w-full sm:w-auto"

            >
              See Full Line-up
            </Link>
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
              <Link
                href="/updates"
                className="bg-white border border-gray-300 px-6 py-2.5 rounded-full text-sm font-bold text-[#0A2E1F] hover:bg-[#0A2E1F] hover:text-white transition-colors"
              >
                View All Updates
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item, i) => (
              <Link
                href={item.cta}
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

      {/* ── Final Call to Action Banner ──────────── */}
      {/*  <section className="relative py-24 px-6 bg-[#0A2E1F] overflow-hidden flex flex-col items-center justify-center text-center isolate">
     
       ======= Decorative angled background to match the lighter green split in the image ======
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-10%] top-0 bottom-0 w-[45%] bg-[#0e3b28] transform skew-x-[-15deg] translate-x-10 shadow-2xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-gray-100 text-sm md:text-base font-medium">
            Join the FMCG Ecosystem - <br className="hidden md:block" />
            Secure Your Spot Today
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Be part of the most influential gathering of retail and manufacturing leaders in Africa. <br className="hidden md:block" />
            Registration is now open for attendees and exhibitors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 w-full sm:w-auto">
            <Link
              href="/register"
              className="bg-[#C5FA00] text-[#0A2E1F] px-10 py-3.5 rounded-sm font-bold text-sm hover:bg-[#b0df00] transition-colors w-full sm:w-auto text-center shadow-lg"
            >
              Register Now
            </Link>
            <Link
              href="/brochure"
              className="border-2 border-white text-white bg-transparent px-10 py-3.5 rounded-sm font-bold text-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
