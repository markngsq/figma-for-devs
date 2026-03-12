import { Link } from 'react-router-dom'

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
    desc: 'Read-only view with implementation values. How to inspect components properly.',
  },
  {
    path: '/code-export',
    num: '06',
    title: 'Code Export & Working with Code',
    desc: 'The CSS panel, copying hex values, exporting assets, design tokens.',
  },
  {
    path: '/best-practices',
    num: '07',
    title: 'Best Practices for Clean Handoff',
    desc: 'Layer naming, organisation, the handoff checklist. Files that don\'t waste mornings.',
  },
  {
    path: '/vibe-coding',
    num: '08',
    title: 'AI Tools & Vibe Coding Workflow',
    desc: 'From Figma to working code with AI. Tools, prompts, and where the workflow breaks.',
  },
]

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <h1>Figma for <span>Devs</span></h1>
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

      <hr className="section-divider" />

      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Content by Skald. Built with React + Vite. Deployed on GitHub Pages.
      </p>
    </>
  )
}
