import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'layer-naming',  label: 'Layer Naming',                 level: 2 },
  { id: 'organisation',  label: 'Organisation',                  level: 2 },
  { id: 'messy-files',   label: 'When the File Is a Mess',       level: 2 },
  { id: 'checklist',     label: 'Before Handoff: Quick Checklist', level: 2 },
  { id: 'tech-note',     label: 'One Technical Note',            level: 2 },
]

const checklistItems = [
  'All layers named meaningfully',
  'No loose elements outside of frames',
  'Colours using Styles or Variables (not raw hex)',
  'Text using Text Styles (not manually set fonts)',
  'Export settings applied to any assets that need exporting',
  'Prototype links working if interaction behaviour needs communicating',
  'A dedicated "Handoff" page or frame with specs, notes, edge cases',
]

export default function BestPractices() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">07 — Best Practices</div>
        <h1>Best Practices for Clean Handoff</h1>
        <p className="page-subtitle">
          The difference between a file that's a pleasure to implement from and one that wastes
          your morning. Most of it is naming and organisation.
        </p>
      </div>

      <h2 id="layer-naming">
        Layer Naming
        <a className="heading-anchor" href="#layer-naming" aria-hidden="true">#</a>
      </h2>

      <p>
        Name your layers like you'd name your code. A dev inspecting your file should immediately
        know what they're looking at.
      </p>

      <div className="comparison">
        <div className="comparison-bad">
          <div className="comparison-label">Bad</div>
          <code>Rectangle 42</code><br/>
          <code>Frame 7</code><br/>
          <code>Group 3</code>
        </div>
        <div className="comparison-good">
          <div className="comparison-label">Better</div>
          <code>card</code><br/>
          <code>button-primary</code><br/>
          <code>icon-search</code>
        </div>
      </div>

      <Callout type="tip">
        <p>
          <strong>Best:</strong> <code>Button/Primary/Default</code>, <code>Input/Text/Error</code>
          — hierarchical naming that matches component naming in code.
        </p>
        <p>
          Figma uses <code>/</code> as a grouping separator in the Assets panel.{' '}
          <code>Button/Primary</code> and <code>Button/Secondary</code> will appear under a "Button"
          group.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="organisation">
        Organisation
        <a className="heading-anchor" href="#organisation" aria-hidden="true">#</a>
      </h2>

      <details>
        <summary>
          <span>📐</span>
          <span>Frames and Layout</span>
          <em className="summary-chevron">▾</em>
        </summary>
        <div className="details-content">
          <ul>
            <li>
              <strong>Every design element should be inside a Frame.</strong> Loose layers floating
              on the canvas are a handoff nightmare.
            </li>
            <li>
              <strong>Use Auto Layout throughout.</strong> Files built with Auto Layout are far
              easier to inspect because spacing is explicit, not implicit.
            </li>
          </ul>
        </div>
      </details>

      <details>
        <summary>
          <span>🧩</span>
          <span>Components and Layers</span>
          <em className="summary-chevron">▾</em>
        </summary>
        <div className="details-content">
          <ul>
            <li>
              <strong>Components for everything reusable.</strong> One-offs that appear more than
              twice should be components.
            </li>
            <li>
              <strong>Hidden layers are not deleted layers.</strong> If something's hidden and not
              needed, delete it. Hidden layers still appear in the Layers panel and confuse everyone.
            </li>
            <li>
              <strong>Group logically, name consistently.</strong> If a dev has to expand 12 nested
              groups to find a button label, that's a problem you created.
            </li>
          </ul>
        </div>
      </details>

      <hr className="section-divider" />

      <h2 id="messy-files">
        When the File Is a Mess
        <a className="heading-anchor" href="#messy-files" aria-hidden="true">#</a>
      </h2>

      <p>
        If you inherit a file where layers are unnamed and loose, that's a handoff problem from the
        designer's side — but you still have to work with it. Use <kbd>Cmd</kbd> + <kbd>F</kbd> to
        search layers by name, and check the Assets panel for components. The Inspect tab in the right
        panel still gives you accurate values even in messy files.
      </p>

      <hr className="section-divider" />

      <h2 id="checklist">
        Before Handoff: A Quick Checklist
        <a className="heading-anchor" href="#checklist" aria-hidden="true">#</a>
      </h2>

      <ul className="checklist">
        {checklistItems.map((item, i) => (
          <li key={i}>
            <span className="checklist-box" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <hr className="section-divider" />

      <h2 id="tech-note">
        One Technical Note
        <a className="heading-anchor" href="#tech-note" aria-hidden="true">#</a>
      </h2>

      <p>
        If a layer has complex effects (multiple fills, blending modes, nested shadows), flatten it
        before exporting as an image — otherwise the export may not match what's on screen.
      </p>

      <p>
        Select the layer and <kbd>Cmd</kbd> + <kbd>E</kbd> to flatten.
      </p>
    </PageLayout>
  )
}
