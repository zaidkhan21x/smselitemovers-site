import { Truck } from '@/components/trucks';
import { CheckIcon, CrossIcon } from '@/components/icons';

export function Offers() {
  return (
    <section className="sec" id="offers" aria-labelledby="offersTitle">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 className="h2" id="offersTitle">Built for the driver,<br />not the load board</h2>
            <div className="sec-head-actions cta-row">
              <a className="btn btn-signal" href="#contact">Talk to a dispatcher</a>
            </div>
          </div>
          <p className="lede">A truck dispatcher should work for the person who owns the truck. Here&apos;s how SMS Elite Mover does it.</p>
        </div>

        <div className="bento">
          <article className="card c-forced" id="offerCard">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 className="h3">Zero forced dispatch</h3>
              <p>Every load reaches you as an offer: rate, loaded miles, deadhead, pickup and delivery windows, and extras like tarps or liftgates. Say yes or pass. Passing never counts against you.</p>
              <div className="card-foot"><a className="btn btn-ghost btn-sm" href="#contact">Start on your terms</a></div>
            </div>
            <div className="offer-demo">
              <div className="offer" id="offerBox" aria-live="polite">
                <div className="offer-top"><span className="offer-tag" id="ofEq">Flatbed</span><span>Example offer</span></div>
                <div className="offer-route">
                  <span className="dots" aria-hidden="true"><i /><b /><i /></span>
                  <span id="ofFrom">Birmingham, AL</span>
                  <span id="ofTo">Charlotte, NC</span>
                </div>
                <div className="offer-stats">
                  <div><strong id="ofRate">$1,250</strong>Rate</div>
                  <div><strong id="ofMiles">390 mi</strong>Loaded</div>
                  <div><strong id="ofRpm">$3.21</strong>Per mile</div>
                </div>
                <div className="offer-actions">
                  <button className="btn btn-ghost" type="button" data-offer="pass">Pass</button>
                  <button className="btn btn-signal" type="button" data-offer="take">Take it</button>
                </div>
              </div>
              <div className="offer-note" id="offerNote">Try it. Passing costs you nothing.</div>
              <p className="fine">Illustration only. Not a real load, rate or earnings promise.</p>
            </div>
          </article>

          <article className="card c-prebook" id="prebookCard">
            <h3 className="h3">Next load lined up</h3>
            <p>We work your reload while you&apos;re rolling, so you aren&apos;t sitting empty after you unload. Once it&apos;s booked, ask for the rate confirmation and check it yourself.</p>
            <div className="track" aria-hidden="true">
              <div className="next-load">
                <CheckIcon ariaHidden={false} />
                Next load booked. Rate con ready.
              </div>
              <div className="track-line"><div className="track-fill" /></div>
              <div className="track-runner"><Truck type="box" beam={false} className="mini" style={{ '--u': '.25px' }} /></div>
              <div className="track-pins"><span>Pickup</span><span>Delivery</span></div>
            </div>
          </article>

          <article className="card c-quality">
            <h3 className="h3">Quality loads only</h3>
            <p>Freight is screened before it reaches you. Rates below your floor, brokers with a slow-pay history and loads that would break your hours don&apos;t make it through.</p>
            <ul className="filters">
              <li className="no"><CrossIcon /><span>Rates under your floor</span></li>
              <li className="no"><CrossIcon /><span>Brokers with slow-pay history</span></li>
              <li className="no"><CrossIcon /><span>Loads that wreck your hours</span></li>
              <li className="yes"><CheckIcon />Freight that pays and fits your lanes</li>
            </ul>
          </article>

          <article className="card c-dedicated">
            <div>
              <h3 className="h3">Enterprise and dedicated loads</h3>
              <p>Steady contract freight with shippers on repeat lanes, set up in your company&apos;s name: consistent miles, solid pay and home time you can plan.</p>
              <div className="card-foot"><a className="btn btn-dark btn-sm" href="#contact">Ask about dedicated lanes</a></div>
            </div>
            <div className="loop" aria-hidden="true">
              <svg viewBox="0 0 240 190">
                <path className="loop-path" d="M60 150 C 30 150 20 110 40 84 C 62 54 110 40 150 46 C 196 52 214 86 206 116 C 198 146 160 156 120 152 C 96 150 80 150 60 150 Z" fill="none" stroke="#285C70" strokeWidth="3" strokeLinecap="round" />
                <circle className="loop-dot" r="7" fill="#FF8A3D" />
                <g transform="translate(60 150)"><circle r="14" fill="#16303D" /><path d="M-6 3V-2L0-7L6-2V3Z" fill="#F2EDEA" /></g>
                <g transform="translate(150 46)"><circle r="6" fill="#16303D" /></g>
                <g transform="translate(206 116)"><circle r="6" fill="#16303D" /></g>
                <text className="svg-body" x="60" y="182" textAnchor="middle" fontSize="12" fontWeight="600" fill="#3F5A66">Home</text>
              </svg>
            </div>
          </article>

          <article className="card c-onboard">
            <div>
              <h3 className="h3">Onboarding done with you, not to you</h3>
              <p>We set your rules with you, step by step, before the first load is booked.</p>
            </div>
            <div className="card-foot"><a className="btn btn-dark" href="#onboarding">See how onboarding works</a></div>
          </article>
        </div>
      </div>
    </section>
  );
}
