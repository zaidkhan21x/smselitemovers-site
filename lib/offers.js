/* =========================================================
   DRIVER OFFERS
   One list drives the hero rotator, the offer strip, the three
   offer sections, the Driver rewards cards, the ?offer= pages,
   the form's hidden "offer" field and the lead email.

   ?offer= values are the slugs below (matched after lower-casing
   and trimming). next.config.mjs keeps its own copy of the slugs
   so it can map ad URLs to the pre-rendered pages; keep both
   lists in sync, the same way as the ?type= values. Do not rename
   a slug: ads and shared links point at them.

   Copy rules (research-backed, see the Nov 2026 copy pass):
   - The fuel offer is an "advance", never "free fuel".
   - The first-load offer never says "free", "on us" or "no contract"
     without its conditions beside it (FTC "Free" Guide, 16 CFR 251.1):
     "no dispatch fee on your first load" plus the cond / conditions
     line, and "no long-term commitment" instead of "no contract"
     (a dispatch agreement is signed before any load).
   - Same-day is "funding on eligible loads", cut-off times apply.
   - No prices, income claims or guarantees. Only the referral
     offer names a percentage, always as "up to" with its conditions.
   - Specifics (cut-off time, amounts, who qualifies) are confirmed
     on the call and in /terms, so none are printed here.

   Fields
     line        hero rotator line (keep it to about 43 characters)
     strip       one-line benefit on the strip card
     cond        small condition line on the strip card
     title/sub   section headline and lede (heavy offers)
     points      three benefit bullets (heavy offers)
     steps       "how it works" chips (heavy offers)
     conditions  visible conditions line under the section
     body/fine   card copy and small print (rewards cards)
     metaTitle / metaDescription   head tags for the /?offer= page
   ========================================================= */

