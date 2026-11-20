/* Pre-rendered pages for ?type= and ?offer= together, e.g.
   /?type=flatbed&offer=fuel-advance. next.config.mjs rewrites those to
   /v/<type>/o/<offer>, so the equipment headline AND the locked offer
   sub-line are both in the first HTML. Canonical stays "/". */
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { homeMetadata, homeViewport } from '@/lib/home-metadata';
import { ORDER } from '@/lib/hero-types';
import { OFFER_SLUGS } from '@/lib/offers';

export const dynamicParams = false;
export const metadata = homeMetadata;
export const viewport = homeViewport;

export function generateStaticParams() {
  return ORDER.flatMap((variant) => OFFER_SLUGS.map((offer) => ({ variant, offer })));
}

export default async function VariantOfferPage({ params }) {
  const { variant, offer } = await params;
  if (!ORDER.includes(variant) || !OFFER_SLUGS.includes(offer)) notFound();
  return <HomePage variant={variant} offer={offer} />;
}
