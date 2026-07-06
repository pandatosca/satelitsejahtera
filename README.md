# SATSET — satelit-sejahtera.com

Company website for **PT. Satelit Sejahtera Terang (SATSET)** — a next-generation
IT solutions provider. Built with Next.js + Tailwind CSS, light mode, mobile-first.

## Tech stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Montserrat** font (Google Fonts)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve production build
```

## Where to edit things

| What | File |
| --- | --- |
| All text / copy | `src/constants/content.ts` |
| Contact info, social links | `src/constants/content.ts` → `CONTACT_INFO`, `SOCIAL_LINKS` |
| **Partners (add/remove logos)** | `src/constants/content.ts` → `PARTNERS` + drop file into `public/partners/` |
| Colors / theme | `src/app/globals.css` (`@theme` block) |
| Icons | `src/components/common/Icons.tsx` |
| Sections | `src/components/sections/` |
| Header / Footer | `src/components/layout/` |

### Add or remove a partner

1. Put the logo file in `public/partners/` (e.g. `acme.svg`).
2. In `src/constants/content.ts`, edit the `PARTNERS` array:
   ```ts
   export const PARTNERS = [
     { name: "Acme", logo: "/partners/acme.svg" },
     // delete a line to remove a partner
   ];
   ```

## Pages

- `/` — Home (hero, stats, solutions, why us, partners, CTA)
- `/about` — Mission, vision, values, timeline
- `/solutions` — Detailed services
- `/contact` — Contact form + details
- `/privacy`, `/terms`

## Deployment (Hostinger)

Push to GitHub, then in hPanel connect the repository. Domain: satelit-sejahtera.com.
