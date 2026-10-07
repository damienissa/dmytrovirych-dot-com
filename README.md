# dmytrovirych.com

Indie hacker portfolio for **Dmytro Virych**. A single, Apple-inspired page
showing every product I've built. Next.js 16, React 19, Tailwind CSS 4.

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

- Apple neutrals: white and `#f5f5f7` bands, `#1d1d1f` ink, one blue for
  anything clickable. Tokens live in `app/globals.css` and switch with
  `prefers-color-scheme`.
- SF Pro via the system font stack on Apple devices, Inter elsewhere.
- Sticky translucent nav, pill buttons, chevron links, rounded product tiles.
- Entrance and scroll-reveal animations are CSS-only and respect
  `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
