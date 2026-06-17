import { ArrowRightIcon } from "./icons";

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
            AI Consultant for Business
          </span>
          <h1 className="animate-in-delay-1 mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Put AI to work where it
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">actually pays off.</span>
          </h1>
          <p className="animate-in-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I help small and mid-sized businesses cut costs and move faster by
            turning the AI hype into automations and strategy that deliver
            measurable results — built by an engineer who ships real,
            money-making software.
          </p>

          <div className="animate-in-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary px-6 py-3 text-base">
              Get a free AI assessment
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost px-6 py-3 text-base">
              See how I can help
            </a>
          </div>

          <dl className="animate-in-delay-4 mt-14 grid max-w-xl grid-cols-3 gap-6">
            {[
              { value: "10+ yrs", label: "Building & shipping software" },
              { value: "Hands-on", label: "I build, not just advise" },
              { value: "ROI-first", label: "Tied to real numbers" },
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
