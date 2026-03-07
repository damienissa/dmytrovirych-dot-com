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

export const metadata: Metadata = {
  title: "Dmytro Virych — Indiehacker & Builder",
  description:
    "Engineer turned builder. I ship profitable products solo, from Ukraine.",
  openGraph: {
    title: "Dmytro Virych — Indiehacker & Builder",
    description:
      "Engineer turned builder. I ship profitable products solo, from Ukraine.",
    url: "https://dmytrovirych.com",
    siteName: "Dmytro Virych",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmytro Virych — Indiehacker & Builder",
    description:
      "Engineer turned builder. I ship profitable products solo, from Ukraine.",
    creator: "@FounderDmytro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f5f1eb]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
