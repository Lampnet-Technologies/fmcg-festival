"use client";

import { useState } from "react";
import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Menu, X, ChevronDown } from "lucide-react";

// 1. Refactored Data Structure: Support for standard links and dropdown menus
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sponsorship", href: "/sponsorship" },
  {
    label: "Discover",
    subLinks: [
      { label: "Event Line Up", href: "/line-up" },
      { label: "Exhibitor Profile", href: "/exhibitors" },
      { label: "Visitor Profile", href: "/visitor-profile" },
    ],
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State specifically for the mobile dropdown accordion
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Helper to cleanly close the menu when routing
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

        {/* ── Logo (Size Reduced & Spacing Tightened) ── */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-black text-[#0A2E1F] tracking-tight shrink-0 flex items-center gap-2"
        >
          FMCG FESTIVAL
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-600 h-full">
          {NAV_ITEMS.map((item) => {
            // Render Dropdown for items with subLinks
            if (item.subLinks) {
              return (
                <div key={item.label} className="relative group h-full flex items-center">
                  <button className="flex items-center gap-1 hover:text-[#0A2E1F] transition-colors py-2">
                    {item.label}
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#0A2E1F] transition-transform group-hover:-rotate-180 duration-300" />
                  </button>

                  {/* Dropdown Box (Invisible bridge + visible panel) */}
                  <div className="absolute top-20 left-0 w-56 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden py-2 flex flex-col relative top-2.5">
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          className="px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#0A2E1F] hover:bg-gray-50 transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Render Standard Links
            return (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#0A2E1F] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop Auth Actions ── */}
        <div className="hidden lg:flex items-center space-x-6">
          <Show when="signed-out">
            <SignInButton>
              <button className="text-sm font-bold text-gray-600 hover:text-[#0A2E1F] transition-colors">
                Login
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Link
            href="/register"
            className="bg-[#C5FA00] text-[#0A2E1F] px-6 py-2.5 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors shadow-sm"
          >
            Register Now
          </Link>
        </div>

        {/* ── Mobile Header Controls ── */}
        <div className="flex lg:hidden items-center gap-4">
          <Show when="signed-in">
            <UserButton />
          </Show>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0A2E1F] p-2 -mr-2 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col z-50">
          <div className="flex flex-col px-6 py-8 space-y-2">

            {/* Mobile Links mapping */}
            {NAV_ITEMS.map((item) => {
              if (item.subLinks) {
                return (
                  <div key={item.label} className="flex flex-col border-b border-gray-50 pb-2">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="flex items-center justify-between w-full py-4 text-xl font-bold text-[#0A2E1F]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? "-rotate-180 text-[#84A900]" : "text-gray-400"
                          }`}
                      />
                    </button>

                    {/* Mobile Accordion Content */}
                    <div
                      className={`flex flex-col space-y-4 overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? "max-h-75 mb-4 mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={closeMenu}
                          className="pl-4 text-lg font-medium text-gray-600 hover:text-[#84A900]"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-4 border-b border-gray-50 text-xl font-bold text-[#0A2E1F] hover:text-[#84A900] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-6">
              {/* Mobile Auth Actions */}
              <Show when="signed-out">
                <div className="flex flex-col space-y-5 mb-6">
                  <SignInButton>
                    <button onClick={closeMenu} className="text-lg font-bold text-gray-600 text-left">
                      Login
                    </button>
                  </SignInButton>
                </div>
              </Show>

              {/* Mobile Register Button */}
              <Link
                href="/register"
                onClick={closeMenu}
                className="bg-[#0A2E1F] text-[#C5FA00] px-6 py-4 rounded-sm text-center text-lg font-black hover:bg-[#062015] transition-colors w-full inline-block shadow-md"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}