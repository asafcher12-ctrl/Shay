import React, { useState } from 'react';
import TopBar from './TopBar';
import { formatDate } from '../data/activities';

const today = new Date();

export default function ParentJournal({ nav, logs, saveLog }) {
  const [star, setStar] = useState(0);
  const [yn, setYN] = useState(null);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!star) { alert('בחרי מדד ויסות'); return; }
    if (!yn) { alert('ציינו אם היו התפרצויות'); return; }
    saveLog({ date: formatDate(today), stars: star, note: note || '—', burst: yn });
    setStar(0); setYN(null); setNote(''); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ padding: '16px', minHeight: '100vh' }}>
      <TopBar title="יומן יומי" onBack={() => nav('home')} />

      <div style={box}>
        <Label>📅 תאריך</Label>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#a05c3b', padding: '3px 0' }}>{formatDate(today)}</div>

        <Label>⭐ מדד ויסות (1–5)</Label>
        <div style={{ display: 'flex', gap: 6, flexDirection: 'row-reverse' }}>
          {[1,2,3,4,5].map(v => (
            <span key={v} onClick={() => setStar(v)}
              style={{ fontSize: 30, cursor: 'pointer', opacity: v <= star ? 1 : 0.3, transition: 'opacity .15s' }}>★</span>
          ))}
        </div>

        <Label>📝 הערה חופשית</Label>
        <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="כיצד עבר היום?"
          style={{ width: '100%', border: '1.5px solid #f0d8c8', borderRadius: 12, padding: 9, fontSize: 13, resize: 'none', height: 60, color: '#3d2c1e', background: '#fdf6f0' }} />

        <Label>💥 התפרצויות היום?</Label>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['y','כן'],['n','לא']].map(([v,lbl]) => (
            <button key={v} onClick={() => setYN(v)}
              style={{ flex: 1, padding: 10, borderRadius: 12, border: `2px solid ${yn===v ? (v==='y'?'#f4a261':'#6ab187') : '#f0d8c8'}`,
                background: yn===v ? (v==='y'?'#fff0e0':'#e8f4e8') : 'white',
                fontSize: 14, fontWeight: 700, cursor: 'pointer', color: yn===v ? (v==='y'?'#a05c3b':'#2e7d55') : '#9b8070' }}>{lbl}</button>
          ))}
        </div>

        <button onClick={handleSave}
          style={{ width: '100%', background: saved ? '#6ab187' : '#f4a261', color: 'white', border: 'none', borderRadius: 14, padding: 14, fontSize: 16, fontWeight: 800, cursor: 'pointer', marginTop: 10 }}>
          {saved ? '✅ נשמר!' : 'שמור יומן ✓'}
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: 18, border: '2px solid #f0d8c8', overflow: 'hidden' }}>
        <div style={{ background: '#fff0e0', padding: '9px 12px', fontSize: 11, fontWeight: 800, color: '#a05c3b', display: 'grid', gridTemplateColumns: '58px 48px 1fr 44px', gap: 6 }}>
          <span>תאריך</span><span>מדד</span><span>הערה</span><span>התפרצות</span>
        </div>
        {logs.length === 0 ? (
          <div style={{ padding: 20, textAlign: 'center', color: '#c0a898', fontSize: 13 }}>אין רשומות עדיין</div>
        ) : logs.map((e, i) => (
          <div key={i} style={{ padding: '9px 12px', display: 'grid', gridTemplateColumns: '58px 48px 1fr 44px', gap: 6, borderTop: '1px solid #f5ebe3', fontSize: 11, alignItems: 'center' }}>
            <span>{e.date.split(' ').slice(0,2).join(' ')}</span>
            <span style={{ color: '#f4a261' }}>{'★'.repeat(e.stars)}</span>
            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', color: '#9b8070' }}>{e.note}</span>
            <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 6, fontWeight: 700, textAlign: 'center', background: e.burst==='y'?'#ffe0e0':'#e0ffe0', color: e.burst==='y'?'#c0392b':'#27ae60' }}>
              {e.burst==='y'?'כן':'לא'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const box = { background: 'white', borderRadius: 18, padding: 16, border: '2px solid #f0d8c8', marginBottom: 14 };
function Label({ children }) {
  return <div style={{ fontSize: 12, fontWeight: 700, color: '#9b8070', marginBottom: 6, marginTop: 12 }}>{children}</div>;
}
