import { SITE, TEL_HREF } from '@/lib/site';
import { Logo } from '@/components/Logo';
import { PhoneIcon } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="site-header" id="siteHeader">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top" aria-label={`${SITE.brand} truck dispatch, home`}>
          <Logo className="brand-logo" />
        </a>
        <div className="nav-links">
          <a href="#offers">Why us</a>
          <a href="#services">Services</a>
          <a href="#equipment">Equipment</a>
          <a href="#onboarding">Onboarding</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-ghost btn-sm" href={TEL_HREF} data-call aria-label={`Call dispatch at ${SITE.phoneDisplay}`}>
            <PhoneIcon />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a className="btn btn-signal btn-sm" href="#contact">Get dispatched</a>
          <button className="menu-btn" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu">
            <span />
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a className="m-link" href="#offers">Why us</a>
        <a className="m-link" href="#services">Services</a>
        <a className="m-link" href="#equipment">Equipment</a>
        <a className="m-link" href="#onboarding">Onboarding</a>
        <a className="m-link" href="#faq">FAQ</a>
        <div className="cta-row">
          <a className="btn btn-ghost" href={TEL_HREF} data-call>Call dispatch</a>
          <a className="btn btn-signal" href="#contact">Get dispatched</a>
        </div>
      </div>
    </header>
  );
}
