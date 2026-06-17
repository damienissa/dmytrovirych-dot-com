import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
