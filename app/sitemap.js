import { SITE } from '@/lib/site';

// Served at /sitemap.xml
export default function sitemap() {
  const lastModified = SITE.contentUpdated;
  return [
    { url: `${SITE.url}/`, lastModified },
    { url: `${SITE.url}/privacy`, lastModified },
    { url: `${SITE.url}/terms`, lastModified },
  ];
}
