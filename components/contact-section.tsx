import { call } from "@/lib/site";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="label label-dim">Get started</span>
          <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
            Book the {call.priceLabel} {call.name}.
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg font-light leading-relaxed text-mist">
            Tell me about your business and where you think the time goes.
            I&apos;ll reply within one business day with a couple of slots and a
            payment link — then we spend {call.duration} finding your best AI
            opportunities and scoping the audit.
          </p>
          <ul className="mt-10 border-t border-[var(--hair)]">
            {[
              "A shortlist of opportunities with real return, in one session",
              "Straight answers on what's realistic and what isn't",
              "A written scope and fixed price for the audit",
              "Notes you can act on yourself, whichever way you go",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-[var(--hair)] py-4 text-[15.5px] font-light text-bone/86"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
