import { useEffect, useRef } from 'react'
import { CONFIG } from '../Portfolio.config'
import './Hero.css'

/* ── Particle Canvas ─────────────────────────────────────────── */
function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf
    let pts = []

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const mkPt = () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      a:  Math.random() * 0.5 + 0.1,
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        // connections
        for (let j = i + 1; j < pts.length; j++) {
          const q  = pts[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(6,182,212,${0.045 * (1 - d / 110)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        // dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.a})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    pts = Array.from({ length: 80 }, mkPt)
    window.addEventListener('resize', resize)
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="hero-canvas" />
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Particles />

      {/* Glow blobs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="wrap hero-inner">
        {/* Left — text */}
        <div className="hero-text">
          {/* Status badge */}
          {CONFIG.available && (
            <div className="hero-badge" style={{ animationDelay: '0ms' }}>
              <span className="hero-badge-dot" />
              Open to work · {CONFIG.location}
            </div>
          )}

          <h1 className="hero-heading">
            Hi, I'm{' '}
            <span className="grad">{CONFIG.name}</span>
          </h1>

          <p className="hero-title">{CONFIG.title}</p>

          <p className="hero-tagline">
            {CONFIG.tagline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={`mailto:${CONFIG.email}`} className="btn btn-ghost">
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials">
            {CONFIG.socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                 className="hero-social" title={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — avatar */}
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring" />
          <div className="hero-avatar-ring hero-avatar-ring-2" />
          <div className="hero-avatar">
            {CONFIG.avatar
              ? <img src={CONFIG.avatar} alt={CONFIG.name} />
              : <span className="hero-avatar-initials grad">{CONFIG.initials}</span>
            }
          </div>

          {/* Floating stats */}
          {CONFIG.stats.map((s, i) => (
            <div key={s.label} className={`hero-stat hero-stat-${i + 1}`}>
              <span className="hero-stat-val grad">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}