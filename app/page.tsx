import { CompactHeader } from "@/components/compact-header";
import { Hero } from "@/components/hero";
import { ProductsCarousel } from "@/components/products-carousel";
import { Footer } from "@/components/footer";
import { products } from "@/lib/site";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c"),
        }}
      />
      <CompactHeader />
      <Hero />
      <main>
        <section id="products" className="mt-8 sm:mt-24">
          <h2 className="mx-auto max-w-5xl px-4 sm:px-6 text-[clamp(30px,4.45vw,64px)] leading-[1.02] font-bold tracking-[-0.045em] text-ink">
            Things I&rsquo;ve built
          </h2>
          <div className="mt-6 sm:mt-10">
            <ProductsCarousel products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
