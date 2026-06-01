import type { Metadata } from "next";
import type { ReactNode } from "react";
import { League_Spartan, Hanken_Grotesk } from "next/font/google";
import StickyNav from "@/components/layout/sticky-nav";
import "./globals.css";

const displayFont = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kinangh98.github.io"),
  title: "Ahmed Kinan Ghbash — Senior Front-End Developer",
  description:
    "Senior frontend engineer building multilingual, large-scale web platforms in React, Next.js, and TypeScript. Based in Aleppo, Syria.",
  authors: [{ name: "Ahmed Kinan Ghbash" }],
  creator: "Ahmed Kinan Ghbash",
  openGraph: {
    title: "Ahmed Kinan Ghbash — Senior Front-End Developer",
    description:
      "Multilingual web platforms in React, Next.js, TypeScript — government, enterprise, and SaaS.",
    url: "https://kinangh98.github.io",
    siteName: "Ahmed Kinan Ghbash",
    type: "website",
    images: [
      {
        url: "/images/open-graph-image.jpg",
        alt: "Ahmed Kinan Ghbash — Senior Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Kinan Ghbash — Senior Front-End Developer",
    description:
      "Multilingual web platforms in React, Next.js, TypeScript — government, enterprise, and SaaS.",
    images: ["/images/open-graph-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} bg-bg text-ink`}
    >
      <body className="bg-bg text-ink font-body antialiased text-body leading-[1.55] min-h-svh">
        <StickyNav />
        {children}
      </body>
    </html>
  );
}
