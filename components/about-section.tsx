import Image from "next/image";
import { audit, siteConfig } from "@/lib/site";
import { XIcon, LinkedInIcon, GitHubIcon } from "./icons";

const socials = [
  { href: siteConfig.social.x, label: "X", Icon: XIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.social.github, label: "GitHub", Icon: GitHubIcon },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
        <div>
          <Image
            src="/images/avatar.jpg"
            alt={siteConfig.name}
            width={300}
            height={300}
            className="w-[180px] object-cover lg:w-full"
          />
          <div className="mt-7 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-mist transition-colors hover:text-bone"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="label label-dim">About</span>
          <h2 className="mt-5 text-[clamp(1.95rem,4.3vw,3.125rem)] font-medium leading-[1.07] tracking-[-0.035em]">
            Hi, I&apos;m {siteConfig.name}.
          </h2>
          <div className="mt-7 max-w-[56ch] space-y-5 text-lg font-light leading-relaxed text-mist">
            <p>
              I&apos;m an engineer who turned into a builder. Over the last
              decade I&apos;ve designed, shipped, and scaled real software — and
              built profitable products solo, from first line of code to paying
              customers.
            </p>
            <p>
              That matters here because most &quot;AI consultants&quot; sell
              decks. I have had to make this kind of software work in production
              and pay for itself, so when the audit says an opportunity is worth
              it — or isn&apos;t — that judgement comes from having shipped the
              thing.
            </p>
            <p>
              I run the {audit.name} for small and mid-sized businesses:{" "}
              {audit.duration}, a scored opportunity map, and a 90-day roadmap.{" "}
              <span className="text-bone">
                If you suspect AI could save you real time or money but
                can&apos;t rank the options, that&apos;s the problem I solve.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
