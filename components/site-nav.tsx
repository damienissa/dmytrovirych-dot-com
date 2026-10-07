import { Logo } from "./logo";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/** Apple's thin translucent bar: 48px, blurred, a hairline underneath. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair/60 bg-[var(--nav)] backdrop-blur-xl backdrop-saturate-[1.8]">
      <nav className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Dmytro Virych — back to top">
          <Logo />
        </a>
        <ul className="flex items-center gap-5 text-[12.5px] text-ink/80 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
