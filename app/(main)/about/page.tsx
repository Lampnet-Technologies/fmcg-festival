import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Droplets,
  Home,
  Settings,
  Package,
  ShoppingCart,
  Factory,
  Truck,
  ConciergeBell,
  Users,
  Globe,
  Rocket,
} from "lucide-react";

const EXHIBITOR_SECTORS = [
  {
    icon: Utensils,
    label: "Food & Beverages",
    sub: "Organic, Processed, Snacks & Drinks",
  },
  {
    icon: Droplets,
    label: "Personal Care",
    sub: "Beauty, Hygiene, Skin & Haircare",
  },
  {
    icon: Home,
    label: "Household Care",
    sub: "Cleaning & Maintenance",
  },
  {
    icon: Settings,
    label: "Processing Tech",
    sub: "Automation & Machinery",
  },
  {
    icon: Package,
    label: "Packaging",
    sub: "Eco-friendly & Smart Solutions",
  },
];

const WHO_ATTENDS = [
  {
    icon: ShoppingCart,
    label: "Retailers & Supermarkets",
    desc: "Owners, buyers, and category managers from leading retail chains.",
    dark: true,
    iconColor: "#ffffff",
  },
  {
    icon: Factory,
    label: "Manufacturers",
    desc: "R&D specialists and production heads from global FMCG giants.",
    accent: true,
    iconColor: "#546B00",
  },
  {
    icon: Truck,
    label: "Supply Chain Partners",
    desc: "Logistics providers and cold chain experts.",
    dark: false,
    muted: true,
    iconColor: "#0A2E1F",
  },
  {
    icon: ConciergeBell,
    label: "Hospitality Groups",
    desc: "Procurement heads from hotels and commercial kitchens.",
    dark: false,
    iconColor: "#0A2E1F",
  },
];

