/* =========================================================
   SITE CONFIG: brand name, contact details and domain.
   Change them here; every page, call button, label, schema,
   share tag, sitemap and robots file follows.

   The brand is "SMS Elite Mover" (singular), matching the logo
   and the domain smselitemover.com. Alternate spellings are
   declared in lib/schema.js so Google can match them to this
   one name.
   ========================================================= */

// The live domain comes from NEXT_PUBLIC_SITE_URL in .env.local
// (or the Hostinger environment variables). It is read at build
// time, so rebuild after changing it. If it is missing or not a
// valid http(s) URL, the site falls back to the domain below.
const FALLBACK_SITE_URL = 'https://smselitemover.com';

function resolveSiteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  if (raw) {
    try {
      const u = new URL(raw);
      if (u.protocol === 'https:' || u.protocol === 'http:') return u.origin;
    } catch {
      /* fall through to the warning below */
    }
    console.warn(`[site config] NEXT_PUBLIC_SITE_URL "${raw}" is not a valid URL. Using ${FALLBACK_SITE_URL}.`);
  }
  return FALLBACK_SITE_URL;
}

const url = resolveSiteUrl();

export const SITE = {
  brand: 'SMS Elite Mover',
  // Other spellings this business is known by. Declared as
  // alternateName in the Organization/WebSite schema.
  altNames: ['smselitemovers', 'SMS Elite Movers', 'smselitemover.com'],
  url, // e.g. https://smselitemover.com (no trailing slash)
  domain: new URL(url).host, // e.g. smselitemover.com
  phone: '+14056660397', // dials from every call button
  phoneDisplay: '(405) 666-0397',
  phoneSchema: '+1-405-666-0397',
  email: 'contact@smselitemover.com',
  // Date the page content last changed. Used for <lastmod> in the sitemap.
  contentUpdated: '2026-11-14',
};

export const TEL_HREF = `tel:${SITE.phone}`;
export const MAILTO_HREF = `mailto:${SITE.email}`;
