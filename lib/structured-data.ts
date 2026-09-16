import { audit, call, deliverables, faqs, siteConfig } from "./site";

/**
 * A single JSON-LD @graph for the whole page. Kept in one place so the
 * markup can never drift from the copy — every value here is derived from
 * lib/site.ts.
 *
 * Covers: who I am (Person), what the business is (ProfessionalService),
 * what I sell (Service + Offer, with the $500 call priced explicitly), and
 * the FAQ (FAQPage) — which is the part AI search engines quote most.
 */
export function buildStructuredData() {
  const personId = `${siteConfig.url}/#person`;
  const businessId = `${siteConfig.url}/#business`;
  const serviceId = `${siteConfig.url}/#ai-adoption-audit`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/images/avatar.jpg`,
        jobTitle: "AI Adoption Consultant",
        description:
          "Engineer and consultant who runs AI adoption audits for small and mid-sized businesses, identifying where artificial intelligence delivers measurable return.",
        email: `mailto:${siteConfig.email}`,
        knowsAbout: [
          "AI adoption",
          "AI adoption audit",
          "AI strategy",
          "Business process automation",
          "Return on investment analysis",
          "Artificial intelligence consulting",
          "Workflow automation",
          "Build versus buy analysis",
        ],
        sameAs: [
          siteConfig.social.x,
          siteConfig.social.linkedin,
          siteConfig.social.github,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: `${siteConfig.name} — ${siteConfig.shortRole}`,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        description:
          "AI adoption audits for small and mid-sized businesses. A two-week engagement producing a scored opportunity map, ROI estimates and a 90-day roadmap.",
        founder: { "@id": personId },
        email: `mailto:${siteConfig.email}`,
        areaServed: { "@type": "Place", name: siteConfig.areaServed },
        priceRange: `From ${call.priceLabel}`,
        knowsLanguage: ["en"],
        sameAs: [
          siteConfig.social.x,
          siteConfig.social.linkedin,
          siteConfig.social.github,
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: audit.name,
        serviceType: "AI adoption audit",
        category: "Business consulting",
        provider: { "@id": businessId },
        areaServed: { "@type": "Place", name: siteConfig.areaServed },
        description: audit.summary,
        termsOfService: `${siteConfig.url}/#pricing`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI adoption engagements",
          itemListElement: [
            {
              "@type": "Offer",
              name: call.name,
              description: call.summary,
              price: String(call.price),
              priceCurrency: call.currency,
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/#pricing`,
              category: "Paid consultation",
            },
            {
              "@type": "Offer",
              name: audit.name,
              description: `${audit.duration} engagement. ${audit.priceLabel}.`,
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/#pricing`,
              category: "Consulting engagement",
            },
          ],
        },
        serviceOutput: deliverables.map((d) => ({
          "@type": "Thing",
          name: d.title,
          description: d.description,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.shortRole}`,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };
}