const SCHEDULE_PREVIEW = [
  {
    day: "Day 1 · 09:00 AM",
    title: "Opening Keynote: Future of Retail",
    desc: "Industry leaders discuss the impact of AI on consumer analytics.",
    img: "/event1.png",
  },
  {
    day: "Day 1 · 02:00 PM",
    title: "Panel: Sustainability in Packaging",
    desc: "Case studies on circular economy initiatives from top brands.",
    img: "/event2.png",
  },
  {
    day: "Day 2 · 10:30 AM",
    title: "Product Launch Arena",
    desc: "Live unveiling of innovative products across all FMCG sectors.",
    img: "/event3.png",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      {/* ── Full-bleed Hero Image ─────────────────────────────── */}
      <section className="relative h-[80vh] min-h-100 w-full overflow-hidden bg-gray-200">
        <Image
          src="/abouthero1.png"
          alt="FMCG Festival Hall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-xl md:text-2x text-white leading-tight max-w-xl">
            About the Event
          </h1>
          <p className="text-white/80 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
            The premier gathering for the Fast-Moving Consumer Goods ecosystem,
            defining the future of retail, supply chain, and sustainability.
          </p>
        </div>
      </section>

      {/* ── Mission Section ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="bg-[#C0C9BF] text-[#002E16] text-xs font-normal px-3 py-1 rounded-sm uppercase tracking-widest inline-flex items-center gap-1 mb-6">
              <Rocket className="w-4 h-4 text-[#002E16]" /> Our Mission
            </span>
            <h2 className="text-xl md:text-2xl font-black text-[#0A2E1F] mb-4">
              About the FMCG Festival
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The FMCG Festival is more than just a trade show; it&apos;s a
              strategic platform where the world&apos;s most influential brands
              meet disruptive innovators. In an era of rapid digital
              transformation and evolving consumer behaviors, we provide the
              space for the industry to align, innovate, and grow.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-[#C5FA00] pl-4">
                <p className="text-2xl font-black text-[#0A2E1F]">250+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Global Exhibitors
                </p>
              </div>
              <div className="border-l-4 border-[#C5FA00] pl-4">
                <p className="text-2xl font-black text-[#0A2E1F]">15k+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Annual Attendees
                </p>
              </div>
            </div>
          </div>

          {/* Right image with floating quote card */}
          <div className="relative">
            <div className="relative h-100 md:h-120 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/about2.png"
                alt="Handshake at festival"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -left-4 bg-white border border-gray-100 shadow-xl rounded-xl px-6 py-5 max-w-xs">
              <p className="text-3xl font-black text-[#0A2E1F] mb-1">&ldquo;</p>
              <p className="text-sm font-semibold text-[#0A2E1F] italic leading-snug">
                The catalyst for next-generation retail partnerships.
              </p>
              <p className="text-xs text-gray-400 mt-3 font-semibold uppercase tracking-wide">
                — MABA Executive Board
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exhibitor Profile ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#C0C9BF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-normal text-[#0A2E1F] mb-2">
              Exhibitor Profile
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Showcasing the full spectrum of the FMCG value chain across five
              specialized zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
            {EXHIBITOR_SECTORS.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.label}
                  // Apply the 6-column math based on the array index
                  className={`bg-white border-2 border-gray-300 rounded-xl p-6 flex items-start gap-4 hover:shadow-sm transition-shadow ${
                    index < 2 ? "md:col-span-3" : "md:col-span-2"
                  }`}
                >
                  <div>
                    <div className="text-[#0f1b16] rounded-xl p-3 bg-[#F2F4EF] inline-flex items-center justify-center mb-8">
                      <Icon className="text-xl shrink-0" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-normal text-[#0A2E1F]">
                      {sector.label}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{sector.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/exhibitors"
              className="bg-none text-[#0A2E1F] px-2 py-3 font-semibold text-xl hover:text-white transition-colors inline-block border-b-2 border-[#0A2E1F] hover:border-white"
            >
              See Exhibitors
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who Attends ──────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
            {/* Left copy */}
            <div className="max-w-sm">
              <h2 className="text-xl font-normal text-[#0A2E1F] mb-4">
                Who Attends
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Join thousands of high-profile decision makers and industry
                leaders looking for the next breakthrough in the FMCG landscape.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-6 border border-gray-600 rounded-sm px-4 py-4 text-sm font-semibold text-[#0A2E1F]">
                  <Users className="w-6 h-5 text-[#002E16] shrink-0" /> 78%
                  Decision Makers
                </div>
                <div className="flex items-center gap-6 border border-gray-600 rounded-sm px-4 py-4 text-sm font-semibold text-[#0A2E1F]">
                  <Globe className="w-6 h-5 text-[#002E16] shrink-0" /> 40+
                  Countries Represented
                </div>
              </div>
              <Link
                href="/visitor-profile"
                className="mt-8 inline-block bg-[#0A2E1F] text-white px-6 py-4 rounded-sm text-sm font-black hover:bg-[#062015] transition-colors"
              >
                See Visitor Profile
              </Link>
            </div>

            {/* Right bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {WHO_ATTENDS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`rounded-xl p-6 flex flex-col gap-3 ${
                      item.dark
                        ? "bg-[#0A2E1F] text-white"
                        : item.accent
                          ? "bg-[#C5FA00] text-[#0A2E1F]"
                          : item.muted
                            ? "bg-[#C0C9BF] text-[#0A2E1F]"
                            : "bg-[#C0C9BF] text-[#0A2E1F]"
                    }`}
                  >
                    <Icon
                      className="w-8 h-8"
                      strokeWidth={2.5}
                      color={item.iconColor}
                    />

                    <h3
                      className={`font-bold text-sm ${
                        item.dark ? "text-white" : "text-[#0A2E1F]"
                      }`}
                    >
                      {item.label}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        item.dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Line-up Preview ────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0A2E1F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl font-normal text-white mb-2">
              Event Line-up
            </h2>
            <p className="text-[#7CB48C]">
              A carefully curated schedule featuring global keynotes,
              interactive panels, and networking galas.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full max-w-304 mx-auto isolate">
            {SCHEDULE_PREVIEW.map((item, i) => {
              // Determine if the current item is on an alternating row (e.g., the 2nd item at index 1)
              const isReversed = i % 2 !== 0;

              return (
                <div
                  key={i}
                  // Conditionally apply flex-row-reverse based on the isReversed boolean
                  className={`relative flex flex-col w-full bg-none rounded-xl overflow-hidden min-h-75 ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* 1. The Mid White Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2 z-10" />

                  {/* 2. The Small Green Circle */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#C5FA00] transform -translate-x-1/2 -translate-y-1/2 z-20" />

                  {/* 3. Image Container */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>

                  {/* 4. Text Container */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    {/* First Text (Day): Conditionally mirror alignment */}
                    <p
                      className={`w-full text-[#C5FA00] text-xs font-black uppercase tracking-widest mb-3 text-left ${
                        isReversed ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {item.day}
                    </p>

                    {/* Middle Text (Title): Always point towards the center line */}
                    <h3
                      className={`w-full text-white text-xl font-normal mb-2 text-left ${
                        isReversed ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Last Text (Desc): Conditionally mirror alignment */}
                    <p
                      className={`w-full text-[#7CB48C] text-sm leading-relaxed text-left ${
                        isReversed ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="border border-white/30 bg-white text-[#0A2E1F] px-8 py-3 rounded-sm text-sm font-bold hover:bg-white/10 transition-colors inline-block"
            >
              Download Full Schedule (PDF)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
