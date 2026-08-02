import Link from "next/link";
import { EVENT_DETAILS } from "@/lib/event";
import { getMarketingUrl } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    label: "X (formerly Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" className="h-3.5 w-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

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
          <div className="flex items-center gap-3 text-[#12865E]" aria-label="Social links">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#12865E]/20 bg-[#12865E]/10 text-[#12865E] transition-colors hover:bg-[#12865E] hover:text-white"
              >
                {social.icon}
              </Link>
            ))}
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
              href={getMarketingUrl("/exhibitors")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Exhibition Details
            </Link>
            <Link
              href={getMarketingUrl("/updates")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Blog
            </Link>
            <Link
              href={getMarketingUrl("/visitor-profile")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Visitor Profile
            </Link>
            <Link
              href={getMarketingUrl("/line-up")}
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
              href={getMarketingUrl("/about")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              About Organizer
            </Link>
            <Link
              href={getMarketingUrl("/privacy")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href={getMarketingUrl("/partner")}
              className="text-sm text-gray-500 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300 transition-all"
            >
              Partner Login
            </Link>
            <Link
              href={getMarketingUrl("/contact")}
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
