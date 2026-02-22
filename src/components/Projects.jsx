import { CONFIG } from '../Portfolio.config'
import { useReveal } from './useReveal'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="wrap">
        <div className="projects-header">
          <span className="section-label reveal d1">// current_projects</span>
          <h2 className="section-title reveal d2">
            What I'm <span className="grad">Building</span>
          </h2>
          <p className="section-sub reveal d3">
            A selection of live and ongoing projects.
          </p>
        </div>

        <div className="projects-grid">
          {CONFIG.projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              className={`project-card card reveal d${(i % 2) + 2}`}
              style={{ '--accent': p.color }}
            >
              {/* Image / preview */}
              <div className="project-thumb">
                {p.image
                  ? <img src={p.image} alt={p.title} />
                  : (
                    <div
                      className="project-thumb-placeholder"
                      style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)` }}
                    >
                      <span
                        className="project-thumb-icon"
                        style={{ color: p.color }}
                      >
                        ◈
                      </span>
                      {/* Add your image here — replace null in portfolio.config.js */}
                      <span className="project-thumb-hint">
                        Coming soon
                      </span>
                    </div>
                  )
                }

                {/* Hover overlay */}
                <div className="project-overlay">
                  <span>View Project →</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-summary">{p.summary}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}