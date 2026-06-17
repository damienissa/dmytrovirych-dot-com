import { problems } from "@/lib/site";

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">The problem</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          AI is everywhere. Results aren&apos;t.
        </h2>
        <p className="mt-4 text-lg text-muted">
          The gap is rarely the technology — it&apos;s knowing where to apply it
          and having someone who can actually build it. Sound familiar?
        </p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
        {problems.map((problem, i) => (
          <li
            key={i}
            className="bg-[#07070b] p-7 transition-colors hover:bg-white/[0.03]"
          >
            <span className="font-mono text-sm text-indigo-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              {problem}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
