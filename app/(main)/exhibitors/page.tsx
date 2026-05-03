import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { exhibitorsQuery } from "@/sanity/queries";
import {
  Utensils,
  Droplets,
  Home,
  Cpu,
  Package,
  Users,
} from "lucide-react";
import FeaturedDirectory from "@/components/FeaturedDirectory";

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
  // Fetch data securely on the server
  const exhibitors = await client.fetch(exhibitorsQuery);

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
          <div className="relative h-80 md:h-110 rounded-xl overflow-hidden bg-[#f4f4f0]">
            <Image
              src="/exhibitor1.png"
              alt="Exhibition Hall"
              fill
              className="object-cover"
              loading="eager"
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

      {/* ── Interactive Featured Directory ────────────────────── */}
      <FeaturedDirectory exhibitors={exhibitors} />

      {/* ── Visitor Profile & Buying Power ───────────────────── */}
      <section className="py-20 px-6 bg-[#EDEEE9] border-t border-gray-200 rounded-lg mx-10 mb-20 mt-20">
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