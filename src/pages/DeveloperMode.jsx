import TableOfContents from '../components/TableOfContents'
import Callout from '../components/Callout'

const toc = [
  { id: 'turning-on',   label: 'Turning it on',              level: 2 },
  { id: 'whats-diff',   label: "What's Different in Dev Mode", level: 2 },
  { id: 'inspecting',   label: 'Inspecting a Component',      level: 2 },
  { id: 'annotations',  label: 'Annotations',                 level: 2 },
]

export default function DeveloperMode() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">05 — Developer Mode</div>
        <h1>Developer Mode</h1>
        <p className="page-subtitle">
          A dedicated view optimised for implementation — reading designs, not editing them.
          This is where you should spend most of your time in Figma.
        </p>
      </div>

      <TableOfContents items={toc} />

      <p>
        Developer Mode is a dedicated view of Figma optimised for implementation — reading designs,
        not editing them.
      </p>

      <hr className="section-divider" />

      <h2 id="turning-on">
        Turning it on
        <a className="heading-anchor" href="#turning-on" aria-hidden="true">#</a>
      </h2>

      <ul>
        <li>Toggle in the toolbar (top right)</li>
        <li>Shortcut: <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>D</kbd></li>
        <li>In view-only mode, it's the default when you don't have edit access</li>
      </ul>

      <hr className="section-divider" />

      <h2 id="whats-diff">
        What's Different in Dev Mode
        <a className="heading-anchor" href="#whats-diff" aria-hidden="true">#</a>
      </h2>

      <p>In Design Mode you see everything editable. In Dev Mode:</p>
      <ul>
        <li>The canvas is read-only (you can't accidentally move things)</li>
        <li>The right panel shows implementation-relevant values: spacing, font specs, border radius, shadow values</li>
        <li>Components are highlighted with their names</li>
        <li>You get a direct path to the code panel</li>
      </ul>

      <Callout type="tip">
        <p>
          If you have edit access to a file, switch to Dev Mode before inspecting values. It surfaces
          the implementation details instead of the editing controls.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="inspecting">
        Inspecting a Component
        <a className="heading-anchor" href="#inspecting" aria-hidden="true">#</a>
      </h2>

      <p>Click any element in Dev Mode. The right panel shows:</p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>What you get</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Position and size', 'x, y, width, height in the parent frame'],
              ['Fill', 'Colour with hex, opacity, and any variables applied'],
              ['Typography', 'Font family, weight, size, line height, letter spacing'],
              ['Border/stroke', 'Colour, width, position'],
              ['Border radius', 'Per-corner values if set'],
              ['Effects', 'Shadows with x/y/blur/spread values, blur effects'],
              ['Layout', 'If Auto Layout is applied: gap, padding values (exactly as you\'d set in CSS)'],
            ].map(([prop, desc]) => (
              <tr key={prop}>
                <td><strong>{prop}</strong></td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="section-divider" />

      <h2 id="annotations">
        Annotations
        <a className="heading-anchor" href="#annotations" aria-hidden="true">#</a>
      </h2>

      <p>
        Designers can leave implementation notes directly on the canvas using the Annotations tool
        (in the Dev Mode toolbar). These appear as numbered markers with notes — useful for flagging
        things that aren't obvious from inspection.
      </p>

      <p>Examples of things annotations are used for:</p>
      <ul>
        <li>"This animation should ease-out"</li>
        <li>"Use the system font, not the design font"</li>
        <li>"This state only shows when the user has 0 items"</li>
        <li>"Match the existing component in the design system, don't rebuild this"</li>
      </ul>

      <Callout type="tip">
        <p>
          If you're a designer handing off to a developer: use annotations. If you're a developer
          receiving a handoff: check for annotations before assuming a spec is incomplete.
        </p>
      </Callout>
    </>
  )
}
