import { SITE, TEL_HREF, MAILTO_HREF } from '@/lib/site';
import { LegalHeader, LegalFooter } from '@/components/legal/LegalChrome';

export const metadata = {
  title: `Terms and SMS Terms | ${SITE.brand} Truck Dispatch`,
  description: `Terms for using the ${SITE.brand} website and dispatch communications, including our text message program terms, STOP and HELP instructions.`,
  robots: 'index, follow',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <>
      <LegalHeader />
      <main>
        <h1>Terms</h1>
        <p className="meta">Effective date: November 8, 2026. Last updated: November 8, 2026.</p>
        <p className="intro">These terms cover your use of the {SITE.brand} website and our calls, texts and emails. Dispatch work itself is covered by a separate written dispatch agreement that we sign with your company before we book any load.</p>
        <nav className="toc" aria-label="On this page">
          <strong>On this page</strong>
          <ol>
            <li>
              <a href="#who">Who we are</a>
            </li>
            <li>
              <a href="#service">What we do and don't do</a>
            </li>
            <li>
              <a href="#no-guarantee">No guarantee of loads or earnings</a>
            </li>
            <li>
              <a href="#site">Using this website</a>
            </li>
            <li>
              <a href="#contact-consent">Calls, texts and emails</a>
            </li>
            <li>
              <a href="#sms">SMS Terms</a>
            </li>
            <li>
              <a href="#ip">Our content</a>
            </li>
            <li>
              <a href="#links">Links to other sites</a>
            </li>
            <li>
              <a href="#warranty">Disclaimers</a>
            </li>
            <li>
              <a href="#liability">Limitation of liability</a>
            </li>
            <li>
              <a href="#changes">Changes and contact</a>
            </li>
          </ol>
        </nav>
        <h2 id="who">1. Who we are</h2>
        <p>This website is operated by {SITE.brand} ("we", "us"). By using this website or giving us your contact details, you agree to these terms. If you don't agree, please don't use the site.</p>
        <h2 id="service">2. What we do and don't do</h2>
        <ul>
          <li>We provide truck dispatch and related back-office services to motor carriers and owner-operators who hold their own operating authority, or are applying for it.</li>
          <li>We work on your behalf. You approve every load before it is booked. There is no forced dispatch, and declining a load never counts against you.</li>
          <li>We are not a motor carrier and do not haul freight, take possession of cargo or operate trucks.</li>
          <li>You remain responsible for your operating authority, insurance, safety and regulatory compliance, hours of service, vehicle condition, cargo securement and the decision to accept each load.</li>
          <li>Fees, payment terms and the scope of services are set out in the dispatch agreement, not on this website.</li>
        </ul>
        <h2 id="no-guarantee">3. No guarantee of loads or earnings</h2>
        <p>Freight markets change daily. We work to find quality loads, negotiate strong rates and line up your next load before you deliver, and when a next load is booked we will send you the rate confirmation on request. But we do not guarantee any number of loads, any rate, miles, lanes, home time or income. Examples on this website, including the example load offer, are illustrations, not real loads or promises.</p>
        <h2 id="site">4. Using this website</h2>
        <p>You agree to give accurate information, to submit only your own contact details or details you are authorized to share, and not to misuse the site, including by attempting to disrupt it, scrape it or submit false requests.</p>
        <h2 id="contact-consent">5. Calls, texts and emails</h2>
        <p>When you submit our form or call us, you ask us to contact you about dispatch at the number you gave. If you also check the optional consent box, you agree that {SITE.brand} may call and text you at that number, and email you if you share an email address, about dispatch services, load offers and onboarding, including by automated means. Consent is not a condition of any purchase or service. You can withdraw consent at any time by any reasonable means, including replying STOP to a text or telling us on a call.</p>
        <h2 id="sms">6. SMS Terms</h2>
        <div className="box">
          <p><strong>Program name:</strong> {SITE.brand} Dispatch Texts.</p>
          <p><strong>What you'll receive:</strong> texts about your request for dispatch services, load offers for your approval, onboarding reminders, booking and paperwork updates, and follow-ups from our dispatch team.</p>
          <p><strong>How you join:</strong> by checking the optional, unchecked consent box on our website form, or by texting us first and agreeing to receive messages.</p>
          <p><strong>Message frequency</strong> varies based on your activity and loads. <strong>Message and data rates may apply.</strong></p>
          <p><strong>To stop:</strong> reply <strong>STOP</strong> to any message. We'll send one message confirming you've opted out, and then no more texts unless you opt in again.</p>
          <p><strong>For help:</strong> reply <strong>HELP</strong>, call <a href={TEL_HREF}>{SITE.phoneDisplay}</a> or email <a href={MAILTO_HREF}>{SITE.email}</a>.</p>
          <p>Consent to receive texts is not a condition of any purchase or service. Mobile carriers are not liable for delayed or undelivered messages. Your information is handled under our <a href="/privacy">Privacy Policy</a>, and we do not share your mobile number or text opt-in consent with third parties for their marketing.</p>
        </div>
        <h2 id="ip">7. Our content</h2>
        <p>The website, including its text, illustrations, design and the {SITE.brand} name and logo, belongs to us and is protected by law. You may view and print pages for your own use. You may not copy, modify or reuse the content for commercial purposes without our written permission.</p>
        <h2 id="links">8. Links to other sites</h2>
        <p>Our site may link to websites we don't control, such as opt-out pages or industry resources. We are not responsible for their content or privacy practices.</p>
        <h2 id="warranty">9. Disclaimers</h2>
        <p>The website and its content are provided "as is" and "as available". To the extent the law allows, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. Content on the site is general information, not legal, tax, financial or regulatory advice.</p>
        <h2 id="liability">10. Limitation of liability</h2>
        <p>To the extent the law allows, we are not liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits or revenue, arising from your use of this website. Our total liability arising from your use of the website is limited to one hundred US dollars ($100). Nothing in these terms limits liability that cannot be limited by law. Liability for dispatch services is governed by the dispatch agreement.</p>
        <h2 id="changes">11. Changes and contact</h2>
        <p>We may update these terms by posting a new version on this page with a new "Last updated" date. Changes apply from that date. Questions? Contact us:</p>
        <ul className="contact">
          <li><strong>{SITE.brand}</strong></li>
          <li>Phone: <a href={TEL_HREF}>{SITE.phoneDisplay}</a></li>
          <li>Email: <a href={MAILTO_HREF}>{SITE.email}</a></li>
        </ul>
        <div className="cta">
          <p>Questions about how we'd dispatch your truck?</p>
          <div>
            <a className="btn btn-ghost" href={TEL_HREF}>Call {SITE.phoneDisplay}</a>
            <a className="btn btn-signal" href="/#contact">Get dispatched</a>
          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  );
}
