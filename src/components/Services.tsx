function MiningIllustration() {
  return (
    <svg width="100%" height="76" viewBox="0 0 280 76" fill="none" aria-hidden="true" className="sector-illus">
      <path d="M0 76 L45 32 L75 52 L115 10 L155 42 L185 22 L225 46 L255 28 L280 42 L280 76 Z" fill="rgba(201,164,74,0.055)" />
      <path d="M45 32 L75 52 L115 10 L155 42 L185 22 L225 46 L255 28" stroke="rgba(201,164,74,0.3)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M88 76 L88 52 Q108 42 128 52 L128 76" stroke="rgba(201,164,74,0.5)" strokeWidth="1.5" fill="rgba(201,164,74,0.05)" strokeLinejoin="round" />
      <path d="M88 60 L128 60" stroke="rgba(201,164,74,0.3)" strokeWidth="1.5" />
      <path d="M108 42 L108 76" stroke="rgba(201,164,74,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M65 76 L160 76" stroke="rgba(201,164,74,0.18)" strokeWidth="1.5" />
      {[72,82,92,102,112,122,132,142,152].map(x => (
        <path key={x} d={`M${x} 76 L${x} 70`} stroke="rgba(201,164,74,0.18)" strokeWidth="1" />
      ))}
      <path d="M198 28 L204 16 L210 28 L204 23 Z" fill="rgba(201,164,74,0.65)" />
      <path d="M198 28 L210 28 L204 38 Z" fill="rgba(201,164,74,0.3)" />
      <path d="M220 13 L221 9 L222 13 L226 14 L222 15 L221 19 L220 15 L216 14 Z" fill="rgba(201,164,74,0.45)" />
      <path d="M242 32 L243 29 L244 32 L247 33 L244 34 L243 37 L242 34 L239 33 Z" fill="rgba(201,164,74,0.3)" />
      <path d="M235 76 L235 50 L248 42 L257 48 L252 56 L242 60 L242 76" stroke="rgba(201,164,74,0.4)" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M0 76 L280 76" stroke="rgba(201,164,74,0.12)" strokeWidth="1" />
    </svg>
  )
}

function AgricultureIllustration() {
  return (
    <svg width="100%" height="76" viewBox="0 0 280 76" fill="none" aria-hidden="true" className="sector-illus">
      <path d="M0 58 Q40 38 80 53 Q120 68 160 48 Q200 28 245 48 Q262 56 280 50 L280 76 L0 76 Z" fill="rgba(201,164,74,0.055)" />
      <circle cx="245" cy="17" r="11" stroke="rgba(201,164,74,0.5)" strokeWidth="1.5" fill="rgba(201,164,74,0.07)" />
      {['M245 2 L245 0','M245 32 L245 34','M230 17 L228 17','M260 17 L262 17',
        'M235 7 L233 5','M255 27 L257 29','M255 7 L257 5','M235 27 L233 29'].map((d, i) => (
        <path key={i} d={d} stroke="rgba(201,164,74,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {[25,48,72,96,120,145,170].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 76 L${x} ${44 + (i % 3) * 6}`} stroke="rgba(201,164,74,0.38)" strokeWidth="1.2" />
          <ellipse cx={x} cy={38 + (i % 3) * 6} rx="3" ry="7" fill="rgba(201,164,74,0.32)" transform={`rotate(${i % 2 === 0 ? 8 : -8} ${x} ${38 + (i % 3) * 6})`} />
          <ellipse cx={x - 4} cy={43 + (i % 3) * 6} rx="2" ry="4.5" fill="rgba(201,164,74,0.18)" transform={`rotate(-22 ${x - 4} ${43 + (i % 3) * 6})`} />
          <ellipse cx={x + 4} cy={43 + (i % 3) * 6} rx="2" ry="4.5" fill="rgba(201,164,74,0.18)" transform={`rotate(22 ${x + 4} ${43 + (i % 3) * 6})`} />
        </g>
      ))}
      <rect x="195" y="54" width="32" height="18" rx="2" fill="rgba(201,164,74,0.12)" stroke="rgba(201,164,74,0.45)" strokeWidth="1.3" />
      <rect x="201" y="47" width="18" height="11" rx="2" fill="rgba(201,164,74,0.14)" stroke="rgba(201,164,74,0.45)" strokeWidth="1.3" />
      <circle cx="202" cy="72" r="6" stroke="rgba(201,164,74,0.55)" strokeWidth="1.5" fill="rgba(201,164,74,0.07)" />
      <circle cx="220" cy="72" r="4.5" stroke="rgba(201,164,74,0.55)" strokeWidth="1.5" fill="rgba(201,164,74,0.07)" />
      <path d="M0 76 L280 76" stroke="rgba(201,164,74,0.12)" strokeWidth="1" />
    </svg>
  )
}

