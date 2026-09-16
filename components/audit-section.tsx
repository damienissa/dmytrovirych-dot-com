import { audit, auditAreas, deliverables } from "@/lib/site";

export function AuditSection() {
  return (
    <section id="audit" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="max-w-[58ch]">
        <span className="label label-dim">The engagement</span>
        <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
          The {audit.name}
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg font-light leading-relaxed text-mist">
          {audit.summary}
        </p>
      </div>

      <h3 className="mt-20 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-mist">
        What I examine
      </h3>
      <ul className="mt-7 grid border-t border-[var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
        {auditAreas.map((area, i) => (
          <li
            key={area.title}
            className="border-b border-[var(--hair)] py-8 pr-10 lg:pr-14"
          >
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-sand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-4 text-[19px] font-medium tracking-[-0.025em]">
              {area.title}
            </h4>
            <p className="mt-2.5 text-[15px] font-light leading-relaxed text-mist">
              {area.description}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-20 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-mist">
        What you receive
      </h3>
      <ul className="mt-7 grid border-t border-[var(--hair)] sm:grid-cols-2">
        {deliverables.map((item) => (
          <li
            key={item.title}
            className="border-b border-[var(--hair)] py-8 pr-10 lg:pr-16"
          >
            <h4 className="text-[19px] font-medium tracking-[-0.025em]">
              {item.title}
            </h4>
            <p className="mt-2.5 max-w-[46ch] text-[15px] font-light leading-relaxed text-mist">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
