import React, { useState, useEffect, useRef } from 'react';
import TopBar from './TopBar';
import FamiliesGame from './FamiliesGame';
import StoryGame from './StoryGame';

export default function GameSpace({ nav }) {
  const [sec, setSec] = useState(600);
  const [tab, setTab] = useState('families');
  const [sleeping, setSleeping] = useState(false);
  const intRef = useRef(null);

  useEffect(() => {
    intRef.current = setInterval(() => {
      setSec(s => {
        if (s <= 1) { clearInterval(intRef.current); setSleeping(true); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intRef.current);
  }, []);

  const mins = Math.floor(sec / 60);
  const secs = sec % 60;
  const pct = (sec / 600) * 100;

  if (sleeping) {
    return (
      <div style={{ minHeight: '100vh', background: '#0e1a2a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 20 }}>
        <div style={{ fontSize: 72 }}>🌙</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: '#a8d4f0' }}>כל הכבוד!</div>
        <div style={{ fontSize: 14, color: '#5888a8', textAlign: 'center', lineHeight: 1.8 }}>שיחקת יפה מאוד.<br />10 הדקות נגמרו.<br />הגיע הזמן לנוח.</div>
        <button onClick={() => nav('home')}
          style={{ background: '#1a3050', color: '#a8d4f0', border: '2px solid #3878a8', borderRadius: 16, padding: '14px 28px', fontSize: 16, cursor: 'pointer', fontWeight: 700, marginTop: 8 }}>
          סיום 🌙
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, minHeight: '100vh' }}>
      <TopBar title="המרחב שלי" onBack={() => nav('home')} />

      <div style={{ background: 'white', borderRadius: 14, padding: '9px 14px', border: '2px solid #b8ddd0', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#7aab96' }}>⏱ זמן שנותר</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: sec < 60 ? '#e76f51' : '#2e7d5a' }}>
            {mins}:{secs < 10 ? '0' : ''}{secs}
          </span>
        </div>
        <div style={{ background: '#d8ede7', borderRadius: 8, height: 10, overflow: 'hidden' }}>
          <div style={{ height: '100%', background: sec < 60 ? '#e76f51' : '#5aab8a', borderRadius: 8, width: pct + '%', transition: 'width 1s linear' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {[['families', '🔍 חברים מאותה משפחה'], ['story', '📖 יוצרת הסיפורים']].map(([t, lbl]) => (
          <button key={t} onClick={() => setTab(t)}
            style={{ flex: 1, padding: 10, borderRadius: 12, border: `2px solid ${tab === t ? '#5aab8a' : '#b8ddd0'}`, background: tab === t ? '#e8f7f0' : 'white', fontSize: 12, fontWeight: 700, cursor: 'pointer', color: tab === t ? '#2e7d5a' : '#7aab96' }}>
            {lbl}
          </button>
        ))}
      </div>

      {tab === 'families' && <FamiliesGame />}
      {tab === 'story' && <StoryGame />}
    </div>
  );
}
