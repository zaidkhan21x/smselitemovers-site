/* Equipment data and the ad-group hero headlines used by ?type=.
   Shared by the server-rendered page and the client controller. */

export const TYPES = {
  hotshot: {
    name: 'Hotshot',
    spec: 'Pickup with a gooseneck or bumper-pull flatbed, often 40 ft',
    loads: 'Expedites, partials and equipment moves, with the reload planned before you unload.',
    cta: 'Dispatch my hotshot',
    shadow: 560,
    h1: ['Hotshot dispatch', 'with the reload', 'planned ahead.'],
    lede: 'Dispatch for hotshot owner-operators running goosenecks and bumper pulls. We work expedites, partials and equipment moves, and we plan the reload before you unload so fewer miles home come out of your pocket. You approve every load.',
  },
  flatbed: {
    name: 'Flatbed',
    spec: 'Semi with a 48 or 53 ft flatbed or step deck',
    loads: 'Steel, lumber, pipe and machinery. Securement and tarp needs confirmed before you say yes.',
    cta: 'Dispatch my flatbed',
    shadow: 680,
    h1: ['Flatbed dispatch', 'with tarp pay', 'on the rate con.'],
    lede: 'Dispatch for flatbed and step deck owner-operators hauling steel, lumber, pipe and machinery. We confirm securement and tarp needs before you accept and negotiate tarp pay up front, not at the shipper. You approve every load.',
  },
  box: {
    name: 'Box Truck',
    spec: '16 to 26 ft straight truck, CDL or non-CDL',
    loads: 'Palletized, LTL, retail and final-mile freight matched to your dock height, liftgate and payload.',
    cta: 'Dispatch my box truck',
    shadow: 380,
    h1: ['Box truck dispatch', 'that checks dock', 'and liftgate first.'],
    lede: 'Dispatch for 16 to 26 ft box truck owner-operators, CDL or non-CDL. We match freight to your dock height, liftgate and payload, and plan around the city miles that eat your day. You approve every load.',
  },
};

export const DEFAULT_HERO = {
  h1: ['Truck dispatch', 'on your terms.', 'Next load lined up.'],
  lede: 'Dispatch for owner-operators and small carriers running hotshot, flatbed and box trucks. We find the freight, push the rate and work to book your next load before you deliver. You approve every load, and you see every rate con.',
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
