import { useState, useEffect, useRef, useCallback } from 'react'

const SLIDES = [
  {
    sector: 'Mining',
    tagline: "Unlocking Earth's Potential",
    desc: 'Responsible extraction of high-value mineral resources across proven deposits.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1920&q=85',
    thumb: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=700&q=75',
  },
  {
    sector: 'Agriculture',
    tagline: 'Cultivating Food Security',
    desc: 'Large-scale commercial farming and agro-processing using modern mechanisation.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=85',
    thumb: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=75',
  },
  {
    sector: 'Telecommunications',
    tagline: 'Connecting Communities',
    desc: 'Broadband expansion and mobile networks bridging the digital divide.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=85',
    thumb: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=75',
  },
  {
    sector: 'Energy',
    tagline: 'Powering the Future',
    desc: 'Reliable renewable and traditional power for industrial and residential growth.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=85',
    thumb: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=75',
  },
  {
    sector: 'Logistics',
    tagline: 'Moving the World with Precision',
    desc: 'Supply chain solutions linking our outputs to global markets.',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=85',
    thumb: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=700&q=75',
  },
]

const INTERVAL = 4000

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  const [active, setActive] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  // Use a ref so hover state never re-triggers the effect
  const pausedRef = useRef(false)

  const goTo = useCallback((i: number) => {
    setActive(i)
    setTimerKey(k => k + 1) // restart countdown after manual navigation
  }, [])

  const prev = () => goTo((active - 1 + SLIDES.length) % SLIDES.length)
  const next = () => goTo((active + 1) % SLIDES.length)

  // Interval checks pausedRef at fire-time, never re-runs on hover changes
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive(i => (i + 1) % SLIDES.length)
      }
    }, INTERVAL)
    return () => clearInterval(id)
  }, [timerKey]) // only restart when user manually navigates

  return (
    <section
      className="hero-section"
      aria-label="Hero"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* ── Full-screen background slider ── */}
      <div className="hero-slider" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.sector}
            className={`hero-slide${i === active ? ' active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-slide-overlay" />
      </div>

      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* ── Content grid ── */}
      <div className="hero-content">

        {/* Left: headline + CTAs */}
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
            Telecommunications, Energy, and Logistics — we do not merely invest
            in industries, we build the ecosystems that sustain them.
          </p>

          <div className="hero-ctas">
            <a href="#services" className="btn btn-gold">
              Explore Our Sectors <ArrowRight />
            </a>
            <a href="#about" className="btn btn-outline">Our Story</a>
          </div>
        </div>

        {/* Right: card with mini image slider + sector list */}
        <div className="hero-right">
          <div className="hero-card">
            <span className="hero-card-badge">Our Portfolio</span>

            {/* ── Mini image slider ── */}
            <div className="hero-mini-slider">
              {SLIDES.map((s, i) => (
                <img
                  key={s.sector}
                  src={s.thumb}
                  alt={s.sector}
                  className={`hero-mini-img${i === active ? ' active' : ''}`}
                />
              ))}
              <div className="hero-mini-caption">
                <span className="hero-mini-sector">{SLIDES[active].sector}</span>
                <span className="hero-mini-tag">{SLIDES[active].tagline}</span>
              </div>
            </div>

            {/* ── Sector list ── */}
            <div className="hero-snav">
              {SLIDES.map((s, i) => (
                <button
                  key={s.sector}
                  className={`hero-snav-item${i === active ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${s.sector} slide`}
                >
                  <span className="hero-snav-num">0{i + 1}</span>
                  <span className="hero-snav-name">{s.sector}</span>
                  {i === active && (
                    <span key={`${active}-${timerKey}`} className="hero-snav-bar" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">
        <ChevronLeft />
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">
        <ChevronRight />
      </button>

      {/* ── Dot navigation ── */}
      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((s, i) => (
          <button
            key={s.sector}
            className={`hero-dot${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-label={s.sector}
            aria-selected={i === active}
          />
        ))}
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
