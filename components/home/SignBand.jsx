import { SITE, TEL_HREF } from '@/lib/site';
import { PhoneIcon } from '@/components/icons';

export function SignBand() {
  return (
    <section className="signband" aria-labelledby="signTitle">
      <div className="wrap">
        <div className="gantry">
          <div className="posts" aria-hidden="true"><i /><i /></div>
          <div className="truss" aria-hidden="true" />
          <div className="hangers" aria-hidden="true"><i /><i /></div>
          <div className="sign">
            <div className="sign-tab" aria-hidden="true">Dispatch</div>
            <div className="sign-inner">
              <div>
                <h2 id="signTitle">Talk to a dispatcher</h2>
                <div className="sign-num"><a href={TEL_HREF} data-call>{SITE.phoneDisplay}</a></div>
                <p>Tell us your truck and the lanes you like. We&apos;ll tell you straight how we&apos;d run your week.</p>
              </div>
              <svg className="sign-arrow" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M26 22L74 70" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                <path d="M78 30V74H34" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="cta-row">
                <a className="btn btn-signal" href={TEL_HREF} data-call>
                  <PhoneIcon />
                  Call dispatch
                </a>
                <a className="btn btn-ghost" href="#contact">Send the form instead</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