function TelecomIllustration() {
  return (
    <svg width="100%" height="76" viewBox="0 0 280 76" fill="none" aria-hidden="true" className="sector-illus">
      {[
        [20,62,140,28],[55,70,140,28],[225,58,140,28],[260,66,140,28],
        [20,62,55,70],[225,58,260,66],[20,62,225,58]
      ].map(([x1,y1,x2,y2], i) => (
        <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke="rgba(201,164,74,0.15)" strokeWidth="1" strokeDasharray="5 4" />
      ))}
      {[[20,62],[55,70],[225,58],[260,66],[85,52],[195,48]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i < 4 ? 4.5 : 3} fill="rgba(201,164,74,0.32)" />
      ))}
      <path d="M140 28 L127 76 M140 28 L153 76" stroke="rgba(201,164,74,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 52 L150 52 M132 62 L148 62 M134 70 L146 70" stroke="rgba(201,164,74,0.42)" strokeWidth="1.5" />
      <path d="M140 4 L140 28" stroke="rgba(201,164,74,0.65)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="140" cy="4" r="3.5" fill="rgba(201,164,74,0.85)" />
      <path d="M126 18 Q140 8 154 18" stroke="rgba(201,164,74,0.55)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M118 12 Q140 -2 162 12" stroke="rgba(201,164,74,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M110 6 Q140 -12 170 6" stroke="rgba(201,164,74,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M0 76 L280 76" stroke="rgba(201,164,74,0.12)" strokeWidth="1" />
    </svg>
  )
}

