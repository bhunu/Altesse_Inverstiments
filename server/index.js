import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())
app.use(cors())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, sector, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const senderName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`
  const senderEmail = escapeHtml(email)
  const sectorLabel = escapeHtml(sector || 'Not specified')
  const messageBody = escapeHtml(message).replace(/\n/g, '<br>')

  try {
    await transporter.sendMail({
      from: `"Altesse Investments Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry: ${firstName} ${lastName} — ${sector || 'General'}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nArea of Interest: ${sector || 'Not specified'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a2744;border-bottom:2px solid #c9a84c;padding-bottom:8px">
            New Enquiry — Altesse Investments
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:8px 0;color:#666;width:160px"><strong>Name</strong></td><td>${senderName}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td><a href="mailto:${senderEmail}">${senderEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Area of Interest</strong></td><td>${sectorLabel}</td></tr>
          </table>
          <h3 style="color:#1a2744">Message</h3>
          <p style="line-height:1.6;color:#333">${messageBody}</p>
        </div>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
