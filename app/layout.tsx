import type {Metadata} from "next";
import type {ReactNode} from "react";
import localFont from "next/font/local";
import StickyNav from "@/components/layout/sticky-nav";
import Cursor from "@/components/layout/cursor";
import "./globals.css";

// Self-hosted (Latin subset, variable weight) instead of next/font/google: Google Fonts now
// sometimes returns extension-less `/l/font?kit=` URLs, which crash the Next 15 font loader
// at build time ("Cannot read properties of null (reading '1')").
const displayFont = localFont({
    src: './fonts/league-spartan-latin.woff2',
    variable: '--font-display',
    weight: '700 900',
    display: 'swap',
});

const bodyFont = localFont({
    src: './fonts/hanken-grotesk-latin.woff2',
    variable: '--font-body',
    weight: '400 600',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://kinangh98.github.io'),
    title: 'Ahmed Kinan Ghbash — Senior Front-End Developer',
    description:
        'Senior frontend engineer building multilingual, large-scale web platforms in React, Next.js, and TypeScript. Based in Aleppo, Syria.',
    authors: [{name: 'Ahmed Kinan Ghbash'}],
    creator: 'Ahmed Kinan Ghbash',
    openGraph: {
        title: 'Ahmed Kinan Ghbash — Senior Front-End Developer',
        description:
            'Multilingual web platforms in React, Next.js, TypeScript — government, enterprise, and SaaS.',
        url: 'https://kinangh98.github.io',
        siteName: 'Ahmed Kinan Ghbash',
        type: 'website',
        images: [
            {
                url: '/images/open-graph-image.jpg',
                alt: 'Ahmed Kinan Ghbash — Senior Front-End Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ahmed Kinan Ghbash — Senior Front-End Developer',
        description:
            'Multilingual web platforms in React, Next.js, TypeScript — government, enterprise, and SaaS.',
        images: ['/images/open-graph-image.jpg'],
    },
    robots: {index: true, follow: true},
};

export default function RootLayout({children}: {children: ReactNode})
{
    return (
        <html
            lang="en"
            className={`${displayFont.variable} ${bodyFont.variable} bg-bg text-ink`}
        >
            <body className="bg-bg text-ink font-body antialiased text-body leading-[1.55] min-h-svh">
                <Cursor/>
                <StickyNav/>
                {children}
            </body>
        </html>
    );
}
