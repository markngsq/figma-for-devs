import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'switching',        label: 'How to Switch',           level: 2 },
  { id: 'whats-different',  label: "What's Different",        level: 2 },
  { id: 'ready-status',     label: 'Ready for Development',   level: 2 },
  { id: 'inspecting',       label: 'Inspecting Values',       level: 2 },
  { id: 'focus-view',       label: 'Focus View',              level: 2 },
  { id: 'annotations',      label: 'Annotations',             level: 2 },
]

export default function DeveloperMode() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">04 — Dev Mode</div>
        <h1>Dev Mode</h1>
        <p className="page-subtitle">
          The read-only interface built for implementation. Use this, not Design Mode.
        </p>
      </div>

      <p>
        Most developers open Figma in Design Mode and immediately touch things they shouldn't. Layers
        shift. Frames resize. The designer opens their file later and something is subtly broken. This
        happens because Design Mode is a fully editable interface, even when you have viewer access —
        some actions still bleed through.
      </p>
      <p>
        Switch to Dev Mode. It's read-only, shows exactly what you need, and reorganises the interface
        around implementation rather than design.
      </p>

      <hr className="section-divider" />

      <h2 id="switching">
        How to Switch
        <a className="heading-anchor" href="#switching" aria-hidden="true">#</a>
      </h2>
      <p>
        <strong>Cmd+Opt+D</strong> (Mac) or <strong>Ctrl+Alt+D</strong> (Windows). If you're on a
        viewer plan, Dev Mode is on by default — you may already be in it. If you're an editor, you'll
        need to toggle it explicitly. When active, the toolbar shows a {"</>"} icon highlighted and
        the right panel completely reorganises.
      </p>

      <hr className="section-divider" />

      <h2 id="whats-different">
        What's Different in Dev Mode
        <a className="heading-anchor" href="#whats-different" aria-hidden="true">#</a>
      </h2>
      <p>
        The canvas becomes read-only. You can click, inspect, and navigate, but you can't accidentally
        move anything. The right panel switches from design properties to implementation properties —
        spacing values, CSS-friendly output, exact pixel measurements, font details, and colour values
        with their token names (if Variables are in use). Components are labelled with their master
        component name, which helps you find the right component in your own library.
      </p>
      <p>
        The left panel in Dev Mode also surfaces the layer tree more clearly. Each frame you click
        shows you its structure, and you can navigate up and down the hierarchy to understand the
        nesting without risk of editing anything.
      </p>

      <hr className="section-divider" />

      <h2 id="ready-status">
        Ready for Development Status — Check This First
        <a className="heading-anchor" href="#ready-status" aria-hidden="true">#</a>
      </h2>
      <p>
        Figma lets designers mark frames with a development status: Ready for Development, In Progress,
        or no status at all. This is the handoff signal.
      </p>

      <Callout type="warning">
        Before you implement anything, check for the green <strong>Ready for Development</strong> badge
        on the frame. You'll see it in Dev Mode at the top of the right panel when a frame is selected.
        If the frame is marked In Progress — or has no status — stop and ask the designer. Implementing
        in-progress designs wastes days. You'll build something, the design will change, and you'll
        rebuild it. This is not pedantic; it's how professional design-development workflows actually
        work. The badge is the contract.
      </Callout>

      <hr className="section-divider" />

      <h2 id="inspecting">
        Inspecting Values
        <a className="heading-anchor" href="#inspecting" aria-hidden="true">#</a>
      </h2>
      <p>
        Click any element in Dev Mode and the right panel shows you its implementation properties.
        Here's what you'll actually use:
      </p>
      <ul>
        <li>
          <strong>Spacing and size</strong> — width, height, padding, gap (Auto Layout), and margin
          from siblings. These are the exact values you'll use in CSS.
        </li>
        <li>
          <strong>Fill</strong> — colour values, with token names if Variables are active. Raw hex
          if not.
        </li>
        <li>
          <strong>Typography</strong> — font family, weight, size, line height, letter spacing. Often
          copyable as a CSS snippet.
        </li>
        <li>
          <strong>Effects</strong> — box shadows and blurs displayed as CSS-ready values. Figma's
          "Copy as CSS" button in the right panel produces valid CSS you can paste directly.
        </li>
        <li>
          <strong>Border radius</strong> — per-corner values or uniform, shown numerically.
        </li>
      </ul>
      <p>
        The "Copy as CSS" button is in the right panel when a frame or component is selected. It
        outputs CSS for the selected layer — not always production-ready, but a good starting point
        and a fast way to verify values.
      </p>

      <hr className="section-divider" />

      <h2 id="focus-view">
        Focus View — The Cleanest Way to Inspect
        <a className="heading-anchor" href="#focus-view" aria-hidden="true">#</a>
      </h2>
      <p>
        When a file has many frames on a busy canvas, double-click a specific frame in Dev Mode. The
        rest of the canvas dims and the selected frame fills the viewport. This is focus view — a clean
        inspection state where you can read the design without visual noise from surrounding frames.
        Double-click the background or hit Escape to exit.
      </p>
      <p>
        Use this whenever you're implementing a specific screen. It cuts cognitive load significantly.
      </p>

      <hr className="section-divider" />

      <h2 id="annotations">
        Annotations — Look for Them, Ask for Them
        <a className="heading-anchor" href="#annotations" aria-hidden="true">#</a>
      </h2>
      <p>
        Designers can add annotations to frames in Figma — implementation notes attached directly to
        the design. These might document interaction behaviours, animation timing, conditional states,
        edge cases, or anything else that isn't obvious from the visual alone. In Dev Mode, annotations
        appear as numbered markers on the frame, with the note text in the right panel.
      </p>
      <p>
        Not all designers annotate consistently, and not all files will have them. If you're
        implementing a complex component — a multi-state form, an animated transition, a component with
        a lot of conditional logic — and there are no annotations, ask for them. A designer who's
        thought carefully about a component can usually write annotations in fifteen minutes. That
        fifteen minutes might save you an hour of guessing.
      </p>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://help.figma.com/hc/en-us/articles/15023124644247" target="_blank" rel="noopener noreferrer">
            <strong>Dev Mode guide</strong>
          </a>{' '}
          — full Figma Help Centre article on Dev Mode features and workflow.
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLXDU_eVOJTx7I9CMOHnTEzuxDwoq0Cjqt" target="_blank" rel="noopener noreferrer">
            <strong>Dev Mode video playlist</strong>
          </a>{' '}
          — official video series walking through Dev Mode end-to-end.
        </li>
      </ul>
    </PageLayout>
  )
}
