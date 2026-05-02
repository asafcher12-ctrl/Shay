import React, { useState } from 'react';
import TopBar from './TopBar';
import { ACTIVITIES, getTodayActivityIndex, formatDate } from '../data/activities';

const today = new Date();
const todayKey = today.toISOString().slice(0, 10);

export default function DailyPlan({ nav }) {
  const act = ACTIVITIES[getTodayActivityIndex()];
  const [done, setDone] = useState(() => localStorage.getItem('done_' + todayKey) === '1');
  const [note, setNote] = useState(() => localStorage.getItem('note_' + todayKey) || '');
  const [popup, setPopup] = useState(null);
  const [noteSaved, setNoteSaved] = useState(false);

  const markDone = () => { setDone(true); localStorage.setItem('done_' + todayKey, '1'); };
  const saveNote = () => {
    localStorage.setItem('note_' + todayKey, note);
    setNoteSaved(true); setTimeout(() => setNoteSaved(false), 1500);
  };

  return (
    <div style={{ padding: 16, minHeight: '100vh' }}>
      <TopBar title="תוכנית יומית" onBack={() => nav('home')} />

      <div style={{ background: 'white', borderRadius: 18, border: '3px solid #d4ebd4', padding: 16, marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: '#6ab187', fontWeight: 700, marginBottom: 10 }}>🌿 פעילות היום – {formatDate(today)}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 38 }}>{act.icon}</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#2e7d55' }}>{act.name}</div>
            <div style={{ fontSize: 11, color: '#6ab187', fontWeight: 700 }}>מטרה: {act.goal}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <button onClick={markDone}
            style={{ flex: 1, padding: 11, borderRadius: 12, border: `2px solid ${done?'#2e7d55':'#6ab187'}`, background: done?'#e8f4e8':'white', fontSize: 13, fontWeight: 800, cursor: 'pointer', color: done?'#2e7d55':'#6ab187' }}>
            {done ? '✅ בוצע!' : '✓ בוצע'}
          </button>
          <button onClick={() => setPopup(act)}
            style={{ padding: '11px 14px', borderRadius: 12, border: '2px solid #f0d8c8', background: 'white', fontSize: 13, cursor: 'pointer', color: '#9b8070', fontWeight: 700 }}>
            💡 הסבר
          </button>
        </div>
        <div style={{ fontSize: 12, color: '#9b8070', marginBottom: 6 }}>📝 איך היא הגיבה לפעילות?</div>
        <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="כתבו הערה כאן..."
          style={{ width: '100%', border: '1.5px solid #d4ebd4', borderRadius: 10, padding: 8, fontSize: 12, resize: 'none', height: 52, color: '#3d2c1e', background: '#f0faf0' }} />
        <button onClick={saveNote}
          style={{ marginTop: 6, background: noteSaved?'#2e7d55':'#6ab187', color: 'white', border: 'none', borderRadius: 10, padding: 9, width: '100%', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
          {noteSaved ? '✅ נשמר!' : 'שמור הערה'}
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: 14, border: '2px solid #f0d8c8', padding: 12 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#9b8070', marginBottom: 8 }}>כל הפעילויות:</div>
        {ACTIVITIES.map((a, i) => (
          <div key={a.id} onClick={() => setPopup(a)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: i < ACTIVITIES.length-1 ? '1px solid #f5ebe3' : 'none', fontSize: 12, cursor: 'pointer' }}>
            <span>{a.icon}</span>
            <span style={{ fontWeight: 700, color: '#3d2c1e', flex: 1 }}>{a.name}</span>
            <span style={{ color: '#9b8070', fontSize: 11 }}>{a.goal}</span>
            <span style={{ color: '#b8ddd0', fontSize: 14 }}>←</span>
          </div>
        ))}
      </div>

      {popup && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(61,44,30,.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 22, maxWidth: 300, width: '100%', border: '2px solid #d4ebd4' }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#2e7d55', marginBottom: 10 }}>{popup.icon} {popup.name}</h3>
            <p style={{ fontSize: 13, color: '#3d2c1e', lineHeight: 1.7 }}>{popup.explain}</p>
            <button onClick={() => setPopup(null)}
              style={{ width: '100%', background: '#f4a261', color: 'white', border: 'none', borderRadius: 12, padding: 12, fontSize: 14, fontWeight: 800, cursor: 'pointer', marginTop: 14 }}>
              הבנתי! ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
