import { HEAVY_OFFERS, REWARD_OFFERS, DRIVER_OFFERS, offerTermsHref } from '@/lib/offers';
import { OfferIcon, ArrowIcon, CheckIcon } from '@/components/icons';
import { Truck } from '@/components/trucks';

/* =========================================================
   Driver offers block (#perks): the offer strip, the three
   full offer sections and the shared Driver rewards section.
   All copy is static, server-rendered text.

   Each offer section has a small looping illustration (.perk-anim)
   whose phases line up with its three "how it works" steps, which
   light up in turn. The loops run on one 6s cycle, are paused while
   off-screen by the page script and are switched off (showing the
   finished state) under prefers-reduced-motion. Illustrations are
   aria-hidden: the steps and copy carry the meaning.

   Anchors: #perks (whole block), #same-day-payout, #fuel-advance,
   #free-first-load, #driver-rewards, plus #routine-rewards and
   #referral on the two rewards cards. #offers is the "Why us"
   section and is NOT used here.

   Every offer link and CTA carries data-offer="<slug>", which the
   page script writes into the lead form's hidden "offer" field.
   ========================================================= */

/* Section surface, taken from surfaces the page already uses:
   indigo (hero / equipment), light dust (services), deep teal. */
const THEME = {
  'same-day-payout': 'is-indigo',
  'fuel-advance': 'is-light',
  'free-first-load': 'is-teal',
};

function VisualHead({ children }) {
  return (
    <div className="pv-head">
      <span>{children}</span>
      <span className="pv-tag">Illustration</span>
    </div>
  );
}

/* Broker terms vs same-day funding: the fast bar fills, the truck
   delivers, then the "paid today" note pops. */
function PayoutVisual() {
  return (
    <div className="pv pv-pay perk-anim" aria-hidden="true">
      <VisualHead>When the money lands</VisualHead>
      <div className="pay-row is-slow">
        <div className="pay-top"><span>Broker terms</span><strong>30–60 days</strong></div>
        <div className="pay-track"><i className="pay-fill" /></div>
      </div>
      <div className="pay-row is-fast">
        <div className="pay-top"><span>Via our factoring partner</span><strong>Same day</strong></div>
        <div className="pay-track">
          <i className="pay-fill" />
          <div className="pay-runner"><Truck type="flatbed" beam={false} className="mini" style={{ '--u': '.1px' }} /></div>
        </div>
      </div>
      <div className="pv-toast">
        <CheckIcon ariaHidden={false} />
        <span>Delivered · POD sent · <b>Paid today</b></span>
      </div>
    </div>
  );
}

/* Fuel gauge swings from E to F as the advance comes through. */
function FuelVisual() {
  const ticks = Array.from({ length: 9 }, (_, i) => -80 + i * 20);
  return (
    <div className="pv pv-fuel perk-anim" aria-hidden="true">
      <VisualHead>Your tank</VisualHead>
      <div className="gauge">
        <svg viewBox="0 0 240 140">
          <path d="M30 120 A90 90 0 0 1 210 120" fill="none" stroke="rgba(17,17,17,.1)" strokeWidth="16" strokeLinecap="round" />
          <path d="M150 35.15 A90 90 0 0 1 210 120" fill="none" stroke="#FF8A3D" strokeWidth="16" strokeLinecap="round" opacity=".9" />
          {ticks.map((a) => (
            <line key={a} x1="120" y1="44" x2="120" y2="52" stroke="rgba(17,17,17,.35)" strokeWidth="2" transform={`rotate(${a} 120 120)`} />
          ))}
          <text className="svg-body" x="34" y="138" fontSize="15" fontWeight="700" fill="#3F5A66">E</text>
          <text className="svg-body" x="196" y="138" fontSize="15" fontWeight="700" fill="#3F5A66">F</text>
          <g className="gauge-needle">
            <path d="M120 120 L117 120 L120 46 L123 120 Z" fill="#111111" />
          </g>
          <circle cx="120" cy="120" r="11" fill="#111111" />
          <circle cx="120" cy="120" r="4" fill="#F2EDEA" />
        </svg>
      </div>
      <div className="pv-status">
        <span className="ph ph1"><i />Load booked</span>
        <span className="ph ph2"><i />Advance requested</span>
        <span className="ph ph3"><i />Funds ready for fuel</span>
      </div>
    </div>
  );
}

/* First-load settlement sheet: the dispatch fee is struck to $0,
   then the "first load on us" stamp lands. */
function FirstLoadVisual() {
  return (
    <div className="pv pv-first perk-anim" aria-hidden="true">
      <VisualHead>Settlement · Load #1</VisualHead>
      <ul className="bill">
        <li><span>Line haul</span><i className="skel" /></li>
        <li><span>Setup fee</span><b>$0</b></li>
        <li className="bill-fee">
          <span>Dispatch fee</span>
          <span className="bill-amt"><span className="bill-was"><i className="skel" /><i className="strike" /></span><b className="bill-zero">$0</b></span>
        </li>
        <li><span>Long-term contract</span><b>None</b></li>
      </ul>
      <div className="stamp">First load<br />on us</div>
    </div>
  );
}

