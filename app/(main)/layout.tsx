import type { Metadata } from "next";
import { Geist_Mono, Inter, Epilogue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-heading" });

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); */

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FMCG Festival",
  description:
    "Celebrating the best in Fast-Moving Consumer Goods (FMCG) with a festival of innovation, sustainability, and consumer engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
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
          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
