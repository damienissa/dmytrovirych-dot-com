# dmytrovirych.com

Personal site for **Dmytro Virych — AI Consultant for Business**. A single-page
site built with Next.js 16, React 19, and Tailwind CSS 4.

## Sections

- **Hero** — value proposition and primary call to action
- **Problem** — the pains SMBs face with AI today
- **Services** — AI Strategy & Advisory and AI Automation for Operations
- **Process** — Assess → Pilot → Deploy → Measure
- **About** — background and credibility
- **Contact** — inquiry form (powered by [Web3Forms](https://web3forms.com))

Most editable copy lives in [`lib/site.ts`](lib/site.ts).

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
