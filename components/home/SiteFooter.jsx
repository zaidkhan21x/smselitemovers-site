import { SITE, TEL_HREF, MAILTO_HREF } from '@/lib/site';
import { Logo } from '@/components/Logo';

export function SiteFooter() {
  const year = new Date().getFullYear(); // build year; the page script updates it in the browser
  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="brand" href="#top"><Logo className="brand-logo" /><span className="sr-only">{SITE.brand}</span></a>
              <p className="foot-blurb">Truck dispatch services for hotshot, flatbed and box truck owner-operators and small carriers. You drive. We work the phones.</p>
              <a className="btn btn-signal btn-sm" href="#contact" style={{ marginTop: '18px' }}>Get dispatched</a>
            </div>
            <div>
              <h4>Dispatch</h4>
              <ul>
                <li><a href="/?type=hotshot#top">Hotshot dispatch</a></li>
                <li><a href="/?type=flatbed#top">Flatbed dispatch</a></li>
                <li><a href="/?type=box-truck#top">Box truck dispatch</a></li>
                <li><a href="#services">All services</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#offers">Why us</a></li>
                <li><a href="#onboarding">Onboarding</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="contact-list">
                <li><a href={TEL_HREF} data-call>{SITE.phoneDisplay}</a></li>
                <li><span><a href={MAILTO_HREF}>{SITE.email}</a></span></li>
              </ul>
            </div>
          </div>
          <p className="foot-disclaimer">{`${SITE.brand} provides truck dispatch services to motor carriers. We are not a motor carrier and do not haul freight. Loads, rates, miles and earnings depend on market conditions and your choices, and are not guaranteed.`}</p>
          <div className="foot-bottom">
            <span>© <span id="year">{year}</span>{` ${SITE.brand}. All rights reserved.`}</span>
            <span><a href="/privacy">Privacy Policy</a> <a href="/terms">Terms</a> <a href="/terms#sms">SMS Terms</a></span>
          </div>
        </div>
      </footer>

      <div className="callbar" id="callbar">
        <a className="btn btn-ghost" href={TEL_HREF} data-call>Call now</a>
        <a className="btn btn-signal" href="#contact">Get dispatched</a>
      </div>
    </>
  );
}
