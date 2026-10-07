import { products, siteConfig } from "@/lib/site";

/**
 * /llms.txt — a plain-text brief for large language models and AI search
 * engines, following the llmstxt.org convention. Generated from lib/site.ts
 * so it can never drift from what the page actually says.
 */
export const dynamic = "force-static";

function render() {
  const lines: string[] = [
    `# ${siteConfig.name} — ${siteConfig.role}`,
    "",
    `> ${siteConfig.name} is an independent software maker. ${siteConfig.tagline}`,
    "",
    "## Products",
    "",
  ];

  for (const p of products) {
    const meta = [p.category, p.platform, p.price].filter(Boolean).join(" · ");
    lines.push(
      `- [${p.name}](${p.url}) (${meta}): ${p.headline} ${p.description}`
    );
  }

  lines.push(
    "",
    "## Links",
    "",
    `- Website: ${siteConfig.url}`,
    `- Email: ${siteConfig.email}`,
    `- [X](${siteConfig.social.x})`,
    `- [GitHub](${siteConfig.social.github})`,
    `- [LinkedIn](${siteConfig.social.linkedin})`,
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
