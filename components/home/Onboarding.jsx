import { SITE, TEL_HREF } from '@/lib/site';
import { Truck } from '@/components/trucks';

const STEPS = [
  { title: 'Call or send the form', body: 'Tell us your truck, your home base and the lanes you like to run.' },
  { title: 'Send your documents', body: 'MC authority, W-9, certificate of insurance and your NOA if you factor. Missing something? We help you sort it out.' },
  { title: 'Set your terms', body: "Minimum rate, max deadhead, home time and freight you won't haul. We write it down and dispatch by it." },
  { title: 'Roll your first load', body: 'We book it, you approve it, and we start on the next one before you deliver.' },
];

/* type: the equipment currently selected (drives the little truck on the road). */
export function Onboarding({ type }) {
  return (
    <section className="sec" id="onboarding" aria-labelledby="onboardTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="onboardTitle">From first call<br />to first load</h2>
          <p className="lede">Onboarding is where most dispatch relationships go wrong. We do it with you, step by step, so your rules are set before the first load is booked.</p>
        </div>

        <div className="onboard-road" id="obRoad" aria-hidden="true">
          <div className="ob-road" />
          <div className="ob-markers">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="ob-marker"><div className="post"><div className="plate">{n}</div><div className="stick" /></div></div>
            ))}
          </div>
          <div className="ob-truck" id="obTruck"><Truck type={type} beam={false} /></div>
        </div>

        <ol className="ob-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="ob-step">
              <div className="num">{`Step ${i + 1}`}</div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="onboard-foot cta-row">
          <a className="btn btn-signal" href="#contact">Start onboarding</a>
          <a className="btn btn-ghost" href={TEL_HREF} data-call>Call <span>{SITE.phoneDisplay}</span></a>
        </div>
      </div>
    </section>
  );
}
