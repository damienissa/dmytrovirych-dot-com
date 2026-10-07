export const siteConfig = {
  name: "Dmytro Virych",
  tagline: "Indie hacker, building apps for Mac",
  email: "info@dmytrovirych.com",
  url: "https://dmytrovirych.com",
  social: {
    x: "https://x.com/FounderDmytro",
    github: "https://github.com/damienissa",
    linkedin: "https://linkedin.com/in/damienissa",
  },
};

export type Product = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  /** The product site's own <title>, set large on the card. */
  title: string;
  /** The product site's own meta description. */
  description: string;
  platform: string;
  /** Files in public/products/. The image is the product's own OG card. */
  image: string;
  icon: string;
  /** schema.org SoftwareApplication category. */
  schemaCategory: string;
};

/**
 * Every product on the page, in display order. Titles and descriptions are
 * copied from each product's own site so the two say the same thing.
 */
export const products: Product[] = [
  {
    slug: "envly",
    name: "Envly",
    domain: "envly.app",
    url: "https://envly.app",
    title: "Envly — The app your .env files deserve",
    description:
      "A native Mac app for your .env files. See, edit, and switch environments across every project in one window — dev, staging and prod as tabs. Your secrets stay on your Mac.",
    platform: "macOS",
    image: "/products/envly.webp",
    icon: "/products/envly-icon.svg",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "localdock",
    name: "Localdock",
    domain: "localdock.dev",
    url: "https://www.localdock.dev",
    title: "Localdock — Tap a bug on localhost, your AI agent fixes it",
    description:
      "Tap a bug on your localhost project from your phone or any browser, and it lands on your Mac for Claude Code or Codex to fix. $19 one-time.",
    platform: "macOS",
    image: "/products/localdock.webp",
    icon: "/products/localdock-icon.png",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "goalrings",
    name: "Goal Rings",
    domain: "goalrings.app",
    url: "https://goalrings.app",
    title: "Goal Rings — Any metric as a goal ring on your Mac",
    description:
      "Turn revenue, visitors, words written — any metric — into always-visible goal rings on the edge of your Mac's screen, with a pace tick and celebrations when a ring closes.",
    platform: "macOS",
    image: "/products/goalrings.webp",
    icon: "/products/goalrings-icon.svg",
    schemaCategory: "BusinessApplication",
  },
  {
    slug: "buildmac",
    name: "Build Mac App",
    domain: "buildmac.app",
    url: "https://buildmac.app",
    title: "Build Mac App — The template for selling paid macOS apps",
    description:
      "A Mac app template with licensing, notarization, Sparkle auto-updates, Creem or Polar payments and a Next.js site that sells it. Built for AI agents.",
    platform: "macOS",
    image: "/products/buildmac.webp",
    icon: "/products/buildmac-icon.png",
    schemaCategory: "DeveloperApplication",
  },
  {
    slug: "macmemory",
    name: "MacMemory",
    domain: "macmemory.app",
    url: "https://macmemory.app",
    title: "MacMemory — See what's eating your Mac's storage",
    description:
      "System Data is the grey block in your Mac's storage bar. See what is inside it in plain words and free up what you choose. One payment, no subscription.",
    platform: "macOS",
    image: "/products/macmemory.webp",
    icon: "/products/macmemory-icon.png",
    schemaCategory: "UtilitiesApplication",
  },
  {
    slug: "redirectly",
    name: "Redirectly",
    domain: "redirectly.app",
    url: "https://redirectly.app",
    title: "Redirectly — Deep Links & Install Attribution",
    description:
      "Deep linking and install attribution for mobile apps. See which campaigns drive installs — track clicks, installs, and conversions by source.",
    platform: "iOS, Android",
    image: "/products/redirectly.webp",
    icon: "/products/redirectly-icon.png",
    schemaCategory: "DeveloperApplication",
  },
];
