import React, { useState } from 'react';
import Home from './components/Home';
import ParentJournal from './components/ParentJournal';
import DailyPlan from './components/DailyPlan';
import WeeklyChart from './components/WeeklyChart';
import GameSpace from './components/GameSpace';
import StoryGame from './components/StoryGame';
import ImageGallery from './components/ImageGallery';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [weekData, setWeekData] = useState(() => {
    try { return JSON.parse(localStorage.getItem('weekData') || '[]'); } catch { return []; }
  });
  const [logs, setLogs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('logs') || '[]'); } catch { return []; }
  });

  const saveLog = (entry) => {
    const newLogs = [entry, ...logs];
    setLogs(newLogs);
    localStorage.setItem('logs', JSON.stringify(newLogs));
    const todayDone = localStorage.getItem('done_' + new Date().toISOString().slice(0, 10)) === '1';
    const newWeek = [{ reg: entry.stars, act: todayDone ? 1 : 0, lbl: new Date().toLocaleDateString('he-IL', { weekday: 'short' }) }, ...weekData].slice(0, 7);
    setWeekData(newWeek);
    localStorage.setItem('weekData', JSON.stringify(newWeek));
  };

  const nav = (s) => setScreen(s);

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', minHeight: '100vh' }}>
      {screen === 'home' && <Home nav={nav} />}
      {screen === 'journal' && <ParentJournal nav={nav} logs={logs} saveLog={saveLog} />}
      {screen === 'plan' && <DailyPlan nav={nav} />}
      {screen === 'chart' && <WeeklyChart nav={nav} weekData={weekData} logs={logs} />}
      {screen === 'game' && <GameSpace nav={nav} />}
      {screen === 'story' && <StoryGame nav={nav} />}
      {screen === 'imageGallery' && <ImageGallery nav={nav} />}
    </div>
  );
}
