const REASONS = [
  {
    num: '01',
    title: 'Strategic Diversification',
    desc: 'Our diversified model balances tangible assets like mining and agriculture with dynamic sectors such as telecommunications and energy — providing resilience that withstands market fluctuations.',
  },
  {
    num: '02',
    title: 'Commitment to Sustainable Development',
    desc: 'We approach ESG as a core strategy. We actively reduce our carbon footprint, rehabilitate mining sites, and support community development — placing long-term environmental health above short-term gains.',
  },
  {
    num: '03',
    title: 'Local Presence, Global Standards',
    desc: 'Deeply rooted in the regions we operate, we combine local insight with international best practices. Whether complying with safety regulations or global financial reporting standards, we operate on trust.',
  },
  {
    num: '04',
    title: 'Operational Expertise & Innovation',
    desc: 'We employ industry veterans with decades of experience and leverage the latest technologies — from automated farming to data-driven logistics management — ensuring efficiency, safety, and cost-effectiveness.',
  },
]

const SHOWCASE_STATS = [
  { num: '5', lbl: 'Industry Verticals' },
  { num: '3+', lbl: 'African Markets' },
  { num: 'ESG', lbl: 'Framework' },
  { num: '24/7', lbl: 'Operations' },
]

const SECTORS = ['Mining', 'Agriculture', 'Telecommunications', 'Energy', 'Logistics']

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="container">
        <div className="whyus-grid">
          <div>
            <p className="section-label reveal">Why Choose Us</p>
            <h2 className="section-heading reveal d1">
              Four Pillars That Set<br />
              <span className="gradient-text">Altesse Apart</span>
            </h2>
            <div className="gold-rule reveal d2" />

            <div className="whyus-items">
              {REASONS.map(({ num, title, desc }, i) => (
                <div className={`whyus-item reveal d${i + 2}`} key={num}>
                  <span className="whyus-num">{num}</span>
                  <div>
                    <div className="whyus-item-title">{title}</div>
                    <div className="whyus-item-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right d2">
            <div className="whyus-showcase">
              <h3 className="whyus-showcase-title">
                A Holistic Ecosystem Where Success in One Sector Fuels Growth in Another
              </h3>

              <div className="whyus-stats-grid">
                {SHOWCASE_STATS.map(({ num, lbl }) => (
                  <div className="wstat" key={lbl}>
                    <div className="wstat-num">{num}</div>
                    <div className="wstat-lbl">{lbl}</div>
                  </div>
                ))}
              </div>

              <div className="sector-pills">
                {SECTORS.map(s => (
                  <span className="sector-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
