import { DEFAULT_TYPE } from '@/lib/hero-types';
import { homeSchema, toJsonLd } from '@/lib/schema';
import { SvgDefs } from '@/components/trucks';
import { SiteHeader } from './SiteHeader';
import { Hero } from './Hero';
import { Offers } from './Offers';
import { Services } from './Services';
import { Equipment } from './Equipment';
import { Onboarding } from './Onboarding';
import { SignBand } from './SignBand';
import { Faq } from './Faq';
import { LeadForm } from './LeadForm';
import { SiteFooter } from './SiteFooter';
import HomeController from './HomeController';

/* The homepage. `variant` is null for "/" and 'hotshot' | 'flatbed' | 'box'
   for the pre-rendered ?type= pages, so ad clicks get the matching
   headline in the HTML itself, with no swap after load. */
export function HomePage({ variant = null }) {
  const type = variant || DEFAULT_TYPE;
  return (
    <>
      {/* Structured data. toJsonLd escapes < > & so this text can't break out of the tag. */}
      <script type="application/ld+json">{toJsonLd(homeSchema())}</script>
      <SvgDefs />
      <SiteHeader />
      <main id="top">
        <Hero variant={variant} />
        <Offers />
        <Services />
        <Equipment />
        <Onboarding type={type} />
        <SignBand />
        <Faq />
        <LeadForm type={type} />
      </main>
      <SiteFooter />
      <HomeController initialType={type} hasVariant={variant !== null} />
    </>
  );
}
