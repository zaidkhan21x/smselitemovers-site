// next.config.mjs
// Hostinger reads this file and wraps it, so it must export a plain
// object (not a function). Hostinger also forces output: 'standalone'.

const isDev = process.env.NODE_ENV === 'development';

/* ---------- Security headers ----------
   Content-Security-Policy notes:
   - script-src 'unsafe-inline': a statically generated Next.js page
     contains inline <script> tags that carry its page data
     (self.__next_f.push(...)). Without per-request nonces, which would
     stop the pages from being static, these only run with
     'unsafe-inline'. There are no third-party scripts and no eval.
   - style-src 'unsafe-inline': the markup uses style attributes for
     per-element values (truck sizes via --units, the selector pill
     position, the truck shadow width, a few spacing values).
   - 'unsafe-eval' is only added for `next dev` (local development);
     production builds never get it.
   - img-src data: is for the select arrow drawn as a data: SVG in CSS.

   Google tag (gtag.js) domains, for GA4 and Google Ads conversions.
   Without these the browser refuses the tag and nothing is measured,
   with no visible error on the page. Keep this list in step with
   lib/analytics.js:
   - googletagmanager.com    serves gtag.js itself
   - google-analytics.com    where GA4 sends its hits
   - analytics.google.com    GA4 hits in some regions
   - doubleclick.net         Google Ads conversion pings and frames
   - google.com              Google Ads conversion pings
   Only these exact hosts are allowed, so no other third-party
   script can load even if one is ever injected. */
const google = {
  script: 'https://www.googletagmanager.com',
  img: 'https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net',
  connect: 'https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com',
  frame: 'https://td.doubleclick.net https://www.googletagmanager.com',
};

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${google.script}${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: ${google.img}`,
  "font-src 'self'",
  `connect-src 'self' ${google.connect}`,
  `frame-src 'self' ${google.frame}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "worker-src 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  // One year. Add "; includeSubDomains" once every subdomain is on HTTPS.
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), hid=(), midi=(), magnetometer=(), gyroscope=(), accelerometer=(), display-capture=()',
  },
];

/* ---------- ?type= ad URLs ----------
   /?type=hotshot, /?type=flatbed and /?type=box-truck (also boxtruck, box)
   are served the matching pre-rendered page from /v/<type>, so the
   headline, truck and selector are right in the first HTML. The browser
   keeps showing /?type=... Matching ignores letter case and surrounding
   spaces, like the page script does. Keep in sync with TYPE_ALIASES in
   lib/hero-types.js.

   ?offer= ad URLs work the same way: /?offer=<slug> is served the
   pre-rendered page from /o/<slug>, and /?type=<type>&offer=<slug>
   (either order) the one from /v/<type>/o/<slug>, so the hero sub-line
   is locked to that offer in the first HTML. Keep OFFER_SLUGS in sync
   with lib/offers.js. Combined rules come first: a rewrite that matches
   moves the request off "/", so the later rules no longer apply. */
const anyCase = (word) => word.replace(/[a-z]/g, (c) => `[${c}${c.toUpperCase()}]`);
const typeValue = (...words) => `\\s*(?:${words.map(anyCase).join('|')})\\s*`;

const TYPE_QUERY = [
  ['hotshot', ['hotshot']],
  ['flatbed', ['flatbed']],
  ['box', ['box-truck', 'boxtruck', 'box']],
];
const OFFER_SLUGS = ['same-day-payout', 'fuel-advance', 'free-first-load', 'routine-rewards', 'referral'];
const typeHas = (words) => ({ type: 'query', key: 'type', value: typeValue(...words) });
const offerHas = (slug) => ({ type: 'query', key: 'offer', value: typeValue(slug) });

const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },

  async redirects() {
    return [
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // ?type= and ?offer= together
        ...TYPE_QUERY.flatMap(([variant, words]) => OFFER_SLUGS.map((slug) => (
          { source: '/', has: [typeHas(words), offerHas(slug)], destination: `/v/${variant}/o/${slug}` }
        ))),
        // ?type= only
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('hotshot') }], destination: '/v/hotshot' },
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('flatbed') }], destination: '/v/flatbed' },
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('box-truck', 'boxtruck', 'box') }], destination: '/v/box' },
        // ?offer= only
        ...OFFER_SLUGS.map((slug) => ({ source: '/', has: [offerHas(slug)], destination: `/o/${slug}` })),
      ],
    };
  },
};

export default nextConfig;
