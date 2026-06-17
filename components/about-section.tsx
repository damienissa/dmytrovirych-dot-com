import Image from "next/image";
import { siteConfig } from "@/lib/site";
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
                That matters because most &quot;AI consultants&quot; sell decks.
                I deliver working systems. When I recommend an automation or an
                AI strategy, it&apos;s because I know what it takes to actually
                ship it, run it, and make it pay for itself.
              </p>
              <p>
                If you run a business and suspect AI could save you time or
                money but don&apos;t know where to start —{" "}
                <span className="text-foreground">that&apos;s exactly what I do.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
