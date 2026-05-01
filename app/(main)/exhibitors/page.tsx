/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { exhibitorsQuery } from "@/sanity/queries";
import {
  Utensils,
  Droplets,
  Home,
  Cpu,
  Package,
  Users,
  MapPin,
} from "lucide-react";

const SECTORS = [
  { icon: Utensils, label: "Food & Bev" },
  { icon: Droplets, label: "Personal Care" },
  { icon: Home, label: "Household" },
  { icon: Cpu, label: "Tech" },
  { icon: Package, label: "Packaging" },
];

const STATS = [
  {
    value: "65%",
    label: "Decision Makers",
    desc: "Visitors with C-level, VP, or Director level purchasing authority.",
  },
  {
    value: "$12B+",
    label: "Estimated Budget",
    desc: "Total collective purchasing power of registered attendees for 2024.",
  },
  {
    value: "85+",
    label: "Countries",
    desc: "Global representation from retailers across 5 continents.",
  },
];

export default async function ExhibitorsPage() {
  const exhibitors = await client.fetch(exhibitorsQuery);

  // Split exhibitors for layout
  const featured = exhibitors.slice(0, 5);

  return (
    <main className="flex-1 bg-[#f4f4f0]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="bg-[#B5F0C4] text-[#195130] px-4 py-1.5 rounded-full text-sm font-normal uppercase tracking-widest inline-block mb-6">
              Exhibitor Directory
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-[#0A2E1F] leading-tight mb-4">
              Meet the Pioneers of FMCG.
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Discover over 400 world-class exhibitors showcasing innovation
              across the entire FMCG value chain—from global food brands to
              cutting-edge sustainable packaging solutions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#directory"
                className="bg-[#0A2E1F] text-white px-6 py-4 rounded-sm text-sm font-normal hover:bg-[#062015] transition-colors"
              >
                Exhibition Map
              </Link>
              <Link
                href="#"
                className="border border-[#0A2E1F] text-[#0A2E1F] px-6 py-4 rounded-sm text-sm font-normal hover:bg-gray-50 transition-colors"
              >
                Download Guide
              </Link>
            </div>
          </div>

          {/* Right – hero image with overlay badge */}
          <div className="relative h-80 md:h-[440px] rounded-xl overflow-hidden bg-[#f4f4f0]">
            <Image
              src="/exhibitor1.png"
              alt="Exhibition Hall"
              fill
              className="object-cover"
              loading="eager"
              sizes="fill"
            />
            {/* Badge */}
            <div className="absolute bottom-1 left-[-6] bg-white/90 backdrop-blur-sm rounded-lg px-5 py-3 flex items-center gap-3 shadow-lg">
              <Users
                className="w-6 h-6 text-[#0A2E1F] shrink-0"
                strokeWidth={2}
              />
              <div>
                <p className="text-xl font-black text-[#0A2E1F]">400+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Global Exhibitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exhibiting Sectors ───────────────────────────────── */}
      <section className="border-t border-b border-gray-100 py-10 px-6 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xl font-normal text-[#0A2E1F] uppercase tracking-widest mb-8">
            Exhibiting Sectors
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {SECTORS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  className="flex flex-col items-center gap-2 bg-white border-2 border-gray-200 rounded-lg py-5 px-4 hover:border-[#0A2E1F] hover:bg-[#f5faf7] transition-all cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-[#0A2E1F]" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-[#0A2E1F]">
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Exhibitors ──────────────────────────────── */}
      <section id="directory" className="py-20 px-6 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-normal text-[#0A2E1F]">
              Featured Exhibitors
            </h2>
            <Link
              href="#"
              className="text-sm font-semibold text-[#0A2E1F] flex items-center gap-1 hover:underline"
            >
              View Full Directory →
            </Link>
          </div>

          {/* Bento-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large card: Premium Partner (col-span-1 left) */}
            {featured[0] && (
              <div className="md:row-span-2 bg-[#0d3b28] rounded-xl overflow-hidden relative flex flex-col justify-end min-h-[320px]">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C5FA00] text-[#0A2E1F] text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm">
                    Premium Partner
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  {featured[0].logo ? (
                    <Image
                      src={urlFor(featured[0].logo).url()}
                      alt={featured[0].companyName}
                      fill
                      className="object-contain p-12"
                    />
                  ) : (
                    <Image
                      src="/default.png"
                      alt="default"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="relative z-10 p-8 bg-gradient-to-t from-[#0A2E1F] to-transparent pt-16">
                  <p className="text-[#C5FA00] text-xs font-bold uppercase tracking-widest mb-1">
                    {featured[0].category?.replace("_", " ") || "FOOD TECH"}
                  </p>
                  <h3 className="text-white text-2xl font-black">
                    {featured[0].companyName}
                  </h3>
                </div>
              </div>
            )}

            {/* Card 2 */}
            {featured[1] && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] ... gap-1">
                    <Package className="w-3 h-3" />
                    {featured[1].category?.replace("_", " ") ||
                      "FOOD & BEVERAGES"}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0A2E1F] mb-2">
                  {featured[1].companyName}
                </h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-3">
                  {featured[1].description ||
                    "Leading innovation in the FMCG sector with cutting-edge solutions."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-sm">
                    Sustainability
                  </span>
                  <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-sm">
                    Supply Chain
                  </span>
                  <span className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-sm">
                    B2B
                  </span>
                </div>
              </div>
            )}

            {/* Card 3 */}
            {featured[2] && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-[#84A900] uppercase tracking-widest flex items-center gap-1">
                    <Package className="w-3 h-3" />{" "}
                    {featured[2].category?.replace("_", " ") || "PACKAGING"}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0A2E1F] mb-2">
                  {featured[2].companyName}
                </h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-3">
                  {featured[2].description ||
                    "Revolutionizing the shelf-life of perishables with compostable bio-plastics."}
                </p>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="/default.png"
                      alt="booth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />{" "}
                    {featured[2].boothLocation || "Booth #42B – Hall 1"}
                  </span>
                </div>
              </div>
            )}

            {/* Card 4 */}
            {featured[3] && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] font-black text-[#84A900] uppercase tracking-widest flex items-center gap-1 mb-4">
                  <Droplets className="w-3 h-3" />{" "}
                  {featured[3].category?.replace("_", " ") || "PERSONAL CARE"}
                </span>
                <h3 className="text-lg font-black text-[#0A2E1F] mb-2">
                  {featured[3].companyName}
                </h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-3">
                  {featured[3].description ||
                    "Data-driven skincare formulations utilizing AI."}
                </p>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="/default.png"
                      alt="booth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />{" "}
                    {featured[3].boothLocation || "Booth #15C – Hall 3"}
                  </span>
                </div>
              </div>
            )}

            {/* Card 5 */}
            {featured[4] && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[10px] font-black text-[#84A900] uppercase tracking-widest flex items-center gap-1 mb-4">
                  <Cpu className="w-3 h-3" />{" "}
                  {featured[4].category?.replace("_", " ") || "PROCESSING TECH"}
                </span>
                <h3 className="text-lg font-black text-[#0A2E1F] mb-2">
                  {featured[4].companyName}
                </h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-3">
                  {featured[4].description ||
                    "Edge computing hardware designed for FMCG production lines."}
                </p>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="/default.png"
                      alt="booth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />{" "}
                    {featured[4].boothLocation || "Booth #99A – Hall 2"}
                  </span>
                </div>
              </div>
            )}

            {/* Join the Roster CTA card */}
            <div className="bg-[#0A2E1F] rounded-xl p-8 flex flex-col items-center justify-center text-center text-white">
              <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-2xl mb-4 hover:border-[#C5FA00] transition-colors">
                +
              </div>
              <h3 className="text-xl font-black mb-2">Join the Roster</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Last few booth spaces available for the 2024 Festival. Showcase
                your brand to 15,000+ buyers.
              </p>
              <Link
                href="/register"
                className="bg-[#C5FA00] text-[#0A2E1F] px-8 py-3 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors w-full text-center"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Directory ───────────────────────────────────── */}
      {exhibitors.length > 5 && (
        <section className="py-10 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exhibitors.slice(5).map((exhibitor: any) => (
                <div
                  key={exhibitor._id}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 relative bg-gray-100 rounded-md border border-gray-100 overflow-hidden">
                      {exhibitor.logo ? (
                        <Image
                          src={urlFor(exhibitor.logo).url()}
                          alt={exhibitor.companyName}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <Image
                          src="/default.png"
                          alt="logo"
                          fill
                          className="object-contain p-2"
                        />
                      )}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {exhibitor.category?.replace("_", " ")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2E1F] mb-2">
                    {exhibitor.companyName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                    {exhibitor.description ||
                      "Leading innovation in the FMCG sector."}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-md border border-gray-100">
                    <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                    {exhibitor.boothLocation || "Booth TBD"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Visitor Profile & Buying Power ───────────────────── */}
      <section className="py-20 px-6 bg-[#EDEEE9] border-t border-gray-200 rounded-lg mx-10 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-normal text-[#0A2E1F] mb-3">
              Visitor Profile & Buying Power
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Connect with the decision-makers who matter. Our visitor base
              represents the pinnacle of retail and distribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-xl p-8"
              >
                <p className="text-2xl font-black text-[#84A900] mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-bold text-[#0A2E1F] mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
