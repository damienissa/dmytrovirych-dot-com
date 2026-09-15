import Image from "next/image";
import { audit, siteConfig } from "@/lib/site";
import { XIcon, LinkedInIcon, GitHubIcon } from "./icons";

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Image
              src="/images/avatar.jpg"
              alt={siteConfig.name}
              width={140}
              height={140}
              className="rounded-2xl border border-white/10"
              priority
            />
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted transition-colors hover:text-foreground"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-foreground"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="eyebrow">About</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Hi, I&apos;m {siteConfig.name}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m an engineer who turned into a builder. Over the last
                decade I&apos;ve designed, shipped, and scaled real software —
                and built profitable products solo, from first line of code to
                paying customers.
              </p>
              <p>
                That matters here because most &quot;AI consultants&quot; sell
                decks. I have had to make this kind of software work in
                production and pay for itself, so when the audit says an
                opportunity is worth it — or isn&apos;t — that judgement comes
                from having shipped the thing.
              </p>
              <p>
                I run the {audit.name} for small and mid-sized businesses:{" "}
                {audit.duration}, a scored opportunity map, and a 90-day
                roadmap.{" "}
                <span className="text-foreground">
                  If you suspect AI could save you real time or money but
                  can&apos;t rank the options, that&apos;s the problem I solve.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
