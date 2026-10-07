export const siteConfig = {
  name: "Dmytro Virych",
  role: "Indie hacker",
  tagline: "I build small, sharp software — mostly for the Mac.",
  email: "info@dmytrovirych.com",
  url: "https://dmytrovirych.com",
  social: {
    x: "https://x.com/FounderDmytro",
    linkedin: "https://linkedin.com/in/damienissa",
    github: "https://github.com/damienissa",
  },
};

export type Product = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  /** The one-line promise, set large on the card. */
  headline: string;
  description: string;
  category: string;
  platform: string;
  /** Shown as-is; leave undefined when the site doesn't state a price. */
  price?: string;
  /** Files in public/products/. The image is the product's own OG card. */
  image: string;
  icon: string;
  /** schema.org SoftwareApplication category. */
  schemaCategory: string;
};

/**
 * Every product on the page. Order is display order. The copy is lifted from
 * each product's own site so the two never disagree for long.
 */
export const products: Product[] = [
  {
    slug: "envly",
    name: "Envly",
    domain: "envly.app",
    url: "https://envly.app",
    headline: "The app your .env files deserve.",
    description:
      "See, edit and switch environments across every project in one window — a structured editor instead of raw text, with dev, staging and prod as tabs. Your secrets never leave your Mac.",
    category: "Developer tool",
    platform: "macOS",
    price: "$14 once",
    image: "/products/envly.webp",
    icon: "/products/envly-icon.svg",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "localdock",
    name: "Localdock",
    domain: "localdock.dev",
    url: "https://www.localdock.dev",
    headline: "Point at the bug. Your agent fixes it.",
    description:
      "Tap a bug on your localhost project from your phone or any browser, and it lands on your Mac for Claude Code or Codex to fix.",
    category: "Developer tool",
    platform: "macOS",
    price: "$19 once",
    image: "/products/localdock.webp",
    icon: "/products/localdock-icon.png",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "goalrings",
    name: "Goal Rings",
    domain: "goalrings.app",
    url: "https://goalrings.app",
    headline: "Any metric, as an always-visible ring.",
    description:
      "Revenue, visitors, words written — paced against the clock on the edge of your screen. Daily, weekly and monthly goals, and confetti when a ring closes.",
    category: "Productivity",
    platform: "macOS",
    image: "/products/goalrings.webp",
    icon: "/products/goalrings-icon.svg",
    schemaCategory: "BusinessApplication",
  },
  {
    slug: "macmemory",
    name: "MacMemory",
    domain: "macmemory.app",
    url: "https://macmemory.app",
    headline: "See what’s eating your Mac’s storage.",
    description:
      "System Data is the grey block in your storage bar. MacMemory shows what is inside it in plain words, and frees up only what you choose.",
    category: "Utility",
    platform: "macOS",
    price: "One payment",
    image: "/products/macmemory.webp",
    icon: "/products/macmemory-icon.png",
    schemaCategory: "UtilitiesApplication",
  },
  {
    slug: "buildmac",
    name: "Build Mac App",
    domain: "buildmac.app",
    url: "https://buildmac.app",
    headline: "Sell your Mac app. Skip the plumbing.",
    description:
      "The template behind my own apps: licensing, notarization, Sparkle auto-updates, Creem or Polar payments, and a Next.js site that sells it. Built for AI agents.",
    category: "Template",
    platform: "macOS + Next.js",
    image: "/products/buildmac.webp",
    icon: "/products/buildmac-icon.png",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "redirectly",
    name: "Redirectly",
    domain: "redirectly.app",
    url: "https://redirectly.app",
    headline: "See which campaigns actually drive installs.",
    description:
      "Deep linking and install attribution for mobile apps. Track every click, install and conversion by campaign, channel, device and country.",
    category: "SaaS",
    platform: "iOS + Android",
    price: "From $49/mo",
    image: "/products/redirectly.webp",
    icon: "/products/redirectly-icon.png",
    schemaCategory: "DeveloperApplication",
  },
];

export const macAppCount = products.filter((p) =>
  p.platform.startsWith("macOS")
).length;
