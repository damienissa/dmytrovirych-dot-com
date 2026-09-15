import { call, audit } from "@/lib/site";
import { ArrowRightIcon, ClockIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Mesh gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="grid-backdrop absolute inset-0" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="max-w-3xl">
          <span className="eyebrow animate-in">
            {audit.name} · {audit.duration}
          </span>
          <h1 className="animate-in-delay-1 mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Find out where AI
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">actually pays off</span> in your
            business.
          </h1>
          <p className="animate-in-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The {audit.name} is a two-week engagement for small and mid-sized
            businesses. You finish with a scored map of every AI opportunity you
            have, the ROI behind each one, and a 90-day roadmap your team can
            execute — built by an engineer who ships production software, not
            slides.
          </p>

          <div className="animate-in-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary px-6 py-3 text-base">
              Book the {call.priceLabel} call
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#audit" className="btn-ghost px-6 py-3 text-base">
              What the audit covers
            </a>
          </div>

          <p className="animate-in-delay-3 mt-4 flex items-center gap-2 text-sm text-muted">
            <ClockIcon className="h-4 w-4 shrink-0 text-cyan-400" />
            {call.duration}, {call.priceLabel}. We scope the audit on the call —
            you approve a fixed fee before any work starts.
          </p>

          <dl className="animate-in-delay-4 mt-14 grid max-w-xl grid-cols-3 gap-6">
            {[
              { value: "2 weeks", label: "Kickoff to delivered roadmap" },
              { value: "4–6 hrs", label: "Of your team's time, total" },
              { value: "ROI-first", label: "Every finding carries a number" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
