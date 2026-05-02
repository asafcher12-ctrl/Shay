import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FAMILIES, shuffle } from '../data/activities';

const WAIT_SECS = 5;

export default function FamiliesGame() {
  const [pool] = useState(() => shuffle([...Array(FAMILIES.length).keys()]));
  const [poolIdx, setPoolIdx] = useState(0);
  const [order, setOrder] = useState([]);
  const [locked, setLocked] = useState(true);
  const [waitPct, setWaitPct] = useState(0);
  const [waitLbl, setWaitLbl] = useState('⏳ מחכים רגע...');
  const [hint, setHint] = useState(false);
  const [sel, setSel] = useState([]);
  const [rightCount, setRightCount] = useState(0);
  const [round, setRound] = useState(1);
  const [success, setSuccess] = useState(null);
  const [wrongCards, setWrongCards] = useState([]);
  const waitRef = useRef(null);

  const startRound = useCallback(() => {
    setSel([]); setLocked(true); setWaitPct(0); setSuccess(null); setWrongCards([]);
    setWaitLbl('⏳ מחכים רגע...');
    setOrder(shuffle([0, 1, 2]));
    clearInterval(waitRef.current);
    const start = Date.now();
    waitRef.current = setInterval(() => {
      const pct = (Date.now() - start) / (WAIT_SECS * 1000) * 100;
      if (pct >= 100) {
        clearInterval(waitRef.current);
        setWaitPct(100); setLocked(false);
        setWaitLbl('✨ עכשיו אפשר לבחור!');
      } else {
        setWaitPct(pct);
      }
    }, 80);
  }, []);

  useEffect(() => { startRound(); return () => clearInterval(waitRef.current); }, [startRound]);

  const fam = FAMILIES[pool[poolIdx % pool.length]];

  const handleCard = (idx) => {
    if (locked) { setHint(true); setTimeout(() => setHint(false), 1500); return; }
    if (success) return;
    const newSel = sel.includes(idx) ? sel.filter(x => x !== idx) : [...sel, idx];
    setSel(newSel);
    if (newSel.length === 2) {
      const ok = [...newSel].sort().join(',') === [...fam.pair].sort().join(',');
      if (ok) {
        setRightCount(r => r + 1);
        setRound(r => r + 1);
        setSuccess(fam.sent);
      } else {
        setWrongCards(newSel);
        setTimeout(() => { setWrongCards([]); setSel([]); }, 500);
      }
    }
  };

  const nextRound = () => { setPoolIdx(i => i + 1); startRound(); };

  return (
    <div style={{ background: 'white', borderRadius: 18, border: '2px solid #b8ddd0', padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
        <Chip>✅ {rightCount} נכון</Chip>
        <Chip>🔢 סבב {round}</Chip>
      </div>

      <div style={{ background: 'white', borderRadius: 14, padding: '10px 12px', border: '2px solid #b8ddd0', marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#7aab96', textAlign: 'center', marginBottom: 6 }}>{waitLbl}</div>
        <div style={{ background: '#d8f0e8', borderRadius: 8, height: 13, overflow: 'hidden' }}>
          <div style={{ height: '100%', background: locked ? '#5aab8a' : '#6ab187', borderRadius: 8, width: waitPct + '%', transition: 'width .1s linear' }} />
        </div>
        {hint && <div style={{ fontSize: 12, color: '#f4a261', fontWeight: 700, textAlign: 'center', marginTop: 4 }}>עוד מעט... 🌿</div>}
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 14 }}>
        {order.map(idx => {
          const item = fam.items[idx];
          const isSel = sel.includes(idx);
          const isWrong = wrongCards.includes(idx);
          const isCorrect = success && fam.pair.includes(idx);
          return (
            <div key={idx} onClick={() => handleCard(idx)}
              style={{
                width: 96, height: 96, borderRadius: 20, border: `3px solid ${isCorrect ? '#2e7d5a' : isSel ? '#5aab8a' : isWrong ? '#e76f51' : '#b8ddd0'}`,
                background: isCorrect ? '#c8eddb' : isSel ? '#e8f7f0' : 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 46, cursor: 'pointer',
                filter: locked ? 'blur(5px)' : 'none', transform: isSel ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform .15s, border-color .15s, filter .3s',
                animation: isWrong ? 'shake .3s' : 'none',
              }}>
              {item.e}
            </div>
          );
        })}
      </div>

      {success && (
        <div style={{ background: '#e8f7f0', borderRadius: 16, border: '2px solid #5aab8a', padding: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 6 }}>🌟</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#2e7d5a', marginBottom: 8 }}>{success}</div>
          <button onClick={nextRound}
            style={{ background: '#2e7d5a', color: 'white', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>
            המשך ←
          </button>
        </div>
      )}
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}`}</style>
    </div>
  );
}

function Chip({ children }) {
  return <div style={{ background: 'white', border: '2px solid #b8ddd0', borderRadius: 10, padding: '4px 14px', fontSize: 13, fontWeight: 700, color: '#2e7d5a' }}>{children}</div>;
}
