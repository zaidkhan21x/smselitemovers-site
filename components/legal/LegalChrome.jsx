import { SITE, TEL_HREF } from '@/lib/site';
import { Logo } from '@/components/Logo';

export function LegalHeader() {
  return (
    <header className="top">
      <div className="top-in">
        <a className="brand" href="/"><Logo className="brand-logo" /><span className="sr-only">{SITE.brand}</span></a>
        <div className="top-actions">
          <a className="btn btn-ghost" href={TEL_HREF}>{SITE.phoneDisplay}</a>
          <a className="btn btn-signal" href="/#contact">Get dispatched</a>
        </div>
      </div>
    </header>
  );
}

export function LegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>{`© ${year} ${SITE.brand}`}</span>
      <span><a href="/">Home</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms</a><a href="/terms#sms">SMS Terms</a></span>
    </footer>
  );
}
