import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const socials = [
  { href: siteConfig.social.x, label: "X", Icon: XIcon },
  { href: siteConfig.social.github, label: "GitHub", Icon: GitHubIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Hero() {
  return (
    <header className="bg-[#f5f4f4]">
      <div className="px-5 pt-8 pb-20 sm:px-[86px] sm:pt-8 sm:pb-[104px]">
        <Image
          src="/images/avatar.jpg"
          alt={siteConfig.name}
          width={300}
          height={300}
          priority
          className="h-[120px] w-[120px] rounded-full object-cover sm:h-[150px] sm:w-[150px]"
        />
        <h1 className="mt-7 text-[clamp(3.5rem,8.5vw,7rem)] leading-[0.95] font-bold tracking-[-0.055em] text-[#111]">
          {siteConfig.name}
        </h1>
        <p className="mt-5 text-[19px] text-[#444] sm:text-[21px]">{siteConfig.tagline}</p>
        <ul className="mt-8 flex gap-[7px]">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white transition-transform hover:scale-105"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
