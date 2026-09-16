import {
  AuditArea,
  Deliverable,
  Faq,
  NavLink,
  ProcessStep,
  Service,
} from "./types";

export const siteConfig = {
  name: "Dmytro Virych",
  role: "AI Adoption Audit for Small & Mid-Sized Business",
  shortRole: "AI Adoption Audit",
  email: "info@dmytrovirych.com",
  url: "https://dmytrovirych.com",
  // Where clients are served. Engagements run remotely, so this stays global —
  // change it to a country/city if you ever want to target local search.
  areaServed: "Worldwide (remote)",
  // Web3Forms access key — create a free one at https://web3forms.com and set it
  // as NEXT_PUBLIC_WEB3FORMS_KEY in your environment (e.g. Vercel project settings).
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  social: {
    x: "https://x.com/FounderDmytro",
    linkedin: "https://linkedin.com/in/damienissa",
    github: "https://github.com/damienissa",
  },
};

/**
 * The paid entry point. Everything on the page points here.
 * Change `price` in one place and it updates the copy, the schema.org
 * offer, and the OG image.
 */
export const call = {
  name: "AI Adoption Call",
  price: 500,
  currency: "USD",
  priceLabel: "$500",
  duration: "60 minutes",
  summary:
    "A paid, focused working session. We go through your workflows, find where AI is worth applying, and define the scope of your audit — so you know exactly what you would be buying before you buy it.",
  includes: [
    "A 60-minute working session — not a sales pitch",
    "A shortlist of the AI opportunities with real ROI in your business",
    "Straight answers on what is realistic for your size, data and budget",
    "A written scope and fixed price for the AI Adoption Audit",
    "Notes you can act on yourself, whether or not we continue",
  ],
};

/** The main engagement, scoped on the call above. */
export const audit = {
  name: "AI Adoption Audit",
  duration: "2 weeks",
  priceLabel: "Fixed fee, scoped on the call",
  summary:
    "A two-week engagement that tells you exactly where AI pays off in your business, what it costs to get there, and in what order to do it. You finish with a scored opportunity map and a 90-day roadmap your team can execute.",
};

