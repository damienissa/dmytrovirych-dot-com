import { audit, call } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">Pricing</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          It starts with one paid call.
        </h2>
        <p className="mt-5 max-w-[50ch] text-lg font-light text-mist">
          I don&apos;t quote an audit before I understand your business — that
          only leads to padded estimates.
        </p>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-[1.12fr_1fr]">
        {/* Step one — the paid call */}
        <div className="rounded-[3px] border border-[var(--hair)] bg-bone/[0.035] p-8 sm:p-12">
          <span className="label">Start here — {call.duration}</span>
          <div className="mt-6 flex items-baseline">
            <span className="text-[clamp(3.6rem,6.6vw,5.25rem)] font-medium leading-none tracking-[-0.05em]">
              {call.priceLabel}
            </span>
            <span className="ml-3.5 text-[15px] text-mist">one-off</span>
          </div>
          <h3 className="mt-4 text-[22px] font-medium tracking-[-0.025em]">
            {call.name}
          </h3>
          <p className="mt-4 max-w-[42ch] text-[16px] font-light leading-relaxed text-mist">
            {call.summary}
          </p>

          <ul className="mt-8">
            {call.includes.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[30px_1fr] border-t border-[var(--hair)] py-3.5 text-[15.5px] font-light text-bone/86"
              >
                <span className="text-[12px] tracking-[0.1em] text-sand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary mt-9 w-full px-7 py-4 text-[15px]">
            Book the {call.priceLabel} call
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Step two — the audit itself, and what may follow */}
        <div className="flex flex-col gap-5">
          <div className="rounded-[3px] border border-[var(--hair)] p-8 sm:p-12">
            <span className="label label-dim">Then</span>
            <p className="mt-6 text-[clamp(2.1rem,3.4vw,2.75rem)] font-medium leading-none tracking-[-0.04em]">
              {audit.priceLabel}
            </p>
            <h3 className="mt-4 text-[22px] font-medium tracking-[-0.025em]">
              {audit.name}
            </h3>
            <p className="mt-4 max-w-[42ch] text-[16px] font-light leading-relaxed text-mist">
              Scoped and priced on the call, so the number reflects your actual
              business rather than a package I guessed at. {audit.duration} from
              kickoff to the findings walkthrough, with roughly four to six
              hours of your team&apos;s time in total.
            </p>
          </div>

          <div className="rounded-[3px] border border-[var(--hair)] p-8 sm:p-12">
            <span className="label label-dim">Optional</span>
            <p className="mt-6 text-[clamp(1.6rem,2.4vw,2rem)] font-medium leading-none tracking-[-0.035em]">
              Quoted per project
            </p>
            <h3 className="mt-4 text-[22px] font-medium tracking-[-0.025em]">
              Implementation
            </h3>
            <p className="mt-4 max-w-[42ch] text-[16px] font-light leading-relaxed text-mist">
              Entirely optional. The roadmap is written so your team or any
              competent vendor can run it. If you would rather I build the first
              wins, we scope that separately once the audit is done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
