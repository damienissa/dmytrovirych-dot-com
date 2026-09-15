import { services } from "@/lib/site";
import {
  StrategyIcon,
  AutomationIcon,
  CheckIcon,
  ArrowRightIcon,
} from "./icons";

const icons = [StrategyIcon, AutomationIcon];

export function AfterAuditSection() {
  return (
    <section id="after" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">After the audit</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            You own the roadmap. The rest is your call.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Plenty of clients take the report and execute it themselves — that
            is a perfectly good outcome, and the roadmap is written for it. If
            you want me to stay involved, there are two ways.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i] ?? StrategyIcon;
            return (
              <div
                key={service.title}
                className="glass-card flex flex-col rounded-2xl p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-300">
                  {service.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span className="text-sm leading-relaxed text-zinc-300">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-muted">
          Neither is a condition of the audit.
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 font-semibold text-foreground"
          >
            Start with the call
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
