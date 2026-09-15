import { goodFit, notFit } from "@/lib/site";
import { CheckIcon, CrossIcon } from "./icons";

export function FitSection() {
  return (
    <section id="fit" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Fit</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Who this is — and isn&apos;t — for
          </h2>
          <p className="mt-4 text-lg text-muted">
            An audit only pays for itself if you act on it. Here is the honest
            filter, so neither of us wastes the call.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
              <CheckIcon className="h-5 w-5 text-cyan-400" />
              A good fit
            </h3>
            <ul className="mt-6 space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-relaxed text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
              <CrossIcon className="h-5 w-5 text-zinc-500" />
              Not a fit
            </h3>
            <ul className="mt-6 space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <CrossIcon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-600" />
                  <span className="text-sm leading-relaxed text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
