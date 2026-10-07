"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { socials } from "./hero";

/** Floating pill with avatar, name and socials, shown once the header scrolls away. */
export function CompactHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-120px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 top-3 z-50 transition-[translate,opacity] duration-300 sm:top-4 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+24px)] opacity-0"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <div className="pointer-events-auto flex w-fit items-center gap-2.5 rounded-full border border-ink/[0.08] bg-white p-1.5 pr-4 shadow-[0_12px_40px_-12px_rgba(17,17,17,0.25)] sm:gap-3 sm:p-2 sm:pr-2">
          <a href="#top" tabIndex={visible ? 0 : -1} className="flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/images/avatar.jpg"
              alt=""
              width={80}
              height={80}
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <span className="text-[14px] leading-5 font-semibold tracking-[-0.025em] sm:text-[15.2px]">
              {siteConfig.name}
            </span>
          </a>
          <ul className="hidden gap-2 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  tabIndex={visible ? 0 : -1}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.07] transition-transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
