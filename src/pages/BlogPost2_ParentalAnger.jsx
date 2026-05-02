import { useNavigate } from 'react-router-dom'

export default function BlogPost2_ParentalAnger() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <span className="badge">גבולות</span>
            <span style={{ fontSize: 13, color: '#7a3a3a' }}>ינואר 2025</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: '#2d1a1a', marginBottom: 16, lineHeight: 1.3 }}>
            כעס הורי: איך מגיבים ברוגע כשאנחנו עצמנו על הקצה?
          </h1>
          <p style={{ fontSize: 18, color: '#7a3a3a', lineHeight: 1.8 }}>
            כולנו מגיעים לנקודת הרתיחה. השאלה היא לא אם — אלא מה עושים איתה.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#2d1a1a', lineHeight: 1.85 }}>
          <p style={{ marginBottom: 24 }}>
            זה לא הבוקר הזה שבו הילד סירב לאכול או נעל את הנעליים. זה כל הימים האלה של "לא!" "אני לא רוצה!" בתוספת 
            2 שעות שינה קטנות, עמל בעבודה, וציפיה שפשוט לא הגיעה.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>הכעס הוא בן אנוש</h3>
          <p style={{ marginBottom: 24 }}>
            הכעס לא רע. הכעס הוא חלק מחיים. הבעיה היא מה אנחנו עושים בו. כאשר הוריים מתרחקים מעומק הכעס ללא מודעות, 
            הילדים הם בעצם מקבלים הודעה: "כשהרגיש רוע, זה בסדר להצליח צעקה או להפשיל מישהו."
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>מה קורה כשאנחנו על הקצה?</h3>
          <p style={{ marginBottom: 24 }}>
            בחר אחד מאלה: "אתה מתאכזב להכל!" "תפסיק להיות כל כך ממורמר!" "אני לא יכול יותר!" 
            או הגרוע ביותר — הצעקה או ההטבעה.
          </p>

          <p style={{ marginBottom: 24 }}>
            ואחרי זה? הילד בוכה (או לא), אבל אותה הודעה מוגברת: "כשאתה כעוס, אתה מוקד ואתה מעליי."
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>3 דברים שעוזרים כשאנחנו על הקצה</h3>
          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>עצור ולפני שתגדול:</strong> ספור עד 10, קח שנייה להבליט. זה לא חולשה — זה כוח. ילדך רואה שאתה יכול 
              להתמודד עם הכעס שלך.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>תקשר בטוב:</strong> "אני כעוס עכשיו, אבל אני אחזור. אתה עדיין אהוב." 
              זו הודעה: הרגשות כעוסים לא מבטלים אהבה.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>תעשה משהו ברוגע:</strong> קול רוגע יותר דומה לשינוי. בדיוק כשאתה רוצה להצליח, תוריד את הקול שלך. 
              זה משנה הכל.
            </li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>אחרי ההסתערות</h3>
          <p style={{ marginBottom: 24 }}>
            אם כבר קרה, זה בסדר. אנחנו אנשים. עדיף לעשות משהו:
          </p>

          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>התנצל: "אני הסתערות עליך. זה לא בגללך. אני הייתי עיוור."</li>
            <li style={{ marginBottom: 12 }}>הסבר ללא הצדקה: "כשאני עייף ולחוץ, הכעס שלי צומח. אנחנו עובדים ביחד על זה."</li>
            <li style={{ marginBottom: 12 }}>חזור לרוגע: "בואו שניכם נעשה משהו שמרגיע לנו."</li>
          </ul>

          <div style={{ background: '#fff0f4', padding: 28, borderRadius: 16, marginTop: 40, marginBottom: 32 }}>
            <p style={{ fontSize: 15, color: '#2d1a1a', margin: 0 }}>
              הורות לא על ידי השלמות — היא על ידי הניסיון שוב ושוב. ילדים צריכים לראות את ההוריים שלהם מטפלים בעצמם בברוגע, 
              לא דולקים. זו הדוגמה האמיתית.
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
