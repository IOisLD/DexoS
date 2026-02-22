import { useState } from 'react'
import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')

  const res = await fetch('https://formspree.io/f/xpwzabcd', {  // ← your endpoint
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:    form.name,
      email:   form.email,
      message: form.message,
    }),
  })

  if (res.ok) {
    setStatus('sent')
  } else {
    setStatus('idle')
    alert('Something went wrong. Please email me directly.')
  }
}

  return (
    <section className="contact" id="contact" ref={ref}>
      {/* Glow */}
      <div className="contact-glow" />

      <div className="wrap">
        <div className="contact-grid">
          {/* Left — info */}
          <div className="contact-info">
            <span className="section-label reveal d1">// get_in_touch</span>
            <h2 className="section-title reveal d2">
              Let's <span className="grad">Connect</span>
            </h2>
            <p className="contact-body reveal d3">
              Have a project in mind? I'm always open to new ideas and opportunities.
              Reach out and let's talk about how we can work together.
            </p>

            <div className="contact-details reveal d4">
              <a href={`mailto:${CONFIG.email}`} className="contact-link">
                <div className="contact-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-val">{CONFIG.email}</div>
                </div>
              </a>

              {/* <a href={CONFIG.telegram} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-label">Telegram</div>
                  <div className="contact-link-val">@Dexo</div>
                </div>
              </a> */}
            </div>

            {/* Socials */}
            <div className="contact-socials reveal d5">
              {CONFIG.socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                   className="contact-social">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap reveal d3">
            {status === 'sent'
              ? (
                <div className="contact-sent">
                  <div className="contact-sent-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              )
              : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input form-textarea"
                      name="message"
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary form-submit${status === 'sending' ? ' sending' : ''}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending'
                      ? <><span className="form-spinner" /> Sending…</>
                      : 'Send Message'
                    }
                  </button>
                </form>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}