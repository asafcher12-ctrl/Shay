import { useState } from 'react'
import Ic from './Ic'

export function ContactForm({ title, subtitle }) {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [errs, setErrs]       = useState({})
  const [submitMessage, setSubmitMessage] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'שדה חובה'
    if (!form.phone.trim()) e.phone = 'שדה חובה'
    if (!form.email.trim()) e.email = 'שדה חובה'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'מייל לא תקין'
    return e
  }

  const submit = async ev => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrs(e); return }
    
    setLoading(true)
    setSubmitMessage(null)
    try {
      // הוחלף את xyzjkbdg בـ Form ID שלך מ-https://formspree.io
      const response = await fetch('https://formspree.io/f/xkokywrz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        })
      })
      
      if (response.ok) {
        setLoading(false)
        setSubmitMessage({ type: 'success', text: '✅ הטופס נשלח בהצלחה! אחזור אליך תוך 24 שעות 💛' })
        setSent(true)
        setForm({ name: '', phone: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setLoading(false)
        setSubmitMessage({ type: 'error', text: '❌ שגיאה בשליחה. אנא נסה שוב.' })
      }
    } catch (error) {
      setLoading(false)
      setSubmitMessage({ type: 'error', text: '❌ שגיאה בשליחה. בדוק את החיבור לאינטרנט.' })
    }
  }

  const set = (key, val) => { setForm({ ...form, [key]: val }); setErrs({ ...errs, [key]: '' }) }

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '48px 0' }}>
      <div style={{ fontSize: 52, marginBottom: 12 }}>🌸</div>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#cf2e2e', marginBottom: 8 }}>תודה! קיבלתי את פנייתך</h3>
      <p style={{ fontSize: 14, color: '#7a3a3a' }}>אחזור אליך תוך 24 שעות 💛</p>
    </div>
  )

  return (
    <div>
      {title    && <h3 style={{ fontSize: 20, fontWeight: 600, color: '#2d1a1a', marginBottom: 6 }}>{title}</h3>}
      {subtitle && <p  style={{ fontSize: 14, color: '#7a3a3a', marginBottom: 22 }}>{subtitle}</p>}
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <input className="form-input" placeholder="שם מלא *" value={form.name}  onChange={e => set('name',  e.target.value)} />
            {errs.name  && <p style={{ fontSize: 12, color: '#cf2e2e', marginTop: 4 }}>{errs.name}</p>}
          </div>
          <div>
            <input className="form-input" placeholder="טלפון *" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} />
            {errs.phone && <p style={{ fontSize: 12, color: '#cf2e2e', marginTop: 4 }}>{errs.phone}</p>}
          </div>
        </div>
        <div>
          <input className="form-input" placeholder="כתובת מייל *" type="email" value={form.email} onChange={e => set('email', e.target.value)} />
          {errs.email && <p style={{ fontSize: 12, color: '#cf2e2e', marginTop: 4 }}>{errs.email}</p>}
        </div>
        <textarea className="form-input" placeholder="ספרי לי מה מעסיק אותך..." rows={4}
          value={form.message} onChange={e => set('message', e.target.value)} style={{ resize: 'vertical' }} />
        <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? .7 : 1 }}>
          {loading ? '⏳ שולח...' : 'שליחה ←'}
        </button>
        
        {/* הודעת הצלחה/שגיאה */}
        {submitMessage && (
          <div style={{
            padding: 14,
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            textAlign: 'center',
            background: submitMessage.type === 'success' ? 'rgba(79, 184, 96, 0.1)' : 'rgba(207, 46, 46, 0.1)',
            color: submitMessage.type === 'success' ? '#4fb860' : '#cf2e2e',
            border: `1px solid ${submitMessage.type === 'success' ? 'rgba(79, 184, 96, 0.3)' : 'rgba(207, 46, 46, 0.3)'}`
          }}>
            {submitMessage.text}
          </div>
        )}
      </form>
    </div>
  )
}

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="וואטסאפ">
      <Ic n="wa" s={26} c="#fff" />
    </a>
  )
}

export default ContactForm
