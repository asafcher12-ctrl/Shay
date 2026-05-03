import React, { useState } from 'react';
import { STORY_IMAGES, shuffle } from '../data/activities';
import TopBar from './TopBar';

export default function StoryGame({ nav }) {
  const [pool, setPool] = useState(() => shuffle([...Array(STORY_IMAGES.length).keys()]).slice(0, 10));
  const [slots, setSlots] = useState([null, null, null]);
  const [selIdx, setSelIdx] = useState(null);

  const newImages = () => {
    setPool(shuffle([...Array(STORY_IMAGES.length).keys()]).slice(0, 10));
    setSlots([null, null, null]); setSelIdx(null);
  };
  const clear = () => { setSlots([null, null, null]); setSelIdx(null); };

  const pickImg = (idx) => {
    if (slots.includes(idx)) return;
    setSelIdx(prev => prev === idx ? null : idx);
  };

  const pickSlot = (i) => {
    if (selIdx === null) {
      if (slots[i] !== null) {
        const newSlots = [...slots]; newSlots[i] = null;
        setSlots(newSlots);
      }
      return;
    }
    const newSlots = [...slots]; newSlots[i] = selIdx;
    setSlots(newSlots); setSelIdx(null);
  };

  const sentence = slots.map((s, i) => {
    const prefix = ['קודם', 'אז', 'ובסוף'][i];
    return s !== null ? `${prefix} ${STORY_IMAGES[s].n}` : `${prefix} ___`;
  }).join(' • ');

  return (
    <div style={{ padding: 16, minHeight: '100vh' }}>
      <TopBar title="יוצרת הסיפורים" onBack={() => nav('home')} />
      
      <div style={{ background: 'white', borderRadius: 18, border: '2px solid #b8ddd0', padding: 14 }}>
        <div style={{ fontSize: 12, color: '#7aab96', fontWeight: 700, textAlign: 'center', marginBottom: 10 }}>
          {selIdx !== null ? `בחרת: ${STORY_IMAGES[selIdx].e} — עכשיו לחצי על משבצת` : 'לחצי על תמונה ואז על משבצת'}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6, marginBottom: 12 }}>
          {pool.map(idx => {
            const used = slots.includes(idx);
            const picked = selIdx === idx;
            return (
              <div key={idx} onClick={() => pickImg(idx)}
                style={{ borderRadius: 12, border: `3px solid ${picked ? '#f4a261' : '#b8ddd0'}`, background: picked ? '#fff8f0' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '7px 3px', cursor: used ? 'default' : 'pointer', opacity: used ? 0.28 : 1, minHeight: 66, transition: 'transform .1s', transform: picked ? 'scale(1.07)' : 'scale(1)' }}>
                <span style={{ fontSize: 28 }}>{STORY_IMAGES[idx].e}</span>
                <span style={{ fontSize: 10, color: '#7aab96', fontWeight: 700, marginTop: 2 }}>{STORY_IMAGES[idx].n}</span>
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: 11, color: '#7aab96', textAlign: 'center', marginBottom: 7 }}>גרורי לתוך המשבצות:</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
          {slots.map((s, i) => (
            <div key={i} onClick={() => pickSlot(i)}
              style={{ width: 90, height: 90, borderRadius: 18, border: `3px ${s !== null ? 'solid' : 'dashed'} ${s !== null ? '#5aab8a' : '#b8ddd0'}`, background: s !== null ? '#e8f7f0' : 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
              <span style={{ fontSize: 10, color: '#b8ddd0', fontWeight: 700, position: 'absolute', top: 5, right: 7 }}>{i + 1}</span>
              {s !== null && <>
                <span style={{ fontSize: 34 }}>{STORY_IMAGES[s].e}</span>
                <span style={{ fontSize: 10, color: '#5aab8a', fontWeight: 700 }}>{STORY_IMAGES[s].n}</span>
              </>}
            </div>
          ))}
        </div>

        <div style={{ background: '#f0faf0', borderRadius: 12, border: '2px solid #b8ddd0', padding: '10px 12px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#2d4a3e', marginBottom: 12, lineHeight: 1.8 }}>
          {sentence}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={newImages}
            style={{ flex: 1, background: 'white', border: '2px solid #b8ddd0', borderRadius: 12, padding: 11, fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#7aab96', transition: 'background .2s' }}
            onMouseDown={(e) => e.currentTarget.style.background = '#f0faf0'}
            onMouseUp={(e) => e.currentTarget.style.background = 'white'}>
            🔄 תמונות חדשות
          </button>
          <button onClick={clear}
            style={{ flex: 1, background: 'white', border: '2px solid #f4a261', borderRadius: 12, padding: 11, fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#f4a261', transition: 'background .2s' }}
            onMouseDown={(e) => e.currentTarget.style.background = '#fff8f0'}
            onMouseUp={(e) => e.currentTarget.style.background = 'white'}>
            🗑️ נקה
          </button>
        </div>
      </div>
    </div>
  );
}
