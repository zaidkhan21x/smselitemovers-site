/* Equipment data and the ad-group hero copy used by ?type=.
   Shared by the server-rendered page and the client controller.

   Hero copy from "SMS Elite Mover — Website Copy & SEO (Deliverable B)".
   Each hero repeats the words in its ad group's pinned headlines, so
   the click lands on the same promise. The H1 is the only <h1> on the
   page for that version. */

export const TYPES = {
  hotshot: {
    name: 'Hotshot',
    spec: 'Class 3 to 5 pickup with a gooseneck or bumper-pull trailer, car haulers included',
    loads: 'Expedited, partial and LTL flatbed loads, with reloads planned ahead.',
    cta: 'Get hotshot dispatch',
    shadow: 560,
    eyebrow: 'Hotshot and car hauler dispatch',
    h1: ['Hotshot dispatch service', 'with your next load', 'lined up.'],
    lede: 'For Class 3 to 5 pickups pulling a gooseneck or bumper-pull trailer, car haulers included. We book expedited, partial and LTL flatbed loads, plan your reloads, and send every load as an offer you can take or pass.',
    trust: ['Planned reloads', 'Zero forced dispatch', 'Fuel advance on booked loads'],
  },
  flatbed: {
    name: 'Flatbed',
    spec: 'Semi with a 48 or 53 ft flatbed or step deck',
    loads: 'Steel, lumber, pipe and machinery, with tarp pay written into the rate con.',
    cta: 'Get flatbed dispatch',
    shadow: 680,
    eyebrow: 'Flatbed and step deck dispatch',
    h1: ['Flatbed dispatch service', 'with tarp pay', 'up front.'],
    lede: "For semis pulling a 48 or 53 ft flatbed or step deck. Steel, lumber, pipe and machinery, with tarp pay written into the rate con and low offers declined. You approve every load before it's booked.",
    trust: ['Tarp pay negotiated up front', 'Zero forced dispatch', 'Same-day funding on eligible loads'],
  },
  box: {
    name: 'Box Truck',
    spec: '16 to 26 ft straight truck, CDL or non-CDL, liftgate or dock-high',
    loads: 'Palletized, LTL, retail, final-mile and regional runs, with dock and liftgate checked first.',
    cta: 'Get box truck dispatch',
    shadow: 380,
    eyebrow: 'Box truck dispatch service',
    h1: ['Box truck dispatch', 'for 16 to 26 ft', 'straight trucks.'],
    lede: 'CDL or non-CDL, liftgate or dock-high. We book palletized, LTL, retail, final-mile and regional runs, plan in city time and appointment windows, and check dock and liftgate needs before a load reaches you.',
    trust: ['Dock and liftgate checked', 'Zero forced dispatch', 'Next load lined up'],
  },
};

export const DEFAULT_HERO = {
  eyebrow: 'Truck dispatch service for owner-operators',
  h1: ['Truck dispatch service', 'on your terms.', 'Next load lined up.'],
  lede: 'SMS Elite Mover dispatches hotshot, car hauler, flatbed and box truck owner-operators. You approve every load and see every rate confirmation. Plus fuel advances on booked loads and a first load with no dispatch fee if you qualify.',
  trust: ['Zero forced dispatch', 'Slow-pay brokers screened out', 'Booked under your authority'],
  cta: 'Get dispatched',
};

// The hero shadow is drawn 680 units long and scaled to each truck (transform only).
export const shadowScale = (units) => +(units / 680).toFixed(4);

export const ORDER = ['hotshot', 'flatbed', 'box'];
export const DEFAULT_TYPE = 'flatbed';

// ?type= values accepted (matched after lower-casing and trimming).
// next.config.mjs keeps its own copy of these so it can map ad URLs
// to the pre-rendered variant pages; keep both lists in sync.
export const TYPE_ALIASES = {
  hotshot: 'hotshot',
  flatbed: 'flatbed',
  'box-truck': 'box',
  boxtruck: 'box',
  box: 'box',
};

export function typeFromQuery(value) {
  if (typeof value !== 'string') return null;
  return TYPE_ALIASES[value.toLowerCase().trim()] || null;
}
