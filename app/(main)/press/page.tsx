import Link from "next/link";
import { Download, Image as ImageIcon, FileText, Mail, FileVideo } from "lucide-react";

export default function PressKitPage() {
  return (
    <main className="flex-1 bg-[#FAFAFA] pb-20">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="bg-[#0A2E1F] pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#C5FA00] text-xs font-black uppercase tracking-[0.2em] mb-4 block">
            Media Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Official Press Kit
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Everything you need to cover the 2026 FMCG Festival. Download high-resolution assets, read our latest announcements, and access brand guidelines.
          </p>
        </div>
      </section>

      {/* ── Fast Facts Grid ──────────────────────────────────── */}
      <section className="px-6 -mt-10 relative z-10 mb-20">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-black text-[#0A2E1F]">Oct 24-26</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">2026 Dates</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[#0A2E1F]">12,000+</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Attendees</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[#0A2E1F]">450+</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Exhibitors</p>
          </div>
          <div>
            <p className="text-2xl font-black text-[#0A2E1F]">Lagos</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Host City</p>
          </div>
        </div>
      </section>

      {/* ── Downloadable Assets ──────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-black text-[#0A2E1F] mb-8 border-b border-gray-200 pb-4">
          Media Assets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#84A900] transition-colors group">
            <ImageIcon className="w-10 h-10 text-gray-300 mb-4 group-hover:text-[#84A900] transition-colors" />
            <h3 className="font-bold text-[#0A2E1F] mb-2">Brand Logos</h3>
            <p className="text-sm text-gray-500 mb-6">Vector SVG and high-res PNG formats of the official festival logo.</p>
            <button className="mt-auto flex items-center gap-2 text-sm font-bold text-[#0A2E1F] bg-gray-50 px-4 py-2 rounded-md group-hover:bg-[#F2F4EF] transition-colors">
              <Download className="w-4 h-4" /> Download .ZIP (12MB)
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#84A900] transition-colors group">
            <FileVideo className="w-10 h-10 text-gray-300 mb-4 group-hover:text-[#84A900] transition-colors" />
            <h3 className="font-bold text-[#0A2E1F] mb-2">B-Roll Footage</h3>
            <p className="text-sm text-gray-500 mb-6">High-quality 4K video clips of the exhibition floor and keynotes.</p>
            <button className="mt-auto flex items-center gap-2 text-sm font-bold text-[#0A2E1F] bg-gray-50 px-4 py-2 rounded-md group-hover:bg-[#F2F4EF] transition-colors">
              <Download className="w-4 h-4" /> Download .ZIP (1.2GB)
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#84A900] transition-colors group">
            <FileText className="w-10 h-10 text-gray-300 mb-4 group-hover:text-[#84A900] transition-colors" />
            <h3 className="font-bold text-[#0A2E1F] mb-2">Press Releases</h3>
            <p className="text-sm text-gray-500 mb-6">Archive of official statements, partnership announcements, and news.</p>
            <Link href="/updates" className="mt-auto flex items-center gap-2 text-sm font-bold text-[#0A2E1F] bg-gray-50 px-4 py-2 rounded-md group-hover:bg-[#F2F4EF] transition-colors">
              View Newsroom
            </Link>
          </div>
        </div>
      </section>

      {/* ── Press Contact ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-[#EBEBE8] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-[#0A2E1F] mb-2">Need something specific?</h2>
            <p className="text-gray-600">Our PR team is available for interview requests, media passes, and custom assets.</p>
          </div>
          <a href="mailto:press@fmcgfestival.com" className="shrink-0 flex items-center gap-3 bg-[#0A2E1F] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#062015] transition-colors">
            <Mail className="w-5 h-5" /> Contact Press Office
          </a>
        </div>
      </section>
    </main>
  );
}