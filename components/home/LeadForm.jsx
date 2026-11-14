import { SITE, TEL_HREF, MAILTO_HREF } from '@/lib/site';
import { ORDER, TYPES } from '@/lib/hero-types';
import { Fragment } from 'react';
import { CheckIcon } from '@/components/icons';

/* type: the equipment pre-selected in the chips (follows ?type=). */
export function LeadForm({ type }) {
  return (
    <section className="lead" id="contact" aria-labelledby="leadTitle">
      <div className="wrap lead-grid">
        <div>
          <h2 className="h2" id="leadTitle">Get dispatched</h2>
          <p className="lede" style={{ marginTop: '18px' }}>Leave your name and number. A dispatcher calls you back to talk through your truck, your lanes and your rates.</p>
          <ol className="next-steps">
            <li><div><strong>We call you back</strong><span>A dispatcher who&apos;ll actually work your truck.</span></div></li>
            <li><div><strong>We set your lanes and rate floor</strong><span>Your rules, written down before we book anything.</span></div></li>
            <li><div><strong>We book your first load</strong><span>You approve it. Then we start on the next one.</span></div></li>
          </ol>
          <div className="call-card">
            <div className="lbl">Rather talk now?</div>
            <div className="num"><a href={TEL_HREF} data-call>{SITE.phoneDisplay}</a></div>
            <div className="mail"><span><a href={MAILTO_HREF}>{SITE.email}</a></span></div>
            <a className="btn btn-signal btn-sm" href={TEL_HREF} data-call>Call dispatch</a>
          </div>
        </div>

        {/* PHASE 3: wire submission (endpoint, consent record with timestamp + disclosure text, spam protection, tracking). UI only for now.
            method="dialog": outside a <dialog> the browser cancels the submission, so if someone presses
            submit before the page script has loaded, nothing navigates and no details end up in the URL. */}
        <form className="form" id="leadForm" method="dialog" noValidate>
          <div className="form-body">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="f-name">Full name</label>
                <input className="input" id="f-name" name="name" autoComplete="name" required />
                <div className="err" id="e-name" />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input className="input" id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
                <div className="err" id="e-phone" />
              </div>
              <fieldset className="field full">
                <legend>Equipment</legend>
                <div className="chips" style={{ marginTop: '7px' }}>
                  {ORDER.map((t) => (
                    <Fragment key={t}>
                      <input type="radio" name="equipment" id={`fe-${t}`} value={t} defaultChecked={t === type} />
                      <label htmlFor={`fe-${t}`}>{TYPES[t].name}</label>
                    </Fragment>
                  ))}
                </div>
              </fieldset>
              <div className="field full">
                <label htmlFor="f-mc">MC number <span className="opt">(optional)</span></label>
                <input className="input" id="f-mc" name="mc" inputMode="numeric" placeholder="Leave blank if pending" />
              </div>
              <div className="field full">
                <label className="consent">
                  <input type="checkbox" id="f-consent" name="consent" value="yes" />
                  <span><strong>Optional:</strong>{` I agree that ${SITE.brand} may call and text me at the number above, and email me if I share an email address, about dispatch services, load offers and onboarding, including by automated means. Consent is not a condition of any purchase or service. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. See our `}<a href="/terms#sms">SMS Terms</a> and <a href="/privacy">Privacy Policy</a>.</span>
                </label>
              </div>
            </div>
            <div className="form-foot">
              <button className="btn btn-signal" type="submit">Get dispatched</button>
              <small>{`By submitting, you're asking ${SITE.brand} to contact you about dispatch at the number you entered. We don't sell your information. `}<a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms</a>.</small>
            </div>
          </div>
          <div className="form-done" role="status">
            <div className="ok" aria-hidden="true"><CheckIcon ariaHidden={false} /></div>
            <h3 id="doneTitle">Request ready</h3>
            <p>A dispatcher will call you back to talk through your lanes and rates. Want to talk now? Call <a href={TEL_HREF} data-call>{SITE.phoneDisplay}</a>.</p>
            <div className="preview-note">Preview build: this form is not connected yet, so nothing was sent. Submission wiring is scheduled for Phase 3.</div>
            <div className="cta-row" style={{ marginTop: '20px' }}><button className="btn btn-ghost btn-sm" type="button" id="formReset">Edit details</button></div>
          </div>
        </form>
      </div>
    </section>
  );
}
