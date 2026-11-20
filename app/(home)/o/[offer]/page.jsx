/* Pre-rendered ?offer= pages. next.config.mjs rewrites
   /?offer=same-day-payout (and the other four offer slugs) to these,
   so the URL in the browser stays /?offer=... and the hero sub-line is
   locked to that offer in the HTML from the first byte. Same mechanism
   as the ?type= pages. Canonical stays "/". */
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { homeMetadata, homeViewport } from '@/lib/home-metadata';
import { OFFER_SLUGS, offerMetadata } from '@/lib/offers';

export const dynamicParams = false;
export const viewport = homeViewport;

// Each offer page gets its own title and description; canonical stays "/".
export async function generateMetadata({ params }) {
  const { offer } = await params;
  return offerMetadata(homeMetadata, offer);
}

export function generateStaticParams() {
  return OFFER_SLUGS.map((offer) => ({ offer }));
}

export default async function OfferPage({ params }) {
  const { offer } = await params;
  if (!OFFER_SLUGS.includes(offer)) notFound();
  return <HomePage offer={offer} />;
}
