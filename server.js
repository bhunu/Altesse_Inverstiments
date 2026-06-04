import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.set('trust proxy', 1)
app.use(cors())
app.use(express.json())

// Serve built React app
app.use(express.static(join(__dirname, 'dist')))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests. Please try again in 15 minutes.' },
})

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { firstName, lastName, email, sector, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' })
  }

  const timestamp = new Date().toLocaleString('en-GB', {
    timeZone: 'Africa/Harare',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
  <h2 style="color:#1a2744;border-bottom:2px solid #c9a84c;padding-bottom:8px;margin-bottom:20px;">
    New Enquiry — Altesse Investments Website
  </h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="padding:8px 12px 8px 0;font-weight:bold;width:160px;color:#374151;vertical-align:top;">Name:</td>
      <td style="padding:8px 0;color:#111827;">${esc(firstName)} ${esc(lastName)}</td>
    </tr>
    <tr>
      <td style="padding:8px 12px 8px 0;font-weight:bold;color:#374151;vertical-align:top;">Email:</td>
      <td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#1a2744;">${esc(email)}</a></td>
    </tr>
    ${sector ? `
    <tr>
      <td style="padding:8px 12px 8px 0;font-weight:bold;color:#374151;vertical-align:top;">Area of Interest:</td>
      <td style="padding:8px 0;color:#111827;">${esc(sector)}</td>
    </tr>` : ''}
    <tr>
      <td style="padding:8px 12px 8px 0;font-weight:bold;color:#374151;vertical-align:top;">Message:</td>
      <td style="padding:8px 0;color:#111827;white-space:pre-wrap;">${esc(message)}</td>
    </tr>
    <tr>
      <td style="padding:16px 12px 8px 0;font-weight:bold;color:#374151;vertical-align:top;">Sent at:</td>
      <td style="padding:16px 0 8px;color:#6b7280;font-size:13px;">${timestamp}</td>
    </tr>
  </table>
</div>
`

  try {
    await transporter.sendMail({
      from: '"Altesse Investments Website" <webclients@altessegroup.co.zw>',
      to: 'marketing@altessegroup.co.zw',
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName} — ${sector || 'General'}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nArea of Interest: ${sector || 'Not specified'}\n\nMessage:\n${message}`,
      html,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again.' })
  }
})

// Fallback: serve React app for any non-API route
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
