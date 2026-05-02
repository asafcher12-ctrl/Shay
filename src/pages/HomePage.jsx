import { useNavigate } from 'react-router-dom'
import Ic from '../components/Ic'
import { ContactForm } from '../components/ContactForm'
import liorPhoto from '../assets/lior_photo.webp'
import handsImg  from '../assets/hands.jpg'

export default function HomePage() {
  const navigate = useNavigate()
  const go = path => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const services = [
    { e: '🌙', t: 'ייעוץ שינה',    d: 'תהליך מותאם אישית לכל משפחה ליצירת הרגלי שינה בריאים ורגועים.',             k: '/sleep'    },
    { e: '🤝', t: 'הדרכת הורים',   d: 'ליווי אישי שמותאם בדיוק לצרכים שלכם — כלים שמשנים את ההרגשה בבית.',        k: '/services' },
    { e: '🌿', t: 'קבוצות הורים',  d: 'מפגשים קבוצתיים אינטימיים ללמידה משותפת ותמיכה הדדית בין הורים.',          k: '/services' },
  ]

  const steps = [
    { n: '1', t: 'שיחת היכרות חינם', d: 'נדבר על הקשיים, נבין את הצרכים ונחליט יחד על הדרך קדימה.' },
    { n: '2', t: 'פגישת אבחון',       d: 'שעה וחצי לגיבוש תמונה מלאה ותוכנית עבודה אישית עבורכם.' },
    { n: '3', t: 'ליווי שבועי בזום',  d: 'פגישות עם כלים פרקטיים לשינוי אמיתי בחיי הבית.' },
    { n: '4', t: 'פגישת סיום',        d: 'סיכום, כיוון להמשך ותחושת ביטחון עצמי חדשה לחלוטין.' },
  ]

  const testimonials = [
    { n: 'מיכל כ.',        t: 'ליאור עזרה לי להיות הורה רגועה ובטוחה. הילדים השתנו כשאני השתניתי. ממליצה בחום!' },
    { n: 'רחל ואיתן ד.',   t: 'ייעוץ השינה שינה את חיי המשפחה שלנו. לאחר שבועיים הילד ישן לבד ואנחנו נשמנו סוף סוף.' },
    { n: 'שיר ל.',          t: 'כלי אדלר שלמדתי דרך ליאור הם חלק מהיומיום שלי. מעשי, אמיתי ואפקטיבי!' },
  ]

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero-bg" style={{ paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <img src={handsImg} className="hero-bg-img" alt="" aria-hidden />
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="badge anim-up" style={{ marginBottom: 20 }}>מדריכת הורים מוסמכת מכון אדלר</div>
              <h1 className="anim-up d1" style={{ fontSize: 'clamp(36px,4.5vw,54px)', fontWeight: 700, color: '#2d1a1a', lineHeight: 1.15, marginBottom: 18 }}>
                הורות<br /><span style={{ color: '#F5B3CD' }}>בעיניים טובות</span>
              </h1>
              <p className="anim-up d2" style={{ fontSize: 17, color: '#7a3a3a', lineHeight: 1.85, marginBottom: 30, maxWidth: 430 }}>
                פשוט לעצור לרגע ולדבר. ייעוץ הורי שמביא חיבור, שקט וכלים שמתאימים בדיוק לכם.
                <br /><em style={{ color: '#F5B3CD' }}>"כי גם מפגש אחד יכול לשנות את ההרגשה בבית."</em>
              </p>
              <div className="anim-up d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => go('/contact')}>לשיחת ייעוץ חינם ←</button>
                <button className="btn-outline" onClick={() => go('/about')}>קצת עלי</button>
              </div>
              <div className="anim-up d4" style={{ display: 'flex', gap: 32, marginTop: 36 }}>
                {[{ n: '200+', l: 'משפחות ליוויתי' }, { n: '5+', l: 'שנות ניסיון' }, { n: '98%', l: 'שביעות רצון' }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#f78da7' }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: '#7a3a3a' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="anim-in d2" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <img src={liorPhoto} className="lior-photo" alt="ליאור מזומן צ'רקס" />
                <div style={{ position: 'absolute', bottom: -16, right: -16, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 6px 24px rgba(207,46,46,.12)', fontSize: 13, color: '#2d1a1a', fontWeight: 500, border: '1px solid rgba(247,141,167,.2)' }}>
                  ✨ שיחה ראשונה – חינם!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* wave */}
      <div style={{ lineHeight: 0, marginTop: -2 }}>
        <svg viewBox="0 0 1440 50" style={{ display: 'block', width: '100%' }}><path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="#fff0f4" /></svg>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ background: '#fff0f4', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge">השירותים שלי</span>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>כי אין חוברת הפעלה להורות</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: '32px 26px', cursor: 'pointer' }} onClick={() => go(s.k)}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{s.e}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#2d1a1a', marginBottom: 10 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: '#7a3a3a', lineHeight: 1.75 }}>{s.d}</p>
                <div style={{ marginTop: 14, color: '#cf2e2e', fontSize: 13, fontWeight: 500 }}>לפרטים נוספים ←</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ lineHeight: 0 }}><svg viewBox="0 0 1440 50" style={{ display: 'block', width: '100%' }}><path d="M0,25 C480,0 960,50 1440,25 L1440,50 L0,50 Z" fill="#ffffff" /></svg></div>

      {/* ── PROCESS ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge">איך זה עובד?</span>
            <h2 style={{ fontFamily: 'Frank Ruhl Libre, serif', fontSize: 34, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>ארבעה שלבים פשוטים</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 16 }}>
            {steps.map((st, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', borderRadius: 16, padding: '22px 24px', border: '1px solid rgba(247,141,167,.2)' }}>
                <div className="step-num">{st.n}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: '#2d1a1a', marginBottom: 6 }}>{st.t}</h4>
                  <p style={{ fontSize: 14, color: '#7a3a3a', lineHeight: 1.65 }}>{st.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button className="btn-primary" onClick={() => go('/contact')}>מתחילים עם שיחה חינם ←</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff0f4', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge">מה אומרות אמהות</span>
            <h2 style={{ fontFamily: 'Frank Ruhl Libre, serif', fontSize: 34, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>משפחות שעברו תהליך</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ padding: '32px 22px', position: 'relative' }}>
                <span className="quote-mark">"</span>
                <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                  {[...Array(5)].map((_, j) => <Ic key={j} n="star" s={14} c="#f78da7" />)}
                </div>
                <p style={{ fontSize: 14, color: '#7a3a3a', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 14 }}>"{t.t}"</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#cf2e2e' }}>— {t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg,#f78da7 0%,#cf2e2e 100%)', padding: '72px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Frank Ruhl Libre, serif', fontSize: 34, fontWeight: 700, color: '#fff', marginBottom: 10 }}>מוכנות להתחיל?</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.85)', marginBottom: 30 }}>שיחת ייעוץ ראשונה – בחינם, ללא התחייבות.</p>
        <button className="card" style={{ background: '#fff', color: '#F5B3CD', padding: '15px 44px', borderRadius: 999, fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'Heebo, sans-serif' }} onClick={() => go('/contact')}>
          יצירת קשר ←
        </button>
      </section>

      {/* ── QUICK FORM ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="badge">השאירו פרטים</span>
            <h2 style={{ fontFamily: 'Frank Ruhl Libre, serif', fontSize: 30, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>רוצות לדבר? אני כאן</h2>
          </div>
          <div style={{ background: '#fff', borderRadius: 24, padding: 40, boxShadow: '0 4px 40px rgba(207,46,46,.08)', border: '1px solid rgba(247,141,167,.15)' }}>
            <ContactForm subtitle="אשמח להכיר ולראות כיצד אוכל לעזור" />
          </div>
        </div>
      </section>
    </div>
  )
}
