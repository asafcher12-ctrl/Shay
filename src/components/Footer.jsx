import { useNavigate } from 'react-router-dom'
import Ic from './Ic'

export default function Footer() {
  const navigate = useNavigate()
  const go = path => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <footer style={{ background: '#2d1a1a', color: '#ffe0e8' }}>
      <div style={{ lineHeight: 0, marginBottom: -2 }}>
        <svg viewBox="0 0 1440 56" style={{ display: 'block', width: '100%' }}>
          <path d="M0,28 C360,56 1080,0 1440,28 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: 24, color: '#f78da7', fontWeight: 700, marginBottom: 6 }}>המגדלאור</div>
            <div style={{ fontSize: 10, color: 'rgba(255,224,232,.5)', letterSpacing: '2px', marginBottom: 14 }}>יוצרים הורות מאירה</div>
            <p style={{ fontSize: 14, color: 'rgba(255,224,232,.6)', lineHeight: 1.75 }}>
              מדריכת הורים, יועצת שינה ומנחת קבוצות מוסמכת. מלווה משפחות לבית שמח ומכיל.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#f78da7', marginBottom: 16 }}>ניווט מהיר</div>
            {[
              { path: '/',         label: 'דף הבית' },
              { path: '/about',    label: 'אודות ליאור' },
              { path: '/services', label: 'הדרכת הורים' },
              { path: '/sleep',    label: 'ייעוץ שינה' },
              { path: '/contact',  label: 'צרי קשר' },
            ].map(item => (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                style={{ display: 'block', textAlign: 'right', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'rgba(255,224,232,.55)', padding: '3px 0', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#f78da7'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,224,232,.55)'}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact & social */}
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#f78da7', marginBottom: 16 }}>יצירת קשר</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              <a href="tel:+972501234567" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,224,232,.6)', textDecoration: 'none', fontSize: 14 }}>
                <Ic n="phone" s={14} c="#f78da7" /> 050-123-4567
              </a>
              <a href="mailto:lior@liormezu.co.il" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,224,232,.6)', textDecoration: 'none', fontSize: 14 }}>
                <Ic n="mail" s={14} c="#f78da7" /> lior@liormezu.co.il
              </a>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { n: 'fb', h: 'https://www.facebook.com/profile.php?id=61571783081389' },
                { n: 'ig', h: 'https://www.instagram.com/liore_mezuman_cherckez/' },
                { n: 'li', h: 'https://www.linkedin.com/in/liore-mezuman/' },
              ].map(s => (
                <a key={s.n} href={s.h} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Ic n={s.n} s={16} c="#f78da7" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,224,232,.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,224,232,.3)' }}>© 2025 המגדלאור – ליאור מזומן צ'רקס. כל הזכויות שמורות.</p>
          <p style={{ fontSize: 13, color: 'rgba(255,224,232,.2)' }}>עוצב באהבה 🌸</p>
        </div>
      </div>
    </footer>
  )
}
