import { useNavigate } from 'react-router-dom'

export default function BlogPost1_SleepAlone() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <span className="badge">שינה</span>
            <span style={{ fontSize: 13, color: '#7a3a3a' }}>מרץ 2025</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: '#2d1a1a', marginBottom: 16, lineHeight: 1.3 }}>
            למה הילד שלי לא מוכן לישון לבד?
          </h1>
          <p style={{ fontSize: 18, color: '#7a3a3a', lineHeight: 1.8 }}>
            ילדים רבים מתנגדים לשינה עצמאית - זו צורך התפתחותי, לא בעיה התנהגותית.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#2d1a1a', lineHeight: 1.85 }}>
          <p style={{ marginBottom: 24 }}>
            "אמא, אני פוחד!" "שאני איתך!" "לא אישן לבד!" — קולות אלה מהדהדים בבתים רבים כשמגיע עת שינה.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>הפחד הוא חלק מהתפתחות בריאה</h3>
          <p style={{ marginBottom: 24 }}>
            עד גיל 3-4, הילד בקושי מבדיל בין חלום למציאות ובין היציאה של הוריו למוות. הפחד מהשינה הוא בעצם פחד מהנפרדות, 
            וזו זו צורך התפתחותי טבעי. אינו תזמורת, אינו בללי — זה טביעי.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>מה שלא עובד: הכפייה והאיומים</h3>
          <p style={{ marginBottom: 24 }}>
            "אם לא תישן, תיקח דברים מהצעקה!" או "אתה גדול מ-___ וכבר שוכב לבד!" — משפטים אלה מחזקים בעצם את החרדה, 
            ומלמדים את הילד שהפחד שלו לא תקף.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>המרכיבים שעובדים</h3>
          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>עצמאות הדרגתית:</strong> התחל בתוך הכמרה, ואז בצידה, ואז בדלת פתוחה. כל שלב הוא ניצחון.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>נוכחות רגוע:</strong> "אני כאן. אתה בטוח. אנחנו זה בזה." הרגיעות של האדם הגדול משדרת בטחון.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>שגרה עקבית:</strong> אותה סדרה בכל ערב — משקה חם, שיר, סיפור — הופכת לעצם בטחון וחזיות.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>אישור של הרגשה:</strong> "אני רואה שאתה חוששת. זה בסדר להיות מפחד. אני כאן, ואתה בטוח."
            </li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>כמה זמן זה לוקח?</h3>
          <p style={{ marginBottom: 24 }}>
            זה לא קורה בלילה אחד. כמה בני אדם היו שוכבים במיטתם של הוריהם? למעשה, פי 10 מאלה שהיו שוכבים לבד.
            המשפחות שעובדות עם הנושא הזה בצורה עקבית ופנימית רואות שינוי תוך 2-3 שבועות.
          </p>

          <div style={{ background: '#fff0f4', padding: 28, borderRadius: 16, marginTop: 40, marginBottom: 32 }}>
            <p style={{ fontSize: 15, color: '#2d1a1a', margin: 0 }}>
              כל ילד שונה, וכל משפחה שונה. אם בחור עם הנושא, אני כאן. פנו לייעוץ שינה אישי.
            </p>
          </div>

          <button className="btn-primary" onClick={() => go('/contact')} style={{ fontSize: 16, padding: '14px 28px' }}>
            לשיחת ייעוץ חינם ←
          </button>
        </div>

        <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid rgba(247,141,167,.2)' }}>
          <button className="btn-outline" onClick={() => go('/blog')} style={{ fontSize: 14 }}>
            חזרה לבלוג ←
          </button>
        </div>
      </article>
    </div>
  )
}
