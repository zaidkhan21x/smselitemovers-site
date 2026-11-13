import { LogoSymbol } from './Logo';

/* Shared SVG defs: gradients, the wheel symbol used by every truck,
   and the logo symbol used on the truck livery. Rendered once per page. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFAF8" stopOpacity=".75" />
          <stop offset=".35" stopColor="#FFE3CF" stopOpacity=".25" />
          <stop offset="1" stopColor="#FFE3CF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6C9BAD" />
          <stop offset=".45" stopColor="#285C70" />
          <stop offset="1" stopColor="#16303D" />
        </linearGradient>
        <linearGradient id="g-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFAF8" />
          <stop offset=".45" stopColor="#9DB6C0" />
          <stop offset="1" stopColor="#3F5A66" />
        </linearGradient>
        <linearGradient id="g-tarp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#517380" />
          <stop offset="1" stopColor="#2f4650" />
        </linearGradient>
        <symbol id="wheel" viewBox="-20 -20 40 40">
          <circle r="19.6" fill="#0b0b0b" />
          <circle r="17.2" fill="none" stroke="#1c1c1c" strokeWidth="1.6" />
          <circle r="11.6" fill="#a9b8be" />
          <circle r="9.6" fill="#6f7f86" />
          <g fill="#2a3134">
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" />
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" transform="rotate(60)" />
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" transform="rotate(120)" />
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" transform="rotate(180)" />
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" transform="rotate(240)" />
            <rect x="-1.7" y="-9" width="3.4" height="4.6" rx="1.2" transform="rotate(300)" />
          </g>
          <circle r="3.8" fill="#d7dfe2" />
          <circle r="1.5" fill="#3F5A66" />
        </symbol>
        <LogoSymbol />
      </defs>
    </svg>
  );
}

function Wheel({ x, y, r }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="spin">
        <use href="#wheel" x={-r} y={-r} width={r * 2} height={r * 2} />
      </g>
    </g>
  );
}

function Flatbed({ beam }) {
  return (
    <>
      {beam && <polygon className="beam" points="745,84 1100,46 1100,150 745,94" fill="url(#g-beam)" />}
      <g className="body">
        {/* tractor chassis (under trailer nose) */}
        <rect x="559" y="4" width="6" height="104" rx="2" fill="url(#g-chrome)" />
        <rect x="486" y="110" width="256" height="10" fill="#151515" />
        <rect x="496" y="100" width="54" height="9" rx="2" fill="#2a2a2a" />
        <rect x="478" y="114" width="4" height="26" fill="#0b0b0b" />
        {/* trailer */}
        <rect x="52" y="104" width="8" height="26" fill="#1c2124" />
        <rect x="50" y="126" width="20" height="4" rx="1" fill="#2b3134" />
        <path d="M68 104H546V110L506 115H170L68 115Z" fill="#1c2124" />
        <rect x="100" y="112" width="70" height="8" rx="2" fill="#1c2124" />
        <rect x="84" y="115" width="4" height="26" fill="#0b0b0b" />
        <rect x="452" y="112" width="5" height="26" fill="#3a4246" />
        <rect x="446" y="136" width="17" height="3" fill="#3a4246" />
        {/* load: steel bundles on dunnage */}
        <g fill="#3F5A66">
          <rect x="96" y="90" width="10" height="4" />
          <rect x="196" y="90" width="10" height="4" />
          <rect x="232" y="90" width="10" height="4" />
          <rect x="360" y="90" width="10" height="4" />
          <rect x="396" y="90" width="10" height="4" />
          <rect x="490" y="90" width="10" height="4" />
        </g>
        <g>
          <rect x="90" y="62" width="124" height="28" rx="2" fill="#6692A4" />
          <path d="M94 69H214M94 76H214M94 83H214" stroke="#517380" strokeWidth="1.4" />
          <rect x="90" y="62" width="5" height="28" fill="#A9C7D2" />
          <rect x="226" y="54" width="150" height="36" rx="2" fill="#6C9BAD" />
          <path d="M230 61H376M230 68H376M230 75H376M230 82H376" stroke="#517380" strokeWidth="1.4" />
          <rect x="226" y="54" width="5" height="36" fill="#B4D0DA" />
          <rect x="390" y="66" width="112" height="24" rx="2" fill="#6692A4" />
          <path d="M394 72H502M394 78H502M394 84H502" stroke="#517380" strokeWidth="1.4" />
          <rect x="390" y="66" width="5" height="24" fill="#A9C7D2" />
        </g>
        <g fill="#FF8A3D">
          <rect x="120" y="60" width="3" height="46" />
          <rect x="180" y="60" width="3" height="46" />
          <rect x="260" y="52" width="3" height="54" />
          <rect x="340" y="52" width="3" height="54" />
          <rect x="420" y="64" width="3" height="42" />
          <rect x="474" y="64" width="3" height="42" />
        </g>
        <rect x="56" y="94" width="490" height="10" fill="#2b3134" />
        <rect x="56" y="94" width="490" height="2" fill="#6692A4" />
        <g fill="#FF8A3D">
          <circle cx="74" cy="99.5" r="2" />
          <circle cx="190" cy="99.5" r="2" />
          <circle cx="306" cy="99.5" r="2" />
          <circle cx="422" cy="99.5" r="2" />
          <circle cx="538" cy="99.5" r="2" />
        </g>
        {/* tractor body */}
        <path d="M566 120V30Q566 18 578 17H636Q650 18 658 26L676 62L728 70Q742 72 744 86V116Q744 120 740 120H722.3A20 20 0 1 0 685.7 120Z" fill="#FF8A3D" />
        <path d="M566 108H684M724 108H744" stroke="#D9661F" strokeWidth="5" />
        <rect x="566" y="80" width="176" height="3" fill="#D9661F" />
        <path d="M622 26V112M676 62L688 106" stroke="rgba(0,0,0,.22)" strokeWidth="1.2" fill="none" />
        <path d="M628 30H654L670 60H628Z" fill="url(#g-glass)" />
        <path d="M640 30H648L634 60H628V52Z" fill="rgba(255,255,255,.14)" />
        <rect x="582" y="36" width="24" height="12" rx="3" fill="url(#g-glass)" />
        <rect x="628" y="68" width="9" height="2.4" rx="1" fill="#2a2a2a" />
        <path d="M700 76H724M700 82H724M700 88H722" stroke="rgba(0,0,0,.2)" strokeWidth="1.4" />
        {/* door livery: logo */}
        <use href="#logo-full" x="572" y="84.2" width="48" height="20.6" fill="#111" />
        <g fill="#FFD9BE">
          <circle cx="592" cy="15" r="1.8" />
          <circle cx="606" cy="15" r="1.8" />
          <circle cx="620" cy="15" r="1.8" />
        </g>
        <path d="M672 40H680V58H676" stroke="#1a1a1a" strokeWidth="2" fill="none" />
        <rect x="678" y="38" width="5" height="20" rx="1.5" fill="#1a1a1a" />
        <rect x="590" y="111" width="54" height="20" rx="10" fill="url(#g-chrome)" />
        <path d="M598 121H636" stroke="rgba(0,0,0,.18)" strokeWidth="1" />
        <rect x="650" y="118" width="18" height="4" rx="1" fill="url(#g-chrome)" />
        <rect x="730" y="100" width="20" height="15" rx="3" fill="url(#g-chrome)" />
        <rect x="737" y="84" width="8" height="7" rx="2" fill="#FFFAF8" />
      </g>
      <g className="wheels">
        <Wheel x={116} y={133} r={17} />
        <Wheel x={154} y={133} r={17} />
        <Wheel x={500} y={133} r={17} />
        <Wheel x={540} y={133} r={17} />
        <Wheel x={704} y={133} r={17} />
      </g>
    </>
  );
}

