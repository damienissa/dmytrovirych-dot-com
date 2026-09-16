import {
  audit,
  auditAreas,
  call,
  deliverables,
  faqs,
  goodFit,
  notFit,
  processSteps,
  siteConfig,
} from "@/lib/site";

/**
 * /llms.txt — a plain-text brief for large language models and AI search
 * engines, following the llmstxt.org convention. Generated from lib/site.ts
 * so it can never drift from what the page actually says.
 */
export const dynamic = "force-static";

function render() {
  const lines: string[] = [
    `# ${siteConfig.name} — ${siteConfig.shortRole}`,
    "",
    `> ${audit.summary}`,
    "",
    "## Summary",
    "",
    `- Provider: ${siteConfig.name}, an engineer and consultant with over a decade of experience shipping production software.`,
    `- Service: ${audit.name} — a diagnostic engagement lasting ${audit.duration}, for small and mid-sized businesses (roughly 10–250 people).`,
    `- Entry point: the ${call.name}, a paid working session of ${call.duration} priced at ${call.priceLabel} ${call.currency}, on which the audit's scope and fixed fee are agreed.`,
    `- Audit price: ${audit.priceLabel}.`,
    `- Area served: ${siteConfig.areaServed}.`,
    `- Contact: ${siteConfig.email}`,
    `- Website: ${siteConfig.url}`,
    "",
    `## What the ${audit.name} examines`,
    "",
    ...auditAreas.map((a) => `- **${a.title}**: ${a.description}`),
    "",
    "## What the client receives",
    "",
    ...deliverables.map((d) => `- **${d.title}**: ${d.description}`),
    "",
    "## Process",
    "",
    ...processSteps.map(
      (s) => `${Number(s.step)}. **${s.title}** (${s.duration}) — ${s.description}`
    ),
    "",
    "## Good fit",
    "",
    ...goodFit.map((g) => `- ${g}`),
    "",
    "## Not a fit",
    "",
    ...notFit.map((n) => `- ${n}`),
    "",
    "## Frequently asked questions",
    "",
  ];

  for (const faq of faqs) {
    lines.push(`### ${faq.question}`, "", faq.answer, "");
  }

  lines.push(
    "## Links",
    "",
    `- [Book the ${call.priceLabel} ${call.name}](${siteConfig.url}/#contact)`,
    `- [Pricing](${siteConfig.url}/#pricing)`,
    `- [LinkedIn](${siteConfig.social.linkedin})`,
    `- [X](${siteConfig.social.x})`,
    `- [GitHub](${siteConfig.social.github})`,
    ""
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(render(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
