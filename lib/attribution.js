/* =========================================================
   WHERE A LEAD CAME FROM

   Google Ads auto-tagging appends a click id to the landing URL
   (gclid, or gbraid / wbraid for some app and iOS traffic). That
   id identifies the exact click: campaign, ad group, keyword and
   device. It is in the address bar only on the landing page, so
   it is captured on arrival, kept for the session, and attached
   to the lead when the form is sent.

   With it in the lead email, a carrier who signs and stays can be
   traced back to the search that produced them. Without it you
   only ever learn that a lead happened, not what bought it.

   Requires auto-tagging to be ON in Google Ads
   (Admin > Account settings > Auto-tagging). Without it there is
   no click id on the URL and these fields stay empty.

   Browser-only: every function here touches window, so call them
   from an effect, never during render.
   ========================================================= */

const CLICK_IDS = ['gclid', 'gbraid', 'wbraid'];
const STORE_KEY = 'sms_attribution_v1';

// Google's click-through lookback is up to 90 days, so a stored
// click stays useful about that long. Older entries are dropped.
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

const read = () => {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved?.capturedAt || Date.now() - saved.capturedAt > MAX_AGE_MS) return null;
    return saved;
  } catch {
    // Private mode, disabled storage, or corrupted JSON. Not worth
    // breaking the page over: the lead still sends, just unattributed.
    return null;
  }
};

/* Called once on arrival. Stores the click id when the URL carries
   one. A later ad click overwrites an earlier one, which matches
   how Google attributes: the most recent click wins. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = {};
    CLICK_IDS.forEach((key) => {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, 200);
    });
    if (Object.keys(found).length === 0) return;

    window.localStorage.setItem(
      STORE_KEY,
      JSON.stringify({
        ...found,
        landingPage: window.location.href.slice(0, 500),
        referrer: (document.referrer || '').slice(0, 500),
        capturedAt: Date.now(),
      }),
    );
  } catch {
    /* measurement must never break the page */
  }
}

/* Adds whatever was captured to the lead before it is sent.
   Adds nothing at all when the visitor did not arrive from an ad. */
export function attachAttribution(formData) {
  const saved = read();
  if (!saved) return;
  CLICK_IDS.forEach((key) => { if (saved[key]) formData.set(key, saved[key]); });
  if (saved.landingPage) formData.set('landingPage', saved.landingPage);
  if (saved.referrer) formData.set('adReferrer', saved.referrer);
  if (saved.capturedAt) formData.set('clickedAt', new Date(saved.capturedAt).toISOString());
}
