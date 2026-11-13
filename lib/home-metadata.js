import { SITE } from './site';

/* Head tags for the homepage and its ?type= variants. The canonical is
   always "/" so ad URLs with ?type= never split ranking. */
export const homeMetadata = {
  title: `Truck Dispatch for Hotshot, Flatbed & Box Trucks | ${SITE.brand}`,
  description: `Truck dispatch services for owner-operators running hotshot, flatbed and box trucks. Zero forced dispatch, next load lined up before you deliver. Call ${SITE.phoneDisplay}.`,
  robots: 'index, follow, max-image-preview:large',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE.brand,
    title: `Truck Dispatch on Your Terms | ${SITE.brand}`,
    description: 'Dispatch for hotshot, flatbed and box truck owner-operators. You approve every load, and we work to book the next one before you deliver.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${SITE.brand} truck dispatch: a flatbed semi on a highway at dusk` }],
  },
  twitter: { card: 'summary_large_image' },
};

export const homeViewport = { themeColor: '#090909' };
