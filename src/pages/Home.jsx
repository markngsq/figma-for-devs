import { Link } from 'react-router-dom'
import PrevNext from '../components/PrevNext'

const sections = [
  {
    path: '/what-is-figma',
    num: '01',
    title: 'What Figma Actually Is',
    desc: 'The three surfaces — Design, FigJam, and Slides. What Figma is and isn\'t.',
  },
  {
    path: '/getting-around',
    num: '02',
    title: 'Getting Around Figma Design',
    desc: 'Panels, pages, frames vs groups, toolbar, keyboard shortcuts.',
  },
  {
    path: '/core-concepts',
    num: '03',
    title: 'Core Design Concepts',
    desc: 'Auto Layout (think: flexbox), components, styles and variables, constraints.',
  },
  {
    path: '/adjacent-tools',
    num: '04',
    title: 'Key Adjacent Tools',
    desc: 'FigJam for whiteboarding, Slides for presenting, Prototyping for behaviour.',
  },
  {
    path: '/developer-mode',
    num: '05',
    title: 'Developer Mode',
    desc: 'Inspect components, read spacing values, and copy exact CSS properties without editing anything.',
  },
  {
    path: '/code-export',
    num: '06',
    title: 'Code Export & Working with Code',
    desc: 'Copy hex values, export assets, read CSS output, and understand how design tokens map to code.',
  },
  {
    path: '/best-practices',
    num: '07',
    title: 'Best Practices for Clean Handoff',
    desc: 'Layer naming, Auto Layout discipline, and the checklist that makes handoff not a nightmare.',
  },
  {
    path: '/vibe-coding',
    num: '08',
    title: 'AI Tools & Vibe Coding Workflow',
    desc: 'From Figma to working code in hours. The workflow, the tools, and the honest caveats.',
  },
]

export default function Home() {
  return (
    <div className="home-content">
      <div className="home-hero">
        <h1>Figma for Devs</h1>
        <p>
          A practical guide for developers making the transition into product design.
          Written to be read, not watched.
        </p>
      </div>

      <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
        If you already understand components, variables, and CSS flexbox — you're closer to
        knowing Figma than you think. This guide fills the gaps without the beginner hand-holding.
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