function Box({ beam }) {
  return (
    <>
      {beam && <polygon className="beam" points="388,92 760,58 760,150 388,100" fill="url(#g-beam)" />}
      <g className="body">
        <rect x="20" y="118" width="360" height="8" fill="#151515" />
        <rect x="2" y="118" width="9" height="15" rx="1" fill="#2b2b2b" />
        <rect x="182" y="120" width="4" height="22" fill="#0b0b0b" />
        {/* box */}
        <rect x="8" y="22" width="262" height="96" rx="4" fill="#F2EDEA" />
        <rect x="8" y="22" width="262" height="5" rx="2" fill="#DCD3CD" />
        <rect x="8" y="22" width="7" height="96" fill="#D6CDC7" />
        <rect x="263" y="22" width="7" height="96" fill="#E3DBD5" />
        <path d="M60 27V112M112 27V112M164 27V112M216 27V112" stroke="rgba(17,17,17,.05)" strokeWidth="2" />
        <rect x="8" y="111" width="262" height="9" fill="#3F5A66" />
        {/* side livery: logo */}
        <use href="#logo-full" x="83" y="32" width="112" height="48" fill="#111" />
        <rect x="40" y="84" width="198" height="4" fill="#FF8A3D" />
        <text className="svg-body" x="139" y="103" textAnchor="middle" fontWeight="600" fontSize="10.5" letterSpacing=".6" fill="#517380">Truck dispatch</text>
        <g fill="#FF8A3D">
          <circle cx="14" cy="29" r="2" />
          <circle cx="264" cy="29" r="2" />
          <circle cx="139" cy="115.5" r="1.8" />
        </g>
        {/* cab */}
        <path d="M274 124V64Q274 58 280 58H322L342 86H372Q384 87 388 98V120Q388 124 384 124H370A19 19 0 1 0 334 124Z" fill="#285C70" />
        <rect x="276" y="100" width="110" height="3" fill="#FF8A3D" />
        <path d="M284 64H320L336 84H284Z" fill="url(#g-glass)" />
        <path d="M298 64H305L292 84H286Z" fill="rgba(255,255,255,.14)" />
        <path d="M318 60V122M342 86L350 112" stroke="rgba(0,0,0,.25)" strokeWidth="1.2" fill="none" />
        <rect x="290" y="92" width="9" height="2.4" rx="1" fill="#16303D" />
        <rect x="336" y="60" width="4" height="15" rx="1.5" fill="#1a1a1a" />
        <rect x="236" y="120" width="32" height="14" rx="7" fill="url(#g-chrome)" />
        <rect x="380" y="112" width="15" height="10" rx="2" fill="url(#g-chrome)" />
        <rect x="381" y="92" width="7" height="6" rx="1.5" fill="#FFFAF8" />
      </g>
      <g className="wheels">
        <Wheel x={206} y={134} r={16} />
        <Wheel x={352} y={134} r={16} />
      </g>
    </>
  );
}

