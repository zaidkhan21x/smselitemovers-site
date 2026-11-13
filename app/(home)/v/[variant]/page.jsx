/* Pre-rendered ?type= pages. next.config.mjs rewrites
   /?type=hotshot, /?type=flatbed and /?type=box-truck (also boxtruck, box)
   to these, so the URL in the browser stays /?type=... and the headline
   is in the HTML from the first byte. Canonical stays "/". */
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { homeMetadata, homeViewport } from '@/lib/home-metadata';
import { ORDER } from '@/lib/hero-types';

export const dynamicParams = false;
export const metadata = homeMetadata;
export const viewport = homeViewport;

export function generateStaticParams() {
  return ORDER.map((variant) => ({ variant }));
}

export default async function VariantPage({ params }) {
  const { variant } = await params;
  if (!ORDER.includes(variant)) notFound();
  return <HomePage variant={variant} />;
}
