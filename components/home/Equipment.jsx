import { SITE } from '@/lib/site';
import { Truck } from '@/components/trucks';

const CARDS = [
  {
    type: 'hotshot',
    label: 'Hotshot pickup truck pulling a gooseneck flatbed trailer with a tarped load',
    title: 'Hotshot',
    spec: 'Class 3 to 5 pickup with a gooseneck or bumper-pull flatbed, often 40 ft',
    points: ['Expedited and time-critical freight', 'Partials and LTL flatbed loads', 'Equipment, machinery and building materials', 'Reload planned before you unload'],
    cta: 'Dispatch my hotshot',
  },
  {
    type: 'flatbed',
    label: 'Flatbed semi truck hauling steel bundles held with orange straps',
    title: 'Flatbed',
    spec: 'Semi with a 48 or 53 ft flatbed or step deck',
    points: ['Steel, lumber, pipe and building materials', 'Machinery and step deck freight', 'Securement needs confirmed before you accept', 'Tarp pay negotiated up front and put on the rate con'],
    cta: 'Dispatch my flatbed',
  },
  {
    type: 'box',
    label: `26 foot box truck with the ${SITE.brand} logo on the side`,
    title: 'Box Truck',
    spec: '16 to 26 ft straight truck, CDL or non-CDL, liftgate or dock-high',
    points: ['Palletized and LTL freight', 'Retail, final-mile and regional runs', 'Dock height, liftgate and payload matched to the load', 'City time and appointment windows planned in'],
    cta: 'Dispatch my box truck',
  },
];

export function Equipment() {
  return (
    <section className="sec equip" id="equipment" aria-labelledby="equipTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="equipTitle">Three trucks.<br />We know them well.</h2>
          <p className="lede">Hotshot dispatch, flatbed dispatch and box truck dispatch each run on different freight, different brokers and different math. We plan around how your equipment actually makes money.</p>
        </div>
        <div className="equip-grid">
          {CARDS.map((c) => (
            <article key={c.type} className="eq-card" data-type={c.type}>
              <div className="eq-scene" data-truck={c.type} role="img" aria-label={c.label}>
                <Truck type={c.type} beam={false} />
              </div>
              <div className="eq-body">
                <h3>{c.title}</h3>
                <div className="eq-spec">{c.spec}</div>
                <ul>
                  {c.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="eq-cta"><a className="btn btn-signal" href="#contact" data-pick={c.type}>{c.cta}</a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
