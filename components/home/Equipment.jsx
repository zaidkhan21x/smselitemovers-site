import { SITE } from '@/lib/site';
import { Truck } from '@/components/trucks';

const CARDS = [
  {
    type: 'hotshot',
    label: 'Hotshot pickup truck pulling a gooseneck flatbed trailer with a tarped load',
    title: 'Hotshot dispatch (car haulers included)',
    spec: 'Class 3 to 5 pickups with a gooseneck or bumper-pull trailer, often 40 ft',
    points: ['Expedited freight, partials and LTL flatbed', 'Reloads planned ahead', 'Car haulers dispatched through our hotshot desk', 'Equipment, machinery and building materials'],
    cta: 'Get hotshot dispatch',
  },
  {
    type: 'flatbed',
    label: 'Flatbed semi truck hauling steel bundles held with orange straps',
    title: 'Flatbed dispatch',
    spec: 'Semis pulling a 48 or 53 ft flatbed or step deck',
    points: ['Steel, lumber, pipe and machinery', 'Step deck freight', 'Securement needs confirmed before you accept', 'Tarp pay negotiated up front and written into the rate con'],
    cta: 'Get flatbed dispatch',
  },
  {
    type: 'box',
    label: `26 foot box truck with the ${SITE.brand} logo on the side`,
    title: 'Box truck dispatch',
    spec: '16 to 26 ft straight trucks, CDL or non-CDL, liftgate or dock-high',
    points: ['Palletized and LTL freight', 'Retail, final-mile and regional runs', 'Dock and liftgate needs checked first', 'City time and appointment windows planned in'],
    cta: 'Get box truck dispatch',
  },
];

export function Equipment() {
  return (
    <section className="sec equip" id="equipment" aria-labelledby="equipTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="equipTitle">Hotshot, flatbed and<br />box truck dispatch</h2>
          <p className="lede">Each one runs on different freight, different brokers and different math. We plan around how your equipment actually makes money. Car haulers are dispatched through our hotshot desk.</p>
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
