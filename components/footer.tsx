import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 pt-24 pb-16 text-[14px] text-ink-2 sm:px-6 sm:pt-32 sm:pb-20">
      © {new Date().getFullYear()} {siteConfig.name} ·{" "}
      <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-ink">
        {siteConfig.email}
      </a>
    </footer>
  );
}
