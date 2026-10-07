import Image from "next/image";
import { products, type Product } from "@/lib/site";
import { ChevronRightIcon } from "./icons";

function ProductCard({ product, priority }: { product: Product; priority: boolean }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener"
      aria-label={`${product.name} — ${product.headline} Visit ${product.domain}`}
      className="reveal group flex flex-col overflow-hidden rounded-[28px] bg-card shadow-[var(--shadow)] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
    >
      <div className="p-7 pb-0 sm:p-9 sm:pb-0">
        <div className="flex items-center gap-3">
          <Image
            src={product.icon}
            alt=""
            width={40}
            height={40}
            unoptimized={product.icon.endsWith(".svg")}
            className="h-10 w-10 rounded-[10px]"
          />
          <div className="min-w-0">
            <p className="text-[17px] font-semibold leading-tight">{product.name}</p>
            <p className="text-[13px] text-ink-2">
              {product.category} · {product.platform}
            </p>
          </div>
        </div>

        <h3 className="display mt-6 text-[28px] leading-[1.1] sm:text-[32px]">
          {product.headline}
        </h3>
        <p className="mt-3 text-[17px] leading-[1.47] text-ink-2">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="chev-link group-hover:underline">
            Visit {product.domain}
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </span>
          {product.price && (
            <span className="shrink-0 rounded-full border border-hair px-3 py-1 text-[12px] text-ink-2">
              {product.price}
            </span>
          )}
        </div>
      </div>

      {/* The product's own artwork, inset like a screen on a desk. */}
      <div className="mt-auto px-5 pt-8 pb-5 sm:px-7 sm:pt-8 sm:pb-7">
        <div className="overflow-hidden rounded-[18px]">
          <Image
            src={product.image}
            alt={`${product.name}: ${product.headline}`}
            width={1200}
            height={630}
            priority={priority}
            sizes="(min-width: 1120px) 520px, (min-width: 768px) 46vw, 92vw"
            className="aspect-[1200/630] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </a>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="bg-band px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1120px]">
        <div className="reveal text-center">
          <h2 className="display text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.07]">
            Things I&apos;ve built.
          </h2>
          <p className="mx-auto mt-4 max-w-[40ch] text-[19px] leading-[1.45] text-ink-2 sm:text-[21px]">
            Each one started as a problem I had myself. Each one is live, and
            each one is for sale.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
