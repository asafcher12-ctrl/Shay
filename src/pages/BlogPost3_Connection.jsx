import { useNavigate } from 'react-router-dom'

export default function BlogPost3_Connection() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <span className="badge">קשר</span>
            <span style={{ fontSize: 13, color: '#7a3a3a' }}>נובמבר 2024</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: '#2d1a1a', marginBottom: 16, lineHeight: 1.3 }}>
            חמש דקות חיבור שמשנות הכל
          </h1>
          <p style={{ fontSize: 18, color: '#7a3a3a', lineHeight: 1.8 }}>
            לא צריך שעות — חמש דקות של נוכחות מלאה עושות יותר מכל שיעורי בית.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#2d1a1a', lineHeight: 1.85 }}>
          <p style={{ marginBottom: 24 }}>
            "אמא, תשחקי איתי!" "אבא, בואו נצעד!" "אתה לא מאזין לי!" 
            קולות הילדים מהדהדים בבית, והוריים נמצאים כאן גופנית אבל הנוכחות שלהם בשום מקום.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>הילדים לא צריכים יותר זמן — הם צריכים נוכחות</h3>
          <p style={{ marginBottom: 24 }}>
            אני רואה הורים שמבלים שעות בבית עם הילדים שלהם, אבל כל העת בטלפון, בלחץ, בנוכחות מנוסה. 
            הילדים הרים מרגישים יחידות רחוקה זו.
          </p>

          <p style={{ marginBottom: 24 }}>
            מה שמשנה היא 5 דקות של:
          </p>

          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>עיניים שלך על עיניהם.</strong> לא על הטלפון, לא על השעון.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>קול שלך שמאזין.</strong> לא מתגיב, לא משפט — פשוט מאזינה.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>גוף שלך שם.</strong> קרוב אליהם, רוקד איתם, חוחך או סתם בקרוב.
            </li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>מה קורה כשאתה נוכח בפעם הראשונה?</h3>
          <p style={{ marginBottom: 24 }}>
            הילדים מלכות. הם פתחים. הם חזרה לשמחה.
          </p>

          <p style={{ marginBottom: 24 }}>
            אחרי דקה או שתיים, הם לעתים קרובות מתחילים להיות יותר רוקדים, פחות דורשים כל כך. 
            למה? כי הם קיבלו מה שהם באמת חייבים — אותך.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>איך לעשות זאת (פשוט וממש)</h3>
          <ol style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>בחר זמן:</strong> כל יום, אפילו זמן קטן. בוקר, אחה"צ, לפני שינה.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>כבה את הטלפון.</strong> בעדיפות גבוהה. הנח אותו במטבח. זה לא יקרה בלי זה.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>שאל: "מה אתה רוצה לעשות?"</strong> והם יספרו לך. עשה זאת איתם.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>עדיין תהיה רוקד ממש.</strong> צחוק, שחק, חוחך, או בכי אם זה מה שנדרש.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>כל הזמן — אפילו 5 דקות.</strong> אם לא יכול יותר, יוצא. אבל תן לילדים את כל היתרון שלך לאותו זמן.
            </li>
          </ol>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>לא צריך משחקים יקרים או ארטיקים מיוחדים</h3>
          <p style={{ marginBottom: 24 }}>
            קורא ספר, משחק קלפים, דריכה בשביל, ריקוד מטופש בטלוויזיה, או סתם הליכה ידיים. 
            הילדים לא משנים מה אתה עושה — הם משנים שאתה שם.
          </p>

          <div style={{ background: '#fff0f4', padding: 28, borderRadius: 16, marginTop: 40, marginBottom: 32 }}>
            <p style={{ fontSize: 15, color: '#2d1a1a', margin: 0 }}>
              5 דקות של נוכחות מלאה יכולות להיות את ההקדמה החזקה ביותר שתוכל לתת למשפחה שלך. 
              לא צריך שעות. צריך אותך.
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
