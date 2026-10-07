# dmytrovirych.com

Indie hacker portfolio for **Dmytro Virych**: a profile header and a
"Things I've built" carousel. Next.js 16, React 19, Tailwind CSS 4.

## Products

| Product | Site | What it is |
| --- | --- | --- |
| Envly | [envly.app](https://envly.app) | Native Mac app for your .env files |
| Localdock | [localdock.dev](https://www.localdock.dev) | Tap a bug on localhost, your AI agent fixes it |
| Goal Rings | [goalrings.app](https://goalrings.app) | Any metric as an always-visible goal ring on your Mac |
| MacMemory | [macmemory.app](https://macmemory.app) | See what's eating your Mac's storage |
| Build Mac App | [buildmac.app](https://buildmac.app) | Template for selling paid macOS apps |
| Redirectly | [redirectly.app](https://redirectly.app) | Deep links and install attribution for mobile apps |

## Editing

Everything on the page comes from `lib/site.ts`: change a product there and
the cards, the JSON-LD (`lib/structured-data.ts`), `/llms.txt`, the page
metadata and the OG image all follow.

Product artwork lives in `public/products/`:

- `<slug>.webp` — the product's own 1200×630 OG card, used as the card image
- `<slug>-icon.(png|svg)` — the app icon

To add a product, drop those two files in and add an entry to `products`.

## Design

Sizes follow the reference layout, measured from the live page:

- A centred 1024px column (`max-w-5xl`, 16px / 24px gutters).
- Header band (`#f7f7f7`): 176px avatar, 112px bold name (40px on mobile,
  -0.055em tracking), 24px tagline at 72% ink, 56px round black socials.
- A floating pill with avatar, name and socials appears once the header
  scrolls away (`components/compact-header.tsx`).
- "Things I've built" (64px / 30px): a full-bleed scroll-snap carousel whose
  first card lines up with the column. Cards are 340px wide, `#f7f7f7`,
  32px radius, 8px inset image, 32px bold title (20px on mobile), 14px
  description in `#6b6b6b` (`components/products-carousel.tsx`).
- Inter throughout.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
