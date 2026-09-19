import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/profile";
import { getPersonJsonLd } from "@/lib/metadata";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F0E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s · Abhijeet Kumar",
    default: "Abhijeet Kumar — Product Builder",
  },
  description:
    "Product builder at IIT Kharagpur building systems that survive contact with real operations, users, and unit economics. Ground truth case studies across Snabbit, Aequitas, Frost & Sullivan, and India Accelerator.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abhijeetkumar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhijeet Kumar — Product Builder",
    description:
      "Building products that survive contact with real operations, users, and unit economics.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://abhijeetkumar.dev",
    siteName: "Abhijeet Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Kumar — Product Builder",
    description:
      "Building products that survive contact with real operations, users, and unit economics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F3F0E8] text-[#1D1D1B] font-sans">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#1D1D1B] text-[#FAF8F2] font-mono text-xs rounded border border-[#C8C3B8]"
        >
          Skip to main content
        </a>

        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
