import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

export const socials = [
  { href: siteConfig.social.x, label: "X", Icon: XIcon },
  { href: siteConfig.social.github, label: "GitHub", Icon: GitHubIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Hero() {
  return (
    <header id="top" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6 sm:pt-[120px] sm:pb-[120px]">
        <Image
          src="/images/avatar.jpg"
          alt={siteConfig.name}
          width={352}
          height={352}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-44 sm:w-44"
        />
        <h1 className="mt-5 text-[clamp(40px,7.8vw,112px)] leading-[1.02] font-bold tracking-[-0.055em] text-ink sm:leading-none">
          {siteConfig.name}
        </h1>
        <p className="mt-5 text-[20px] leading-[1.4] text-ink/72 sm:mt-[31px] sm:text-[24px] sm:leading-[1.33]">
          {siteConfig.tagline}
        </p>
        <ul className="mt-6 flex gap-1.5 sm:mt-8 sm:gap-2">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
              >
                <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
