const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 4.5 + Math.sin(i) * 10 + 50) % 100}%`,
  delay: `${(i * 0.63) % 12}s`,
  duration: `${9 + (i * 1.1) % 8}s`,
  size: `${1.2 + (i % 3) * 0.6}px`,
  opacity: 0.25 + (i % 5) * 0.1,
}))

const STATS = [
  { icon: '⛏', number: '5', label: 'Core Sectors' },
  { icon: '🌍', number: 'ESG', label: 'Committed' },
  { icon: '🏆', number: 'ZWE', label: 'Harare HQ' },
  { icon: '📈', number: '∞', label: 'Growth Vision' },
]

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left, bottom: '-8px',
              width: p.size, height: p.size,
              animationDelay: p.delay, animationDuration: p.duration,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            Premier Diversified Holdings · Harare, Zimbabwe
          </div>

          <h1 className="hero-headline">
            Building Ecosystems<br />
            That <span className="hl">Power Economies</span>
          </h1>

          <p className="hero-body">
            A premier diversified holding company spanning Mining, Agriculture,
            Telecommunications, Energy, and Logistics. We do not merely invest
            in industries — we build the ecosystems that sustain them.
          </p>

          <div className="hero-ctas">
            <a href="#services" className="btn btn-gold">
              Explore Our Sectors <ArrowRight />
            </a>
            <a href="#about" className="btn btn-outline">
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <span className="hero-card-badge">Portfolio Overview</span>
            <div className="hero-card-grid">
              {STATS.map(s => (
                <div className="hero-stat-item" key={s.label}>
                  <div className="hero-stat-icon" aria-hidden="true">{s.icon}</div>
                  <div className="hero-stat-number">{s.number}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
