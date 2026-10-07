import { macAppCount, products } from "@/lib/site";

const stats = [
  { value: String(products.length), label: "products shipped and live" },
  { value: String(macAppCount), label: "built for the Mac" },
  { value: "1", label: "person behind all of them" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        <h2 className="display reveal text-center text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.07]">
          One maker. No&nbsp;committee.
        </h2>

        <dl className="reveal mt-14 grid gap-10 text-center sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="display block text-[64px] leading-none sm:text-[80px]">
                  {stat.value}
                </span>
                <span className="mt-3 block text-[17px] text-ink-2">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="reveal mx-auto mt-16 max-w-[640px] space-y-5 text-[19px] leading-[1.55] text-ink-2 sm:text-[21px]">
          <p>
            I&apos;m an engineer who turned into a builder. For over a decade I
            designed, shipped and scaled software for other people. Now I make
            my own —{" "}
            <span className="text-ink">
              from the first line of code to the checkout page.
            </span>
          </p>
          <p>
            I build in public, keep my products small and focused, and prefer
            native apps that respect your machine and your data. If something
            here solves a problem you have, that&apos;s the whole point.
          </p>
        </div>
      </div>
    </section>
  );
}