function Hotshot({ beam }) {
  return (
    <>
      {beam && <polygon className="beam" points="650,108 1000,80 1000,150 650,114" fill="url(#g-beam)" />}
      <g className="body">
        {/* gooseneck trailer */}
        <path d="M404 125L424 92H488V110H478V100H430L414 125Z" fill="#2b3134" />
        <rect x="424" y="100" width="4" height="34" fill="#3a4246" />
        <rect x="419" y="132" width="14" height="3" fill="#3a4246" />
        <rect x="20" y="96" width="10" height="22" rx="1" fill="#3a4246" />
        <rect x="32" y="96" width="10" height="22" rx="1" fill="#3a4246" />
        {/* load: tarped freight + crate */}
        <path d="M52 118V84Q52 76 60 76H270Q280 76 280 84V118Z" fill="url(#g-tarp)" />
        <path d="M90 78L84 116M140 78L146 116M200 78L194 116M250 78L256 116" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
        <rect x="296" y="94" width="66" height="24" rx="1.5" fill="#6692A4" />
        <path d="M296 94L362 118M362 94L296 118" stroke="#517380" strokeWidth="2" />
        <rect x="296" y="94" width="66" height="24" rx="1.5" fill="none" stroke="#517380" strokeWidth="2" />
        <g fill="#FF8A3D">
          <rect x="80" y="74" width="3" height="52" />
          <rect x="150" y="74" width="3" height="52" />
          <rect x="220" y="74" width="3" height="52" />
          <rect x="327" y="92" width="3" height="34" />
        </g>
        <rect x="20" y="118" width="398" height="7" fill="#2b3134" />
        <rect x="20" y="118" width="398" height="2" fill="#6692A4" />
        <g fill="#FF8A3D">
          <circle cx="46" cy="122" r="1.8" />
          <circle cx="146" cy="122" r="1.8" />
          <circle cx="246" cy="122" r="1.8" />
          <circle cx="346" cy="122" r="1.8" />
          <circle cx="410" cy="122" r="1.8" />
        </g>
        {/* pickup */}
        <path d="M440 128V108Q440 105 443 105H520L523 92Q525 85 532 85H572L590 104H624Q644 105 650 113V124Q650 128 646 128H636.5A17 17 0 1 0 603.5 128H494.5A17 17 0 1 0 461.5 128Z" fill="#F2EDEA" />
        <rect x="440" y="105" width="80" height="2" fill="#D6CDC7" />
        <rect x="440" y="105" width="4" height="23" fill="#E2D9D3" />
        <rect x="442" y="112" width="206" height="2.4" fill="#FF8A3D" />
        <path d="M528 90H550V102H527Z" fill="url(#g-glass)" />
        <path d="M554 89H571L583 102H554Z" fill="url(#g-glass)" />
        <path d="M552 88V126M524 104V126M590 104L596 124" stroke="rgba(17,17,17,.2)" strokeWidth="1.1" fill="none" />
        <rect x="584" y="92" width="4" height="9" rx="1.2" fill="#1a1a1a" />
        <rect x="642" y="118" width="13" height="9" rx="2" fill="url(#g-chrome)" />
        <rect x="643" y="107.5" width="7" height="5" rx="1.5" fill="#FFFAF8" />
        <rect x="503" y="98" width="16" height="7" rx="1" fill="#2b3134" />
      </g>
      <g className="wheels">
        <Wheel x={70} y={139} r={11} />
        <Wheel x={100} y={139} r={11} />
        <Wheel x={478} y={135} r={14.5} />
        <Wheel x={620} y={135} r={14.5} />
      </g>
    </>
  );
}

const SHAPES = {
  flatbed: { viewBox: '48 0 704 152', units: 704, Body: Flatbed },
  box: { viewBox: '0 0 400 152', units: 400, Body: Box },
  hotshot: { viewBox: '14 0 644 152', units: 644, Body: Hotshot },
};

/* One truck illustration. `beam` adds the headlight beam; `className`
   adds classes after "truck" (e.g. "is-still", "mini"); `style` adds
   CSS custom properties after --units. */
export function Truck({ type, beam = true, className, style }) {
  const { viewBox, units, Body } = SHAPES[type];
  return (
    <svg
      className={className ? `truck ${className}` : 'truck'}
      viewBox={viewBox}
      style={{ '--units': String(units), ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <Body beam={beam} />
    </svg>
  );
}
