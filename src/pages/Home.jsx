import { Link } from 'react-router-dom'
import PrevNext from '../components/PrevNext'

const sections = [
  {
    path: '/what-is-figma',
    num: '01',
    title: 'What Is Figma & Why Devs Need It',
    desc: 'The mental models transfer almost directly. Roles, pricing, and the one surface that matters.',
  },
  {
    path: '/getting-around',
    num: '02',
    title: 'Getting Around Figma',
    desc: 'The three traps developers fall into in their first hour — and the shortcuts that get you out.',
  },
  {
    path: '/core-concepts',
    num: '03',
    title: 'Core Design Concepts',
    desc: 'Auto Layout is CSS flexbox. Components are React components. Here\'s the full translation.',
  },
  {
    path: '/developer-mode',
    num: '04',
    title: 'Dev Mode',
    desc: 'The read-only interface built for implementation. Inspect values, check Ready for Dev status, use focus view.',
  },
  {
    path: '/code-panel',
    num: '05',
    title: 'Reading & Using the Code Panel',
    desc: 'What the generated CSS is actually telling you — and where to ignore it. Plus Code Connect and asset export.',
  },
  {
    path: '/clean-handoff',
    num: '06',
    title: 'Clean Handoff',
    desc: 'What to do when you receive a file — good or bad. The questions worth asking before you start building.',
  },
  {
    path: '/ai-workflows',
    num: '07',
    title: 'AI-Powered Workflows',
    desc: 'MCP workflow and screenshot workflow. From Figma to working code, with honest caveats about where AI falls short.',
  },
]

export default function Home() {
  return (
    <div className="home-content">
      <div className="home-hero">
        <h1>Figma for Devs</h1>
        <p>
          A practical guide for developers working with design files.
          Written to be read, not watched.
        </p>
      </div>

      <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
        If you understand components, variables, and CSS flexbox — you already know 80% of Figma.
        This guide fills the gaps without the beginner hand-holding.
      </p>

      <hr className="section-divider" />

      <h2 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Sections</h2>

      <div className="section-grid">
        {sections.map(s => (
          <Link key={s.path} to={s.path} className="section-card">
            <div className="section-card-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>

      <PrevNext />
    </div>
  )
}
