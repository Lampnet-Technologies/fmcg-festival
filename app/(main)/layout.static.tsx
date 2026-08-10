import type { Metadata } from "next";
import { Geist_Mono, Inter, Epilogue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EVENT_DETAILS } from "@/lib/event";
import SanityNotice from "@/components/SanityNotice";

// Static-export build of the root layout: no ClerkProvider. Importing
// @clerk/nextjs here (even unused) taints every page with a server action
// reference, which `output: "export"` rejects outright.

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-heading" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(EVENT_DETAILS.baseUrl),
  title: {
    default: "FMCG Festival 2026",
    template: "%s | FMCG Festival",
  },
  description:
    "Join FMCG Festival 2026 in Lagos for consumer goods innovation, exhibitions, sponsorship opportunities, and industry networking.",
  keywords: [
    "FMCG Festival",
    "FMCG event Lagos",
    "consumer goods exhibition",
    "FMCG sponsorship",
    "Lagos trade show",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FMCG Festival 2026",
    description:
      "A global platform connecting the FMCG value chain across manufacturing, packaging, distribution, retail, technology, and investment.",
    url: EVENT_DETAILS.baseUrl,
    siteName: "FMCG Festival",
    images: [
      {
        url: "/homepage-main-hero.png",
        width: 1200,
        height: 630,
        alt: "FMCG Festival exhibition floor",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Festival 2026",
    description:
      "Register, exhibit, or sponsor at FMCG Festival 2026 in Lagos.",
    images: ["/homepage-main-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        inter.variable,
        epilogue.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SanityNotice />
        {children}

        <Footer />
      </body>
    </html>
  );
}
