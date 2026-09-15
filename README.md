# dmytrovirych.com

Personal site for **Dmytro Virych — AI Adoption Audit for Small & Mid-Sized
Business**. A single-page site built with Next.js 16, React 19, and Tailwind
CSS 4.

## The offer

The page sells one productized engagement, with a paid entry point:

1. **AI Adoption Call** — $500, 60 minutes. A paid working session where the
   opportunities are identified and the audit's scope and fixed fee are agreed.
2. **AI Adoption Audit** — 2 weeks. Scored opportunity map, ROI estimates,
   build-vs-buy recommendations, a 90-day roadmap, risk guardrails, and a live
   findings walkthrough.
3. **Implementation** — optional, quoted per project.

## Sections

- **Hero** — value proposition and the primary call to action
- **Problem** — the pains SMBs face with AI today
- **The audit** (`#audit`) — what gets examined, and what the client receives
- **Process** (`#process`) — Call → Discover → Analyse → Deliver
- **Pricing** (`#pricing`) — the $500 call, the audit, and optional delivery
- **Fit** (`#fit`) — who the audit is and isn't for
- **After the audit** (`#after`) — advisory and automation follow-on work
- **FAQ** (`#faq`) — also emitted as `FAQPage` structured data
- **About** (`#about`) — background and credibility
- **Contact** (`#contact`) — inquiry form (powered by [Web3Forms](https://web3forms.com))

## Editing content

Almost all copy lives in [`lib/site.ts`](lib/site.ts) — the offer, deliverables,
process steps, FAQ, and fit criteria. Changing a value there updates the page,
the JSON-LD structured data, the OpenGraph image, and `/llms.txt` together, so
they cannot drift apart. The `$500` price is defined once, in `call.price` /
`call.priceLabel`.

## SEO & GEO

- **Metadata** — [`app/layout.tsx`](app/layout.tsx): canonical URL, keyword set,
  OpenGraph and Twitter cards, and Googlebot `max-snippet` / `max-image-preview`
  directives.
- **Structured data** — [`lib/structured-data.ts`](lib/structured-data.ts)
  emits one JSON-LD `@graph`: `Person`, `ProfessionalService`, `Service` (with
  an `Offer` carrying the $500 price), `FAQPage`, and `WebSite`.
- **Social image** — [`app/opengraph-image.tsx`](app/opengraph-image.tsx)
  generates a 1200×630 PNG at build time; `twitter-image.tsx` reuses it. Note
  that `next/og` runs on satori, which requires an explicit `display: flex` on
  any element with more than one child.
- **AI answer engines** — [`app/robots.ts`](app/robots.ts) names the AI
  crawlers explicitly (including `Google-Extended` and `Applebot-Extended`,
  which are opt-outs by convention), and
  [`app/llms.txt/route.ts`](app/llms.txt/route.ts) serves a plain-text brief at
  `/llms.txt` generated from `lib/site.ts`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact form submits to Web3Forms (no backend required). To activate it:

1. Create a free access key at [web3forms.com](https://web3forms.com) using the
   email where you want inquiries delivered.
2. Set the key as an environment variable:

   ```bash
   # .env.local (local) or your Vercel project settings (production)
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```

Until the key is set, the form renders but tells visitors to email directly.

## Notes

- If a local build fails to fetch Google Fonts behind a restrictive network,
  run the build with `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1`.
- Deploys on [Vercel](https://vercel.com). Analytics via `@vercel/analytics`.
