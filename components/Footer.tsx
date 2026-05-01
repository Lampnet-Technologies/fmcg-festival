import Link from "next/link";
import { Globe, Mail, Link as LinkIcon } from "lucide-react";

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
            Connecting the most innovative minds in the Fast-Moving Consumer
            Goods sector. High-performance FMCG excellence. The definitive
            gathering for the global consumer goods industry.
          </p>
          <div className="flex items-center space-x-4 text-gray-400">
            <Globe className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <LinkIcon className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
          </div>
        </div>

        {/* Right Section: Links Columns */}
        <div className="flex gap-16 md:gap-24">
          {/* Company Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E1F]">
              Company
            </h3>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/sponsorship"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Sponsors
            </Link>
          </div>

          {/* Support Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E1F]">
              Support
            </h3>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col space-y-4">
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
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 FMCG Festival. Organized by MABA.</p>
      </div>
    </footer>
  );
}
