import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { AuditSection } from "@/components/audit-section";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { FitSection } from "@/components/fit-section";
import { AfterAuditSection } from "@/components/after-audit-section";
import { FaqSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Derived entirely from lib/site.ts — no user input reaches this.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData()),
        }}
      />
      <SiteNav />
      <main>
        <Hero />
        <ProblemSection />
        <AuditSection />
        <ProcessSection />
        <PricingSection />
        <FitSection />
        <AfterAuditSection />
        <FaqSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
