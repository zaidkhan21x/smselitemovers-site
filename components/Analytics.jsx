import Script from 'next/script';
import { GA4_ID, ADS_ID, adsEnabled, tagIds } from '@/lib/analytics';

/* Loads the Google tag (gtag.js) once for the whole site.

   One script serves both GA4 and Google Ads: it is requested with
   the GA4 id and each extra product is turned on with its own
   gtag('config', ...) line. There is no Google Tag Manager
   container, so nothing can be added to this site from outside
   the repository.

   strategy="afterInteractive" loads it after the page is usable,
   so measurement never delays the first paint or the call button.

   Renders nothing at all when no ids are configured. */
export function Analytics() {
  if (tagIds().length === 0) return null;

  const configLines = [
    // send_page_view is left on: it is the pageview GA4 needs.
    `gtag('config', '${GA4_ID}');`,
    adsEnabled() ? `gtag('config', '${ADS_ID}');` : '',
  ].filter(Boolean).join('\n');

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${configLines}`}
      </Script>
    </>
  );
}
