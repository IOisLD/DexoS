import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './Skills.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="wrap">
        <div className="skills-header">
          <span className="section-label reveal d1">// skills_expertise</span>
          <h2 className="section-title reveal d2">
            Programming <span className="grad">Languages</span>
          </h2>
          <p className="section-sub reveal d3">
            Verified rankings from Coder's Rank across 100,000+ global developers.
          </p>
        </div>

        {/* Ranking cards */}
        <div className="skills-grid">
          {CONFIG.skills.map((s, i) => (
            <div key={s.lang} className={`skill-card card reveal d${(i % 3) + 2}`}>
              <div className="skill-top">
                <h3 className="skill-lang">{s.lang}</h3>
                <span className="skill-badge">Expert</span>
              </div>
              <div className="skill-rows">
                <div className="skill-row">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span className="skill-rank">{s.worldwide}</span>
                  {/* <span className="skill-scope">Worldwide</span> */}
                </div>
                <div className="skill-row">
                  {/* <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg> */}
                  <span className="skill-rank">{s.local}</span>
                  <span className="skill-scope">Philippines</span>
                </div>
              </div>
              {/* Bar decoration */}
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: s.worldwide.startsWith('Top 0.04') ? '99.5%' : s.worldwide.startsWith('Top 0.2') ? '99%' : '98.5%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        {/* <div className="stack-wrap reveal d3">
          <h3 className="stack-title">Technologies &amp; Tools</h3>
          <div className="stack-tags">
            {CONFIG.techStack.map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}