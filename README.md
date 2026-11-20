# SMS Elite Mover website (Next.js)

The Phase 2 truck dispatch site converted to Next.js (App Router), statically
generated, ready for Hostinger's Node.js web app hosting (Business or Cloud
plan, Node 22).

- Pages: `/`, `/privacy`, `/terms` (anchors kept, including `/terms#sms`)
- Ad URLs: `/?type=hotshot`, `/?type=flatbed`, `/?type=box-truck`
  (also `boxtruck`, `box`, any letter case). Each is served a pre-rendered
  page with the matching headline, truck and selector already in the HTML.
- Offer URLs: `/?offer=same-day-payout`, `fuel-advance`, `free-first-load`,
  `routine-rewards`, `referral`, alone or with `?type=` (e.g.
  `/?type=flatbed&offer=fuel-advance`). Each is pre-rendered the same way,
  with the hero sub-line locked to that offer and the form's hidden
  `offer` field filled in. The offer reaches the lead email as "Offer:".
- Old URLs `/privacy.html`, `/terms.html`, `/index.html` redirect (308) to
  `/privacy`, `/terms`, `/`.
- `/robots.txt` and `/sitemap.xml` are generated from the site config.
- Dependencies: `next`, `react`, `react-dom` only (exact versions pinned).

---

## Where to edit things

| What | File |
|---|---|
| Brand name, phone, email, sitemap date | `lib/site.js` |
| Live domain | `.env.local` → `NEXT_PUBLIC_SITE_URL` (and Hostinger env vars) |
| Logo (header, footer, legal pages, truck livery) | `components/Logo.jsx` |
| Favicon / share image / schema logo | `public/favicon.svg`, `public/og-image.png`, `public/logo.png` |
| ?type= headlines and equipment text | `lib/hero-types.js` (keep `next.config.mjs` rewrites in sync) |
| Driver offers (rotator lines, strip, sections, rewards, ?offer= slugs) | `lib/offers.js` (keep `next.config.mjs` `OFFER_SLUGS` in sync) |
| Driver offer terms | `app/(legal)/terms/page.jsx` → `#driver-offers` |
| FAQ (page + schema) | `lib/faq.js` |
| Page titles, descriptions, share tags | `lib/home-metadata.js`, `app/(legal)/*/page.jsx` |
| Security headers / CSP | `next.config.mjs` |
| Page sections | `components/home/*.jsx` |
| Page behaviour (menu, selector, tabs, form…) | `components/home/HomeController.jsx` |

### Placeholders to check

| Placeholder | Where | Now set to |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `.env.local` and Hostinger env vars | `https://smselitemover.com` |
| `NEXT_TELEMETRY_DISABLED` | `.env.local` and Hostinger env vars | `1` (keep) |

If `NEXT_PUBLIC_SITE_URL` is missing or invalid, the site uses
`https://smselitemover.com` (set in `lib/site.js`). It is read at build time,
so redeploy after changing it.

### Replacing the logo later

1. Put your single-colour SVG path in `LOGO_VIEWBOX` / `LOGO_PATH` in
   `components/Logo.jsx` (colour comes from CSS).
2. Replace `public/favicon.svg`, `public/logo.png` (schema logo, at least
   112×112 px) and `public/og-image.png` (1200×630).

---

## Run it on your computer (Node 22)

```bash
npm install          # creates node_modules and package-lock.json
npm audit            # should report 0 vulnerabilities
npm run build        # next build + copies assets into .next/standalone
npm start            # http://localhost:3000
```

`npm start` runs `node .next/standalone/server.js` (the same standalone
server Hostinger runs). Use `PORT=4000 npm start` for another port.

To check for packages with install scripts after `npm install`:

```bash
npm query ":attr(scripts, [install]), :attr(scripts, [postinstall]), :attr(scripts, [preinstall])" | grep '"name"'
```

The only one expected is `sharp`, an optional dependency of Next.js for image
optimisation (this site does not use it).

### Test checklist (production mode)

1. `/`, `/privacy`, `/terms` load; `/privacy.html` and `/terms.html` redirect.
2. View source of `/?type=hotshot`, `/?type=flatbed`, `/?type=box-truck`:
   the `<h1>` already says Hotshot / Flatbed / Box truck dispatch.
