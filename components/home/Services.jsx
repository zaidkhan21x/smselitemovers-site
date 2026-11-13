import { TEL_HREF } from '@/lib/site';

/* Icon shapes (drawn at stroke 2 in the tabs and 1.8 in the big tile). */
const ICONS = {
  dispatch: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M19 20a4 4 0 0 1-4 2h-2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <path d="M18 9.5c0 3-3.5 6.5-3.5 6.5S11 12.5 11 9.5a3.5 3.5 0 0 1 7 0z" />
      <circle cx="14.5" cy="9.5" r="1" />
      <path d="M8.5 18h4a2.5 2.5 0 0 0 0-5" strokeDasharray="2 2.5" />
    </>
  ),
  rate: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  comms: (
    <>
      <path d="M21 12a7 7 0 0 1-10.4 6.1L5 20l1.6-4.7A7 7 0 1 1 21 12z" />
      <path d="M9 11h7M9 14h4" />
    </>
  ),
  office: (
    <>
      <path d="M8 3h8l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M16 3v4h4M10 12h6M10 16h6" />
      <path d="M3 7v12a2 2 0 0 0 2 2" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </>
  ),
  factoring: (
    <>
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <circle cx="12" cy="12.5" r="2.5" />
      <path d="M6 10v5M18 10v5" />
    </>
  ),
  newmc: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
};

const SERVICES = [
  {
    icon: 'dispatch',
    title: 'Truck Dispatch',
    body: 'One dispatcher who learns your truck, your lanes and how you like to run. Load offers come to you, you pick, and we handle the booking from rate con to delivery.',
    points: [
      'Every offer shows rate, loaded miles, deadhead and pickup and delivery windows',
      'Booking, rate confirmations and check calls handled for you',
      "Your rules in writing: minimum rate, max deadhead, home time, freight you won't haul",
    ],
    cta: 'Get truck dispatch',
  },
  {
    icon: 'route',
    title: 'Load Search & Route Planning',
    body: 'We search the load boards and work your broker and shipper relationships for freight that fits your equipment, then plan the week so the miles connect instead of dead-ending.',
    points: [
      'Multi-stop plans built to cut deadhead between loads',
      'Routes planned around your hours of service and home time',
      "Reloads and backhauls looked at before you head out, not after you're empty",
    ],
    cta: 'Plan my lanes',
  },
  {
    icon: 'rate',
    title: 'Rate Negotiation',
    body: "We counter low offers with current lane data and walk away from freight that doesn't clear your floor. Every load gets pushed, not just the big ones.",
    points: [
      'Rates checked against what the lane is paying right now before we counter',
      'Accessorials asked for up front: detention, layover, tarps, extra stops, TONU',
      'Low offers declined, not passed on to you as "the best we could find"',
    ],
    cta: 'Get my rates pushed',
  },
  {
    icon: 'comms',
    title: 'Broker & Shipper Communication',
    body: 'Check calls, appointment changes, detention clocks and paperwork follow-ups. We take the calls so you keep your eyes on the road and your hours on driving.',
    points: [
      'Status updates to brokers and shippers on your behalf',
      'Detention and layover documented and claimed',
      'Problems escalated and handled, not left in your voicemail',
    ],
    cta: 'Hand off the calls',
  },
  {
    icon: 'office',
    title: 'Back Office Support',
    body: "Rate cons, BOLs, invoices and carrier setup packets, kept organized and sent on time, so getting paid doesn't depend on you chasing paper from a truck stop.",
    points: [
      'Broker and shipper setup packets completed with you',
      'Invoices and PODs sent as soon as you deliver',
      'Documents organized so any load can be pulled up fast',
    ],
    cta: 'Clear my paperwork',
  },
  {
    icon: 'strategy',
    title: 'Freight Strategy',
    body: 'We look at your cost per mile, your lanes and the season ahead, then build a plan for steadier weeks instead of feast-or-famine.',
    points: [
      'Cost per mile and break-even rate worked out with you',
      'Lane choices based on what pays and what gets you home',
      'A plan for the slow season before it hits',
    ],
    cta: 'Build my plan',
  },
  {
    icon: 'factoring',
    title: 'Factoring & Payment Support',
    body: "Cash flow keeps the truck running. We help you set up factoring, get loads submitted for payment and follow up on anything that's late.",
    points: [
      'Help choosing and setting up a factoring company',
      "Load paperwork submitted so funding isn't held up",
      'Late payments followed up with brokers until they clear',
    ],
    cta: 'Sort out my payments',
  },
  {
    icon: 'newmc',
    title: 'New MC Support',
    body: "Fresh authority? Plenty of brokers won't load a new MC. We go after the ones who will and build your history with clean loads from the start.",
    points: [
      'Brokers that work with new authorities, contacted for you',
      'Setup packets and certificates of insurance handled',
      'Early loads chosen to build a clean track record',
    ],
    cta: 'Get my new MC rolling',
  },
];

export function Services() {
  return (
    <section className="sec light" id="services" aria-labelledby="servicesTitle">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="servicesTitle">We work the phones.<br />You drive.</h2>
          <p className="lede">Eight truck dispatch services from one team. Start with what you need today and add the rest as your operation grows.</p>
        </div>

        <div className="svc">
          <div className="svc-tabs" role="tablist" aria-label="Dispatch services" aria-orientation="vertical">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                className="svc-tab"
                role="tab"
                id={`tab-${i + 1}`}
                aria-controls={`panel-${i + 1}`}
                aria-selected={i === 0 ? 'true' : 'false'}
                tabIndex={i === 0 ? 0 : -1}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[s.icon]}</svg>
                {s.title}
              </button>
            ))}
          </div>

          <div className="svc-panels">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="svc-panel" role="tabpanel" id={`panel-${i + 1}`} aria-labelledby={`tab-${i + 1}`} hidden={i !== 0}>
                <div><h3>{s.title}</h3></div>
                <div className="svc-big" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[s.icon]}</svg>
                </div>
                <div className="svc-body">
                  <p>{s.body}</p>
                  <ul>
                    {s.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <div className="cta-row">
                    <a className="btn btn-dark" href="#contact">{s.cta}</a>
                    <a className="btn btn-line-dark" href={TEL_HREF} data-call>Call dispatch</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
