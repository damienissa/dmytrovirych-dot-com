import { siteConfig } from "@/lib/site";
import { ChevronRightIcon, GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const socials = [
  { href: siteConfig.social.x, label: "X", Icon: XIcon },
  { href: siteConfig.social.github, label: "GitHub", Icon: GitHubIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <>
      <section id="contact" className="bg-band px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="display reveal text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.07]">
          Say hello.
        </h2>
        <p className="reveal mx-auto mt-4 max-w-[36ch] text-[19px] leading-[1.45] text-ink-2 sm:text-[21px]">
          Questions about a product, an idea worth building, or just to compare
          notes on going indie.
        </p>
        <div className="reveal mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <a href={`mailto:${siteConfig.email}`} className="btn">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="chev-link"
          >
            DM me on X
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <footer className="bg-band px-4 sm:px-6">
        <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between gap-4 border-t border-hair py-6 text-[12px] text-ink-2 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Made solo.
          </p>
          <ul className="flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