export const DRIVER_OFFERS = [
  {
    slug: 'same-day-payout',
    name: 'Same-day payout',
    line: 'Same-day funding on eligible loads.',
    strip: 'Same-day funding on eligible loads',
    cond: 'Cut-off times apply',
    icon: 'payout',
    heavy: true,
    title: 'Delivered today. Funded today.',
    sub: "Broker terms can stretch to 30, 45, even 60 days. Send your signed POD on an eligible load before the daily cut-off and our factoring partner funds it the same day, so fuel, insurance and the truck note don't wait on a broker.",
    points: [
      'Stop floating the broker. A delivered load turns into working cash for fuel, insurance and the truck note.',
      'Slow-pay brokers are screened out before a load ever reaches you.',
      'One team: your dispatcher books the load and the paperwork goes straight to funding.',
    ],
    steps: ['Book the load', 'Deliver + send POD', 'Funded same day'],
    conditions: 'Same-day funding is provided by our factoring partner on eligible loads, with complete paperwork in before the daily cut-off. Partner fees and terms apply.',
    cta: 'Get same-day funding',
    metaTitle: 'Same-Day Funding on Eligible Loads | SMS Elite Mover',
    metaDescription: 'Truck dispatch for hotshot, flatbed and box truck owner-operators. Same-day funding on eligible loads through our factoring partner. Cut-off applies.',
  },
  {
    slug: 'fuel-advance',
    name: 'Fuel advance',
    line: 'Fuel advance on booked loads.',
    strip: 'A fuel advance on your booked load',
    cond: 'Qualifying booked loads',
    icon: 'fuel',
    heavy: true,
    title: 'Fuel up before you roll.',
    sub: "Don't float fuel out of pocket on the run to pickup. Once your load is booked, ask your dispatcher about an advance on that load and fuel up. Hotshot, flatbed and box truck carriers welcome.",
    points: [
      'Keep your own cash for the truck, not for floating the broker.',
      'Built for the run to pickup, when the fuel has to be paid before the load does.',
      'Simple and on the record: an advance on a booked load, confirmed with your dispatcher before you accept.',
    ],
    steps: ['Load booked', 'Request advance', 'Funds ready for fuel'],
    conditions: 'A fuel advance is an advance on a qualifying booked load, not free fuel. Availability, amount and any fee are confirmed by your dispatcher before you accept.',
    cta: 'Ask about a fuel advance',
    metaTitle: 'Fuel Advance on Booked Loads | SMS Elite Mover',
    metaDescription: 'Dispatch service for owner-operators with a fuel advance on qualifying booked loads, so you stop floating fuel. Hotshot, flatbed, box truck. Terms apply.',
  },
  {
    slug: 'free-first-load',
    name: 'First load',
    line: 'First load, no dispatch fee if you qualify.',
    strip: 'No dispatch fee on your first load',
    cond: 'For approved carriers. Call to see if you qualify.',
    icon: 'first',
    heavy: true,
    title: 'Your first load, no dispatch fee.',
    sub: "Judge us on a real load before you pay us anything. For approved carriers there is no dispatch fee on the first load and no setup fee. You see every rate con, you make the call, and there's no long-term commitment.",
    points: [
      'Prove it on a real load, not a sales pitch. We built this for carriers who want a dispatcher for the long haul.',
      'You stay in control: every load is an offer, and passing costs you nothing.',
      "New MC or established, call us and we'll tell you on the spot whether the offer applies to you.",
    ],
    steps: ['Call or send the form', 'Quick qualification call', 'Roll your first load, no dispatch fee'],
    conditions: 'For approved carriers new to us, based on your MC authority and standing. One per carrier and MC number. Covers our dispatch fee only, not fuel, tolls or factoring fees. A dispatch agreement is signed before any load. Call to see if you qualify.',
    cta: 'See if you qualify',
    metaTitle: 'First Load, No Dispatch Fee | SMS Elite Mover',
    metaDescription: 'No dispatch fee on your first load for approved carriers. Hotshot, flatbed and box truck dispatch with no setup fee. Call to see if you qualify.',
  },
  {
    slug: 'routine-rewards',
    name: 'Routine rewards',
    line: 'Run right. Lower fees, first pick of loads.',
    strip: 'Lower fees and first pick of loads',
    cond: 'Earned by running right',
    icon: 'rewards',
    heavy: false,
    title: 'Run right. Earn first pick of loads.',
    body: "Deliver on time, show up when you're booked and stay dependable, and you can earn lower dispatch fees and first pick of available loads. The rules are the same for everyone, so rewards come from how you run, not who you know.",
    fine: "Based on your record with us. First pick means you're offered suitable loads first. It isn't a guarantee of any number of loads or any rate.",
    cta: 'Ask about rewards',
    metaTitle: 'Routine Rewards for Reliable Carriers | SMS Elite Mover',
    metaDescription: 'Deliver on time, show up when booked and earn lower dispatch fees and first pick of loads. Hotshot, flatbed and box truck dispatch for owner-operators.',
  },
  {
    slug: 'referral',
    name: 'Referral',
    line: 'Refer a driver, earn up to 5%.',
    strip: 'Earn up to 5% for a referral',
    cond: 'Conditions apply. See terms.',
    icon: 'referral',
    heavy: false,
    title: 'Refer a driver. Earn up to 5%.',
    body: "Know an owner-operator who deserves a better dispatcher? Send them our way and earn a reward on their loads. Good dispatch spreads by word of mouth, and we'd rather pay the people who spread it.",
    fine: "Up to 5% of the referred carrier's load revenue, up to 30 days. Eligible once the referred carrier completes 3 months of dispatch. They must name you when they sign up. If you recommend us publicly, say you may earn a referral reward.",
    cta: 'Refer a driver',
    metaTitle: 'Refer an Owner-Operator, Earn up to 5% | SMS Elite Mover',
    metaDescription: 'Know a hotshot, flatbed or box truck owner-operator? Refer them and earn up to 5% of their load revenue for up to 30 days. Conditions apply.',
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

/* Head tags for a /?offer= page. The canonical stays "/" (set by the
   caller from homeMetadata), so these pages never compete with the
   homepage in search; the title and description are for ad clicks,
   shares and the search snippet when Google shows one. */
export function offerMetadata(base, slug) {
  const o = offerBySlug(slug);
  if (!o) return base;
  return {
    ...base,
    title: o.metaTitle,
    description: o.metaDescription,
    openGraph: { ...base.openGraph, title: o.metaTitle, description: o.metaDescription },
  };
}
