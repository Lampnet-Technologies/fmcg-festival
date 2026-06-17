import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  ShoppingCart,
  Factory,
  CheckCircle2,
  Check,
  TrendingUp,
  BarChart3,
  Code,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

/*
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
    icon: Cpu,
    label: "Processing Tech",
    sub: "Automation & Machinery",
  },
  {
    icon: Package,
    label: "Packaging",
    sub: "Eco-friendly & Smart Solutions",
  },
]; */

const WHO_ATTENDS_PROFILES = [
  {
    id: "fmcg-owners",
    wide: true,
    accent: false,
    dark: false,
    icon: Factory,
    title: "FMCG Industry Owners",
    desc: "Scale your operations and explore sustainable manufacturing breakthroughs.",
    image: "/visitor1.png",
    bullets: [
      "Strategic supply chain optimization",
      "Sustainability & ESG compliance",
      "Direct networking with global distributors",
    ],
  },
  {
    id: "general-managers",
    wide: false,
    accent: false,
    dark: false,
    icon: BarChart3,
    title: "General Managers",
    desc: "Master the art of high-performance operational leadership in retail and distribution.",
    keyBenefit: "Leadership workshops focused on data-driven management.",
  },
  {
    id: "supermarket-owners",
    wide: false,
    accent: false,
    dark: false,
    icon: ShoppingCart,
    title: "Supermarket Owners",
    desc: "Revitalize your retail floor with the latest consumer product trends.",
    bullets: ["Inventory management tech", "Direct-to-consumer sourcing"],
  },
  {
    id: "tech-providers",
    wide: true,
    accent: false,
    dark: false,
    icon: Cpu,
    title: "Tech Providers",
    desc: "Showcase your AI, IoT, and logistics solutions to an audience hungry for innovation.",
    image: "/visitor2.png",
    elements: ["Live Demos", "Pitch Stages"],
  },
  {
    id: "developers",
    wide: false,
    accent: false,
    dark: false,
    lightGray: true,
    icon: Code,
    title: "Developers",
    desc: "Build the future of retail. Connect with partners seeking custom ERP, POS, and FMCG chain software solutions.",
  },
  {
    id: "investors",
    wide: false,
    accent: true,
    dark: false,
    icon: TrendingUp,
    title: "Investors",
    desc: "Identify high-growth FMCG startups and established brands looking for expansion capital.",
  },
];

const BENEFITS = [
  {
    icon: Users,
    title: "Elite Networking",
    desc: "Curated matchmaking sessions between suppliers, retailers, and investors.",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    desc: "Access exclusive reports and keynote sessions on the 2025 FMCG outlook.",
  },
  {
    icon: Target,
    title: "Deal Making",
    desc: "A dedicated VIP lounge designed for closing high-value partnerships.",
  },
];

