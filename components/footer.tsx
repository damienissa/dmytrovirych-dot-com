import { siteConfig } from "@/lib/site";
import { XIcon, LinkedInIcon, GitHubIcon } from "./icons";
import { Logo } from "./logo";

const socials = [
  { href: siteConfig.social.x, label: "X", Icon: XIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.social.github, label: "GitHub", Icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--hair)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-14">
        <div>
          <Logo />
          <p className="mt-3 text-[14.5px] font-light text-mist">
            {siteConfig.shortRole}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-[14.5px] text-mist transition-colors hover:text-bone"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex items-center gap-6">
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

      <div className="border-t border-[var(--hair)]">
        <p className="mx-auto max-w-[1280px] px-6 py-6 text-[13px] font-light text-mist lg:px-14">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
