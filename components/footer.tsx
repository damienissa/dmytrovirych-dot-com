import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-5 pt-24 pb-10 text-[13px] text-[#888] sm:px-[86px]">
      © {new Date().getFullYear()} {siteConfig.name} ·{" "}
      <a href={`mailto:${siteConfig.email}`} className="hover:text-[#111]">
        {siteConfig.email}
      </a>
    </footer>
  );
}
