import { DEFAULT_TYPE } from '@/lib/hero-types';
import { homeSchema, toJsonLd } from '@/lib/schema';
import { SvgDefs } from '@/components/trucks';
import { SiteHeader } from './SiteHeader';
import { Hero } from './Hero';
import { Perks } from './Perks';
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
   headline in the HTML itself, with no swap after load.
   `offer` is null, or a driver-offer slug for the pre-rendered ?offer=
   pages (alone or together with ?type=): the hero sub-line is locked to
   that offer and the form's hidden "offer" field is pre-filled. */
export function HomePage({ variant = null, offer = null }) {
  const type = variant || DEFAULT_TYPE;
  return (
    <>
      {/* Structured data. toJsonLd escapes < > & so this text can't break out of the tag. */}
      <script type="application/ld+json">{toJsonLd(homeSchema())}</script>
      <SvgDefs />
      <SiteHeader />
      <main id="top">
        <Hero variant={variant} offer={offer} />
        <Perks />
        <Offers />
        <Services />
        <Equipment />
        <Onboarding type={type} />
        <SignBand />
        <Faq />
        <LeadForm type={type} offer={offer} />
      </main>
      <SiteFooter />
      <HomeController initialType={type} hasVariant={variant !== null} />
    </>
  );
}
