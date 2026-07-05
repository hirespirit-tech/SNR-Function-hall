# SNR Function Hall & Guest Rooms — Website

A fully static React (Vite) website. **No database, no backend server** — all content
(services, gallery photos, FAQs) lives in plain data files under `src/data/`, and the
booking form opens WhatsApp with a prefilled message instead of saving to a database.

## What changed from the original Replit project

- Removed the Postgres/Drizzle database and the Express API server entirely.
- Removed the admin dashboard (it only existed to manage the database).
- `Events`, `Gallery`, and `FAQ` sections now read from static files:
  `src/data/services.ts`, `src/data/gallery.ts`, `src/data/faqs.ts`.
- The booking form no longer calls an API — it builds a WhatsApp message from what
  the visitor typed and opens `wa.me` with it prefilled (number comes from
  `src/lib/constants.ts`).
- The project is now a single, standalone folder (previously part of a pnpm monorepo).

## How to update content (no code changes needed beyond editing these files)

| What | File |
|---|---|
| Services / event types shown on homepage | `src/data/services.ts` |
| Gallery photos | `src/data/gallery.ts` (add the image file to `src/assets/attached_assets` or `src/assets/images`, import it, add an entry) |
| FAQs | `src/data/faqs.ts` |
| Packages / pricing cards | `src/components/sections/Packages.tsx` |
| Testimonials | `src/components/sections/Testimonials.tsx` |
| Phone/WhatsApp/address | `src/lib/constants.ts` |

## Run on localhost

Requires [Node.js](https://nodejs.org) 20+.

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

To build and preview the production build locally:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or use the Vercel CLI directly on the folder).
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
   (A `vercel.json` is already included with these settings and a rewrite rule so
   `/about`, `/gallery`, etc. work on direct load/refresh.)
4. Deploy. No environment variables are required.

Or with the CLI, from inside this folder:

```bash
npm install -g vercel
vercel
```

## Deploy to GoDaddy (shared hosting / cPanel)

1. Build the site locally:
   ```bash
   npm install
   npm run build
   ```
2. This creates a `dist/` folder — that's the entire site.
3. In GoDaddy's cPanel, open **File Manager**, go to `public_html` (or a subfolder if
   you want the site at a sub-path), and upload/extract the **contents** of `dist/`
   there (not the `dist` folder itself — its contents: `index.html`, `assets/`, etc.).
4. A `.htaccess` file is already included and will be copied into `dist/` on build —
   it makes direct links like `yoursite.com/gallery` work correctly on Apache
   (GoDaddy's shared hosting uses Apache). Make sure hidden files (dotfiles) are
   included when you upload.
5. If you're deploying into a sub-folder instead of the domain root (e.g.
   `yoursite.com/hall/`), rebuild with:
   ```bash
   BASE_PATH=/hall/ npm run build
   ```
   so asset paths resolve correctly.

## Project structure

```
src/
  components/     UI components, layout, and page sections
  pages/          Route-level pages (Landing, About, Facilities, Gallery, 404)
  data/           Static content: services, gallery images, FAQs
  lib/            Constants (contact info, event types) and utilities
  assets/         Images used across the site
```
