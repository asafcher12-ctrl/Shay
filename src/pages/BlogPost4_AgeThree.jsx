import { useNavigate } from 'react-router-dom'

export default function BlogPost4_AgeThree() {
  const navigate = useNavigate()
  const go = p => { navigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="page" style={{ paddingTop: 80 }}>
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <span className="badge">גיל הגן</span>
            <span style={{ fontSize: 13, color: '#7a3a3a' }}>ספטמבר 2024</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: '#2d1a1a', marginBottom: 16, lineHeight: 1.3 }}>
            גיל 3: המאפיינים, האתגרים וכיצד לשמור על הסבלנות
          </h1>
          <p style={{ fontSize: 18, color: '#7a3a3a', lineHeight: 1.8 }}>
            גיל שלוש מביא איתו עצמאות ו"לא!" בשפע. הנה המדריך ההישרדותי.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#2d1a1a', lineHeight: 1.85 }}>
          <p style={{ marginBottom: 24 }}>
            "אני עושה זאת לבדי!" "לא!" "אני רוצה ..." כל משפט בן שלוש הוא ביטוי של צורך חדש: עצמאות. 
            זה אחד מהעידנים הגדולים של התפתחות — וגם אחד מהקשים ביותר להורים.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>המאפיינים של גיל 3</h3>
          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>עצמאות בשלהבת:</strong> הילד רוצה לעשות הכל לבדו — להירטב, להתלבש, לאכול, להתחשמל. זה לא כל כך בעיה, 
              זה צורך פסיכולוגי בסיסי.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>"לא!" בכל מקום:</strong> הילד מעתה אומר לא לכל הצעה. זה לא חוצפה — זה תשובה על שאלה "מי אני?"
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>תקשורת טובה יותר:</strong> הילד יכול להבין "אחרי צעצוע כחול, אכל" ולא בהכרח מסכים.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>רגשות בוהקים:</strong> צחוק ובכי משתנים במהירות הברק. היום הזה בן 3 הוא שמח ויוקד לעתידים.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>דמיון מתפוצץ:</strong> הילד מחיל את הדמיון שלו, משחקים אל-תחקו של הדרמות הגדולות של העולם.
            </li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>האתגרים הגדולים</h3>
          <p style={{ marginBottom: 24 }}>
            בן 3 דורש — וזה לא בעיה, זו בחירה התפתחותית. האתגר הוא שהוריים צריכים לתמוך בעצמאות הזו 
            בחסם גבולות בריאים.
          </p>

          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>מתעקש:</strong> בן 3 יכול להיות מתעקש לנקודת השעמום. "אני רוצה אדום!" אפילו כאשר אדום יבוא.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>אי-התפקדות:</strong> "תלבש נעליים!" "לא! אני לא רוצה!" בו-זמנית בעדיפות מוחלטת.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>אחריות מוגבלת:</strong> הילד בן 3 לא יכול להביע חיזוי רחוק של הזמן או ההשלכות של מעשים.
            </li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>5 דברים שעוזרים לקבל גיל 3</h3>
          <ol style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>בחר בחירה בקטן:</strong> במקום להגיד "אל תלבש את הביצה!", נוכל להגיד "האם אתה רוצה כחול או אדום?" 
              בחירה בגבולות היא עצמאות בטוחה.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>תן לילד להיות לא מעניין:</strong> כשהילד סירב לרוק עם הנעליים, בואו נעשה זאת. הוא ילמד מהחוויה (קר, לא נוח).
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>צעד על משימות יומיומיות:</strong> "הגיע הזמן שלבוש" וקח את זמנך. בן 3 צריך יותר זמן, וזה בסדר.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>אל תעשי את זה בחירה אישית:</strong> כאשר בן 3 אומר "לא", זה לא הוכחה שאתה כושל. זה גן.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>שמור על הגבול שלך:</strong> "אני מבין שאתה חוצה. אני גם בוחר. אנחנו עושים זאת."
            </li>
          </ol>

          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#cf2e2e', marginTop: 32, marginBottom: 12 }}>הקו הרזה בין מגבלה לעשיית דברים</h3>
          <p style={{ marginBottom: 24 }}>
            התחום בקונפליקט הוא זה: לא כל המעשים הם בחירה אדם שלו. כמה דברים הם לא ברירה:
          </p>

          <ul style={{ marginBottom: 24, paddingRight: 20 }}>
            <li style={{ marginBottom: 12 }}>כל דברים שלא בטוחים (לא רוצים על הכביש, צעקה, לכות)</li>
            <li style={{ marginBottom: 12 }}>מטלות שצריך לעשות (משחקים לפני הערב, כפה קטנה של לטיות)</li>
            <li style={{ marginBottom: 12 }}>זמנים שלא ניתנים לשינוי (ערב טבעת 19:00, לא בערך 21:30)</li>
          </ul>

          <p style={{ marginBottom: 24 }}>
            בכל זה, אנחנו אומרים "אני מבין שלא רוצה, אבל זה מה שנקרה" — בקול רוגע, בדיוק.
          </p>

          <div style={{ background: '#fff0f4', padding: 28, borderRadius: 16, marginTop: 40, marginBottom: 32 }}>
            <p style={{ fontSize: 15, color: '#2d1a1a', margin: 0 }}>
              גיל 3 הוא חלון בשביל לבנות בן-אדם בטוח ואפילו עצמאי. זה לא בקל, אבל 
              זה אחד הדברים החשובים ביותר שאתה יכול לעשות.
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
