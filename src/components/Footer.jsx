import { CONFIG } from '../Portfolio.config'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="divider" />
      <div className="wrap footer-inner">
        <div className="footer-left">
          <span className="footer-logo grad">{CONFIG.initials}</span>
          <span className="footer-name">{CONFIG.name}</span>
        </div>
        <p className="footer-note">{CONFIG.footerNote}</p>
        <div className="footer-right">
          <span className="footer-copy">© {CONFIG.year}</span>
          <div className="footer-links">
            {CONFIG.socials.slice(0, 3).map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                 className="footer-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}