import { NavLink, Link } from 'react-router-dom'

const sections = [
  { path: '/what-is-figma',   label: 'What Is Figma & Why Devs Need It',  num: '01' },
  { path: '/getting-around',  label: 'Getting Around Figma',               num: '02' },
  { path: '/core-concepts',   label: 'Core Design Concepts',               num: '03' },
  { path: '/developer-mode',  label: 'Dev Mode',                           num: '04' },
  { path: '/code-panel',      label: 'Reading & Using the Code Panel',     num: '05' },
  { path: '/clean-handoff',   label: 'Clean Handoff',                      num: '06' },
  { path: '/ai-workflows',    label: 'AI-Powered Workflows',               num: '07' },
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