export const navLinks: NavLink[] = [
  { label: "The audit", href: "#audit" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

/** What the audit examines — the inputs. */
export const auditAreas: AuditArea[] = [
  {
    title: "Workflows & time",
    description:
      "Where your team's hours actually go. I map the repetitive, high-volume work first, because that is where automation pays back fastest.",
  },
  {
    title: "Data & systems",
    description:
      "What data you hold, where it lives, and how good it is. Most failed AI projects fail here, not in the model.",
  },
  {
    title: "Tools & spend",
    description:
      "The stack you already pay for. Half the wins are features you own but never switched on — those cost nothing to capture.",
  },
  {
    title: "Team & skills",
    description:
      "Who will run this after I leave. A roadmap nobody can execute is a document, not a result.",
  },
  {
    title: "Risk & compliance",
    description:
      "What you can't put into a third-party model, and the guardrails you need before anything touches customer data.",
  },
  {
    title: "Cost of doing nothing",
    description:
      "The honest baseline. Some processes should be fixed or dropped, not automated — I will tell you when that is the case.",
  },
];

/** What the client walks away with — the outputs. */
export const deliverables: Deliverable[] = [
  {
    title: "Scored opportunity map",
    description:
      "Every AI opportunity in your business, ranked by impact against effort, so the argument about what to do first is already settled.",
  },
  {
    title: "ROI estimates per opportunity",
    description:
      "Hours saved, cost avoided, throughput gained — with the assumptions written down so you can challenge the numbers.",
  },
  {
    title: "Build-vs-buy recommendation",
    description:
      "For each priority: an off-the-shelf tool, a configuration of what you own, or custom work — with realistic budgets for each.",
  },
  {
    title: "90-day roadmap",
    description:
      "A sequenced plan with owners, dependencies and checkpoints. Written for your team, not for a boardroom slide.",
  },
  {
    title: "Risk & data guardrails",
    description:
      "What to put in policy before the first rollout: data handling, model choice, human review, and where to draw the line.",
  },
  {
    title: "Findings walkthrough",
    description:
      "A live session with you and your team to go through the report, argue with it, and agree the first move.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Adoption call",
    duration: "60 minutes",
    description:
      "The paid working session. We find the likely opportunities and agree the audit's scope and fixed price. You get value here even if we stop.",
  },
  {
    step: "02",
    title: "Discover",
    duration: "Week 1",
    description:
      "Interviews with the people doing the work, plus a review of your workflows, data and current tooling. I look at the real process, not the documented one.",
  },
  {
    step: "03",
    title: "Analyse",
    duration: "Week 2",
    description:
      "I score each opportunity on impact and effort, model the ROI, and pressure-test the shortlist against your data, budget and risk appetite.",
  },
  {
    step: "04",
    title: "Deliver",
    duration: "End of week 2",
    description:
      "You get the report, the scored opportunity map and the 90-day roadmap, walked through live with your team — plus a clear first move.",
  },
];

export const problems: string[] = [
  "Your team spends hours every week on work that software should already handle.",
  "Every vendor pitch sounds identical, and not one of them will promise a number.",
  "A previous AI initiative cost real money and quietly went nowhere.",
  "You have a shortlist of ideas but no honest way to rank them.",
  "Nobody internally has the time — or the mandate — to work this out properly.",
  "You need someone who has shipped working software, not someone who makes slides.",
];

export const goodFit: string[] = [
  "You run a business with roughly 10–250 people and real operational volume",
  "You are prepared to act on the findings within a quarter, not next year",
  "You can give me a few hours with the people who do the actual work",
  "You would rather hear “don't automate that” than be sold a project",
];

export const notFit: string[] = [
  "You want a document to justify a decision you have already made",
  "You are looking for the cheapest possible pair of hands to build a chatbot",
  "Nobody on your side owns the outcome once the audit is delivered",
  "You need a large-enterprise transformation programme with a PMO attached",
];

/** Delivery work that follows the audit, for clients who want it. */
export const services: Service[] = [
  {
    title: "AI Strategy & Advisory",
    tagline: "Stay on course after the roadmap lands.",
    description:
      "Some teams have the people to execute and just want a steady hand on the tiller. I stay involved on a light retainer — reviewing decisions, vetting vendors, and keeping the roadmap honest as things change.",
    outcomes: [
      "Ongoing review of the roadmap as priorities shift",
      "Vendor and tooling decisions pressure-tested before you commit",
      "Your team upskilled so the strategy outlives the engagement",
      "A second opinion on the bill before you pay it",
    ],
  },
  {
    title: "AI Automation for Operations",
    tagline: "Or I build the first wins myself.",
    description:
      "If you would rather not hire for it, I implement the top items on the roadmap — support triage, sales follow-ups, back-office data entry — wired into the tools you already use, measured against the numbers from the audit.",
    outcomes: [
      "The highest-ROI workflows automated end to end",
      "AI assistants and agents wired into your existing stack",
      "Measured against the audit's baseline, not against vibes",
      "Handover and documentation so your team can run it",
    ],
  },
];

/**
 * FAQ content is also emitted as FAQPage structured data and is the most
 * likely part of this page to be quoted by AI search engines — keep answers
 * self-contained, specific, and free of "as mentioned above".
 */
export const faqs: Faq[] = [
  {
    question: "What is an AI adoption audit?",
    answer:
      "An AI adoption audit is a structured review of a business's workflows, data, tooling and team to determine where artificial intelligence would deliver measurable return — and where it would not. My version runs two weeks and ends with a scored opportunity map, ROI estimates, build-vs-buy recommendations and a 90-day roadmap. It is diagnostic work: the output is a decision you can defend, not software.",
  },
  {
    question: "How much does the AI Adoption Audit cost?",
    answer:
      "It starts with a $500 AI Adoption Call — a paid 60-minute working session where we identify the likely opportunities and define the audit's scope. The audit itself is then quoted as a fixed fee based on that scope, so you approve a firm number before any work begins. Pricing the audit blind would mean padding it, and I would rather not.",
  },
  {
    question: "Why is the first call paid?",
    answer:
      "Because it is real work, not a sales call. In 60 minutes you get a shortlist of the AI opportunities worth pursuing in your business and straight answers about what is realistic at your size — notes you can act on yourself even if we never speak again. Charging $500 also means I spend the hour advising you rather than qualifying you.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Two weeks from kickoff to delivery. Week one is discovery — interviews with the people doing the work, plus a review of your workflows, data and tooling. Week two is analysis, ROI modelling and writing. You get the findings walkthrough at the end of week two.",
  },
  {
    question: "What do I actually receive at the end?",
    answer:
      "Six things: a scored map of every AI opportunity in your business ranked by impact against effort, ROI estimates with the assumptions written down, a build-vs-buy recommendation for each priority, a sequenced 90-day roadmap with owners, a set of risk and data guardrails, and a live walkthrough with your team.",
  },
  {
    question: "How much of my team's time does it take?",
    answer:
      "Roughly four to six hours in total, spread across week one. That is typically a kickoff with you, three to five short interviews with the people doing the work, and read-only access to the systems and numbers I need. The analysis in week two requires nothing from your side.",
  },
  {
    question: "Do I have to hire you to implement the findings?",
    answer:
      "No. The roadmap is written so your own team or any competent vendor can execute it, and clients regularly do exactly that. If you would rather I build the first wins, I offer implementation separately — but the audit is deliberately sold as a standalone engagement so the findings stay honest.",
  },
  {
    question: "What size of business is this for?",
    answer:
      "Small and mid-sized businesses, typically 10 to 250 people, with enough operational volume that repetitive work is a real cost. Below that, the answer is usually one or two off-the-shelf tools and I will tell you so on the call rather than sell you an audit.",
  },
  {
    question: "What if the audit concludes AI is not worth it for us?",
    answer:
      "Then that is the finding, and it is delivered plainly with the reasoning. Some processes should be simplified, fixed or dropped rather than automated. Knowing that before you spend six figures on a platform is the cheapest outcome the audit can produce.",
  },
  {
    question: "Who is Dmytro Virych?",
    answer:
      "I am an engineer who has spent over a decade designing, shipping and scaling software, including profitable products built solo from the first line of code to paying customers. I run AI adoption audits for small and mid-sized businesses. The reason I run them differently from most consultants is that I have had to make this kind of software actually work in production, and pay for itself.",
  },
];
