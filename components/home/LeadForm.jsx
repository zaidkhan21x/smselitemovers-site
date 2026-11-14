import { SITE, TEL_HREF, MAILTO_HREF } from '@/lib/site';
import { Fragment } from 'react';
import { CheckIcon } from '@/components/icons';

/* Equipment choices offered in the form. Car hauler is its own choice
   (Deliverable B) and is dispatched through the hotshot desk, so it
   drives the hotshot hero without changing what the driver picked.
   The three ids that match lib/hero-types.js ORDER are kept, because
   HomeController syncs the hero selector to them. */
const FORM_EQUIPMENT = [
  { id: 'hotshot', label: 'Hotshot' },
  { id: 'car-hauler', label: 'Car hauler' },
  { id: 'flatbed', label: 'Flatbed' },
  { id: 'box', label: 'Box truck' },
];

/* type: the equipment pre-selected in the chips (follows ?type=). */
export function LeadForm({ type }) {
  return (
    <section className="lead" id="contact" aria-labelledby="leadTitle">
      <div className="wrap lead-grid">
        <div>
          <h2 className="h2" id="leadTitle">Get dispatched</h2>
          <p className="lede" style={{ marginTop: '18px' }}>{`Call ${SITE.phoneDisplay} or send the form with your truck, home base and the lanes you like.`}</p>
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

        {/* Submits to /api/lead, which emails the lead to dispatch and keeps
            the consent record (checkbox state, the exact disclosure text
            shown, timestamp, page URL and IP).
            noValidate: the page script shows its own messages. */}
        <form className="form" id="leadForm" method="post" action="/api/lead" noValidate>
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
              <div className="field full">
                <label htmlFor="f-email">Email</label>
                <input className="input" id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required />
                <div className="err" id="e-email" />
              </div>
              <fieldset className="field full">
                <legend>Equipment</legend>
                <div className="chips" style={{ marginTop: '7px' }}>
                  {FORM_EQUIPMENT.map((e) => (
                    <Fragment key={e.id}>
                      <input type="radio" name="equipment" id={`fe-${e.id}`} value={e.id} defaultChecked={e.id === type} />
                      <label htmlFor={`fe-${e.id}`}>{e.label}</label>
                    </Fragment>
                  ))}
                </div>
              </fieldset>
              <div className="field full">
                <label htmlFor="f-mc">MC number <span className="opt">(optional)</span></label>
                <input className="input" id="f-mc" name="mc" inputMode="numeric" placeholder="Leave blank if pending" />
              </div>
              {/* Spam trap: offscreen and not reachable by keyboard or
                  screen readers. A filled value means a bot. */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="f-company">Company (leave blank)</label>
                <input id="f-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="field full">
                <label className="consent">
                  <input type="checkbox" id="f-consent" name="consent" value="yes" />
                  <span><strong>Optional:</strong>{` I agree that ${SITE.brand} may call and text me at the number above, and email me if I share an email address, about dispatch services, load offers and onboarding, including by automated means. Consent is not a condition of any purchase or service. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. See our `}<a href="/terms#sms">SMS Terms</a> and <a href="/privacy">Privacy Policy</a>.</span>
                </label>
              </div>
            </div>
            <div className="form-foot">
              <button className="btn btn-signal" type="submit" id="leadSubmit">Get dispatched</button>
              <div className="err form-err" id="e-form" role="alert" />
              <small>{`By submitting, you're asking ${SITE.brand} to contact you about dispatch at the number you entered. We don't sell your information. `}<a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms</a>.</small>
            </div>
          </div>
          <div className="form-done" role="status">
            <div className="ok" aria-hidden="true"><CheckIcon ariaHidden={false} /></div>
            <h3 id="doneTitle">Request sent</h3>
            <p>A dispatcher will call you back to talk through your lanes and rates. Want to talk now? Call <a href={TEL_HREF} data-call>{SITE.phoneDisplay}</a>.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
