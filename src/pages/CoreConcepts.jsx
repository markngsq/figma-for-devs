import TableOfContents from '../components/TableOfContents'
import Callout from '../components/Callout'

const toc = [
  { id: 'auto-layout',  label: 'Auto Layout',             level: 2 },
  { id: 'components',   label: 'Components and Instances', level: 2 },
  { id: 'styles-vars',  label: 'Styles and Variables',     level: 2 },
  { id: 'constraints',  label: 'Constraints',              level: 2 },
]

export default function CoreConcepts() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">03 — Core Concepts</div>
        <h1>Core Design Concepts</h1>
        <p className="page-subtitle">
          The four things you need to understand to actually read a Figma file the way it was intended.
        </p>
      </div>

      <TableOfContents items={toc} />

      <h2 id="auto-layout">
        Auto Layout
        <a className="heading-anchor" href="#auto-layout" aria-hidden="true">#</a>
      </h2>

      <p>The single most important concept to learn. Think of it as CSS flexbox — directly.</p>

      <h3>What it is</h3>
      <p>
        Makes a frame behave like a flex container. Children stack horizontally or vertically with
        defined gap and padding. Add or remove elements and the container adjusts automatically.
      </p>

      <h3>Why it matters for devs</h3>
      <p>
        It maps directly to how you'd actually implement this in CSS. A button with Auto Layout has
        explicit padding values — not "it looks about right". When you understand Auto Layout, you
        can read a Figma file the way a designer intended it.
      </p>

      <Callout type="tip">
        <p>
          When you see a Figma component with Auto Layout, you can read the gap and padding values
          directly in the right panel. Those are the exact values you'd put in your CSS.
        </p>
      </Callout>

      <h3>Usage</h3>
      <ol>
        <li>Select a frame or layers</li>
        <li>Press <kbd>Shift</kbd> + <kbd>A</kbd> or click Auto Layout in the right panel</li>
        <li>Set direction (horizontal/vertical), gap, and padding</li>
      </ol>

      <hr className="section-divider" />

      <h2 id="components">
        Components and Instances
        <a className="heading-anchor" href="#components" aria-hidden="true">#</a>
      </h2>

      <p>Think of components exactly like React components.</p>

      <ul>
        <li><strong>Master component</strong> = the source component definition</li>
        <li><strong>Instances</strong> = rendered instances of that component</li>
        <li>Instances inherit from the master. Change the master, all instances update.</li>
        <li>
          You can override specific props on an instance (text, colour, visibility) without breaking
          the link — like passing props.
        </li>
      </ul>

      <p>
        <strong>When to make a component:</strong> If it appears more than once, or represents a UI
        pattern in the design system.
      </p>

      <Callout type="tip">
        <p>Right-click any instance → "Go to main component" to jump to the master.</p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="styles-vars">
        Styles and Variables
        <a className="heading-anchor" href="#styles-vars" aria-hidden="true">#</a>
      </h2>

      <h3>Styles</h3>
      <p>
        The older system. Define colour, text, and effect styles. Apply them to layers. Change the
        style, it updates everywhere. Like CSS variables but simpler — a colour style is a fixed hex
        value.
      </p>

      <h3>Variables</h3>
      <p>
        The newer system (2023+). Supports multiple modes (light/dark, density). A variable{' '}
        <code>--color-primary</code> can be <code>#2563EB</code> in light mode and{' '}
        <code>#93C5FD</code> in dark mode. Maps directly to design tokens in code.
      </p>

      <Callout type="tip">
        <p>
          If you're working on a product with theming or a design system, learn Variables. They map
          to how tokens work in code. A designer who uses Variables properly makes your handoff
          significantly cleaner.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="constraints">
        Constraints
        <a className="heading-anchor" href="#constraints" aria-hidden="true">#</a>
      </h2>

      <p>Controls how a layer behaves when its parent resizes.</p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Constraint</th>
              <th>Behaviour</th>
              <th>CSS equivalent</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Left / Right / Top / Bottom', 'Pin to that edge', 'position: absolute + offset'],
              ['Left and Right', 'Stretch between both edges', 'width: 100%'],
              ['Center', 'Stay centered', 'margin: auto'],
              ['Scale', 'Scale proportionally', 'percentage-based sizing'],
            ].map(([c, b, css]) => (
              <tr key={c}>
                <td><strong>{c}</strong></td>
                <td>{b}</td>
                <td><code>{css}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Auto Layout largely supersedes constraints for components, but constraints matter for
        elements in non-Auto Layout frames.
      </p>
    </>
  )
}
