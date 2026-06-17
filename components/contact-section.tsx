import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="mesh-blob mesh-blob-3" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pt-6">
            <span className="eyebrow">Get started</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s find your first AI win
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Tell me about your business and what you&apos;re trying to
              improve. I&apos;ll reply within one business day with honest,
              specific thoughts on where AI can help — no pressure, no jargon.
            </p>
            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>→ A free, no-obligation assessment of your best opportunities</li>
              <li>→ Straight answers on what&apos;s realistic and what isn&apos;t</li>
              <li>→ A clear next step, whether or not you work with me</li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
