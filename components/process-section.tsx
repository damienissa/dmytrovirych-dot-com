import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">Process</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          Two weeks, four steps, no surprises.
        </h2>
        <p className="mt-5 max-w-[50ch] text-lg font-light text-mist">
          No six-month discovery programme. We scope on the call, I do the work,
          and you get a roadmap you can start on the next morning.
        </p>
      </div>

      <ol className="mt-16 border-t border-[var(--hair)]">
        {processSteps.map((step) => (
          <li
            key={step.step}
            className="grid gap-2 border-b border-[var(--hair)] py-8 lg:grid-cols-[150px_260px_1fr] lg:gap-14"
          >
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-sand">
              {step.step} · {step.duration}
            </span>
            <h3 className="text-[22px] font-medium tracking-[-0.028em] lg:text-[25px]">
              {step.title}
            </h3>
            <p className="max-w-[54ch] text-[16px] font-light leading-relaxed text-mist">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
