import { SITE } from './site';
import { FAQ } from './faq';

/* Structured data for the homepage.

   WebSite markup is how the preferred site name is stated, and
   Organization carries the same name plus the alternate spellings
   ("smselitemovers", "SMS Elite Movers", "smselitemover.com") so
   Google can match the old name to this one.
   See "SMS Elite Mover — Website Copy & SEO (Deliverable B)". */

const SERVICES = [
  'Truck Dispatch',
  'Load Search & Route Planning',
  'Rate Negotiation',
  'Broker & Shipper Communication',
  'Back Office Support',
  'Freight Strategy',
  'Factoring & Payment Support',
  'New MC Support',
  'Hotshot Dispatch',
  'Car Hauler Dispatch',
  'Flatbed Dispatch',
  'Box Truck Dispatch',
];

export function homeSchema() {
  const orgId = `${SITE.url}/#organization`;
  const siteId = `${SITE.url}/#website`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': siteId,
        name: SITE.brand,
        alternateName: SITE.altNames,
        url: `${SITE.url}/`,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE.brand,
        alternateName: SITE.altNames.filter((n) => !n.includes('.')),
        url: `${SITE.url}/`,
        logo: `${SITE.url}/logo.png`,
        description:
          'Truck dispatch service for owner-operators and small carriers running hotshot, car hauler, flatbed and box trucks.',
        telephone: SITE.phoneSchema,
        email: SITE.email,
        areaServed: { '@type': 'Country', name: 'United States' },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phoneSchema,
          email: SITE.email,
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: 'English',
        },
      },
      {
        '@type': 'Service',
        '@id': `${SITE.url}/#dispatch`,
        name: 'Truck dispatch services for owner-operators',
        serviceType: 'Truck dispatch',
        provider: { '@id': orgId },
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: { '@type': 'BusinessAudience', name: 'Owner-operators and small motor carriers' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dispatch services',
          itemListElement: SERVICES.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };
}

/* Serialize for a <script type="application/ld+json"> text child.
   <, > and & are written as \u escapes, so the JSON can never close
   the script tag or be read as markup, and it still parses to the
   same values. No dangerouslySetInnerHTML is needed. */
export function toJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
