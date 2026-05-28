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
    icon: <MiningIcon />,
    name: 'Mining',
    desc: 'We unlock the earth\'s potential responsibly. Our mining division focuses on the exploration and extraction of high-value mineral resources, prioritising sustainable practices that minimise environmental footprint while maximising resource yield.',
  },
  {
    icon: <AgricultureIcon />,
    name: 'Agriculture',
    desc: 'Cultivating food security and economic stability. From large-scale commercial farming to agro-processing, we modernise agricultural value chains using mechanisation and smart farming techniques to ensure consistent supply from farm to table.',
  },
  {
    icon: <TelecomIcon />,
    name: 'Telecommunications',
    desc: 'Connecting people and businesses is the backbone of our strategy. We invest in broadband expansion, mobile network solutions, and data services that bridge the digital divide and keep communities connected and businesses running efficiently.',
  },
  {
    icon: <EnergyIcon />,
    name: 'Energy',
    desc: 'Powering the industries of tomorrow. Our energy division generates reliable power through a mix of traditional and renewable sources, ensuring energy security for industrial operations and residential communities, driving national productivity.',
  },
  {
    icon: <LogisticsIcon />,
    name: 'Logistics',
    desc: 'Moving the world with precision and speed. Our logistics and supply chain solutions ensure seamless transport of goods across borders and terrains, linking our mining, agricultural, and energy outputs to global markets with a modern fleet.',
  },
]

function ServiceCard({ icon, name, desc, delay }: { icon: React.ReactNode; name: string; desc: string; delay: string }) {
  return (
    <div className={`service-card reveal`} style={{ transitionDelay: delay }}>
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
