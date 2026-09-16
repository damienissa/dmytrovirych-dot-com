import { services } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

export function AfterAuditSection() {
  return (
    <section id="after" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">After the audit</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          You own the roadmap. The rest is your call.
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg font-light text-mist">
          Plenty of clients take the report and execute it themselves — that is
          a perfectly good outcome, and the roadmap is written for it. If you
          want me to stay involved, there are two ways.
        </p>
      </div>

      <div className="mt-16 grid gap-y-14 border-t border-[var(--hair)] lg:grid-cols-2 lg:gap-x-20">
        {services.map((service) => (
          <div key={service.title} className="pt-10">
            <h3 className="text-[24px] font-medium tracking-[-0.028em]">
              {service.title}
            </h3>
            <p className="mt-2 text-[15px] text-sand">{service.tagline}</p>
            <p className="mt-5 max-w-[46ch] text-[16px] font-light leading-relaxed text-mist">
              {service.description}
            </p>
            <ul className="mt-7">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="border-t border-[var(--hair)] py-3.5 text-[15.5px] font-light text-bone/86"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 flex flex-wrap items-center gap-2.5 text-[15px] text-mist">
        Neither is a condition of the audit.
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-medium text-bone"
        >
          Start with the call
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </p>
    </section>
  );
}
