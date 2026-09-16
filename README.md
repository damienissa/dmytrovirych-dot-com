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

- **Hero** — full-bleed photograph, headline, and a spec strip along its foot
- **Problem** — the pains SMBs face with AI today
- **The audit** (`#audit`) — what gets examined, and what the client receives
- **Process** (`#process`) — Call → Discover → Analyse → Deliver
- **Photo band** — a full-bleed break before the pricing conversation
- **Pricing** (`#pricing`) — the $500 call, the audit, and optional delivery
- **Fit** (`#fit`) — who the audit is and isn't for
- **After the audit** (`#after`) — advisory and automation follow-on work
- **FAQ** (`#faq`) — also emitted as `FAQPage` structured data
- **About** (`#about`) — background and credibility
- **Contact** (`#contact`) — inquiry form (powered by [Web3Forms](https://web3forms.com))

## Design

Photography leads. The site is built around full-bleed images with type set
over them; the palette exists to stay out of their way and is sampled from the
reference photograph itself — the shadowed wood became the ground, the lit
grain became the one accent.

| Token | Value | Role |
| --- | --- | --- |
| `--ground` | `#121311` | page background, from the photo's shadows |
| `--bone` | `#F2F1EC` | body text and solid buttons |
| `--mist` | `#9BA29D` | secondary text |
| `--sand` | `#C9A87C` | the only accent — small uppercase labels |
| `--hair` | `rgba(242,241,236,.13)` | every rule and border on the site |

Rules of the system: sans only (Geist, no serif anywhere), no gradients, no
glow, no glass, no cards with fills — sections are separated by hairlines and
whitespace. Headline sizes are fluid (`clamp()`), so nothing needs a breakpoint
to stay in proportion.

### Logo and icons

The mark is an isometric cube in three faces. The geometry lives in three
places and must stay in step:

| File | Use |
| --- | --- |
| [`components/logo.tsx`](components/logo.tsx) | `<LogoMark />` and `<Logo />` for the nav and footer |
| [`app/icon.svg`](app/icon.svg) | the primary favicon |
| [`app/opengraph-image.tsx`](app/opengraph-image.tsx) | the mark on the social card |

`app/icon.svg` swaps palette with `prefers-color-scheme`: on a light browser
tab the bone face would vanish against white, so the light scheme uses the
dark-on-light colours instead.

`app/favicon.ico` (16/32/48) and `app/apple-icon.png` (180×180) are raster
fallbacks and are generated, not hand-made. They sit on an opaque `#121311`
plate so they read on any background, since neither format can adapt to the
browser theme. To regenerate after a change to the mark, re-run the generator
in the scratchpad — note that **the PNGs inside an `.ico` must be colour type 6
(RGBA)** or the Next.js build fails with `The PNG is not in RGBA format`, and
Chromium's encoder drops the alpha channel whenever every pixel is opaque, so
the PNGs are encoded by hand rather than screenshotted.

Do not use a single flat fill for a one-colour version of the mark: three
identically-filled faces collapse into a plain hexagon. Use tonal steps
(100% / 72% / 45% of one colour) instead.

### Adding photography

Drop the file in `public/images/`, then render another
[`<PhotoBand />`](components/photo-band.tsx) between sections in
[`app/page.tsx`](app/page.tsx):

```tsx
<PhotoBand
  src="/images/your-photo.jpg"
  alt="Describe what is in the frame"
  position="center 40%"   // object-position, to pick the crop
  label="Optional eyebrow"
  quote="Optional line of copy over the image."
/>
```

Use images at least 2400px on the long edge — the hero and the bands run full
width, so anything smaller softens on large displays.

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
  generates a 1200×630 PNG at build time from the hero photograph, read off
  disk and inlined so the build makes no network call; `twitter-image.tsx`
  reuses it. Two satori quirks to know: it requires an explicit `display: flex`
  on any element with more than one child, and it does not parse the `inset`
  shorthand — overlays need explicit `top`/`left`/`width`/`height` or they
  silently never paint.
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
