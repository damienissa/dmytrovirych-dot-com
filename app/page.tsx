import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { AuditSection } from "@/components/audit-section";
import { ProcessSection } from "@/components/process-section";
import { PhotoBand } from "@/components/photo-band";
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
        {/* A breath before the money conversation. Add more bands here as
            further photography comes in. */}
        <PhotoBand
          src="/images/mountain-desk.jpg"
          alt="A mechanical keyboard, notebook and headphones laid out on a weathered wooden table"
          position="center 86%"
          label="Independent, remote, hands-on"
          quote="I build the software I recommend. That is the whole difference."
        />
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
