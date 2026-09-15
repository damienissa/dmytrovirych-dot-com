import { audit, auditAreas, deliverables } from "@/lib/site";
import {
  AutomationIcon,
  DatabaseIcon,
  WalletIcon,
  UsersIcon,
  ShieldIcon,
  ScaleIcon,
  CheckIcon,
} from "./icons";

const areaIcons = [
  AutomationIcon,
  DatabaseIcon,
  WalletIcon,
  UsersIcon,
  ShieldIcon,
  ScaleIcon,
];

export function AuditSection() {
  return (
    <section id="audit" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">The engagement</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The {audit.name}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {audit.summary}
          </p>
        </div>

        {/* What I examine */}
        <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
          What I examine
        </h3>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {auditAreas.map((area, i) => {
            const Icon = areaIcons[i] ?? AutomationIcon;
            return (
              <li
                key={area.title}
                className="bg-[#07070b] p-7 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-base font-semibold tracking-tight">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </li>
            );
          })}
        </ul>

        {/* What you get */}
        <h3 className="mt-20 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
          What you receive
        </h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {deliverables.map((item) => (
            <li key={item.title} className="glass-card rounded-2xl p-7">
              <div className="flex gap-4">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <h4 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
