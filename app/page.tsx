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
      <Hero />
      <main>
        <section id="products" className="pt-20 sm:pt-[84px]">
          <h2 className="px-5 text-[clamp(2.5rem,5vw,3.6rem)] leading-none font-bold tracking-[-0.05em] text-[#111] sm:px-[86px]">
            Things I&rsquo;ve built
          </h2>
          <div className="mt-9">
            <ProductsCarousel products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
