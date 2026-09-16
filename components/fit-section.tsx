import { goodFit, notFit } from "@/lib/site";

export function FitSection() {
  return (
    <section id="fit" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">Fit</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          Who this is — and isn&apos;t — for.
        </h2>
        <p className="mt-5 max-w-[50ch] text-lg font-light text-mist">
          An audit only pays for itself if you act on it. Here is the honest
          filter, so neither of us wastes the call.
        </p>
      </div>

      <div className="mt-16 grid gap-y-14 lg:grid-cols-2 lg:gap-x-20">
        <div>
          <h3 className="border-b border-[var(--hair-strong)] pb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-sand">
            A good fit
          </h3>
          <ul>
            {goodFit.map((item) => (
              <li
                key={item}
                className="border-b border-[var(--hair)] py-5 text-[16px] font-light leading-relaxed text-bone/88"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="border-b border-[var(--hair-strong)] pb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-mist">
            Not a fit
          </h3>
          <ul>
            {notFit.map((item) => (
              <li
                key={item}
                className="border-b border-[var(--hair)] py-5 text-[16px] font-light leading-relaxed text-mist"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
