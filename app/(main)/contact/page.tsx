import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Globe,
  Ticket,
  Building2
} from "lucide-react";
import { EVENT_DETAILS } from "@/lib/event";

const DIRECTORY = [
  {
    icon: Building2,
    department: "Exhibitor & Sponsor Support",
    description: "For questions regarding booth logistics, floor plans, and sponsorship deliverables.",
    email: "exhibitors@thefmcgfestival.com",
    phone: "+234 702 500 1143",
  },
  {
    icon: Ticket,
    department: "Ticketing & Registration",
    description: "Need help upgrading your pass, group bookings, or invoice inquiries?",
    email: "register@thefmcgfestival.com",
    phone: "+234 702 500 1143",
  },
  {
    icon: Globe,
    department: "Press & Media",
    description: "For press accreditation, interview requests, and media kit access.",
    email: "press@thefmcgfestival.com",
    phone: "+234 702 500 1143",
  },
  {
    icon: Mail,
    department: "General Inquiries",
    description: "Can't find what you're looking for? Reach out to our central helpdesk.",
    email: "info@thefmcgfestival.com",
    phone: "+234 702 500 1143",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#FAFAFA] pb-20">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative bg-[#0A2E1F] pt-24 pb-32 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(197,250,0,0.1),transparent_50%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#C5FA00] text-xs font-black uppercase tracking-[0.2em] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            We&apos;re Here to Help.
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are preparing to showcase your brand to thousands or planning your visit, our dedicated teams are ready to assist you.
          </p>
        </div>
      </section>

      {/* ── Contact Directory Grid ───────────────────────────── */}
      <section className="px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIRECTORY.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-[#F2F4EF] rounded-lg flex items-center justify-center text-[#0A2E1F] mb-6">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-black text-[#0A2E1F] mb-3">
                  {contact.department}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                  {contact.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-sm font-bold text-[#0A2E1F] hover:text-[#84A900] transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-[#84A900] transition-colors" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-3 text-sm font-bold text-[#0A2E1F] hover:text-[#84A900] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#84A900] transition-colors" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Venue & HQ Section ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">

          {/* Left Info */}
          <div className="p-10 md:p-14 lg:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#84A900] mb-3">
              Event Venue
            </span>
            <h2 className="text-3xl font-black text-[#0A2E1F] mb-6">
              Festival Headquarters
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The {EVENT_DETAILS.year} FMCG Festival will be hosted at the premier {EVENT_DETAILS.venue}, situated in the heart of Victoria Island, Lagos. Please note that access to the exhibition floor requires prior registration.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0A2E1F] shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A2E1F] mb-1">Location</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Oriental Hotel & Casino<br />
                    6-8 Ahmadu Bello Way<br />
                    Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0A2E1F] shrink-0">
                  <Clock className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A2E1F] mb-1">Event Hours</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {EVENT_DETAILS.displayDate}<br />
                    Daily: 09:00 AM - 06:00 PM (WAT)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <Link
                href="/exhibitors#directory"
                className="inline-flex items-center text-sm font-black text-[#0A2E1F] hover:text-[#84A900] transition-colors group"
              >
                View Floor Plan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Map Image Placeholder */}
          <div className="relative lg:w-1/2 h-80 lg:h-auto bg-gray-100">
            {/* Replace this with an actual image of a map, the venue, or a Google Maps embed */}
            <Image
              src="/exhibitor2.png" // Placeholder image - replace with actual map or venue photo
              alt="Oriental Hotel Map"
              fill
              className="object-cover opacity-80 mix-blend-multiply"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Visual map pin overlay just for design flair */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center animate-bounce">
                <MapPin className="w-8 h-8 text-[#84A900]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Quick Link ───────────────────────────────────── */}
      <section className="px-6 pb-10">
        <div className="max-w-4xl mx-auto text-center bg-[#F2F4EF] rounded-2xl p-10 border border-[#EBEBE8]">
          <h2 className="text-xl font-black text-[#0A2E1F] mb-3">Looking for quick answers?</h2>
          <p className="text-sm text-gray-500 mb-6">
            Check out our comprehensive FAQ section for details on badges, hotel discounts, and event policies.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#0A2E1F] px-6 py-3 rounded-sm text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Read FAQs
          </Link>
        </div>
      </section>

    </main>
  );
}
