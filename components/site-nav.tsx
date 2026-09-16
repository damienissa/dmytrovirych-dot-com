"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { call, navLinks, siteConfig } from "@/lib/site";
import { MenuIcon, CloseIcon } from "./icons";
import { Logo } from "./logo";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Transparent over the hero photograph, solid once it scrolls past.
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--hair)] bg-ground/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-14">
        <a href="#top" aria-label={`${siteConfig.name} — home`}>
          <Logo />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-bone/72 transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => track("nav_cta_click")}
            className="btn-primary px-5 py-2.5 text-[14px]"
          >
            Book the {call.priceLabel} call
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            onClick={() => track("nav_cta_click")}
            className="btn-primary px-4 py-2.5 text-[13.5px]"
          >
            Book the {call.priceLabel} call
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-bone"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--hair)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-bone/80 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
