import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    name: "Redirectly",
    url: "https://redirectly.app",
    description:
      "Smart deferred deep links that convert clicks to installs.",
    logo: "/images/projects/redirectly.png",
    revenueSource: "paddle",
    revenueKey: "redirectly",
  },
  {
    name: "SafeOrbit",
    url: "https://safeorbit.app",
    description:
      "Protect your family in real time with location tracking & SOS.",
    logo: "/images/projects/safeorbit.svg",
    revenueSource: "revenuecat",
    revenueKey: "safeorbit",
  },
  {
    name: "Indie Hacker Finance",
    url: "https://indiehackerfinance.com",
    description: "The Finance OS indie hackers actually want.",
    logo: "/images/projects/ihf.svg",
    revenueSource: "none",
    revenueKey: "ihf",
  },
];
