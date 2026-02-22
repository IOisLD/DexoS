import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section className="about" id="about" ref={ref}>
      <div className="wrap">
        {/* Section header */}
        <div className="about-header">
          <span className="section-label reveal d1">// about_me</span>
          <h2 className="section-title reveal d2">
            Background &amp; <span className="grad">Experience</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Avatar side */}
          <div className="about-visual reveal d2">
            <div className="about-img-frame">
              {CONFIG.avatar
                ? <img src={CONFIG.avatar} alt={CONFIG.name} className="about-img" />
                : (
                  <div className="about-img-placeholder">
                    <span className="grad">{CONFIG.initials}</span>
                  </div>
                )
              }
              {/* Decorative corner */}
              <div className="about-img-corner" />
            </div>

            {/* Location badge */}
            <div className="about-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              {CONFIG.location}
            </div>
          </div>

          {/* Text side */}
          <div className="about-content">
            {CONFIG.bio.map((para, i) => (
              <p key={i} className={`about-para reveal d${i + 2}`}>
                {para}
              </p>
            ))}

            {/* Stats row */}
            <div className="about-stats reveal d5">
              {CONFIG.stats.map((s, i) => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-val grad">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-actions reveal d6">
              <a href={`mailto:${CONFIG.email}`} className="btn btn-primary">
                Work With Me
              </a>
              <a href={CONFIG.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}