import { TEL_HREF } from '@/lib/site';
import { FAQ } from '@/lib/faq';
import { PlusIcon } from '@/components/icons';

export function Faq() {
  return (
    <section className="sec" id="faq" aria-labelledby="faqTitle" style={{ paddingTop: 'clamp(40px,5vw,80px)' }}>
      <div className="wrap faq-grid">
        <div>
          <h2 className="h2" id="faqTitle">Truck dispatch FAQ</h2>
          <p className="lede" style={{ marginTop: '20px' }}>Don&apos;t see yours? Ask a dispatcher directly.</p>
          <div className="cta-row" style={{ marginTop: '24px' }}>
            <a className="btn btn-signal" href={TEL_HREF} data-call>Call dispatch</a>
            <a className="btn btn-ghost" href="#contact">Get dispatched</a>
          </div>
        </div>
        <div className="faq-list">
          {/* Every answer starts open. Google recommends keeping FAQ answers
              visible rather than behind a click, and the name carries extra
              weight here (Deliverable B). They still collapse if the reader
              wants them out of the way. */}
          {FAQ.map(({ q, a }) => (
            <details key={q} open>
              <summary>{q}<span className="chev" aria-hidden="true"><PlusIcon /></span></summary>
              <div className="ans">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
