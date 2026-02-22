import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './Services.css'

export default function Services() {
  const ref = useReveal()

  return (
    <section className="services" id="services" ref={ref}>
      <div className="wrap">
        <div className="services-header">
          <span className="section-label reveal d1">// what_i_do</span>
          <h2 className="section-title reveal d2">
            Expert <span className="grad">Solutions</span>
          </h2>
          <p className="section-sub reveal d3">
            Delivering high-quality web solutions since 1997.
          </p>
        </div>

        <div className="services-grid">
          {CONFIG.services.map((s, i) => (
            <div
              key={s.title}
              className={`services-card card reveal d${(i % 3) + 2}`}
            >
              <div className="services-icon">{s.icon}</div>
              <h3 className="services-title">{s.title}</h3>
              <p className="services-desc">{s.desc}</p>
              <div className="services-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}