const VISUALS = {
  'same-day-payout': PayoutVisual,
  'fuel-advance': FuelVisual,
  'free-first-load': FirstLoadVisual,
};

function OfferStrip() {
  return (
    <section className="perk-strip-sec" aria-labelledby="perksTitle">
      <div className="wrap">
        <div className="perk-strip-head reveal">
          <p className="perk-kicker">Driver offers</p>
          <h2 className="perk-strip-title" id="perksTitle">More than dispatch: <span>money, fuel and upside</span></h2>
        </div>
        <ul className="perk-strip">
          {DRIVER_OFFERS.map((o, i) => (
            <li key={o.slug} className="reveal" style={{ '--d': `${i * 70}ms` }}>
              <a className={`perk-card${o.heavy ? ' is-heavy' : ''}`} href={`#${o.slug}`} data-offer={o.slug}>
                <span className="perk-ico"><OfferIcon name={o.icon} /></span>
                <span className="perk-card-text">
                  <span className="perk-card-kicker">{o.name}</span>
                  <strong>{o.strip}</strong>
                </span>
                <span className="perk-card-go"><ArrowIcon /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OfferSection({ offer, index }) {
  const titleId = `perk-${offer.slug}-title`;
  const Visual = VISUALS[offer.slug];
  return (
    <section className="perk" id={offer.slug} aria-labelledby={titleId}>
      <div className="wrap">
        <div className={`perk-panel ${THEME[offer.slug]} reveal`}>
          <div className="perk-promise">
            <p className="perk-kicker"><span className="perk-count">{`0${index + 1}`}</span>{offer.name}</p>
            <h2 className="perk-h" id={titleId}>{offer.title}</h2>
            <p className="lede">{offer.sub}</p>
          </div>
          <div className="perk-visual">{Visual && <Visual />}</div>
          <ol className="perk-steps perk-anim" aria-label={`How ${offer.name.toLowerCase()} works`}>
            {offer.steps.map((s, i) => (
              <li key={s}>
                <i className="perk-step-glow" aria-hidden="true" />
                <span className="perk-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="perk-step-text">{s}</span>
                <i className="perk-step-bar" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="perk-foot">
            <p className="perk-terms">{`${offer.conditions} `}<a href={offerTermsHref(offer.slug)}>See terms</a>.</p>
            <a className="btn btn-signal" href="#contact" data-offer={offer.slug}>
              {offer.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Routine rewards: an on-time streak fills, then the perks unlock. */
function StreakVisual() {
  return (
    <div className="rv rv-streak perk-anim" aria-hidden="true">
      <div className="streak">
        {Array.from({ length: 8 }, (_, i) => (
          <i key={i} style={{ '--i': i }}><CheckIcon ariaHidden={false} /></i>
        ))}
      </div>
      <div className="streak-label">On-time deliveries</div>
      <div className="unlocks">
        <span className="unlock u1">Lower fees</span>
        <span className="unlock u2">First pick of loads</span>
      </div>
    </div>
  );
}

/* Referral: you, a referred driver, and a kickback travelling back. */
function ReferralVisual() {
  return (
    <div className="rv rv-ref perk-anim" aria-hidden="true">
      <span className="ref-node"><span className="ref-ico"><OfferIcon name="referral" /></span><em>You</em></span>
      <span className="ref-line"><span className="ref-run"><span className="ref-chip">+ up to 5%</span></span></span>
      <span className="ref-node"><Truck type="hotshot" beam={false} className="mini" style={{ '--u': '.07px' }} /><em>Their loads</em></span>
    </div>
  );
}

const REWARD_THEME = { 'routine-rewards': 'is-indigo', referral: 'is-light' };
const REWARD_VISUALS = { 'routine-rewards': StreakVisual, referral: ReferralVisual };

function DriverRewards() {
  return (
    <section className="perk perk-rewards" id="driver-rewards" aria-labelledby="rewardsTitle">
      <div className="wrap">
        <h2 className="perk-h perk-rewards-title reveal" id="rewardsTitle">Driver rewards</h2>
        <div className="reward-grid">
          {REWARD_OFFERS.map((o, i) => {
            const Visual = REWARD_VISUALS[o.slug];
            const light = REWARD_THEME[o.slug] === 'is-light';
            return (
              <article className={`reward-card ${REWARD_THEME[o.slug]} reveal`} style={{ '--d': `${i * 90}ms` }} id={o.slug} key={o.slug} aria-labelledby={`perk-${o.slug}-title`}>
                <Visual />
                <h3 className="h3" id={`perk-${o.slug}-title`}>{o.title}</h3>
                <p>{o.body}</p>
                {o.fine && <p className="reward-fine">{o.fine}</p>}
                <div className="reward-foot">
                  <a className={`btn btn-sm ${light ? 'btn-dark' : 'btn-signal'}`} href="#contact" data-offer={o.slug}>{o.cta}</a>
                  <a className="reward-terms" href={offerTermsHref(o.slug)}>See terms</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Perks() {
  return (
    <div className="perks" id="perks">
      <OfferStrip />
      {HEAVY_OFFERS.map((o, i) => <OfferSection key={o.slug} offer={o} index={i} />)}
      <DriverRewards />
    </div>
  );
}
