import Image from "next/image";
import Link from "next/link";
import {
  Users,
} from "lucide-react";
import { DISTINGUISHED_PARTNERS } from "@/lib/event";



const STATS = [
  {
    value: "5000+",
    label: "Decision Makers",
    desc: "Visitors with C-level, VP, or Director level purchasing authority.",
  },
  {
    value: "$12B+",
    label: "Estimated Budget",
    desc: "Total collective purchasing power of registered attendees for the current festival cycle.",
  },
  {
    value: "20+",
    label: "Countries",
    desc: "Global representation from retailers across 5 continents.",
  },
];

export default async function partnerPage() {

  return (
    <main className="flex-1 bg-[#f4f4f0]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="bg-[#B5F0C4] text-[#195130] px-4 py-1.5 rounded-full text-sm font-normal uppercase tracking-widest inline-block mb-6">
              Our Partners
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-[#0A2E1F] leading-tight mb-4">
              Meet the People Powering Possibility
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              MABA is an impact enterprise established in 2022 with a platform for aggregating high quality wholesome products locally for export across the globe.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#partners"
                className="bg-[#0A2E1F] text-white px-6 py-4 rounded-sm text-sm font-normal hover:bg-[#062015] transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Right – hero image with overlay badge */}
          <div className="relative h-80 md:h-110 rounded-xl overflow-visible bg-[#f4f4f0]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src="/ExhibitionHero.png"
              alt="Exhibition Hall"
              fill
              className="object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            </div>
            {/* Badge */}
            <div className="absolute bottom-[-12] left-[-12] z-20 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-300 px-5 py-3 flex items-center gap-3 shadow-lg">
              <Users
                className="w-6 h-6 text-[#0A2E1F] shrink-0"
                strokeWidth={2}
              />
              <div className="text-left leading-snug m-2">
                <p className="text-xl font-normal text-[#0A2E1F] mb-1">5000+</p>
                <p className="text-xs font-normal text-gray-500 uppercase tracking-widest">
                  Visitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Distinguishing Sectors ───────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto mb-20" id="partners">
        <h2 className="text-2xl md:text-3xl font-black text-[#0A2E1F] mb-10 text-center uppercase tracking-wider border-b-2 border-gray-200 pb-4">
          Our Distinguishing Partners
        </h2>
        <div className="flex flex-col gap-6">
          {DISTINGUISHED_PARTNERS.map((partner) => (
            <div 
              key={partner.name}
              className="rounded-xl overflow-hidden flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Left Color Block */}
              <div className="relative w-full md:w-1/2 lg:w-2/5 bg-[#319B91] p-8 flex flex-col justify-center items-center text-center min-h-[220px]">
                <div className="absolute top-4 left-4 max-w-[90%]">
                  <span className="bg-[#0A2E1F] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm block truncate">
                    {partner.name}
                  </span>
                </div>
                <div className="w-48 h-48 relative opacity-90 flex items-center justify-center">
                  <Image 
                    src={`${partner.src}?v=20260719`} 
                    alt={partner.name} 
                    fill 
                    className="object-contain p-4" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                </div>
              </div>
              {/* Right Content Block */}
              <div className="w-full md:w-1/2 lg:w-3/5 p-8 flex flex-col justify-center">
                {partner.name === "Opay" ? (
                  <span className="bg-[#C5FA00] text-[#0A2E1F] px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-4 self-start shadow-sm border border-[#0A2E1F]/10">
                    Fintech Headline Sponsor
                  </span>
                ) : (
                  <span className={`${partner.type === 'international' ? 'bg-[#B5F0C4] text-[#195130]' : 'bg-[#E2F0B5] text-[#485119]'} px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4 self-start`}>
                    {partner.type === 'international' ? 'International Partner' : 'Local Partner'}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#0A2E1F] mb-3">{partner.name}</h3>
                <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
          <div className="text-center mt-14">
            <Link
              href="/register"
              className="bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-[#062015] transition-colors inline-block w-full sm:w-auto"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
