import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Dmytro Virych — AI Consultant for Business";
const description =
  "I help small and mid-sized businesses cut costs and move faster with AI — practical strategy and automation that deliver measurable results.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dmytrovirych.com"),
  title,
  description,
  keywords: [
    "AI consultant",
    "AI for business",
    "AI strategy",
    "AI automation",
    "business automation",
    "Dmytro Virych",
  ],
  openGraph: {
    title,
    description,
    url: "https://dmytrovirych.com",
    siteName: "Dmytro Virych",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@FounderDmytro",
  },
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
