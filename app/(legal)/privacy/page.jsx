import { SITE, TEL_HREF, MAILTO_HREF } from '@/lib/site';
import { LegalHeader, LegalFooter } from '@/components/legal/LegalChrome';

export const metadata = {
  title: `Privacy Policy | ${SITE.brand} Truck Dispatch`,
  description: `How ${SITE.brand} collects, uses and protects information from owner-operators and carriers, including phone numbers and text message consent.`,
  robots: 'index, follow',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <>
      <LegalHeader />
      <main>
        <h1>Privacy Policy</h1>
        <p className="meta">Effective date: November 8, 2026. Last updated: November 8, 2026.</p>
        <p className="intro">This policy explains what information {SITE.brand} collects when you visit our website, call us, text us or ask us to dispatch your truck, how we use it, who we share it with, and the choices you have.</p>
        <nav className="toc" aria-label="On this page">
          <strong>On this page</strong>
          <ol>
            <li>
              <a href="#who">Who we are</a>
            </li>
            <li>
              <a href="#collect">Information we collect</a>
            </li>
            <li>
              <a href="#use">How we use it</a>
            </li>
            <li>
              <a href="#sms">Text messages and your phone number</a>
            </li>
            <li>
              <a href="#share">Who we share it with</a>
            </li>
            <li>
              <a href="#cookies">Cookies, analytics and advertising</a>
            </li>
            <li>
              <a href="#dnt">Do Not Track and privacy signals</a>
            </li>
            <li>
              <a href="#choices">Your choices and rights</a>
            </li>
            <li>
              <a href="#retention">How long we keep it</a>
            </li>
            <li>
              <a href="#security">Security</a>
            </li>
            <li>
              <a href="#children">Children</a>
            </li>
            <li>
              <a href="#changes">Changes to this policy</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ol>
        </nav>
        <h2 id="who">1. Who we are</h2>
        <p>{SITE.brand} ("we", "us") provides truck dispatch services to motor carriers and owner-operators in the United States. We are not a motor carrier and do not haul freight. This policy covers our website at {SITE.domain}, our phone and text lines, and the information you give us while we dispatch your truck.</p>
        <h2 id="collect">2. Information we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li><strong>Contact details:</strong> your name, phone number, and email address if you share one.</li>
          <li><strong>Business details:</strong> your company name, MC and USDOT numbers, equipment type, home base, preferred lanes, rate and home-time preferences.</li>
          <li><strong>Onboarding documents:</strong> documents you send so we can set you up with brokers and shippers, such as your operating authority, W-9, certificate of insurance and notice of assignment for factoring. These can include your business tax ID and insurance details.</li>
          <li><strong>Communications:</strong> the content of calls, texts and emails with us, and your consent choices, including when and how you gave or withdrew consent.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Device and usage data:</strong> IP address, browser and device type, pages viewed, the page that referred you, and the date and time of your visit.</li>
          <li><strong>Advertising data:</strong> if you arrive from an ad, identifiers in the link (such as a Google click ID) that tell us which ad you clicked.</li>
          <li><strong>Cookies and similar technologies:</strong> see section 6.</li>
        </ul>
        <p>We do not ask for, and you should not send us through this website, bank account numbers, card numbers or login passwords.</p>
        <h2 id="use">3. How we use it</h2>
        <ul>
          <li>To respond to your request and call or text you back about dispatch.</li>
          <li>To provide dispatch: finding and booking loads you approve, negotiating rates, communicating with brokers and shippers, preparing setup packets and handling back-office tasks you ask for.</li>
          <li>To send load offers, onboarding reminders and service updates, by text only if you have agreed to receive texts.</li>
          <li>To run, secure and improve our website and services, and to measure which ads and pages bring in requests.</li>
          <li>To keep records of consent and opt-out requests, and to meet legal, tax and accounting obligations.</li>
        </ul>
        <p>We do not sell your personal information, and we do not share it for cross-context behavioral advertising in exchange for money.</p>
        <h2 id="sms">4. Text messages and your phone number</h2>
        <div className="box">
          <p><strong>We do not sell, rent or share your mobile phone number or your text message opt-in consent with any third party or affiliate for their own marketing purposes.</strong> Text messaging opt-in data and consent are not shared with third parties, except with the service providers that deliver our messages on our behalf.</p>
        </div>
        <p>If you check the optional box on our form, or otherwise agree, we may text you about dispatch services, load offers and onboarding. Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time, or <strong>HELP</strong> for help. You can also opt out by telling us on a call or by email; we honor opt-out requests made by any reasonable means within 10 business days or sooner. Agreeing to texts is never a condition of any purchase or service. Full program details are in our <a href="/terms#sms">SMS Terms</a>.</p>
        <h2 id="share">5. Who we share it with</h2>
        <ul>
          <li><strong>Brokers, shippers and factoring companies</strong> you work with through us, when you ask us to book a load, complete a setup packet or submit paperwork for payment. We share only what that task needs, such as your company details, authority, insurance certificate and the load documents.</li>
          <li><strong>Service providers</strong> that help us operate, such as website hosting, phone and text messaging, email, document storage, customer relationship management and analytics. They may use the information only to provide services to us.</li>
          <li><strong>Legal and safety:</strong> when required by law, subpoena or court order, or to protect the rights, safety or property of you, us or others.</li>
          <li><strong>Business transfers:</strong> if we are involved in a merger, acquisition or sale of assets, subject to this policy. Text message opt-in data and consent will not be transferred for a third party's own marketing.</li>
        </ul>
        <h2 id="cookies">6. Cookies, analytics and advertising</h2>
        <p>We use, or may use, cookies and similar technologies to keep the site working, understand how visitors use it and measure our advertising. This can include Google Analytics, Google Ads conversion tracking and, where enabled, remarketing.</p>
        <p>Third-party vendors, including Google, use cookies to serve ads based on a person's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on visits to this and other sites. First-party cookies (such as Google Analytics cookies) and third-party cookies (such as Google advertising cookies) may be used together to inform, optimize and serve ads and to measure ad performance.</p>
        <p>You can opt out of personalized advertising from Google at <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a>, opt out of Google Analytics with the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Google Analytics opt-out browser add-on</a>, and opt out of interest-based ads from many other companies at the <a href="https://optout.networkadvertising.org" rel="noopener">Network Advertising Initiative</a> or <a href="https://optout.aboutads.info" rel="noopener">Digital Advertising Alliance</a>. You can also block or delete cookies in your browser settings; some parts of the site may not work as well without them.</p>
        <p>Third parties such as Google may collect information about your online activity over time and across websites when you use our site.</p>
        <h2 id="dnt">7. Do Not Track and privacy signals</h2>
        <p>Our website does not currently respond to browser "Do Not Track" signals. Where a state law requires it, we treat a Global Privacy Control signal from your browser as a request to opt out of the sale or sharing of personal information for that browser.</p>
        <h2 id="choices">8. Your choices and rights</h2>
        <ul>
          <li><strong>Texts:</strong> reply STOP to any text, or tell us by phone or email.</li>
          <li><strong>Calls:</strong> tell us on a call, or contact us below, and we will add your number to our internal do-not-call list.</li>
          <li><strong>Email:</strong> use the unsubscribe link in any marketing email, or contact us.</li>
          <li><strong>Access, correction and deletion:</strong> you can ask to see, correct or delete the personal information we hold about you by contacting us below. We will verify your request and respond within the time the law requires. We may keep information we need for legal, tax or record-keeping purposes, including records of your consent and opt-out.</li>
          <li><strong>State privacy rights:</strong> depending on where you live, such as California, Colorado, Connecticut, Virginia or Texas, you may have additional rights, including to know what we collect, to correct or delete it, to opt out of sale, sharing or targeted advertising, and to appeal a decision. We do not discriminate against you for using these rights. An authorized agent may submit a request for you where the law allows.</li>
        </ul>
        <h2 id="retention">9. How long we keep it</h2>
        <p>We keep personal information for as long as we need it to provide dispatch, maintain our business records and meet legal obligations. Consent and opt-out records are kept for at least as long as we might contact you, and for a reasonable period afterward to show we followed your choices.</p>
        <h2 id="security">10. Security</h2>
        <p>We use reasonable administrative, technical and physical safeguards to protect personal information, including limiting access to people who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
        <h2 id="children">11. Children</h2>
        <p>Our services are for businesses and adults. We do not knowingly collect personal information from anyone under 18. If you believe a child has given us information, contact us and we will delete it.</p>
        <h2 id="changes">12. Changes to this policy</h2>
        <p>We may update this policy. When we do, we will change the "Last updated" date at the top of this page, and if the changes are material we will give notice on this website before they take effect. We will not use your text message consent in a materially different way without asking you again.</p>
        <h2 id="contact">13. Contact us</h2>
        <ul className="contact">
          <li><strong>{SITE.brand}</strong></li>
          <li>Phone: <a href={TEL_HREF}>{SITE.phoneDisplay}</a></li>
          <li>Email: <a href={MAILTO_HREF}>{SITE.email}</a></li>
        </ul>
        <div className="cta">
          <p>Ready to talk about your truck?</p>
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
