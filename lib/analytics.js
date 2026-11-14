/* =========================================================
   MEASUREMENT CONFIG

   One place for every tracking ID. These are public values that
   ship to the browser, so they live here rather than in an
   environment variable.

   GA4 ------------------------------------------------------
   GA4_ID is the Measurement ID of the web stream created for
   this site ("sms stream", https://www.smselitemover.com).
   Find it in Google Analytics > Admin > Data streams > the
   stream > Measurement ID. It always starts with "G-".

   Google Ads ----------------------------------------------
   ADS_ID is the Conversion ID, starting with "AW-", shared by
   every conversion action in the Google Ads account.
   ADS_LABELS holds one conversion label per action. Both are
   shown in Google Ads > Goals > Conversions > the action >
   "Tag setup" > "Install the tag yourself".

   Leave ADS_ID empty until the real values are in hand. While
   it is empty nothing Google Ads related is loaded or fired,
   and the site keeps working normally. Filling it in is the
   only change needed to turn conversions on.

   NOTE: adding any new tracking domain also means adding it to
   the Content-Security-Policy in next.config.mjs, or the
   browser will silently refuse to load it.
   ========================================================= */

export const GA4_ID = 'G-XLHDJ98NT5';

export const ADS_ID = '';

export const ADS_LABELS = {
  lead: '', // "Lead form submitted"  (primary)
  call: '', // "Call button tapped"   (secondary)
};

/** True when the Google Ads conversion IDs have been filled in. */
export const adsEnabled = () => Boolean(ADS_ID);

/** Every Google tag id to load, in order. GA4 first. */
export const tagIds = () => [GA4_ID, ...(adsEnabled() ? [ADS_ID] : [])].filter(Boolean);
