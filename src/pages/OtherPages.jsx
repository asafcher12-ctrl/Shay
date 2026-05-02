// ── AboutPage ──────────────────────────────────────────────
import { useNavigate } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import liorPhoto from '../assets/lior_photo.webp'

export function AboutPage() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <section style={{ background: 'linear-gradient(180deg,#fff0f4 0%,#fff 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 56, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={liorPhoto} className="lior-photo" alt="ליאור מזומן צ'רקס" style={{ width: 280, height: 280, marginBottom: 20 }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              {['מוסמכת מכון אדלר', 'יועצת שינה', 'מנחת קבוצות', '5+ שנות ניסיון'].map(c => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="badge" style={{ marginBottom: 16, display: 'inline-block' }}>נעים להכיר</span>
            <h1 style={{ fontSize: 40, fontWeight: 700, color: '#2d1a1a', marginBottom: 16 }}>
              ליאור מזומן<br /><span style={{ color: '#F5B3CD' }}>צ'רקס</span>
            </h1>
            <p style={{ fontSize: 16, color: '#7a3a3a', lineHeight: 1.85, marginBottom: 16 }}>
              אמא לשלושה מתוקים – דניאל (7), עידו (5), ושי (3). מדריכת הורים, יועצת שינה, ומנחת קבוצות מוסמכת להורים וילדים.
            </p>
            <p style={{ fontSize: 15, color: '#7a3a3a', lineHeight: 1.85, marginBottom: 28 }}>
              בעבודתי אני מלווה הורים בתהליכי חיזוק הקשר עם ילדיהם, מתן כלים להתמודדות עם אתגרי ההורות, יצירת תקשורת מקרבת, והנחיית קבוצות ילדים והורים במרחבים חברתיים ורגשיים.
              <br /><br />
              אני מציעה תהליכים פרטניים, סדנאות קבוצתיות ותמיכה מותאמת אישית, מתוך אמונה שכל משפחה יכולה לבנות בית שמח, בטוח ומכיל.
            </p>
            <button className="btn-primary" onClick={() => go('/contact')}>בואו נדבר ←</button>
          </div>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge">שיטת אדלר</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>עקרונות הבסיס</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
            {[
              { n: '01', t: 'שייכות',          d: 'צורך בסיסי להרגיש שייכים למשפחה - לכל ילד יש מקום משמעותי.' },
              { n: '02', t: 'תרומה',            d: 'ילדים שואפים לתרום - עידוד לתרום מחזק מסוגלות וערך עצמי.' },
              { n: '03', t: 'אינטרס חברתי',    d: 'פיתוח רגישות לאחרים ורצון לדאוג לטובת הכלל.' },
              { n: '04', t: 'גבולות ברורים',   d: 'גבולות משמעותיים עם הסבר מספקים ביטחון ויציבות.' },
              { n: '05', t: 'עצמאות',           d: 'הזדמנויות לקבל החלטות ולקחת אחריות מפתחות ביטחון.' },
              { n: '06', t: 'עידוד',            d: 'עידוד - ולא שבח - בונה ביטחון עמוק ואמיתי לאורך זמן.' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 14, padding: '18px 20px', border: '1px solid rgba(247,141,167,.2)' }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: 'rgba(247,141,167,.4)', minWidth: 36 }}>{p.n}</span>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: '#2d1a1a', marginBottom: 4 }}>{p.t}</h4>
                  <p style={{ fontSize: 13, color: '#7a3a3a', lineHeight: 1.65 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ── ServicesPage ───────────────────────────────────────────
export function ServicesPage() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <section style={{ background: 'linear-gradient(180deg,#fff0f4 0%,#fff 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px' }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 16 }}>הדרכת הורים</span>
          <h1 style={{ fontSize: 42, fontWeight: 700, color: '#2d1a1a', marginBottom: 14 }}>
            הורות היא מסע —<br /><span style={{ color: '#cf2e2e' }}>בוא נלך יחד</span>
          </h1>
          <p style={{ fontSize: 17, color: '#7a3a3a', lineHeight: 1.85, marginBottom: 30 }}>הדרכת הורים אישית שמותאמת בדיוק לצרכים שלכם ושל ילדכם.</p>
          <button className="btn-primary" onClick={() => go('/contact')}>לקביעת פגישה ←</button>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#2d1a1a' }}>מה תקבלו?</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 14 }}>
            {['שיפור שיתוף פעולה של הילדים עם מטלות היומיום', 'התמודדות עם בכי ותסכול ללא איומים או עונשים', 'יצירת גבולות מתוך אמון וכבוד הדדי', 'ביסוס סמכות הורית ברוגע ובביטחון', 'אווירה ביתית נעימה שמחזקת את הקשרים', 'כלים פרקטיים לשימוש יומיומי מיידי'].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 12, padding: '14px 18px', border: '1px solid rgba(247,141,167,.18)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(247,141,167,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#cf2e2e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span style={{ fontSize: 14, color: '#2d1a1a', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#fff0f4', padding: '80px 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="badge">תמחור</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#2d1a1a', marginTop: 12 }}>אז כמה זה עולה?</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {[
              { t: 'שיחת היכרות', p: 'חינם',   s: 'ללא עלות וללא התחייבות', feat: false },
              { t: 'הדרכה מלאה',  p: '₪3,000', s: '10 מפגשים + קבוצת וואטסאפ', feat: true  },
              { t: 'שעת ייעוץ',   p: '₪300',   s: 'פגישה בודדת', feat: false },
            ].map((p, i) => (
              <div key={i} className={`card ${p.feat ? 'pricing-featured' : ''}`} style={{ padding: '36px 24px', textAlign: 'center', position: 'relative' }}>
                {p.feat && <span className="pricing-badge">הכי פופולרי ✨</span>}
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#7a3a3a', marginBottom: 10 }}>{p.t}</h3>
                <div style={{ fontSize: 38, fontWeight: 700, color: '#cf2e2e', marginBottom: 8 }}>{p.p}</div>
                <p style={{ fontSize: 13, color: '#7a3a3a', marginBottom: 24 }}>{p.s}</p>
                <button className={p.feat ? 'btn-primary' : 'btn-outline'} style={{ width: '100%' }} onClick={() => go('/contact')}>קביעת פגישה ←</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ── SleepPage ──────────────────────────────────────────────
export function SleepPage() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const stages = [
    { n: '1', t: 'שיחה ראשונית',         d: 'נשאל שאלות על הדינמיקה בבית, אתגרי השינה, הרגלים נוכחיים ולמה יש צורך בשינוי.' },
    { n: '2', t: 'פתרונות מותאמים',       d: 'לאחר ההבנה הראשונית נציע פתרונות: מעבר למיטת ילד, שגרת שינה, הפחתת תלות.' },
    { n: '3', t: 'תוכנית צעד אחר צעד',   d: 'תוכנית ברורה ומובנית עם שלבים מומלצים, תוך שמירה על הקשר הרגשי עם הילד.' },
    { n: '4', t: 'ליווי אישי מלא',        d: 'זמינות וליווי לאורך כל התהליך — אנחנו עוברים את זה יחד.' },
  ]
  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <section style={{ background: 'linear-gradient(180deg,#fff0f4 0%,#fff 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 56, marginBottom: 14 }}>🌙</div>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 16 }}>ייעוץ שינה</span>
          <h1 style={{ fontSize: 42, fontWeight: 700, color: '#2d1a1a', marginBottom: 14 }}>
            מתנה לכל<br /><span style={{ color: '#cf2e2e' }}>המשפחה</span>
          </h1>
          <p style={{ fontSize: 17, color: '#7a3a3a', lineHeight: 1.85, marginBottom: 30 }}>תהליך מותאם אישית לפי גיל הילד, השגרה המשפחתית והאתגרים הספציפיים שלכם.</p>
          <button className="btn-primary" onClick={() => go('/contact')}>לשיחה ראשונה ←</button>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#2d1a1a' }}>איך מתבצע התהליך?</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {stages.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, background: '#fff', borderRadius: 16, padding: '24px 28px', border: '1px solid rgba(247,141,167,.18)', borderRight: '4px solid #f78da7' }}>
                <div className="step-num" style={{ flexShrink: 0 }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 600, color: '#2d1a1a', marginBottom: 6 }}>{s.t}</h4>
                  <p style={{ fontSize: 14, color: '#7a3a3a', lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button className="btn-primary" onClick={() => go('/contact')}>מתחילים עם שיחה חינם ←</button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ── BlogPage ───────────────────────────────────────────────
export function BlogPage() {
  const navigate = useNavigate()
  const posts = [
    { e: '😴', cat: 'שינה',     t: 'למה הילד שלי לא מוכן לישון לבד?',                         d: 'מרץ 2025',     x: 'ילדים רבים מתנגדים לשינה עצמאית — זו צורך התפתחותי, לא בעיה התנהגותית.', path: '/blog/sleep-alone' },
    { e: '😤', cat: 'גבולות',   t: 'כעס הורי: איך מגיבים ברוגע כשאנחנו עצמנו על הקצה?',       d: 'ינואר 2025',   x: 'כולנו מגיעים לנקודת הרתיחה. השאלה היא לא אם — אלא מה עושים איתה.', path: '/blog/parental-anger' },
    { e: '🧡', cat: 'קשר',      t: 'חמש דקות חיבור שמשנות הכל',                               d: 'נובמבר 2024',  x: 'לא צריך שעות — חמש דקות של נוכחות מלאה עושות יותר מכל שיעורי בית.', path: '/blog/connection' },
    { e: '🎒', cat: 'גיל הגן',  t: 'גיל 3: המאפיינים, האתגרים וכיצד לשמור על הסבלנות',        d: 'ספטמבר 2024', x: 'גיל שלוש מביא איתו עצמאות ו"לא!" בשפע. הנה המדריך ההישרדותי.', path: '/blog/age-three' },
  ]
  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <section style={{ background: '#fff0f4', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 14 }}>בלוג</span>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: '#2d1a1a', marginTop: 10 }}>מחשבות על הורות</h1>
          <div className="section-line" />
        </div>
      </section>
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {posts.map((p, i) => (
            <button key={i} onClick={() => { navigate(p.path); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="card" style={{ overflow: 'hidden', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}>
              <div style={{ background: 'linear-gradient(135deg,#fff0f4,#fce4ec)', padding: 28, textAlign: 'center', fontSize: 44 }}>{p.e}</div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="badge" style={{ fontSize: 11, padding: '2px 10px' }}>{p.cat}</span>
                  <span style={{ fontSize: 12, color: '#7a3a3a' }}>{p.d}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#2d1a1a', marginBottom: 8, lineHeight: 1.4 }}>{p.t}</h3>
                <p style={{ fontSize: 13, color: '#7a3a3a', lineHeight: 1.7 }}>{p.x}</p>
                <div style={{ marginTop: 14, color: '#cf2e2e', fontSize: 13, fontWeight: 500 }}>קרא עוד ←</div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

// ── ContactPage ────────────────────────────────────────────
export function ContactPage() {
  const ways = [
    { ic: 'phone', l: 'טלפון',       v: '050-123-4567',         h: 'tel:+972501234567' },
    { ic: 'mail',  l: 'מייל',        v: 'lior@liormezu.co.il',  h: 'mailto:lior@liormezu.co.il' },
    { ic: 'ig',    l: 'אינסטגרם',   v: '@liore_mezuman',       h: 'https://instagram.com/liore_mezuman_cherckez' },
    { ic: 'fb',    l: 'פייסבוק',    v: 'liore.mezuman',        h: 'https://www.facebook.com/profile.php?id=61571783081389' },
  ]
  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <section style={{ background: '#fff0f4', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: 14 }}>צרי קשר</span>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: '#2d1a1a', marginTop: 10, marginBottom: 12 }}>בואו נדבר</h1>
          <p style={{ fontSize: 16, color: '#7a3a3a', lineHeight: 1.75 }}>שיחת ייעוץ ראשונה — חינם וללא התחייבות.</p>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 40, boxShadow: '0 4px 40px rgba(207,46,46,.08)', border: '1px solid rgba(247,141,167,.15)' }}>
            <ContactForm title="השאירו פרטים" subtitle="אחזור אליכם תוך 24 שעות 💛" />
          </div>
          <div>
            <h3 style={{ fontSize: 26, fontWeight: 700, color: '#2d1a1a', marginBottom: 8 }}>דרכי יצירת קשר</h3>
            <p style={{ fontSize: 14, color: '#7a3a3a', lineHeight: 1.75, marginBottom: 24 }}>מוזמנות לפנות בכל אמצעי שנוח לכן.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ways.map((w, i) => (
                <a key={i} href={w.h} target={['ig','fb'].includes(w.ic) ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', cursor: 'pointer' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(247,141,167,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#cf2e2e" strokeWidth="2" strokeLinecap="round">
                        {w.ic === 'phone' && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.86 19.79 19.79 0 01.08 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>}
                        {w.ic === 'mail'  && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                        {w.ic === 'ig'    && <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                        {w.ic === 'fb'    && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#cf2e2e" stroke="none"/>}
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: '#7a3a3a', margin: 0 }}>{w.l}</p>
                      <p style={{ fontSize: 15, fontWeight: 500, color: '#2d1a1a', margin: 0 }}>{w.v}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
