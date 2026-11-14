import { Fragment } from 'react';
import { TEL_HREF, SITE } from '@/lib/site';
import { TYPES, DEFAULT_HERO, ORDER, DEFAULT_TYPE, shadowScale } from '@/lib/hero-types';
import { Truck } from '@/components/trucks';
import { PhoneIcon } from '@/components/icons';

function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}

function Pattern({ id, width, height, children }) {
  return (
    <svg preserveAspectRatio="none">
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
          {children}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* variant: null for the default page, or 'hotshot' | 'flatbed' | 'box'
   for the ?type= ad-group pages. */
export function Hero({ variant }) {
  const type = variant || DEFAULT_TYPE;
  const d = TYPES[type];
  const copy = variant ? d : DEFAULT_HERO;
  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero-panel" id="heroPanel">
        <div className="scene" aria-hidden="true">
          <div className="sky" />
          <div className="stars" />
          <div className="layer l-far">
            <Pattern id="p-far" width="1200" height="230">
              <path d="M0 150C120 120 210 70 330 92S520 150 640 120S860 40 990 86S1130 150 1200 150V230H0Z" fill="#224D5F" opacity=".75" />
            </Pattern>
          </div>
          <div className="layer l-near">
            <Pattern id="p-near" width="900" height="150">
              <path d="M0 110C90 90 160 60 260 74S420 120 520 100S700 50 790 80S870 110 900 110V150H0Z" fill="#193746" />
            </Pattern>
          </div>
          <div className="layer l-trees">
            <Pattern id="p-trees" width="640" height="90">
              <g fill="#122630">
                <path d="M20 90L34 34L48 90Z" />
                <path d="M40 90L52 50L64 90Z" />
                <path d="M70 90L86 20L102 90Z" />
                <path d="M160 90L170 56L180 90Z" />
                <path d="M176 90L190 40L204 90Z" />
                <path d="M300 90L316 28L332 90Z" />
                <path d="M326 90L338 54L350 90Z" />
                <path d="M344 90L360 36L376 90Z" />
                <path d="M372 90L382 60L392 90Z" />
                <path d="M480 90L492 46L504 90Z" />
                <path d="M500 90L516 24L532 90Z" />
                <path d="M590 90L602 52L614 90Z" />
                <rect x="0" y="80" width="640" height="10" />
              </g>
            </Pattern>
          </div>
          <div className="layer l-poles">
            <Pattern id="p-poles" width="520" height="200">
              <g stroke="#0e1c23" fill="none" strokeWidth="1.4">
                <path d="M-476 40Q-216 74 44 40" />
                <path d="M44 40Q304 74 564 40" />
                <path d="M-476 54Q-216 86 44 54" />
                <path d="M44 54Q304 86 564 54" />
              </g>
              <rect x="40" y="30" width="7" height="170" fill="#0e1c23" />
              <rect x="26" y="38" width="35" height="5" fill="#0e1c23" />
              <rect x="30" y="52" width="27" height="4" fill="#0e1c23" />
            </Pattern>
          </div>
          <div className="shoulder" />
          <div className="road" />
          <div className="layer l-dash">
            <Pattern id="p-dash" width="150" height="6">
              <rect width="72" height="5" rx="1" fill="#F2EDEA" opacity=".85" />
            </Pattern>
          </div>
          <div className="truck-stage" id="truckStage">
            <div className="truck-shadow" id="truckShadow" style={{ transform: `scaleX(${shadowScale(d.shadow)})` }} />
            {/* Drives in on load with a CSS animation (see .is-arriving), so it moves from the first paint. */}
            <Truck type={type} className="is-arriving" />
          </div>
          <div className="ground" />
          <div className="layer l-rail">
            <Pattern id="p-rail" width="200" height="84">
              <rect x="16" y="20" width="9" height="64" fill="#2a3a42" />
              <rect x="18" y="20" width="3" height="64" fill="#3F5A66" />
              <rect x="0" y="24" width="200" height="20" fill="#6C9BAD" />
              <rect x="0" y="29" width="200" height="3" fill="#517380" />
              <rect x="0" y="36" width="200" height="3" fill="#517380" />
              <rect x="0" y="24" width="200" height="2" fill="#A9C7D2" />
              <circle cx="20" cy="34" r="2.6" fill="#FF8A3D" />
            </Pattern>
          </div>
          <div className="vignette" />
        </div>

        <div className="hero-copy">
          <h1 className="display hero-h1 ti-swap" id="heroTitle"><Lines lines={copy.h1} /></h1>
          <p className="lede ti-swap" id="heroLede">{copy.lede}</p>
          <div className="cta-row hero-ctas">
            <a className="btn btn-signal" href="#contact" id="heroCta">Get dispatched</a>
            <a className="btn btn-ghost" href={TEL_HREF} data-call>
              <PhoneIcon />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <aside className="truck-info" aria-live="polite">
          <div className="ti-swap" id="tiSwap">
            <div className="ti-name" id="tiName">{d.name}</div>
            <div className="ti-spec" id="tiSpec">{d.spec}</div>
            <div className="ti-loads" id="tiLoads">{d.loads}</div>
          </div>
          <a className="btn btn-signal btn-sm" href="#contact" id="tiCta" data-pick={type}>{d.cta}</a>
        </aside>

        <div className="hero-dock">
          <div className="dock-label">
            <span>Pick your equipment</span>
            <strong className="dock-mobile-info" id="dockInfo">{d.spec}</strong>
          </div>
          <div className="selector" role="radiogroup" aria-label="Equipment type">
            <span className="sel-pill" id="selPill" aria-hidden="true" style={{ transform: `translateX(${ORDER.indexOf(type) * 100}%)` }} />
            {ORDER.map((t) => (
              <Fragment key={t}>
                <input type="radio" name="heroEquip" id={`he-${t}`} value={t} defaultChecked={t === type} />
                <label htmlFor={`he-${t}`}>
                  <span className="ico" data-icon={t}><Truck type={t} className="is-still" /></span>
                  {TYPES[t].name}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="scene-spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
