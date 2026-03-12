import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'
import { Link } from 'react-router-dom'

const toc = [
  { id: 'overview',       label: 'Overview',       level: 2 },
  { id: 'figma-design',   label: 'Figma Design',   level: 3 },
  { id: 'figjam',         label: 'FigJam',         level: 3 },
  { id: 'figma-slides',   label: 'Figma Slides',   level: 3 },
]

export default function WhatIsFigma() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">01 — Foundation</div>
        <h1>What Figma Actually Is</h1>
        <p className="page-subtitle">
          The three main surfaces, and which one you'll actually live in.
        </p>
      </div>

      <h2 id="overview">Overview</h2>
      <p>
        Figma is a design tool that runs in the browser (or a desktop app, your choice). Everything
        lives in the cloud by default — no "save" button, no file versions scattered across your laptop.
        Multiple people can be in the same file at the same time, which is both useful and occasionally
        chaotic when someone moves your frames.
      </p>
      <p>
        There are three main surfaces in Figma:
      </p>

      <hr className="section-divider" />

      <h2 id="figma-design">
        Figma Design
        <a className="heading-anchor" href="#figma-design" aria-hidden="true">#</a>
      </h2>
      <p>
        The core product. Where you design screens, build components, create prototypes, and hand off
        work to developers. If someone says "open the Figma file," they mean this.
      </p>
      <Callout type="tip">
        <p>This guide is about Figma Design. The other two surfaces are covered in <strong>Key Adjacent Tools</strong>.</p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="figjam">
        FigJam
        <a className="heading-anchor" href="#figjam" aria-hidden="true">#</a>
      </h2>
      <p>
        A digital whiteboard. For messy thinking — brainstorming sessions, user journey maps,
        flowcharts, retrospectives. It has sticky notes, connectors, shapes, and templates.
      </p>
      <p>
        FigJam is for thinking, not designing — covered in <Link to="/adjacent-tools">Key Adjacent Tools</Link>.
      </p>

      <hr className="section-divider" />

      <h2 id="figma-slides">
        Figma Slides
        <a className="heading-anchor" href="#figma-slides" aria-hidden="true">#</a>
      </h2>
      <p>
        Figma's built-in presentation tool. Think PowerPoint but integrated with your design files.
        Use it when presenting work to stakeholders who need a structured narrative, not just a canvas
        walk-through.
      </p>

      <Callout type="tip">
        <p>→ Covered in depth in <Link to="/adjacent-tools">Key Adjacent Tools</Link></p>
      </Callout>

      <p style={{ marginTop: '2rem' }}>
        <Link to="/getting-around">Next: Getting Around Figma Design →</Link>
      </p>
    </PageLayout>
  )
}
