import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Ic from './Ic'
import logo from '../assets/logo.jpg'

const NAV = [
  { path: '/',         label: 'בית' },
  { path: '/about',    label: 'אודות' },
  { path: '/services', label: 'שירותים' },
  { path: '/sleep',    label: 'ייעוץ שינה' },
  { path: '/blog',     label: 'בלוג' },
  { path: '/contact',  label: 'צרי קשר' },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = path => {
    navigate(path)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(14px)',
      boxShadow: scrolled ? '0 2px 20px rgba(207,46,46,.08)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(247,141,167,.2)' : '1px solid transparent',
      transition: 'all .3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => go('/')} style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}>
          <img src={logo} alt="לוגו" style={{ height: 48, width: 'auto' }} />
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hidden md:flex">
          {NAV.map(item => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              className={`nav-link ${location.pathname === item.path ? 'act' : ''}`}
              style={{ fontSize: 14, color: location.pathname === item.path ? '#cf2e2e' : '#7a3a3a', paddingBottom: 4 }}
            >
              {item.label}
            </button>
          ))}
          <button className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }} onClick={() => go('/contact')}>
            לייעוץ חינם ←
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'rgba(247,141,167,.12)', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 10 }}
        >
          <Ic n={open ? 'close' : 'menu'} s={22} c="#cf2e2e" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu md:hidden" style={{ background: 'rgba(255,255,255,.98)', padding: '8px 24px 20px', borderTop: '1px solid rgba(247,141,167,.12)' }}>
          {NAV.map(item => (
            <button
              key={item.path}
              onClick={() => go(item.path)}
              style={{
                display: 'block', width: '100%', textAlign: 'right',
                padding: '12px 14px', borderRadius: 12,
                background: location.pathname === item.path ? 'rgba(247,141,167,.1)' : 'transparent',
                border: 'none', cursor: 'pointer',
                fontSize: 15,
                color: location.pathname === item.path ? '#cf2e2e' : '#2d1a1a',
                marginBottom: 4,
              }}
            >
              {item.label}
            </button>
          ))}
          <button className="btn-primary" style={{ width: '100%', marginTop: 8 }} onClick={() => go('/contact')}>
            לייעוץ חינם ←
          </button>
        </div>
      )}
    </header>
  )
}
