import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './Awards.css'

export default function Awards() {
  const ref = useReveal()

  return (
    <section className="awards" id="awards" ref={ref}>
      <div className="wrap">
        <div className="awards-header">
          <span className="section-label reveal d1">// recognition</span>
          <h2 className="section-title reveal d2">
            Awards &amp; <span className="grad">Achievements</span>
          </h2>
          <p className="section-sub reveal d3">
            Recent acknowledgments from industry bodies and ranking platforms.
          </p>
        </div>

        <div className="awards-grid">
          {CONFIG.awards.map((a, i) => (
            <a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`award-card card reveal d${i + 2}`}
            >
              <div className="award-icon">{a.icon}</div>
              <div className="award-body">
                <h3 className="award-title">{a.title}</h3>
                <p className="award-project">{a.project}</p>
                <span className="award-org">{a.org} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}