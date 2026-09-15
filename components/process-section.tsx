import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">How it runs</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Two weeks, four steps, no surprises
          </h2>
          <p className="mt-4 text-lg text-muted">
            No six-month discovery programme. We scope on the call, I do the
            work, and you get a roadmap you can start on the next morning.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-semibold text-cyan-400">
                  {step.step}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  {step.duration}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-indigo-500/60 to-transparent" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
