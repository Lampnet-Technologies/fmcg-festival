import Link from "next/link";
import { BsFacebook, BsLinkedin, BsX } from "react-icons/bs";
import { EVENT_DETAILS } from "@/lib/event";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section: Branding & Description */}
        <div className="max-w-sm">
          <h2 className="text-xl font-bold text-[#0A2E1F] mb-4">
            FMCG Festival
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            © {EVENT_DETAILS.year} FMCG Festival. High-performance FMCG excellence.
            Leading the global conversation on consumer goods innovation
            and supply chain resilience.
          </p>
          <div className="flex items-center space-x-4 text-[#0A2E1F]">
            <BsLinkedin className="w-5 h-5 cursor-pointer transition-colors" />
            <BsFacebook className="w-5 h-5 cursor-pointer transition-colors" />
            <BsX className="w-5 h-5 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Right Section: Links Columns */}
        <div className="flex gap-16 md:gap-24">
          {/* Company Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E1F]">
              Event Info
            </h3>
            <Link
              href="/exhibitors"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Exhibition Details
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Why Exhibit
            </Link>
            <Link
              href="/visitor-profile"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Visitor Profile
            </Link>
            <Link
              href="/exhibitors"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Event Board
            </Link>
          </div>

          {/* Support Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E1F]">
              Corporate
            </h3>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              About Organizer
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/partner"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Partner Login
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Legal Column */}
          {/* <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E1F]">
              Legal
            </h3>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Terms of Service
            </Link>
            <Link
              href="/press"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Press Kit
            </Link>
          </div> */}
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© {EVENT_DETAILS.year} FMCG Festival. Organized by {EVENT_DETAILS.organizer}.</p>
      </div>
    </footer>
  );
}
