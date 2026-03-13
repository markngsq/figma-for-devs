import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'auto-layout',      label: 'Auto Layout',                     level: 2 },
  { id: 'components',       label: 'Components',                      level: 2 },
  { id: 'component-props',  label: 'Component Properties',            level: 2 },
  { id: 'styles-variables', label: 'Styles & Variables',              level: 2 },
  { id: 'constraints',      label: 'Constraints',                     level: 2 },
]

export default function CoreConcepts() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">03 — Concepts</div>
        <h1>Core Design Concepts</h1>
        <p className="page-subtitle">
          Auto Layout is CSS flexbox. Components are React components. Here's the full translation.
        </p>
      </div>

      <hr className="section-divider" />

      <h2 id="auto-layout">
        Auto Layout Is CSS Flexbox
        <a className="heading-anchor" href="#auto-layout" aria-hidden="true">#</a>
      </h2>
      <p>
        That's not an approximation — it's a near-exact mapping. If you understand flexbox, you
        understand Auto Layout. The vocabulary is different; the behaviour is the same.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>CSS</th>
            <th>Figma Auto Layout</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>flex-direction: row</code></td><td>Horizontal direction</td></tr>
          <tr><td><code>flex-direction: column</code></td><td>Vertical direction</td></tr>
          <tr><td><code>gap: 8px</code></td><td>Gap: 8</td></tr>
          <tr><td><code>padding: 16px 24px</code></td><td>Padding top/bottom: 16, left/right: 24</td></tr>
          <tr><td><code>flex-grow: 1</code> (fill parent)</td><td>Fill container</td></tr>
          <tr><td><code>width: fit-content</code></td><td>Hug contents</td></tr>
          <tr><td><code>flex-wrap: wrap</code></td><td>Wrap: enabled</td></tr>
        </tbody>
      </table>

      <p>
        Figma also supports wrap mode for Auto Layout — elements wrap to the next line when they run
        out of space, exactly like <code>flex-wrap: wrap</code>. If you see a component that wraps,
        it's using this.
      </p>
      <p>
        The most important real-world pattern is nested Auto Layout. A card component might have a
        vertical Auto Layout frame containing several horizontal Auto Layout rows — header, body,
        footer. Each row is its own frame with its own gap and alignment. This mirrors how you'd
        actually write the markup: a vertical flex container wrapping horizontal flex rows. When you
        see a well-structured Figma file, you should be able to read the layer tree and derive the
        HTML structure almost directly.
      </p>

      <Callout type="warning">
        Files without Auto Layout are a nightmare to implement. Spacing is arbitrary, nothing scales,
        and every measurement you take is a best-guess pixel value rather than a semantic token. If you
        receive a file like this — components with fixed widths, manually placed elements, no layout
        rules — ask the designer to rebuild the components with Auto Layout before you start
        implementing. That conversation might take an hour of their time. It will save you days of
        yours. This is not a nitpick; it's a professional standard.
      </Callout>

      <hr className="section-divider" />

      <h2 id="components">
        Components Are React Components
        <a className="heading-anchor" href="#components" aria-hidden="true">#</a>
      </h2>
      <p>
        The parallel is exact. Figma components work on the same publish-and-consume model as a React
        component library.
      </p>
      <p>
        The <strong>master component</strong> (now often called the "main component" in Figma's UI) is
        the definition — the source of truth. It lives somewhere in the file, often on a dedicated
        "Components" page hidden from the main design pages. <strong>Instances</strong> are the used
        copies. When you see a button on a screen design, you're looking at an instance. The master
        component is elsewhere.
      </p>
      <p>
        This matters because: changes to the master propagate to all instances. If a designer updates
        the corner radius on the master Button, every button in every frame updates. Exactly like
        changing your <code>{'<Button>'}</code> component — all consumers update.
      </p>
      <p>
        <strong>Instance overrides are props.</strong> When a designer selects a button instance and
        changes the label text or swaps the icon, they're setting instance-level overrides. The
        instance still tracks the master for everything else — structure, colours, spacing — but those
        specific properties are locally overridden. In React terms: they've passed different props.
      </p>
      <p>
        <strong>Variants are prop combinations.</strong> A button component might have variants for
        type (<code>primary</code>, <code>secondary</code>, <code>ghost</code>) crossed with state
        (<code>default</code>, <code>hover</code>, <code>disabled</code>, <code>loading</code>). Figma
        groups these into a variant set — you see them as a grid of component options in the master.
        When a designer hands off a component with variants, they're documenting the full prop matrix
        you need to implement. Read the variant names carefully — they usually map directly to the prop
        names you should use in code.
      </p>

      <Callout type="warning">
        <strong>Right-click → Detach Instance</strong> breaks the link between an instance and its
        master component. The instance becomes a flat copy — it no longer tracks master updates,
        variants stop working, and overrides become permanent. Don't do this unless you have a very
        specific reason. In viewer/Dev Mode you can't detach anything, so this is only relevant if
        you've been given editor access. Treat Detach as a one-way door.
      </Callout>

      <hr className="section-divider" />

      <h2 id="component-props">
        Component Properties — The Props Panel
        <a className="heading-anchor" href="#component-props" aria-hidden="true">#</a>
      </h2>
      <p>
        When you select an instance in Dev Mode (or Design Mode as an editor), the right panel shows{' '}
        <strong>Component Properties</strong> — named inputs the designer has exposed on that
        component. These might be text values (the button label), boolean toggles (show/hide an icon),
        or instance swaps (swap one icon for another).
      </p>
      <p>
        These map directly to the props you'll implement. If a component property is called{' '}
        <code>label</code>, your prop should probably be called <code>label</code>. If it's{' '}
        <code>isDestructive: boolean</code>, that's your API. When inspecting a component in Dev Mode,
        treat the properties panel as the intended prop interface.
      </p>

      <hr className="section-divider" />

      <h2 id="styles-variables">
        Styles & Variables — CSS Variables and Design Tokens
        <a className="heading-anchor" href="#styles-variables" aria-hidden="true">#</a>
      </h2>
      <p>
        Two systems exist in Figma for defining reusable values, and they're not the same thing.
      </p>
      <p>
        <strong>Styles</strong> are the older system. A colour style is a named fixed value —{' '}
        <code>Brand/Primary</code> maps to <code>#3B5BDB</code>. Same for text styles (font-size,
        weight, line-height bundled together) and effect styles (shadows, blurs). Styles are fine,
        but they're static. No dark mode, no theming, no modes of any kind.
      </p>
      <p>
        <strong>Variables</strong> are the modern system and the one that matters for serious design
        systems. A variable is a named value that can differ across modes. <code>color/background</code>{' '}
        might be <code>#FFFFFF</code> in light mode and <code>#1A1A2E</code> in dark mode. This is
        exactly how CSS custom properties and design tokens work — and when implemented properly, the
        variable names in Figma should match the token names in your codebase.
      </p>
      <p>
        How to tell which system a file is using: open Dev Mode, click on a coloured element, look at
        the fill value in the right panel. If you see a token name like{' '}
        <code>color/background/primary</code>, it's using Variables. If you see a raw hex like{' '}
        <code>#3B5BDB</code>, it's using Styles — or worse, it's a hardcoded value with no system at
        all.
      </p>
      <p>
        Why it matters for code: if the designer's Variables are named{' '}
        <code>color/button/primary/default</code> and your CSS tokens are named{' '}
        <code>--color-button-primary-default</code>, the handoff is clean. You're reading token names,
        not guessing at colours. If the file has no token names, you're translating design decisions
        into implementation decisions — which is extra work you shouldn't have to do.
      </p>

      <hr className="section-divider" />

      <h2 id="constraints">
        Constraints — Brief but Worth Knowing
        <a className="heading-anchor" href="#constraints" aria-hidden="true">#</a>
      </h2>
      <p>
        Constraints define how a layer behaves when its parent frame is resized. A layer constrained
        to the right stays flush to the right edge as the frame grows. A layer constrained to centre
        stays centred. It's CSS positioning — <code>position: absolute</code>, <code>right: 0</code>,{' '}
        <code>margin: auto</code>.
      </p>
      <p>
        You'll mostly encounter constraints in older files or in components that genuinely need fixed
        positioning: a close button always in the top-right corner of a modal, a badge pinned to a
        specific corner of an avatar. In those cases, the constraint tells you what the CSS intent is.
      </p>
      <p>
        If a file uses Auto Layout throughout — which well-built files do — you'll rarely need to think
        about constraints. Auto Layout handles spacing and resizing. Constraints are the fallback for
        cases where layout context doesn't apply.
      </p>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://www.figma.com/community/file/1127864650040224142" target="_blank" rel="noopener noreferrer">
            <strong>Auto Layout = display:flex community file</strong>
          </a>{' '}
          — interactive reference for the CSS/Figma mapping.
        </li>
        <li>
          <a href="https://www.figma.com/blog/announcing-variables/" target="_blank" rel="noopener noreferrer">
            <strong>Figma Variables explainer</strong>
          </a>{' '}
          — the official announcement post, good conceptual overview.
        </li>
      </ul>
    </PageLayout>
  )
}