function EnergyIllustration() {
  return (
    <svg width="100%" height="76" viewBox="0 0 280 76" fill="none" aria-hidden="true" className="sector-illus">
      <circle cx="140" cy="20" r="14" stroke="rgba(201,164,74,0.5)" strokeWidth="1.5" fill="rgba(201,164,74,0.07)" />
      {['M140 2 L140 0','M140 38 L140 40','M122 20 L120 20','M158 20 L160 20',
        'M126 6 L124 4','M154 34 L156 36','M154 6 L156 4','M126 34 L124 36'].map((d, i) => (
        <path key={i} d={d} stroke="rgba(201,164,74,0.42)" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      <path d="M146 8 L133 22 L141 22 L132 36" stroke="rgba(201,164,74,0.95)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {[18, 58].map((xOff, g) => (
        <g key={g} transform={`translate(${xOff}, 44)`}>
          {[0, 22].map(px => (
            <g key={px}>
              <rect x={px} y="0" width="18" height="13" rx="1.5" fill="rgba(201,164,74,0.1)" stroke="rgba(201,164,74,0.42)" strokeWidth="1.2" />
              <path d={`M${px+6} 0 L${px+6} 13 M${px+12} 0 L${px+12} 13 M${px} 4.5 L${px+18} 4.5 M${px} 8.5 L${px+18} 8.5`} stroke="rgba(201,164,74,0.22)" strokeWidth="0.8" />
            </g>
          ))}
          <path d={`M19 13 L19 22 L${g === 0 ? '-8' : '48'} 22`} stroke="rgba(201,164,74,0.3)" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      <path d="M10 65 L75 54 L140 59 L205 54 L270 65" stroke="rgba(201,164,74,0.3)" strokeWidth="1.2" fill="none" />
      <path d="M10 70 L75 59 L140 64 L205 59 L270 70" stroke="rgba(201,164,74,0.18)" strokeWidth="1.2" fill="none" />
      {[75,140,205].map(x => (
        <g key={x}>
          <path d={`M${x} 54 L${x-6} 76 M${x} 54 L${x+6} 76`} stroke="rgba(201,164,74,0.35)" strokeWidth="1.2" />
          <path d={`M${x-9} 62 L${x+9} 62`} stroke="rgba(201,164,74,0.35)" strokeWidth="1.2" />
          <path d={`M${x} 54 L${x} 38`} stroke="rgba(201,164,74,0.5)" strokeWidth="1.2" />
          <path d={`M${x-12} 38 L${x+12} 38`} stroke="rgba(201,164,74,0.5)" strokeWidth="1.8" />
        </g>
      ))}
      <path d="M0 76 L280 76" stroke="rgba(201,164,74,0.12)" strokeWidth="1" />
    </svg>
  )
}

function LogisticsIllustration() {
  return (
    <svg width="100%" height="76" viewBox="0 0 280 76" fill="none" aria-hidden="true" className="sector-illus">
      <path d="M0 68 Q70 57 140 63 Q210 68 280 58" stroke="rgba(201,164,74,0.18)" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M0 68 Q70 57 140 63 Q210 68 280 58" stroke="rgba(201,164,74,0.06)" strokeWidth="14" fill="none" strokeLinecap="round" />
      <g transform="translate(76, 36)">
        <rect x="0" y="0" width="58" height="24" rx="2" fill="rgba(201,164,74,0.1)" stroke="rgba(201,164,74,0.52)" strokeWidth="1.5" />
        <path d="M58 0 L58 24 L85 24 L85 11 L74 0 Z" fill="rgba(201,164,74,0.16)" stroke="rgba(201,164,74,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="60" y="2" width="13" height="9" rx="1" fill="rgba(201,164,74,0.28)" stroke="rgba(201,164,74,0.4)" strokeWidth="1" />
        <circle cx="16" cy="24" r="7" fill="rgba(6,17,31,1)" stroke="rgba(201,164,74,0.65)" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="3" fill="rgba(201,164,74,0.28)" />
        <circle cx="44" cy="24" r="7" fill="rgba(6,17,31,1)" stroke="rgba(201,164,74,0.65)" strokeWidth="1.5" />
        <circle cx="44" cy="24" r="3" fill="rgba(201,164,74,0.28)" />
        <circle cx="73" cy="24" r="6" fill="rgba(6,17,31,1)" stroke="rgba(201,164,74,0.65)" strokeWidth="1.5" />
        <circle cx="73" cy="24" r="2.5" fill="rgba(201,164,74,0.28)" />
        <path d="M83 2 L83 -5" stroke="rgba(201,164,74,0.3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 12 L3 12 L3 18 M0 8 L-8 8 M0 14 L-12 14" stroke="rgba(201,164,74,0.2)" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <circle cx="22" cy="61" r="5.5" fill="rgba(201,164,74,0.52)" />
      <circle cx="22" cy="61" r="10" stroke="rgba(201,164,74,0.22)" strokeWidth="1" fill="none" />
      <circle cx="258" cy="55" r="5.5" fill="rgba(201,164,74,0.52)" />
      <circle cx="258" cy="55" r="10" stroke="rgba(201,164,74,0.22)" strokeWidth="1" fill="none" />
      <path d="M0 76 L280 76" stroke="rgba(201,164,74,0.12)" strokeWidth="1" />
    </svg>
  )
}

function MiningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 20 L22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20 L6 14 L12 8 L18 14 L18 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 8 L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11 L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <path d="M4 16 L6 14 M20 16 L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function AgricultureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22 L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C12 6 8 3 4 4 C4 8 8 11 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 14 C12 10 16 7 20 8 C20 12 16 15 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 18 C6 18 7 20 9 21 M18 18 C18 18 17 20 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 22 L21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function TelecomIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <path d="M12 18.5 L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 15 C9.9 13.8 10.9 13 12 13 C13.1 13 14.1 13.8 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 12 C8 10 10 9 12 9 C14 9 16 10 17.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 9 C6.2 6.5 9 5 12 5 C15 5 17.8 6.5 20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1.5 6 C4.4 3 8 1.5 12 1.5 C16 1.5 19.6 3 22.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function EnergyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 L4 14 L11 14 L10 22 L20 10 L13 10 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}
function LogisticsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M1 3 H15 V15 H1 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 8 H19 L22 11 V15 H15 V8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="5.5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 18 H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SECTORS = [
  {
    illustration: <MiningIllustration />,
    icon: <MiningIcon />,
    name: 'Mining',
    desc: 'We unlock the earth\'s potential responsibly. Our mining division focuses on the exploration and extraction of high-value mineral resources, prioritising sustainable practices that minimise environmental footprint while maximising resource yield.',
  },
  {
    illustration: <AgricultureIllustration />,
    icon: <AgricultureIcon />,
    name: 'Agriculture',
    desc: 'Cultivating food security and economic stability. From large-scale commercial farming to agro-processing, we modernise agricultural value chains using mechanisation and smart farming techniques to ensure consistent supply from farm to table.',
  },
  {
    illustration: <TelecomIllustration />,
    icon: <TelecomIcon />,
    name: 'Telecommunications',
    desc: 'Connecting people and businesses is the backbone of our strategy. We invest in broadband expansion, mobile network solutions, and data services that bridge the digital divide and keep communities connected and businesses running efficiently.',
  },
  {
    illustration: <EnergyIllustration />,
    icon: <EnergyIcon />,
    name: 'Energy',
    desc: 'Powering the industries of tomorrow. Our energy division generates reliable power through a mix of traditional and renewable sources, ensuring energy security for industrial operations and residential communities, driving national productivity.',
  },
  {
    illustration: <LogisticsIllustration />,
    icon: <LogisticsIcon />,
    name: 'Logistics',
    desc: 'Moving the world with precision and speed. Our logistics and supply chain solutions ensure seamless transport of goods across borders and terrains, linking our mining, agricultural, and energy outputs to global markets with a modern fleet.',
  },
]

function ServiceCard({ illustration, icon, name, desc, delay }: {
  illustration: React.ReactNode; icon: React.ReactNode; name: string; desc: string; delay: string
}) {
  return (
    <div className="service-card reveal" style={{ transitionDelay: delay }}>
      <div className="service-illus-wrap">{illustration}</div>
      <div className="service-icon">{icon}</div>
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{desc}</p>
      <span className="service-link">
        Learn More <ArrowRight />
      </span>
    </div>
  )
}

export default function Services() {
  const top = SECTORS.slice(0, 3)
  const bot = SECTORS.slice(3)

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <p className="section-label centered reveal">Our Sectors</p>
          <h2 className="section-heading reveal d1">
            A Synergistic Portfolio<br />
            Across <span className="gradient-text">Five Verticals</span>
          </h2>
          <p className="services-body reveal d2">
            At Altesse Investments, each sector supports the growth of the others.
            Our diverse expertise allows us to navigate complex markets and deliver
            comprehensive solutions across the economy.
          </p>
        </div>

        <div className="services-grid-top">
          {top.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={`${i * 0.1}s`} />
          ))}
        </div>
        <div className="services-grid-bot">
          {bot.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={`${(i + 3) * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
