import { problems } from "@/lib/site";

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">The problem</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          AI is everywhere. Results aren&apos;t.
        </h2>
        <p className="mt-5 max-w-[50ch] text-lg font-light text-mist">
          The gap is rarely the technology — it&apos;s knowing where to apply
          it, in what order, and what it will actually return. That is a
          diagnosis problem, and it is what the audit solves.
        </p>
      </div>

      <ul className="mt-16 grid border-t border-[var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <li
            key={problem}
            className="border-b border-[var(--hair)] py-8 pr-10 sm:[&:nth-child(odd)]:pr-14 lg:pr-14"
          >
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-sand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-[16px] font-light leading-relaxed text-bone/85">
              {problem}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
