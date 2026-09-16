import { faqs } from "@/lib/site";
import { ChevronDownIcon } from "./icons";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">FAQ</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          Questions people ask before booking.
        </h2>
        <p className="mt-5 text-lg font-light text-mist">
          If yours isn&apos;t here, email me — I answer these myself.
        </p>
      </div>

      <div className="mt-14 max-w-[76ch] border-t border-[var(--hair)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-[var(--hair)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 text-left [&::-webkit-details-marker]:hidden">
              <h3 className="text-[17px] font-medium tracking-[-0.02em] sm:text-[19px]">
                {faq.question}
              </h3>
              <ChevronDownIcon className="mt-1 h-5 w-5 shrink-0 text-mist transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="max-w-[64ch] pb-7 text-[16px] font-light leading-relaxed text-mist">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
