import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Utensils,
} from "lucide-react";



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
          <div className="relative h-80 md:h-110 rounded-xl overflow-hidden bg-[#f4f4f0]">
            <Image
              src="/ExhibitionHero.png"
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
      <section className="py-20 px-6 bg-[#EDEEE9] border-t border-gray-200 rounded-lg mx-10 mb-20">

        {/*  Card 1 */}
        <div className="md:col-span-2 rounded-xl overflow-hidden flex flex-col md:flex-row mb-4">
          {/* Left Color Block */}
          <div className="relative w-full md:w-1/2 bg-[#319B91] p-8 flex flex-col justify-center items-center text-center min-h-62.5">
            <div className="absolute top-4 left-4">
              <span className="bg-[#0A2E1F] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                Sinbol
              </span>
            </div>
            <div className="w-54 h-54 relative mb-4 opacity-90">
              <Image src="/partner4.png" alt="Sinbol" fill className="object-contain" />
            </div>
          </div>
          {/* Right Content Block */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Sinbol is a leading Nigerian company specializing in the production and distribution of high-quality edible oils and related products. With a commitment to excellence and sustainability, Sinbol has established itself as a trusted name in the food industry, providing nutritious and affordable cooking solutions to consumers across Nigeria and beyond.
            </p>
          </div>
        </div>

        {/*  Card 2 */}
        <div className="md:col-span-2 rounded-xl overflow-hidden flex flex-col md:flex-row mb-4">
          {/* Left Color Block */}
          <div className="relative w-full md:w-1/2 bg-[#319B91] p-8 flex flex-col justify-center items-center text-center min-h-62.5">
            <div className="absolute top-4 left-4">
              <span className="bg-[#0A2E1F] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                Coronation Merchant Bank
              </span>
            </div>
            <div className="w-54 h-54 relative mb-4 opacity-90">
              <Image src="/partner4.png" alt="Coronation Merchant Bank" fill className="object-contain" />
            </div>
          </div>
          {/* Right Content Block */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Coronation Merchant Bank is a leading financial institution in Nigeria, providing a wide range of banking and financial services to individuals, businesses, and corporations. With a strong commitment to innovation and customer satisfaction, Coronation Merchant Bank has established itself as a trusted partner in the Nigerian banking industry.
            </p>
          </div>
        </div>

        {/*  Card 3 */}
        <div className="md:col-span-2 rounded-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Color Block */}
          <div className="relative w-full md:w-1/2 bg-[#319B91] p-8 flex flex-col justify-center items-center text-center min-h-62.5">
            <div className="absolute top-4 left-4">
              <span className="bg-[#0A2E1F] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                AfroPack Engineering
              </span>
            </div>
            <div className="w-54 h-54 relative mb-4 opacity-90">
              <Image src="/partner4.png" alt="AfroPack Engineering" fill className="object-contain" />
            </div>
          </div>
          {/* Right Content Block */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              AfroPack Engineering is a leading packaging solutions provider in Nigeria, specializing in the design, manufacturing, and distribution of high-quality packaging materials and equipment. With a commitment to innovation and sustainability, AfroPack Engineering has established itself as a trusted partner for businesses across various industries, providing customized packaging solutions that meet the evolving needs of the Nigerian market.
            </p>
          </div>
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
              href="/register?booth=general"
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