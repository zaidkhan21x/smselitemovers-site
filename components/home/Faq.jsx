import { TEL_HREF } from '@/lib/site';
import { FAQ } from '@/lib/faq';
import { PlusIcon } from '@/components/icons';

export function Faq() {
  return (
    <section className="sec" id="faq" aria-labelledby="faqTitle" style={{ paddingTop: 'clamp(40px,5vw,80px)' }}>
      <div className="wrap faq-grid">
        <div>
          <h2 className="h2" id="faqTitle">Questions drivers ask a dispatcher first</h2>
          <p className="lede" style={{ marginTop: '20px' }}>Don&apos;t see yours? Ask a dispatcher directly.</p>
          <div className="cta-row" style={{ marginTop: '24px' }}>
            <a className="btn btn-signal" href={TEL_HREF} data-call>Call dispatch</a>
            <a className="btn btn-ghost" href="#contact">Get dispatched</a>
          </div>
        </div>
        <div className="faq-list">
          {FAQ.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>{q}<span className="chev" aria-hidden="true"><PlusIcon /></span></summary>
              <div className="ans">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
