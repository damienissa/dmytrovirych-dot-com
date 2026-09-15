import { call, audit } from "@/lib/site";
import { ArrowRightIcon, CheckIcon } from "./icons";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            It starts with one paid call
          </h2>
          <p className="mt-4 text-lg text-muted">
            I don&apos;t quote an audit before I understand your business —
            that only leads to padded estimates. So we start with a working
            session, and you approve a fixed fee from there.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Step 1 — the paid call */}
          <div className="gradient-border flex flex-col p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Start here
              </span>
              <span className="text-xs text-muted">{call.duration}</span>
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight">
              {call.name}
            </h3>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">
                {call.priceLabel}
              </span>
              <span className="text-sm text-muted">one-off</span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted">
              {call.summary}
            </p>

            <ul className="mt-7 space-y-3">
              {call.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-relaxed text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-primary mt-9 justify-center px-6 py-3.5 text-base"
            >
              Book the {call.priceLabel} call
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Step 2 — the audit, and what follows */}
          <div className="flex flex-col gap-6">
            <div className="glass-card flex flex-col rounded-2xl p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Then
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {audit.name}
              </h3>
              <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                {audit.priceLabel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Scoped and priced on the call, so the number reflects your
                actual business rather than a package I guessed at. {audit.duration}{" "}
                from kickoff to the findings walkthrough, with roughly four to
                six hours of your team&apos;s time in total.
              </p>
            </div>

            <div className="glass-card flex flex-col rounded-2xl p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Optional
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Implementation
              </h3>
              <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                Quoted per project
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Entirely optional. The roadmap is written so your team or any
                competent vendor can run it. If you would rather I build the
                first wins, we scope that separately once the audit is done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
