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
   When analytics / Google Ads tags are added in the next phase, their
   domains must be added here (script-src, img-src, connect-src). */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
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
   lib/hero-types.js. */
const anyCase = (word) => word.replace(/[a-z]/g, (c) => `[${c}${c.toUpperCase()}]`);
const typeValue = (...words) => `\\s*(?:${words.map(anyCase).join('|')})\\s*`;

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
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('hotshot') }], destination: '/v/hotshot' },
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('flatbed') }], destination: '/v/flatbed' },
        { source: '/', has: [{ type: 'query', key: 'type', value: typeValue('box-truck', 'boxtruck', 'box') }], destination: '/v/box' },
      ],
    };
  },
};

export default nextConfig;
