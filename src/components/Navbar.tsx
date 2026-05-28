import { useState, useEffect } from 'react'

function LogoMark() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="21.5" stroke="url(#lg1)" strokeWidth="1.5" />
      <circle cx="23" cy="23" r="17" stroke="url(#lg1)" strokeWidth="0.5" opacity="0.35" />
      {/* Body arc */}
      <path d="M23 34 C17 34, 12 29, 12 23 C12 17, 17 12, 23 12" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Neck / head */}
      <path d="M23 12 C20 8.5, 16.5 7, 13 8" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="12.5" cy="7.5" r="2.5" fill="#7C3AED" />
      {/* Right wing */}
      <path d="M23 23 C28 19, 34 21, 33 27" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Left wing tip */}
      <path d="M14 23 C9 20, 7 25, 10 30" stroke="url(#lg1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Tail feathers */}
      <path d="M21 34 L18 42" stroke="url(#lg1)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 34 L23 43" stroke="url(#lg1)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 34 L28 42" stroke="url(#lg1)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EDD490" />
          <stop offset="50%" stopColor="#C9A44A" />
          <stop offset="100%" stopColor="#9B7A2E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo" onClick={() => setOpen(false)} aria-label="Altesse Investments Home">
          <LogoMark />
          <span className="logo-text">
            <span className="logo-text-primary">Altesse</span>
            <span className="logo-text-secondary">Investments</span>
          </span>
        </a>

        <ul className={`navbar-links${open ? ' open' : ''}`} role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-nav" onClick={() => setOpen(false)}>
              Invest With Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
