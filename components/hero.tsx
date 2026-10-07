import Image from "next/image";
import { products, siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
      <Image
        src="/images/avatar.jpg"
        alt={siteConfig.name}
        width={112}
        height={112}
        priority
        className="rise mx-auto h-24 w-24 rounded-full object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:h-28 sm:w-28"
      />
      <p className="rise rise-1 mt-7 text-[17px] font-semibold text-ink-2 sm:text-[21px]">
        {siteConfig.name} · {siteConfig.role}
      </p>
      <h1 className="display rise rise-2 mx-auto mt-2 max-w-[16ch] text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.04]">
        Small software. Made&nbsp;with&nbsp;care.
      </h1>
      <p className="rise rise-3 mx-auto mt-6 max-w-[34ch] text-[19px] leading-[1.45] text-ink-2 sm:text-[24px]">
        {products.length} products, designed, built and run solo — most of them
        native apps for the Mac.
      </p>
      <div className="rise rise-4 mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
        <a href="#products" className="btn">
          See what I&apos;ve built
        </a>
        <a
          href={siteConfig.social.x}
          target="_blank"
          rel="noopener noreferrer"
          className="chev-link"
        >
          Follow the build on X
          <ChevronRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
