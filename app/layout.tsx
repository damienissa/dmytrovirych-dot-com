import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { call, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Front-loads the primary keyword ("AI Adoption Audit") and stays inside the
// ~60-char limit Google renders before truncating.
const title = "AI Adoption Audit | Dmytro Virych";
const description =
  "A two-week AI adoption audit for small and mid-sized businesses: a scored map of every AI opportunity you have, ROI estimates for each, and a 90-day roadmap. Starts with a " +
  call.priceLabel +
  " call.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Business consulting",
  keywords: [
    "AI adoption audit",
    "AI audit",
    "AI readiness assessment",
    "AI consultant for small business",
    "AI opportunity assessment",
    "AI strategy consultant",
    "AI ROI analysis",
    "business process automation consultant",
    "AI roadmap",
    "Dmytro Virych",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.shortRole}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@FounderDmytro",
    site: "@FounderDmytro",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#121311",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
