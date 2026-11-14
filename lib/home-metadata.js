import { SITE } from './site';

/* Head tags for the homepage and its ?type= variants. The canonical is
   always "/" so ad URLs with ?type= never split ranking.

   Copy from "SMS Elite Mover — Website Copy & SEO (Deliverable B)":
   one title and one description for all four hero versions, because
   Google indexes them as a single page. */
export const homeMetadata = {
  title: `Truck Dispatch Service for Owner-Operators | ${SITE.brand}`,
  description: `${SITE.brand} is a truck dispatch service for owner-operators running hotshot, car hauler, flatbed and box trucks. Zero forced dispatch: you approve every load and see every rate confirmation. Call ${SITE.phoneDisplay}.`,
  robots: 'index, follow, max-image-preview:large',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE.brand,
    title: `Truck Dispatch Service for Owner-Operators | ${SITE.brand}`,
    description: 'Hotshot, car hauler, flatbed and box truck dispatch. Zero forced dispatch. You approve every load.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${SITE.brand} truck dispatch: a flatbed semi on a highway at dusk` }],
  },
  twitter: { card: 'summary_large_image' },
};

export const homeViewport = { themeColor: '#090909' };
