import TableOfContents from '../components/TableOfContents'
import Callout from '../components/Callout'

const toc = [
  { id: 'figjam',       label: 'FigJam',       level: 2 },
  { id: 'slides',       label: 'Figma Slides',  level: 2 },
  { id: 'prototyping',  label: 'Prototyping',   level: 2 },
]

export default function AdjacentTools() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">04 — Adjacent Tools</div>
        <h1>Key Adjacent Tools</h1>
        <p className="page-subtitle">
          FigJam for thinking, Slides for presenting, Prototyping for communicating behaviour.
          Each one has a distinct job.
        </p>
      </div>

      <TableOfContents items={toc} />

      <h2 id="figjam">
        FigJam
        <a className="heading-anchor" href="#figjam" aria-hidden="true">#</a>
      </h2>

      <p>For thinking, not designing. Right for:</p>
      <ul>
        <li>User journey maps and service blueprints</li>
        <li>Brainstorming and affinity mapping</li>
        <li>Rough flow diagrams — page flows, decision trees</li>
        <li>Retros and workshops</li>
      </ul>

      <p>
        Features: sticky notes, connectors (with arrow types), shapes, stamps, cursor chat, and
        templates for common workshop formats.
      </p>

      <Callout type="warning">
        <p>
          <strong>Don't use FigJam to design actual UI.</strong> It's not made for pixel-level work.
          If you find yourself trying to build screens in FigJam, switch to Figma Design.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="slides">
        Figma Slides
        <a className="heading-anchor" href="#slides" aria-hidden="true">#</a>
      </h2>

      <p>For presenting your design work. Use it when:</p>
      <ul>
        <li>Presenting to stakeholders who need narrative context, not just screens</li>
        <li>You want slides that look designed (because they're made in Figma)</li>
        <li>You're running a structured design review</li>
      </ul>

      <p>
        For casual reviews or internal walkthroughs, just present directly from the canvas — it's
        faster and shows your actual working file.
      </p>

      <hr className="section-divider" />

      <h2 id="prototyping">
        Prototyping
        <a className="heading-anchor" href="#prototyping" aria-hidden="true">#</a>
      </h2>

      <p>
        In any Figma Design file, there's a <strong>Prototype</strong> tab in the right panel (next
        to Design and Inspect).
      </p>

      <ul>
        <li>Connect frames with interaction arrows</li>
        <li>Set triggers (on click, on hover, after delay) and animations</li>
        <li>
          Preview with <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>Enter</kbd> or the Play button
        </li>
        <li>Share a prototype link — anyone with the link can click through it without a Figma account</li>
      </ul>

      <Callout type="tip">
        <p>
          Prototypes are the fastest way to communicate how something should behave.
          A static screen shows <em>what</em>; a prototype shows <em>how</em>.
        </p>
      </Callout>
    </>
  )
}
