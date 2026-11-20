/* =========================================================
   DRIVER OFFERS
   One list drives the hero rotator, the offer strip, the three
   offer sections, the Driver rewards cards, the ?offer= pages,
   the form's hidden "offer" field and the lead email.

   ?offer= values are the slugs below (matched after lower-casing
   and trimming). next.config.mjs keeps its own copy of the slugs
   so it can map ad URLs to the pre-rendered pages; keep both
   lists in sync, the same way as the ?type= values.

   Wording rule: the fuel offer is an "advance", never "free fuel".
   ========================================================= */

export const DRIVER_OFFERS = [
  {
    slug: 'same-day-payout',
    name: 'Same-day payout',
    line: 'Deliver today. Get paid today.',
    strip: 'Paid the same day you deliver',
    icon: 'payout',
    heavy: true,
    title: 'Deliver today. Get paid today.',
    sub: 'No more waiting 30–60 days on broker terms. Through our factoring partner, your delivered load turns into cash the same day.',
    steps: ['Book the load', 'Deliver + send POD', 'Paid same day'],
    conditions: 'Same-day funding via our factoring partner on eligible loads; cut-off times apply.',
    cta: 'Get paid same day',
  },
  {
    slug: 'fuel-advance',
    name: 'Fuel advance',
    line: 'Fuel in the tank before you roll.',
    strip: 'A fuel advance on your booked load',
    icon: 'fuel',
    heavy: true,
    title: 'Fuel in the tank before you roll.',
    sub: "Don't float fuel out of pocket waiting to get paid. Get an advance on your booked load so you can fuel up and go.",
    steps: ['Load booked', 'Request advance', 'Funds ready for fuel'],
    conditions: 'Advance available on qualifying booked loads — ask your dispatcher.',
    cta: 'Ask about a fuel advance',
  },
  {
    slug: 'free-first-load',
    name: 'Free first load',
    line: 'Your first load is on us.',
    strip: 'Zero dispatch fee on your first load',
    icon: 'first',
    heavy: true,
    title: 'Your first load is on us.',
    sub: 'No dispatch fee on your first load. No setup fee, no contract — see how we run before you pay a dime.',
    steps: ['Call', 'Get approved', 'Roll your first load, zero dispatch fee'],
    conditions: 'Based on MC authority and standing. Call to see if you qualify.',
    cta: 'See if you qualify',
  },
  {
    slug: 'routine-rewards',
    name: 'Routine rewards',
    line: 'Run right. Lower fees, first pick of loads.',
    strip: 'Lower fees for running right',
    icon: 'rewards',
    heavy: false,
    title: 'Run right, get rewarded.',
    body: 'Deliver on time, stay dependable, and you earn lower fees and first pick of our best loads. No contracts locking you in — just upside for running right.',
    cta: 'Ask about rewards',
  },
  {
    slug: 'referral',
    name: 'Referral',
    line: 'Refer a driver, earn up to 5%.',
    strip: 'Earn up to 5% for a referral',
    icon: 'referral',
    heavy: false,
    title: 'Refer a driver, earn up to 5%.',
    body: 'Know an owner-operator who deserves better dispatch? Send them our way and earn a kickback on their loads.',
    fine: "Up to 5% of the referred carrier's load revenue, up to 30 days. Eligible once the referred carrier completes 3 months of dispatch.",
    cta: 'Refer a driver',
  },
];

export const OFFER_SLUGS = DRIVER_OFFERS.map((o) => o.slug);
export const HEAVY_OFFERS = DRIVER_OFFERS.filter((o) => o.heavy);
export const REWARD_OFFERS = DRIVER_OFFERS.filter((o) => !o.heavy);

export const offerBySlug = (slug) => DRIVER_OFFERS.find((o) => o.slug === slug) || null;

// Where each offer's "See terms" link points (a heading on /terms).
export const offerTermsHref = (slug) => `/terms#offer-${slug}`;

// ?offer= value -> slug, or null when it isn't one of the five.
export function offerFromQuery(value) {
  if (typeof value !== 'string') return null;
  const v = value.toLowerCase().trim();
  return OFFER_SLUGS.includes(v) ? v : null;
}