export default function VisitorProfilePage() {
  return (
    <main className="flex-1 bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[72vh] min-h-100 overflow-hidden bg-[#082317]">
        <Image
          src="/homepage-main-hero.png"
          alt="Festival attendees silhouette"
          fill
          className="object-cover opacity-40"
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 pb-14">
          <span className="bg-[#C5FA00] text-[#0A2E1F] text-xs font-normal px-4 py-1.5 rounded-sm uppercase tracking-widest inline-block mb-8 w-fit">
            Audience Guide
          </span>
          <h1 className="text-xl md:text-2xl font-normal text-white leading-tight max-w-xl mb-4">
            Who Attends the Festival?
          </h1>
          <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8">
            A high-performance ecosystem designed for the architects of the FMCG
            world. Connect with the industry&apos;s most influential
            decision-makers.
          </p>
          <div className="flex flex-wrap items-left gap-4">
            <Link
              href="/dashboard"
              className="inline-flex rounded-full bg-[#C5FA00] px-6 py-3 text-sm font-bold text-[#0A2E1F] hover:bg-[#b0df00] transition"
            >
              View Your Profile
            </Link>
          </div>
        </div>
      </section>

      {/* ── Target Visitor Profiles ───────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5]">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xl font-normal text-[#0A2E1F] mb-2">
              Target Visitor Profiles
            </h2>
            <p className="text-[#414942] max-w-xl mx-auto text-sm leading-relaxed">
              Discover how each professional sector derives value from the FMCG
              Festival&apos;s curated sessions and networking hubs.
            </p>
          </div>

          {/* New Profiles Bento Container */}
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Grid: Row 1 & 2 combined sequentially with col-spans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                WHO_ATTENDS_PROFILES[0],
                WHO_ATTENDS_PROFILES[1],
                WHO_ATTENDS_PROFILES[2],
                WHO_ATTENDS_PROFILES[3],
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`bg-white border border-gray-100 rounded-xl p-8 shadow-sm ${
                      item.wide ? "md:col-span-2" : "md:col-span-1"
                    } ${item.dark ? "bg-[#002E16] border-transparent text-white" : "text-[#0A2E1F]"}`}
                  >
                    {item.wide ? (
                      /* Wide Card Sub-layout: Content Left, Image Right */
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                          <Icon
                            className="w-8 h-8 mb-4 shrink-0"
                            strokeWidth={2.5}
                          />
                          <h3 className="text-lg font-normal mb-3">
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm mb-5 leading-relaxed ${item.dark ? "text-gray-200" : "text-gray-500"}`}
                          >
                            {item.desc}
                          </p>
                          {item.bullets && (
                            <ul className="space-y-3">
                              {item.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-2.5 text-sm font-semibold"
                                >
                                  <CheckCircle2
                                    className={`w-4 h-4 shrink-0 mt-0.5 ${item.dark ? "text-[#C5FA00]" : "text-[#84A900]"}`}
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.elements && (
                            <div className="flex gap-3 flex-wrap">
                              {item.elements.map((element) => (
                                <span
                                  key={element}
                                  className="border border-gray-200 text-[#0A2E1F] px-4 py-2 rounded-md text-sm font-bold bg-white"
                                >
                                  {element}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        {item.image && (
                          <div className="relative w-full md:w-2/5 h-52 md:h-60 rounded-xl overflow-hidden shrink-0 border border-gray-200 bg-white">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              loading="eager"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Normal Card Sub-layout: Vertical Content */
                      <div className="">
                        <Icon
                          className="w-8 h-8 mb-4 shrink-0"
                          strokeWidth={2.5}
                        />
                        <h3 className="text-lg font-normal mb-3 leading-snug">
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm mb-5 leading-relaxed ${item.dark ? "text-gray-200" : "text-gray-500"}`}
                        >
                          {item.desc}
                        </p>
                        {item.bullets && (
                          <ul className="space-y-3">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-2.5 text-sm font-semibold"
                              >
                                <Check
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${item.dark ? "text-[#C5FA00]" : "text-[#84A900]"}`}
                                  strokeWidth={3}
                                />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.keyBenefit && (
                          <div className="mt-8 p-5 rounded-lg border border-gray-100 bg-white">
                            <span className="text-xs font-black text-[#84A900] uppercase tracking-widest block mb-2">
                              Key Benefit
                            </span>
                            <p className="text-sm font-black leading-snug">
                              {item.keyBenefit}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Separator gap */}
            <div className="h-6"></div>

            {/* Bottom Profiles Bento: Row 3 centered */}
            <div className="max-w-7xl mx-auto md:w-fit md:justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto md:justify-center">
                {[WHO_ATTENDS_PROFILES[4], WHO_ATTENDS_PROFILES[5]].map(
                  (item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={`border rounded-xl p-8 shadow-sm flex items-start gap-5 ${
                          item.accent
                            ? "bg-[#C5FA00] border-transparent text-[#002E16]"
                            : item.lightGray
                              ? "bg-[#f8f8f5] border-gray-200 text-[#0A2E1F]"
                              : "bg-white border-gray-100 text-[#0A2E1F]"
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-white"
                        >
                          <Icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${item.accent ? "text-[#002E16]/80" : "text-gray-500"}`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Row ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f8f8f5] border-t-2 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#0A2E1F] rounded-xl flex items-center justify-center text-white shadow-md">
                  <Icon className="w-7 h-7 text-[#C5FA00]" strokeWidth={1.5} />
                </div>
                <h3 className="font-normal text-[#002E16] text-base">
                  {b.title}
                </h3>
                <p className="text-sm text-[#414942] leading-relaxed max-w-xs">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Join the Future CTA ───────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f8f5] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-normal text-[#0A2E1F] mb-3">
            Join the Future of FMCG
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Whether you are scaling a production line or seeking your next big
            investment, the FMCG Festival is your gateway to excellence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register"
              className="bg-[#0A2E1F] text-white px-8 py-5 rounded-sm font-black text-sm hover:bg-[#062015] transition-colors"
            >
              Get Your Ticket
            </Link>
            <Link
              href="/exhibitors"
              className="border border-gray-300 text-[#0A2E1F] px-8 py-5 rounded-sm font-bold text-sm hover:bg-gray-50 transition-colors bg-white"
            >
              View Exhibitor List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
