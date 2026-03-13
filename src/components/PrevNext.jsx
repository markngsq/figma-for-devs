import { Link, useLocation } from 'react-router-dom'

const pages = [
  { path: '/',               label: 'Home' },
  { path: '/what-is-figma',  label: 'What Is Figma & Why Devs Need It' },
  { path: '/getting-around', label: 'Getting Around Figma' },
  { path: '/core-concepts',  label: 'Core Design Concepts' },
  { path: '/developer-mode', label: 'Dev Mode' },
  { path: '/code-panel',     label: 'Reading & Using the Code Panel' },
  { path: '/clean-handoff',  label: 'Clean Handoff' },
  { path: '/ai-workflows',   label: 'AI-Powered Workflows' },
]

export default function PrevNext() {
  const { pathname } = useLocation()
  const idx = pages.findIndex(p => p.path === pathname)

  if (idx === -1) return null

  const prev = idx > 0 ? pages[idx - 1] : null
  const next = idx < pages.length - 1 ? pages[idx + 1] : null

  if (!prev && !next) return null

  return (
    <nav className="prevnext" aria-label="Page navigation">
      {prev ? (
        <Link to={prev.path} className="prevnext-card prevnext-prev">
          <span className="prevnext-arrow" aria-hidden="true">←</span>
          <div className="prevnext-text">
            <span className="prevnext-label">Previous</span>
            <span className="prevnext-title">{prev.label}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.path} className="prevnext-card prevnext-next">
          <div className="prevnext-text">
            <span className="prevnext-label">Next</span>
            <span className="prevnext-title">{next.label}</span>
          </div>
          <span className="prevnext-arrow" aria-hidden="true">→</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
