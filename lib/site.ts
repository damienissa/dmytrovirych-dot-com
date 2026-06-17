import { NavLink, ProcessStep, Service } from "./types";

export const siteConfig = {
  name: "Dmytro Virych",
  role: "AI Consultant for Business",
  email: "info@dmytrovirych.com",
  url: "https://dmytrovirych.com",
  // Web3Forms access key — create a free one at https://web3forms.com and set it
  // as NEXT_PUBLIC_WEB3FORMS_KEY in your environment (e.g. Vercel project settings).
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  social: {
    x: "https://x.com/FounderDmytro",
    linkedin: "https://linkedin.com/in/damienissa",
    github: "https://github.com/damienissa",
  },
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "AI Strategy & Advisory",
    tagline: "Know exactly where AI pays off — and where it doesn't.",
    description:
      "Most teams are told to “use AI” without a plan. I help you cut through the hype, find the opportunities with real ROI, and build a roadmap your team can actually execute.",
    outcomes: [
      "A prioritized map of AI opportunities scored by impact and effort",
      "Build-vs-buy guidance and a realistic, budgeted roadmap",
      "Risk, data, and compliance guardrails set before you spend",
      "Your team upskilled so the strategy outlives the engagement",
    ],
  },
  {
    title: "AI Automation for Operations",
    tagline: "Hand the repetitive work to AI and free your team to do more.",
    description:
      "From customer support to sales follow-ups to back-office data entry, I design and ship automations that run quietly in the background — measured, reliable, and tied to a clear cost saving.",
    outcomes: [
      "Manual, repetitive workflows automated end to end",
      "AI assistants and agents wired into the tools you already use",
      "Faster response times and fewer dropped balls",
      "Hours given back to your team every single week",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Assess",
    description:
      "We map your workflows and data to find where AI delivers the highest return — no guesswork, no hype.",
  },
  {
    step: "02",
    title: "Pilot",
    description:
      "I build a focused proof of concept on a real use case so you see value fast, before committing to scale.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We roll the solution into production, integrated with your existing tools and trained on your data.",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "We track the numbers that matter — time saved, cost cut, throughput gained — and iterate from there.",
  },
];

export const problems: string[] = [
  "Your team spends hours on repetitive work that software should handle.",
  "You know AI matters, but every vendor pitch sounds the same — and none promise a number.",
  "Past “AI initiatives” cost a lot and quietly went nowhere.",
  "You need someone who has actually shipped working software, not just slides.",
];
