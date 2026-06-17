import { siteConfig } from "@/lib/site";
import { XIcon, LinkedInIcon, GitHubIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
        </div>

        <div className="flex items-center gap-5">
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

      <div className="border-t border-white/5 py-5">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
