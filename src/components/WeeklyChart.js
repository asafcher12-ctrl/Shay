import React from 'react';
import TopBar from './TopBar';

export default function WeeklyChart({ nav, weekData, logs }) {
  const data = [...weekData].reverse();
  const avgReg = data.length ? (data.reduce((s, d) => s + d.reg, 0) / data.length).toFixed(1) : '—';
  const totalAct = data.reduce((s, d) => s + d.act, 0);

  return (
    <div style={{ padding: 16, minHeight: '100vh' }}>
      <TopBar title="גרף התקדמות" onBack={() => nav('home')} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 10, marginBottom: 14 }}>
        <StatCard bg="#fff0e0" val={avgReg} color="#a05c3b" label="ממוצע ויסות השבוע" />
        <StatCard bg="#e8f4e8" val={totalAct} color="#2e7d55" label="פעילויות בוצעו" />
      </div>

      <div style={{ background: 'white', borderRadius: 18, border: '2px solid #f0d8c8', padding: 16, marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#a05c3b', marginBottom: 8 }}>מדד ויסות יומי</div>
        <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#9b8070', marginBottom: 10, flexWrap: 'wrap' }}>
          <span><span style={{ display:'inline-block',width:10,height:10,background:'#f4a261',borderRadius:2,marginLeft:4 }}/>מדד ויסות</span>
          <span><span style={{ display:'inline-block',width:10,height:10,background:'#6ab187',borderRadius:2,marginLeft:4 }}/>פעילות בוצעה</span>
        </div>
        {data.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#c0a898', fontSize: 13, padding: '24px 0' }}>שמור יומן כדי לראות נתונים</div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 110, marginBottom: 4 }}>
              {data.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#a05c3b' }}>{d.reg}</div>
                  <div style={{ width: '100%', height: Math.round(d.reg / 5 * 80) + 4, background: '#f4a261', borderRadius: '4px 4px 0 0' }} />
                  <div style={{ width: '100%', height: d.act ? 20 : 4, background: '#6ab187', borderRadius: '4px 4px 0 0', marginTop: 2 }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {data.map((d, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: '#9b8070' }}>{d.lbl || '—'}</div>
              ))}
            </div>
          </>
        )}
      </div>

      {logs.length > 0 && (
        <div style={{ background: 'white', borderRadius: 18, border: '2px solid #f0d8c8', overflow: 'hidden' }}>
          <div style={{ background: '#fff0e0', padding: '9px 12px', fontSize: 11, fontWeight: 800, color: '#a05c3b' }}>היסטוריה</div>
          {logs.slice(0, 5).map((e, i) => (
            <div key={i} style={{ padding: '9px 12px', display: 'flex', gap: 10, borderTop: '1px solid #f5ebe3', fontSize: 12, alignItems: 'center' }}>
              <span style={{ color: '#9b8070', flexShrink: 0 }}>{e.date.split(' ').slice(0,2).join(' ')}</span>
              <span style={{ color: '#f4a261' }}>{'★'.repeat(e.stars)}</span>
              <span style={{ color: '#9b8070', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', flex: 1 }}>{e.note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ bg, val, color, label }) {
  return (
    <div style={{ background: bg, borderRadius: 12, padding: 12, textAlign: 'center' }}>
      <div style={{ fontSize: 11, color: '#9b8070', marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 800, color }}>{val}</div>
    </div>
  );
}
