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
   ADS_CONVERSIONS holds one entry per action: its conversion
   label, and a value only where the action is configured to take
   one from the event. Both are shown in Google Ads > Goals >
   Conversions > the action > "Tag setup", in the event snippet as
   send_to: "<ADS_ID>/<label>".

   Where an entry has no value, Google applies the value set on the
   conversion action itself, so it can be changed in Google Ads
   without touching this file.

   Leave ADS_ID empty to switch Google Ads off. While it is empty
   nothing Google Ads related is loaded or fired, and the site keeps
   working normally.

   NOTE: adding any new tracking domain also means adding it to
   the Content-Security-Policy in next.config.mjs, or the
   browser will silently refuse to load it.
   ========================================================= */

export const GA4_ID = 'G-XLHDJ98NT5';

export const ADS_ID = 'AW-18425936262';

export const ADS_CONVERSIONS = {
  // "lead_form_sms" — Submit lead form, primary.
  // No value here: the action carries its own value in Google Ads.
  lead: { label: 'hbMyCInVobgdEIbz1dJE' },
  // "Contact_sms_calltap" — Contact, primary.
  // Its event snippet supplies the value, so it is sent here too.
  call: { label: 'j3b3CIzVobgdEIbz1dJE', value: 1.0, currency: 'USD' },
};

/** True when the Google Ads conversion IDs have been filled in. */
export const adsEnabled = () => Boolean(ADS_ID);

/** Every Google tag id to load, in order. GA4 first. */
export const tagIds = () => [GA4_ID, ...(adsEnabled() ? [ADS_ID] : [])].filter(Boolean);
