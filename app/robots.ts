import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * AI answer engines are a real referral channel for a service like this, so
 * they get named explicitly rather than left to the wildcard. Two of these
 * matter beyond documentation: Google-Extended and Applebot-Extended are
 * opt-outs by convention — naming them with `allow` states the intent that
 * this content may be used for AI grounding and answers.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
