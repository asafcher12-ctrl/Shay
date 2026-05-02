import React from 'react';
import { ACTIVITIES, getTodayActivityIndex } from '../data/activities';

const s = {
  wrap: { padding: '20px 16px 32px', minHeight: '100vh' },
  header: { textAlign: 'center', padding: '28px 0 20px' },
  logo: { fontSize: 52, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 800, color: '#2e7d5a', marginBottom: 4 },
  sub: { fontSize: 13, color: '#7aab96', lineHeight: 1.6 },
  todayBar: { background: 'white', borderRadius: 16, border: '2px solid #d4ebd4', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, cursor: 'pointer' },
  dot: { width: 10, height: 10, borderRadius: '50%', background: '#6ab187', flexShrink: 0 },
  sectionLbl: { fontSize: 11, fontWeight: 800, color: '#7aab96', letterSpacing: '.5px', marginBottom: 10, paddingRight: 2 },
  bigCard: { background: 'white', borderRadius: 24, border: '3px solid #b8ddd0', padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 18, cursor: 'pointer', marginBottom: 10, transition: 'transform .15s' },
  cardIcon: { width: 62, height: 62, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 },
  arrow: { marginRight: 'auto', fontSize: 18, color: '#b8ddd0', flexShrink: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 },
  smallCard: { background: 'white', borderRadius: 20, border: '2px solid #f0d8c8', padding: '16px 14px', cursor: 'pointer', textAlign: 'center' },
  smallIcon: { fontSize: 34, marginBottom: 8 },
};

export default function Home({ nav }) {
  const act = ACTIVITIES[getTodayActivityIndex()];

  return (
    <div style={s.wrap}>
      <div style={s.header}>
        <div style={s.logo}>🌸</div>
        <div style={s.title}>המרחב שלי</div>
        <div style={s.sub}>ניהול ויסות חושי ושפה<br />לילדה בת 5</div>
      </div>

      <div style={s.todayBar} onClick={() => nav('plan')}>
        <div style={s.dot} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: '#2e7d55', fontWeight: 700 }}>{act.icon} {act.name}</div>
          <div style={{ fontSize: 11, color: '#9b8070' }}>פעילות היום • לחצי למעבר</div>
        </div>
        <div style={{ fontSize: 20 }}>←</div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={s.sectionLbl}>🎮 אזור הילדה</div>
        <div style={s.bigCard} onClick={() => nav('game')}>
          <div style={{ ...s.cardIcon, background: '#e8f7f0' }}>🍎🍌</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#2d4a3e', marginBottom: 3 }}>חברים מאותה משפחה</div>
            <div style={{ fontSize: 12, color: '#7aab96', lineHeight: 1.5 }}>מצאי תמונות שיש ביניהן<br />משהו משותף – 10 דקות</div>
          </div>
          <div style={s.arrow}>←</div>
        </div>
        <div style={s.bigCard} onClick={() => nav('game')}>
          <div style={{ ...s.cardIcon, background: '#fff0e8' }}>📖⭐</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#2d4a3e', marginBottom: 3 }}>יוצרת הסיפורים</div>
            <div style={{ fontSize: 12, color: '#7aab96', lineHeight: 1.5 }}>בחרי 3 תמונות מתוך 10<br />וסדרי אותן לסיפור שלך</div>
          </div>
          <div style={s.arrow}>←</div>
        </div>
      </div>

      <div>
        <div style={s.sectionLbl}>👨‍👩‍👧 אזור הורים</div>
        <div style={s.grid}>
          {[
            { icon: '📋', label: 'יומן יומי', sub: 'מדד ויסות\nוהערות', screen: 'journal' },
            { icon: '🌿', label: 'תוכנית יומית', sub: 'פעילות היום\nעם הסברים', screen: 'plan' },
            { icon: '📊', label: 'גרף התקדמות', sub: 'סיכום שבועי\nומגמות', screen: 'chart' },
            { icon: '💡', label: 'מידע ועזרה', sub: 'איך משתמשים\nבאפליקציה', screen: 'help' },
          ].map(c => (
            <div key={c.label} style={s.smallCard} onClick={() => nav(c.screen)}>
              <div style={s.smallIcon}>{c.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#3d2c1e', marginBottom: 3 }}>{c.label}</div>
              <div style={{ fontSize: 11, color: '#9b8070', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
