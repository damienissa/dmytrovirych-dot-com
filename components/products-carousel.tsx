"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/site";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener"
      data-card
      className="group flex w-[82vw] max-w-[292px] shrink-0 snap-start flex-col rounded-[24px] bg-[#f5f5f5] p-[6px] sm:w-[292px]"
    >
      <div className="overflow-hidden rounded-[18px]">
        <Image
          src={product.image}
          alt={product.title}
          width={1200}
          height={630}
          sizes="292px"
          className="aspect-[280/146] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-[18px] pt-[22px] pb-6">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-3 text-[13px] text-[#555]">
            <Image
              src={product.icon}
              alt=""
              width={24}
              height={24}
              unoptimized={product.icon.endsWith(".svg")}
              className="h-6 w-6 rounded-[6px]"
            />
            {product.domain}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111] shadow-[0_1px_4px_rgba(0,0,0,0.08)] transition-transform group-hover:scale-110">
            <ArrowUpRightIcon className="h-3 w-3" />
          </span>
        </div>
        <h3 className="mt-6 text-[28px] leading-[1.06] font-bold tracking-[-0.045em] text-[#111]">
          {product.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.3] text-[#666]">{product.description}</p>
      </div>
    </a>
  );
}

const arrowButton =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111] shadow-[0_1px_6px_rgba(0,0,0,0.1)] transition-opacity disabled:opacity-30";

export function ProductsCarousel({ products }: { products: Product[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const cards = () =>
    Array.from(track.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const start = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft);
    let nearest = 0;
    let best = Infinity;
    cards().forEach((card, i) => {
      const d = Math.abs(card.getBoundingClientRect().left - start);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    // On wide screens every card fits, so "next" must start disabled.
    const frame = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (index: number) => {
    const el = track.current;
    const card = cards()[Math.max(0, Math.min(index, products.length - 1))];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-[14px] overflow-x-auto scroll-px-5 px-5 [scrollbar-width:none] sm:scroll-px-[86px] sm:px-[86px] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between px-5 sm:max-w-[960px] sm:px-[86px]">
        <button
          type="button"
          aria-label="Previous product"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className={arrowButton}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-[5px]">
          {products.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                i === active ? "w-4 bg-[#111]" : "w-[6px] bg-[#ccc]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next product"
          onClick={() => goTo(active + 1)}
          disabled={atEnd}
          className={arrowButton}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
