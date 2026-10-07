import { products, siteConfig } from "./site";

/**
 * A single JSON-LD @graph for the whole page, derived from lib/site.ts so the
 * markup can never drift from the copy.
 *
 * Covers: who I am (Person), the site (WebSite), and what I've built (an
 * ItemList of SoftwareApplication, each pointing at its own domain).
 */
export function buildStructuredData() {
  const personId = `${siteConfig.url}/#person`;
  const sameAs = [
    siteConfig.social.x,
    siteConfig.social.linkedin,
    siteConfig.social.github,
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/images/avatar.jpg`,
        jobTitle: "Indie hacker",
        description: `Independent maker of ${products.length} software products, mostly native macOS apps.`,
        email: `mailto:${siteConfig.email}`,
        knowsAbout: [
          "macOS app development",
          "Next.js",
          "Indie hacking",
          "Product design",
        ],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#products`,
        name: `Products by ${siteConfig.name}`,
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: p.name,
            url: p.url,
            description: p.description,
            applicationCategory: p.schemaCategory,
            operatingSystem: p.platform,
            image: `${siteConfig.url}${p.image}`,
            author: { "@id": personId },
          },
        })),
      },
    ],
  };
}
