import Image from "next/image";
import { audit, call } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

const specs = [
  { term: "Duration", detail: audit.duration },
  { term: "Starts with", detail: `${call.priceLabel} call` },
  { term: "Your team's time", detail: "4–6 hours" },
  { term: "You receive", detail: "Map + roadmap" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden lg:min-h-screen"
    >
      <Image
        src="/images/mountain-desk.jpg"
        alt="A laptop, keyboard and coffee on a weathered wooden table, looking out over forested mountains in morning mist"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{ objectPosition: "center 38%" }}
      />
      {/* Two scrims: one lifts the type off the sky, one keeps the foot readable. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,19,17,.95)_0%,rgba(18,19,17,.74)_26%,rgba(18,19,17,.20)_58%,rgba(18,19,17,.46)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,19,17,.72)_0%,rgba(18,19,17,.42)_38%,rgba(18,19,17,.06)_72%,transparent_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 lg:px-14">
        <span className="label rise">{audit.name}</span>
        <h1 className="rise rise-1 mt-5 max-w-[15ch] text-[clamp(2.4rem,6.4vw,4.75rem)] font-medium leading-[1.03] tracking-[-0.038em]">
          Find out where AI actually pays off.
        </h1>
        <p className="rise rise-2 mt-6 max-w-[50ch] text-lg font-light leading-relaxed text-bone/80">
          A two-week audit for small and mid-sized businesses. A scored map of
          every AI opportunity you have, the return behind each one, and a
          90-day roadmap your team can execute.
        </p>

        <div className="rise rise-3 mt-9 flex flex-col gap-3 pb-12 sm:flex-row sm:items-center lg:pb-16">
          <a href="#contact" className="btn-primary px-7 py-4 text-[15px]">
            Book the {call.priceLabel} call
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a href="#audit" className="btn-ghost px-7 py-4 text-[15px]">
            What the audit covers
          </a>
        </div>
      </div>

      {/* Spec strip along the foot of the photograph */}
      <div className="relative border-t border-[var(--hair)]">
        <dl className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-x-8 gap-y-6 px-6 py-7 sm:grid-cols-4 lg:px-14">
          {specs.map((spec) => (
            <div key={spec.term}>
              <dt className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-bone/50">
                {spec.term}
              </dt>
              <dd className="mt-2 text-[17px] font-medium tracking-[-0.02em] lg:text-[19px]">
                {spec.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
