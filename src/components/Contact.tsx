import { useState } from 'react'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 2h3.5l1.5 4-2 1.5a10 10 0 005 5L12.5 11l4 1.5V16a2 2 0 01-2 2C6 18 0 12 0 4a2 2 0 012-2h1Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1 6l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1a6 6 0 016 6c0 4-6 10-6 10S3 11 3 7a6 6 0 016-6Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1 9h16M9 1c-2 2-3.5 4.7-3.5 8S7 15 9 17c2-2 3.5-4.7 3.5-8S11 3 9 1Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

const INFO = [
  { icon: <PhoneIcon />, label: 'Phone', value: '+263 71 468 4261', href: 'tel:+263714684261' },
  { icon: <EmailIcon />, label: 'Email', value: 'marketing@altessegroup.co.zw', href: 'mailto:marketing@altessegroup.co.zw' },
  { icon: <PinIcon />, label: 'Address', value: '21 Mold Crescent Avondale, Harare', href: null },
  { icon: <GlobeIcon />, label: 'Website', value: 'www.altessegroup.co.zw', href: null },
]

type Fields = 'firstName' | 'lastName' | 'email' | 'sector' | 'message'
type FieldErrors = Partial<Record<Fields, string>>

function validateField(name: Fields, value: string): string {
  switch (name) {
    case 'firstName':
    case 'lastName':
      if (!value.trim()) return `${name === 'firstName' ? 'First' : 'Last'} name is required`
      if (value.trim().length < 2) return 'Must be at least 2 characters'
      return ''
    case 'email':
      if (!value.trim()) return 'Email address is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Enter a valid email address'
      return ''
    case 'sector':
      if (!value) return 'Please select an area of interest'
      return ''
    case 'message':
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 10) return 'Message must be at least 10 characters'
      return ''
    default:
      return ''
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Partial<Record<Fields, boolean>>>({})

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const name = e.target.name as Fields
    const value = e.target.value
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (!touched[e.target.name as Fields]) return
    const name = e.target.name as Fields
    setErrors(prev => ({ ...prev, [name]: validateField(name, e.target.value) }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError('')

    const data = new FormData(e.currentTarget)
    const fields: Record<Fields, string> = {
      firstName: data.get('firstName') as string,
      lastName: data.get('lastName') as string,
      email: data.get('email') as string,
      sector: data.get('sector') as string,
      message: data.get('message') as string,
    }

    const allFields = Object.keys(fields) as Fields[]
    const newErrors: FieldErrors = {}
    allFields.forEach(f => {
      const msg = validateField(f, fields[f])
      if (msg) newErrors[f] = msg
    })
    setTouched(Object.fromEntries(allFields.map(f => [f, true])))
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setServerError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left info */}
          <div>
            <p className="section-label reveal">Get In Touch</p>
            <h2 className="section-heading reveal d1">
              Ready to Build the<br />
              <span className="gradient-text">Future Together?</span>
            </h2>
            <p className="contact-body reveal d2">
              Whether you're an investor, partner, or stakeholder looking to explore
              opportunities with Altesse Investments, we would be delighted to hear from you.
            </p>

            <div className="contact-info-list">
              {INFO.map(({ icon, label, value, href }, i) => (
                <div className={`cinfo-item reveal d${i + 2}`} key={label}>
                  <div className="cinfo-icon">{icon}</div>
                  <div>
                    <div className="cinfo-label">{label}</div>
                    {href
                      ? <a href={href} className="cinfo-value" style={{ transition: 'color 0.3s' }}>{value}</a>
                      : <div className="cinfo-value">{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="reveal-right d1">
            <div className="contact-form-card">
              <h3 className="form-title">Send us a Message</h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.5rem' }}>
                    Message Received
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                    Thank you for reaching out. Our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="first-name">First Name</label>
                      <input
                        id="first-name" name="firstName" type="text"
                        className={`form-input${errors.firstName ? ' form-input--error' : ''}`}
                        placeholder="John"
                        onBlur={handleBlur} onChange={handleChange}
                      />
                      {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="last-name">Last Name</label>
                      <input
                        id="last-name" name="lastName" type="text"
                        className={`form-input${errors.lastName ? ' form-input--error' : ''}`}
                        placeholder="Doe"
                        onBlur={handleBlur} onChange={handleChange}
                      />
                      {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      placeholder="john@company.com"
                      onBlur={handleBlur} onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="sector">Area of Interest</label>
                    <select
                      id="sector" name="sector"
                      className={`form-select${errors.sector ? ' form-input--error' : ''}`}
                      onBlur={handleBlur} onChange={handleChange}
                    >
                      <option value="">Select a sector...</option>
                      <option value="mining">Mining</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="telecom">Telecommunications</option>
                      <option value="energy">Energy</option>
                      <option value="logistics">Logistics</option>
                      <option value="general">General Investment</option>
                    </select>
                    {errors.sector && <span className="form-error">{errors.sector}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      className={`form-textarea${errors.message ? ' form-input--error' : ''}`}
                      placeholder="Tell us about your interest or enquiry..."
                      onBlur={handleBlur} onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {serverError && (
                    <p style={{ color: '#e53e3e', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      {serverError}
                    </p>
                  )}

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading && <span className="btn-spinner" />}
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
