import { SITE } from '@/lib/site';

// Served at /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /v/* are the internal pages behind /?type=... ad URLs; they are never linked.
      disallow: '/v/',
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
