import { HEAVY_OFFERS, REWARD_OFFERS, DRIVER_OFFERS, offerTermsHref } from '@/lib/offers';
import { OfferIcon, ArrowIcon } from '@/components/icons';

/* =========================================================
   Driver offers block (#perks): the offer strip, the three
   full offer sections and the shared Driver rewards section.
   All static, server-rendered text.

   Anchors: #perks (whole block), #same-day-payout, #fuel-advance,
   #free-first-load, #driver-rewards, plus #routine-rewards and
   #referral on the two rewards cards. #offers is the "Why us"
   section and is NOT used here.

   Every offer link and CTA carries data-offer="<slug>", which the
   page script writes into the lead form's hidden "offer" field.
   ========================================================= */

function OfferStrip() {
  return (
    <section className="perk-strip-sec" aria-labelledby="perksTitle">
      <div className="wrap">
        <h2 className="sr-only" id="perksTitle">Driver offers</h2>
        <ul className="perk-strip">
          {DRIVER_OFFERS.map((o) => (
            <li key={o.slug}>
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

function OfferSection({ offer }) {
  const titleId = `perk-${offer.slug}-title`;
  return (
    <section className="perk" id={offer.slug} aria-labelledby={titleId}>
      <div className="wrap">
        <div className="perk-panel">
          <div className="perk-promise">
            <p className="perk-kicker">{offer.name}</p>
            <h2 className="perk-h" id={titleId}>{offer.title}</h2>
            <p className="lede">{offer.sub}</p>
          </div>
          <ol className="perk-steps" aria-label={`How ${offer.name.toLowerCase()} works`}>
            {offer.steps.map((s, i) => (
              <li key={s}>
                <span className="perk-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="perk-foot">
            <p className="perk-terms">{`${offer.conditions} `}<a href={offerTermsHref(offer.slug)}>See terms</a>.</p>
            <a className="btn btn-signal" href="#contact" data-offer={offer.slug}>{offer.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DriverRewards() {
  return (
    <section className="perk perk-rewards" id="driver-rewards" aria-labelledby="rewardsTitle">
      <div className="wrap">
        <h2 className="perk-h perk-rewards-title" id="rewardsTitle">Driver rewards</h2>
        <div className="reward-grid">
          {REWARD_OFFERS.map((o) => (
            <article className="reward-card" id={o.slug} key={o.slug} aria-labelledby={`perk-${o.slug}-title`}>
              <span className="perk-ico"><OfferIcon name={o.icon} /></span>
              <h3 className="h3" id={`perk-${o.slug}-title`}>{o.title}</h3>
              <p>{o.body}</p>
              {o.fine && <p className="reward-fine">{o.fine}</p>}
              <div className="reward-foot">
                <a className="btn btn-ghost btn-sm" href="#contact" data-offer={o.slug}>{o.cta}</a>
                <a className="reward-terms" href={offerTermsHref(o.slug)}>See terms</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Perks() {
  return (
    <div className="perks" id="perks">
      <OfferStrip />
      {HEAVY_OFFERS.map((o) => <OfferSection key={o.slug} offer={o} />)}
      <DriverRewards />
    </div>
  );
}
