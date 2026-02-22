import { useState, useEffect } from 'react'
import { CONFIG } from '../portfolio.config'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // highlight active section
      const sections = CONFIG.navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap navbar-inner">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={close}>
          <span className="grad">{CONFIG.initials}</span>
          <span className="nav-logo-dot" />
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {CONFIG.navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${active === link.href ? ' active' : ''}`}
              >
                {link.label}
                <span className="nav-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={`mailto:${CONFIG.email}`} className="btn btn-primary nav-cta">
          Hire Me
        </a>

        {/* Burger */}
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {CONFIG.navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${CONFIG.email}`}
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', justifyContent: 'center' }}
          onClick={close}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}