import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home', num: null },
]

const sections = [
  { path: '/what-is-figma',  label: 'What Figma Actually Is',             num: '01' },
  { path: '/getting-around', label: 'Getting Around Figma Design',         num: '02' },
  { path: '/core-concepts',  label: 'Core Design Concepts',                num: '03' },
  { path: '/adjacent-tools', label: 'Key Adjacent Tools',                  num: '04' },
  { path: '/developer-mode', label: 'Developer Mode',                       num: '05' },
  { path: '/code-export',    label: 'Code Export & Working with Code',      num: '06' },
  { path: '/best-practices', label: 'Best Practices for Clean Handoff',     num: '07' },
  { path: '/vibe-coding',    label: 'AI Tools & Vibe Coding',               num: '08' },
]

export default function Sidebar({ onClose }) {
  return (
    <>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo" onClick={onClose}>
          <span className="sidebar-logo-icon">F</span>
          <div>
            <div>Figma for Devs</div>
            <div className="sidebar-tagline">A practical guide</div>
          </div>
        </Link>
      </div>

      <div className="sidebar-search">
        <div className="search-input-wrapper">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            aria-label="Search documentation"
            readOnly
          />
          <span className="search-kbd">⌘K</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          onClick={onClose}
        >
          Overview
        </NavLink>

        <div className="nav-section-label">Sections</div>

        {sections.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={onClose}
          >
            <span className="nav-number">{item.num}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
