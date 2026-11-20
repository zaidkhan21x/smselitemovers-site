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
        <p className="meta">Effective date: November 8, 2026. Last updated: November 20, 2026.</p>
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
              <a href="#driver-offers">Driver Offers – Terms</a>
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
        <h2 id="driver-offers">4. Driver Offers – Terms</h2>
        <p>These terms apply to the driver offers shown on our website: same-day payout, fuel advance, free first load, routine rewards and referral rewards. Each offer is subject to eligibility, to the written dispatch agreement between {SITE.brand} and your company, and, where a partner provides the service, to that partner's own agreement and terms. Your dispatcher will confirm in writing whether an offer applies to you before you rely on it. Offers do not guarantee any number of loads, rates or earnings (see section 3). We may change or end any offer at any time by updating this page; a change does not take away a reward you have already earned under the version in effect when you earned it.</p>

        <h3 id="offer-same-day-payout">Same-day payout</h3>
        <ul>
          <li>Same-day funding is provided by our third-party factoring partner, not by {SITE.brand}, and only on loads the factoring partner accepts as eligible.</li>
          <li>To be funded the same day, the load must be delivered and the complete paperwork (including the signed proof of delivery and rate confirmation) received before the factoring partner's daily cut-off time. Your dispatcher will tell you the current cut-off time. Paperwork received after the cut-off, or on a weekend or bank holiday, is funded on a later business day.</li>
          <li>"Same day" refers to when funds are sent. When they reach your account depends on your bank.</li>
          <li>Factoring requires a separate agreement with the factoring partner, and the partner's fees and terms apply. We will point you to those terms before you sign up.</li>
        </ul>

        <h3 id="offer-fuel-advance">Fuel advance</h3>
        <ul>
          <li>A fuel advance is an advance against the pay for a specific load that is already booked. It is not free fuel, a gift or a discount.</li>
          <li>The amount advanced is deducted from, or repaid out of, the pay for that load when it settles.</li>
          <li>Advances are available on qualifying booked loads only. Whether a load qualifies, the amount available and any fee are confirmed by your dispatcher before you accept an advance.</li>
          <li>If the load is cancelled or not delivered, the advance must still be repaid.</li>
        </ul>

        <h3 id="offer-free-first-load">Free first load</h3>
        <ul>
          <li>We charge no dispatch fee on the first load we dispatch for a carrier that is new to {SITE.brand}. Normal dispatch fees, as set out in the dispatch agreement, apply from the second load.</li>
          <li>Eligibility is based on your MC authority and standing, including active operating authority and insurance in good standing. Call us to see if you qualify; approval is at our discretion.</li>
          <li>One free first load per carrier and MC number.</li>
          <li>"No setup fee, no contract" means there is no setup fee and no long-term commitment: you can stop using our service under the cancellation terms of the dispatch agreement, which is signed before any load is booked.</li>
          <li>The offer covers our dispatch fee only. It does not cover fuel, tolls, factoring fees or any other cost of running the load.</li>
        </ul>

        <h3 id="offer-routine-rewards">Routine rewards</h3>
        <ul>
          <li>Carriers who deliver on time and stay dependable may earn lower dispatch fees and first pick of available loads.</li>
          <li>We decide who qualifies, based on your record with us, including on-time delivery, communication and completed loads. Reward levels are confirmed with you in writing and may be reviewed over time.</li>
          <li>"First pick" means you are offered suitable loads before other carriers. It is not a guarantee of any number of loads or of any rate.</li>
          <li>There is no contract locking you in to earn or keep these rewards.</li>
        </ul>

        <h3 id="offer-referral">Referral rewards</h3>
        <ul>
          <li>If you refer an owner-operator or carrier that is new to {SITE.brand}, you can earn up to 5% of the referred carrier's load revenue, for up to 30 days.</li>
          <li>You become eligible once the referred carrier has completed 3 months of dispatch with {SITE.brand}.</li>
          <li>The referred carrier must name you when they sign up. The exact percentage, the 30-day period it applies to and how it is paid are confirmed with you in writing.</li>
          <li>No reward is paid for a carrier that is already working with us or that stops dispatch with us before completing 3 months.</li>
        </ul>

        <h2 id="site">5. Using this website</h2>
        <p>You agree to give accurate information, to submit only your own contact details or details you are authorized to share, and not to misuse the site, including by attempting to disrupt it, scrape it or submit false requests.</p>
        <h2 id="contact-consent">6. Calls, texts and emails</h2>
        <p>When you submit our form or call us, you ask us to contact you about dispatch at the number you gave. If you also check the optional consent box, you agree that {SITE.brand} may call and text you at that number, and email you if you share an email address, about dispatch services, load offers and onboarding, including by automated means. Consent is not a condition of any purchase or service. You can withdraw consent at any time by any reasonable means, including replying STOP to a text or telling us on a call.</p>
        <h2 id="sms">7. SMS Terms</h2>
        <div className="box">
          <p><strong>Program name:</strong> {SITE.brand} Dispatch Texts.</p>
          <p><strong>What you'll receive:</strong> texts about your request for dispatch services, load offers for your approval, onboarding reminders, booking and paperwork updates, and follow-ups from our dispatch team.</p>
          <p><strong>How you join:</strong> by checking the optional, unchecked consent box on our website form, or by texting us first and agreeing to receive messages.</p>
          <p><strong>Message frequency</strong> varies based on your activity and loads. <strong>Message and data rates may apply.</strong></p>
          <p><strong>To stop:</strong> reply <strong>STOP</strong> to any message. We'll send one message confirming you've opted out, and then no more texts unless you opt in again.</p>
          <p><strong>For help:</strong> reply <strong>HELP</strong>, call <a href={TEL_HREF}>{SITE.phoneDisplay}</a> or email <a href={MAILTO_HREF}>{SITE.email}</a>.</p>
          <p>Consent to receive texts is not a condition of any purchase or service. Mobile carriers are not liable for delayed or undelivered messages. Your information is handled under our <a href="/privacy">Privacy Policy</a>, and we do not share your mobile number or text opt-in consent with third parties for their marketing.</p>
        </div>
        <h2 id="ip">8. Our content</h2>
        <p>The website, including its text, illustrations, design and the {SITE.brand} name and logo, belongs to us and is protected by law. You may view and print pages for your own use. You may not copy, modify or reuse the content for commercial purposes without our written permission.</p>
        <h2 id="links">9. Links to other sites</h2>
        <p>Our site may link to websites we don't control, such as opt-out pages or industry resources. We are not responsible for their content or privacy practices.</p>
        <h2 id="warranty">10. Disclaimers</h2>
        <p>The website and its content are provided "as is" and "as available". To the extent the law allows, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. Content on the site is general information, not legal, tax, financial or regulatory advice.</p>
        <h2 id="liability">11. Limitation of liability</h2>
        <p>To the extent the law allows, we are not liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits or revenue, arising from your use of this website. Our total liability arising from your use of the website is limited to one hundred US dollars ($100). Nothing in these terms limits liability that cannot be limited by law. Liability for dispatch services is governed by the dispatch agreement.</p>
        <h2 id="changes">12. Changes and contact</h2>
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
