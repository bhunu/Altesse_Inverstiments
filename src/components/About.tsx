function IntegrityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5 L11 6.5 L16.5 7 L12.5 10.8 L13.8 16.5 L9 13.8 L4.2 16.5 L5.5 10.8 L1.5 7 L7 6.5 Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}
function InnovationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 12.5 L7.5 15.5 L10.5 15.5 L11.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 1 L9 3M1 7 L3 7M15 7 L17 7M3 3 L4.5 4.5M13.5 4.5 L15 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
function SustainabilityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 16 C9 16 2 12 2 7 C2 4.2 4.2 2 7 2 C8.2 2 9.3 2.5 10 3.2 C10.7 2.5 11.8 2 13 2 C15.8 2 18 4.2 18 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 10 C5 10 7 8 9 9 C11 10 14 7 16 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 9 L9 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
function ExcellenceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2 L10.5 7 L16 7 L11.5 10 L13 15 L9 12 L5 15 L6.5 10 L2 7 L7.5 7 Z"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

const VALUES = [
  { icon: <IntegrityIcon />, name: 'Integrity', text: 'We conduct business with transparency, honesty, and the highest ethical standards.' },
  { icon: <InnovationIcon />, name: 'Innovation', text: 'We embrace technology and modern methods to stay ahead of industry trends.' },
  { icon: <SustainabilityIcon />, name: 'Sustainability', text: 'Committed to environmental stewardship and responsible resource management.' },
  { icon: <ExcellenceIcon />, name: 'Excellence', text: 'We strive for the highest quality in our operations, services, and management.' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Text */}
          <div>
            <p className="section-label reveal">About Us</p>
            <h2 className="section-heading reveal d1">
              We Build the Ecosystems<br />
              That <span className="gradient-text">Power Economies</span>
            </h2>
            <div className="gold-rule reveal d2" />
            <p className="about-body reveal d2">
              Altesse Investments is a premier diversified holding company dedicated to
              fostering economic growth and sustainable development across key sectors.
              With a robust portfolio spanning Mining, Agriculture, Telecommunications,
              Energy, and Logistics, we serve as a catalyst for industrial transformation.
            </p>
            <p className="about-body reveal d3" style={{ marginTop: '-0.5rem' }}>
              We do not merely invest in industries; we build the ecosystems that power
              economies — delivering superior returns to stakeholders while innovating
              solutions that address the world's evolving needs.
            </p>

            <div className="about-cards">
              <div className="vm-card reveal d3">
                <div className="vm-card-tag">Our Vision</div>
                <p className="vm-card-text">
                  To be the global benchmark for diversified investment, recognised for
                  sustainable value creation, operational excellence, and a profound
                  impact on the communities we serve.
                </p>
              </div>
              <div className="vm-card reveal d4">
                <div className="vm-card-tag">Our Mission</div>
                <p className="vm-card-text">
                  To drive economic empowerment by strategically managing and optimising
                  assets across high-growth sectors, delivering superior returns to our
                  stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Core Values */}
          <div className="about-visual reveal-right">
            <div className="about-showcase">
              <h3 className="about-showcase-title">Our Core Values</h3>
              <div className="values-list">
                {VALUES.map(({ icon, name, text }) => (
                  <div className="value-row" key={name}>
                    <div className="value-icon">{icon}</div>
                    <div>
                      <div className="value-name">{name}</div>
                      <div className="value-text">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
