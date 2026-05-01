"use client";

import { useState } from "react";
import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

// 1. DRY Principle: Extract links to a constant array for cleaner mapping
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Exhibitors", href: "/exhibitors" },
  { label: "Line Up", href: "/line-up" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Visitor", href: "/visitor-profile" },
];

export function Navbar() {
  // 2. State to handle the mobile drawer
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to close the menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* 3. Replaced mx-14 with max-w-7xl mx-auto for proper fluid scaling */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black text-[#0A2E1F] tracking-tight shrink-0"
        >
          FMCG FESTIVAL
        </Link>

        {/* ── Desktop Navigation (Hidden on Mobile/Tablet) ── */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#0A2E1F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop Auth Actions (Hidden on Mobile/Tablet) ── */}
        <div className="hidden lg:flex items-center space-x-6">
          <Show when="signed-out">
            <SignInButton>
              <button className="text-sm font-bold text-gray-600 hover:text-[#0A2E1F] transition-colors">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-sm font-bold text-gray-600 hover:text-[#0A2E1F] transition-colors">
                Signup
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            {/* Fixed for Clerk v5 compatibility */}
            <UserButton />
          </Show>
          <Link
            href="/register"
            className="bg-[#C5FA00] text-[#0A2E1F] px-6 py-2.5 rounded-sm text-sm font-black hover:bg-[#b0df00] transition-colors"
          >
            Register Now
          </Link>
        </div>

        {/* ── Mobile Header Controls ── */}
        <div className="flex lg:hidden items-center gap-4">
          {/* We keep the User avatar visible on the mobile header for quick access */}
          <Show when="signed-in">
            {/* Fixed for Clerk v5 compatibility */}
            <UserButton />
          </Show>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0A2E1F] p-2 -mr-2 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay/Drawer ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col z-50">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {/* Mobile Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-xl font-bold text-[#0A2E1F] hover:text-[#84A900] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-gray-100 w-full my-4" />

            {/* Mobile Auth Actions */}
            <Show when="signed-out">
              <div className="flex flex-col space-y-5 mb-4">
                <SignInButton>
                  <button
                    onClick={closeMenu}
                    className="text-lg font-bold text-gray-600 text-left"
                  >
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button
                    onClick={closeMenu}
                    className="text-lg font-bold text-gray-600 text-left"
                  >
                    Signup
                  </button>
                </SignUpButton>
              </div>
            </Show>

            {/* Mobile Register Button */}
            <Link
              href="/register"
              onClick={closeMenu}
              className="bg-[#0A2E1F] text-[#C5FA00] px-6 py-4 rounded-sm text-center text-lg font-black hover:bg-[#062015] transition-colors w-full"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
