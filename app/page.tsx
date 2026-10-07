import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c"),
        }}
      />
      <SiteNav />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
