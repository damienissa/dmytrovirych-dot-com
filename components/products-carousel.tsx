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
      className="group flex w-[74vw] max-w-[420px] shrink-0 snap-start flex-col rounded-[24px] bg-surface p-1.5 transition-colors hover:bg-surface-hover sm:min-h-[450px] sm:w-[340px] sm:rounded-[32px] sm:p-2"
    >
      <div className="overflow-hidden rounded-[24px]">
        <Image
          src={product.image}
          alt={product.title}
          width={1200}
          height={630}
          sizes="340px"
          className="aspect-[324/170] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-4 pt-[18px] pb-5 sm:px-5 sm:pt-[26px]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5 text-[14px] leading-[21px] font-medium text-ink-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Image
                src={product.icon}
                alt=""
                width={20}
                height={20}
                unoptimized={product.icon.endsWith(".svg")}
                className="h-5 w-5 rounded-[5px]"
              />
            </span>
            {product.domain}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:scale-110">
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <h3 className="mt-3 text-[20px] leading-[1.1] font-bold tracking-[-0.045em] text-ink sm:mt-4 sm:text-[32px]">
          {product.title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.375] text-ink-2">{product.description}</p>
      </div>
    </a>
  );
}

const arrowButton =
  "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-all hover:bg-surface-hover disabled:opacity-40";

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
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    // Past the last snap point the trailing cards can't reach the start edge.
    setActive(end && el.scrollLeft > 0 ? products.length - 1 : nearest);
    setAtEnd(end);
  }, [products.length]);

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
        className="track-gutter flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-3 px-4 sm:mt-6 sm:gap-4 sm:px-6">
        <button
          type="button"
          aria-label="Previous product"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className={arrowButton}
        >
          <ChevronLeftIcon className="h-[18px] w-[18px]" />
        </button>
        <div className="flex items-center">
          {products.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className="flex h-8 items-center justify-center px-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-[18px] bg-ink" : "w-1.5 bg-ink/20"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next product"
          onClick={() => goTo(active + 1)}
          disabled={atEnd}
          className={arrowButton}
        >
          <ChevronRightIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
