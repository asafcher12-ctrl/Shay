import React, { useState, useEffect } from 'react';
import './App.css';

const FILTERS = ['All', 'Active', 'Done'];
const PRIORITIES = ['low', 'mid', 'high'];

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

let nextId = Date.now();

export default function App() {
  const [tasks, setTasks] = useLocalStorage('taskflow-tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');
  const [priority, setPriority] = useState('mid');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const filtered = tasks.filter(t =>
    filter === 'All' ? true : filter === 'Done' ? t.done : !t.done
  );

  const addTask = () => {
    if (!input.trim()) return;
    setTasks(prev => [
      { id: nextId++, text: input.trim(), done: false, priority, createdAt: Date.now() },
      ...prev,
    ]);
    setInput('');
  };

  const toggle = id => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = id => setTasks(prev => prev.filter(t => t.id !== id));
  const clearDone = () => setTasks(prev => prev.filter(t => !t.done));

  const saveEdit = id => {
    if (!editText.trim()) return;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, text: editText.trim() } : t));
    setEditId(null);
  };

  const counts = {
    total: tasks.length,
    done: tasks.filter(t => t.done).length,
  };

  return (
    <div className="app">
      <div className="noise" />

      <header className="header">
        <div className="logo">
          <span className="logo-mark">TF</span>
          <span className="logo-text">TaskFlow</span>
        </div>
        <div className="stats">
          <span className="stat">{counts.done}<em>done</em></span>
          <span className="stat-sep">/</span>
          <span className="stat">{counts.total}<em>total</em></span>
        </div>
      </header>

      {counts.total > 0 && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${counts.total ? (counts.done / counts.total) * 100 : 0}%` }}
          />
        </div>
      )}

      <main className="main">
        <section className="input-section">
          <div className="priority-row">
            {PRIORITIES.map(p => (
              <button
                key={p}
                className={`priority-btn ${p} ${priority === p ? 'active' : ''}`}
                onClick={() => setPriority(p)}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="input-row">
            <input
              className="task-input"
              placeholder="Add a new task..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTask()}
            />
            <button className="add-btn" onClick={addTask} aria-label="Add task">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </section>

        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="filter-count">
                {f === 'All' ? tasks.length : f === 'Done' ? counts.done : tasks.length - counts.done}
              </span>
            </button>
          ))}
          {counts.done > 0 && (
            <button className="clear-btn" onClick={clearDone}>
              Clear done
            </button>
          )}
        </div>

        <ul className="task-list">
          {filtered.length === 0 && (
            <li className="empty">
              <span className="empty-icon">◎</span>
              <p>{filter === 'Done' ? 'Nothing done yet.' : 'All clear!'}</p>
            </li>
          )}
          {filtered.map(task => (
            <li key={task.id} className={`task-item ${task.done ? 'done' : ''} priority-${task.priority}`}>
              <button className="check-btn" onClick={() => toggle(task.id)} aria-label="Toggle">
                <span className="checkmark">{task.done ? '✓' : ''}</span>
              </button>

              {editId === task.id ? (
                <input
                  className="edit-input"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') saveEdit(task.id);
                    if (e.key === 'Escape') setEditId(null);
                  }}
                  onBlur={() => saveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span
                  className="task-text"
                  onDoubleClick={() => { setEditId(task.id); setEditText(task.text); }}
                >
                  {task.text}
                </span>
              )}

              <span className={`priority-dot ${task.priority}`} title={task.priority} />

              <button className="delete-btn" onClick={() => remove(task.id)} aria-label="Delete">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <span>Double-click a task to edit · Enter to add</span>
      </footer>
    </div>
  );
}