3. Hero selector swaps the truck and headline; menu, FAQ, service tabs,
   offer demo, onboarding road, sticky call bar (phones) and the form
   validation all work. The form shows "Request ready… Preview build"
   (it is UI-only until Phase 3).
4. Every call button dials +1 (405) 666-0397.
5. `curl -I http://localhost:3000/` shows the security headers and no
   `X-Powered-By`.
6. `/robots.txt` and `/sitemap.xml` use `https://smselitemover.com`.
7. Run Lighthouse (Chrome DevTools, mobile and desktop) or
   PageSpeed Insights after it is live.

---

## Deploy on Hostinger (Node.js web app, zip upload)

Hostinger's documentation (checked November 2026) says: upload a `.zip`
with `package.json` at the root, leave out `node_modules` and `.git`, set
environment variables in the deploy settings, Node 18/20/22/24 (22 is the
default), and Hostinger runs the install and build itself. For Next.js it
always runs the standalone server and ignores the entry-file field. The zip
upload limit is not stated on those pages; Hostinger's API reference lists
50 MB for archive uploads. This project zip is far below that.

1. hPanel → **Websites** → **Add Website** → **Node.js web app**
   (if `smselitemover.com` is already a site on the plan, Hostinger asks you
   to remove it first, because the deploy needs a fresh slot for the domain).
2. Choose **Upload your website files** and upload `smselitemover.zip`
   (or your re-zipped folder that includes `package-lock.json`, see below).
3. Check the detected settings:
   - Framework / application type: **Next.js**
   - Node.js version: **22**
   - Root directory: `/` (empty)
   - Build script: `build` (runs `npm run build`)
   - Output directory: `.next`
   - Package manager: **npm**
   - Entry file: leave empty (ignored for Next.js)
4. **Environment variables**: add
   - `NEXT_PUBLIC_SITE_URL` = `https://smselitemover.com`
   - `NEXT_TELEMETRY_DISABLED` = `1`
5. Click **Deploy** and wait for the build to finish (the install and the
   build each have a 15-minute limit).
6. Connect the domain `smselitemover.com` to the app and make sure SSL is
   active, then run the test checklist above against the live site,
   including step 2 (if a CDN in front of the site ever serves the wrong
   headline for a `?type=` URL, purge the CDN cache and make sure it keys on
   the query string).
7. Submit `https://smselitemover.com/sitemap.xml` in Google Search Console.

### Lockfile (recommended)

This zip has no `package-lock.json`, because it could not be generated where
the project was written. Hostinger will still install the pinned versions of
`next`, `react` and `react-dom`, but their own dependencies resolve to the
newest matching versions at install time. To lock everything:

```bash
npm install
npm audit
# zip the folder WITHOUT node_modules, .next and .git:
zip -r smselitemover.zip . -x "node_modules/*" ".next/*" ".git/*"
```

and upload that zip instead. Hostinger detects npm from `package-lock.json`.

### Updating the site later

Edit the files, re-zip (without `node_modules` / `.next`), then in hPanel
open the app's **Deployments** → **Settings and redeploy** → upload the new
zip → **Deploy**.

---

## Security notes

- No third-party scripts, no analytics, no tracking, no gclid handling
  (planned for the next phase). No `dangerouslySetInnerHTML`, `innerHTML`
  or `eval`. JSON-LD is written as escaped text.
- Headers on every response (see `next.config.mjs`): Content-Security-Policy,
  Strict-Transport-Security (1 year), X-Content-Type-Options, Referrer-Policy,
  X-Frame-Options and CSP `frame-ancestors 'none'`, Permissions-Policy.
  `X-Powered-By` is off. No production source maps.
- CSP needs `'unsafe-inline'` in two places, explained in `next.config.mjs`:
  `script-src` for the inline page-data scripts every statically generated
  Next.js page contains, and `style-src` for style attributes the markup
  uses. There is no `'unsafe-eval'` in production.
- When analytics or Google Ads tags are added, their domains must be added
  to the CSP.
- The form is UI-only (`method="dialog"`), so nothing is sent anywhere and
  no details can end up in the URL.

## Fonts

Barlow and Barlow Condensed are self-hosted with `next/font/google`: they
are downloaded from Google once during the build and served from this site.
The build server therefore needs internet access (Hostinger's does).
