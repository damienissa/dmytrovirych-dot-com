import { faqs } from "@/lib/site";
import { ChevronDownIcon } from "./icons";

export function FaqSection() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Questions people ask before booking
          </h2>
          <p className="mt-4 text-lg text-muted">
            If yours isn&apos;t here, email me — I answer these myself.
          </p>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                  {faq.question}
                </h3>
                <ChevronDownIcon className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-6 pr-10 text-base leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
