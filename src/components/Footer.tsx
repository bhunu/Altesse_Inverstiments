function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="21.5" stroke="url(#flg)" strokeWidth="1.5" />
      <path d="M23 34 C17 34, 12 29, 12 23 C12 17, 17 12, 23 12" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M23 12 C20 8.5, 16.5 7, 13 8" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="12.5" cy="7.5" r="2.5" fill="#7C3AED" />
      <path d="M23 23 C28 19, 34 21, 33 27" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M14 23 C9 20, 7 25, 10 30" stroke="url(#flg)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M21 34 L18 42" stroke="url(#flg)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 34 L23 43" stroke="url(#flg)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 34 L28 42" stroke="url(#flg)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="flg" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EDD490" /><stop offset="50%" stopColor="#C9A44A" /><stop offset="100%" stopColor="#9B7A2E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const SECTORS = [
  { label: 'Mining', href: '#services' },
  { label: 'Agriculture', href: '#services' },
  { label: 'Telecommunications', href: '#services' },
  { label: 'Energy', href: '#services' },
  { label: 'Logistics', href: '#services' },
]

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#" aria-label="Altesse Investments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <LogoMark />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Altesse Investments
              </span>
            </a>
            <p className="footer-desc">
              A premier diversified holding company dedicated to fostering economic
              growth and sustainable development across Mining, Agriculture,
              Telecommunications, Energy, and Logistics.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <div className="footer-col-title">Our Sectors</div>
            <ul className="footer-links" role="list">
              {SECTORS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">
              <div className="footer-contact-lbl">Phone</div>
              <a href="tel:+263714684261" className="footer-contact-val">+263 71 468 4261</a>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-lbl">Email</div>
              <a href="mailto:marketing@altessegroup.co.zw" className="footer-contact-val">marketing@altessegroup.co.zw</a>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-lbl">Address</div>
              <div className="footer-contact-val">21 Mold Crescent Avondale,<br />Harare, Zimbabwe</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-lbl">Website</div>
              <div className="footer-contact-val">www.altessegroup.co.zw</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Altesse Investments</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
