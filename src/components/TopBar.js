import React from 'react';

export default function TopBar({ title, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
      <button onClick={onBack} style={{ background: 'white', border: '2px solid #f0d8c8', borderRadius: 12, padding: '7px 14px', fontSize: 13, cursor: 'pointer', color: '#a05c3b', fontWeight: 700 }}>
        → חזרה
      </button>
      <div style={{ fontSize: 17, fontWeight: 800, color: '#a05c3b' }}>{title}</div>
      <div style={{ width: 64 }} />
    </div>
  );
}
