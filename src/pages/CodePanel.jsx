import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'
import GoDeeper from '../components/GoDeeper'

const resources = [
  { type: 'video', title: 'Drive Design System Adoption with Code Connect — Config 2024 / Figma', url: 'https://www.youtube.com/watch?v=RvFSyxAWriw', note: 'Straight from Figma engineers — explains Code Connect concept, CLI setup, and how it links your component library to Dev Mode.' },
  { type: 'article', title: 'What is Figma Code Connect and How to Use It — Supernova', url: 'https://www.supernova.io/blog/what-is-figma-code-connect-and-how-to-use-it', note: 'Practical CLI setup for React with clear explanation of when Code Connect beats raw code snippets.' },
]

const toc = [
  { id: 'where-to-find',    label: 'Where to Find It',         level: 2 },
  { id: 'what-css-tells',   label: 'What the CSS Tells You',   level: 2 },
  { id: 'what-css-gets',    label: 'What the CSS Gets Wrong',  level: 2 },
  { id: 'variables-hex',    label: 'Variables vs Raw Hex',     level: 2 },
  { id: 'code-connect',     label: 'Code Connect',             level: 2 },
  { id: 'exporting-assets', label: 'Exporting Assets',         level: 2 },
]

export default function CodePanel() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">06 — Code Panel</div>
        <h1>Reading & Using the Code Panel</h1>
        <p className="page-subtitle">
          The generated code is a specification, not a template. Read it to understand intent.
        </p>
      </div>

      <p>
        The code Figma generates is a specification, not a template. Read it to understand intent;
        don't copy-paste it into production.
      </p>
      <p>
        This distinction matters more than it sounds. Figma's Code panel is a translation layer —
        it's converting visual design decisions into something developer-shaped. The values are real.
        The structure is often wrong. Treat it like a knowledgeable colleague who explains what they
        want but has never actually written production CSS.
      </p>

      <hr className="section-divider" />

      <h2 id="where-to-find">
        Where to Find It
        <a className="heading-anchor" href="#where-to-find" aria-hidden="true">#</a>
      </h2>
      <p>
        Switch to Dev Mode (the <code>{'</>'}</code> icon in the toolbar, top right), then select any
        layer. The right panel will show a <strong>Code</strong> tab. At the top of that tab, you'll
        see a dropdown: CSS, iOS (SwiftUI), or Android (Kotlin). If you're building for web, stay on
        CSS.
      </p>
      <p>Select a layer, read what appears. Simple enough.</p>

      <hr className="section-divider" />

      <h2 id="what-css-tells">
        What the CSS Is Actually Telling You
        <a className="heading-anchor" href="#what-css-tells" aria-hidden="true">#</a>
      </h2>
      <p>
        The useful stuff: colour values, typography, spacing, and shadows. When a design has been
        built properly with Auto Layout, the padding and gap values in the CSS will be accurate —
        these map to real spacing decisions the designer made. A <code>padding: 12px 16px</code> in
        Figma's output means someone chose that deliberately. Trust it.
      </p>
      <p>
        Shadow values are faithful too. If you see{' '}
        <code>box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12)</code>, that's the actual shadow. Use it.
      </p>
      <p>
        Font properties — <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>,{' '}
        <code>line-height</code>, <code>letter-spacing</code> — are reliable. These are the designed
        typographic intentions, and they'll be correct.
      </p>

      <hr className="section-divider" />

      <h2 id="what-css-gets">
        What the CSS Gets Wrong
        <a className="heading-anchor" href="#what-css-gets" aria-hidden="true">#</a>
      </h2>
      <p>Two things to watch for.</p>
      <p>
        <strong>Gap mapping.</strong> Figma's CSS output often renders gaps between Auto Layout
        children as margins on individual elements rather than <code>gap</code> on the parent. You'll
        see <code>margin-bottom: 8px</code> on each child when the designer clearly intended{' '}
        <code>gap: 8px</code> on the flex container. Read it, then rewrite it properly.
      </p>
      <p>
        <strong>Absolute positioning.</strong> If a layer isn't inside an Auto Layout frame, Figma
        outputs <code>position: absolute</code> with pixel coordinates. This is almost never what you
        want. It's Figma saying "I don't know how this element relates to its siblings — here are the
        raw numbers." Use those numbers to understand the intended spacing, then implement it with real
        layout.
      </p>
      <p>
        The rule: when the output looks like something you wouldn't write, understand <em>why</em>{' '}
        it's saying what it's saying, then write it right.
      </p>

      <hr className="section-divider" />

      <h2 id="variables-hex">
        Variables vs Raw Hex
        <a className="heading-anchor" href="#variables-hex" aria-hidden="true">#</a>
      </h2>
      <p>
        This one's important. When a file has been set up with Design Tokens or Figma Variables, the
        Code panel will show the token name rather than a raw value — something like{' '}
        <code>--color-brand-primary</code> or <code>color/brand/primary</code> instead of{' '}
        <code>#2563EB</code>.
      </p>
      <p>
        When you see a token name in the output, use that token in your code. Don't reach for the hex.
        The whole point of tokens is consistency: if the designer updates the brand colour, you want
        that change to propagate correctly through your implementation too.
      </p>
      <p>
        If the Code panel is showing raw hex values everywhere and your codebase already has a token
        system, that's a conversation to have with your designer. Either the file needs Variables set
        up, or you'll need to manually map values to your existing tokens.
      </p>

      <hr className="section-divider" />

      <h2 id="code-connect">
        Code Connect: The Gold Standard
        <a className="heading-anchor" href="#code-connect" aria-hidden="true">#</a>
      </h2>
      <p>
        If your team has configured <strong>Figma Code Connect</strong>, the Code panel stops showing
        generic CSS and starts showing your actual component calls.
      </p>
      <p>Instead of:</p>
      <pre className="code-block"><code>{`display: flex;
align-items: center;
padding: 8px 16px;
background: #2563EB;`}</code></pre>
      <p>You get:</p>
      <pre className="code-block"><code>{'<Button variant="primary" size="md">Label</Button>'}</code></pre>
      <p>
        That's the component you actually have in your codebase, with the props that match the design
        state. It's the closest thing to fully automated handoff that currently exists.
      </p>
      <p>
        Setting up Code Connect is a one-time investment that pays off on every future component. If
        your team builds components regularly, it's worth prioritising. Your designer doesn't need to
        configure it — it lives in your codebase.
      </p>
      <p>
        <a href="https://www.figma.com/developers/code-connect" target="_blank" rel="noopener noreferrer">
          → figma.com/developers/code-connect
        </a>
      </p>

      <hr className="section-divider" />

      <h2 id="exporting-assets">
        Exporting Assets
        <a className="heading-anchor" href="#exporting-assets" aria-hidden="true">#</a>
      </h2>
      <p>
        Select any layer, then look for the <strong>Export</strong> section at the bottom of the right
        panel (Dev Mode makes this more prominent). A few things to know:
      </p>
      <p>
        <strong>Format:</strong> Use PNG for photographs and raster images. Use SVG for icons,
        illustrations, and anything that needs to scale — SVGs from Figma are generally clean and
        production-safe. PDF is for print.
      </p>
      <p>
        <strong>Scale:</strong> Export icons at 1x, 2x, and 3x if you need raster fallbacks. For
        SVGs, one export is enough — they scale infinitely.
      </p>
      <p>
        <strong>Naming:</strong> Whatever you name the layer in Figma becomes the filename on export.
        If the layer is called <code>icon-chevron-right</code>, that's what you'll get. This is why
        named layers matter — unnamed layers export as <code>Group 47.svg</code> and that's everyone's
        problem.
      </p>

      <Callout type="tip">
        <p>
          <strong>Using Cursor, Claude Code, or Windsurf?</strong> Skip the manual copy-paste entirely.
          The Figma MCP server gives your AI coding agent direct read access to the design file — it
          reads component names, variable values, Auto Layout rules, and tokens natively. No
          screenshots, no copy-pasted CSS. See <strong>Section 7: AI-Powered Workflows</strong> for
          setup and usage.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://www.figma.com/developers/code-connect" target="_blank" rel="noopener noreferrer">
            <strong>Code Connect</strong>
          </a>{' '}
          — set up component mapping between Figma and your codebase.
        </li>
        <li>
          <a href="https://www.figma.com/developers/api" target="_blank" rel="noopener noreferrer">
            <strong>Figma Developer API</strong>
          </a>{' '}
          — programmatic access to file data, useful for tooling and automation.
        </li>
      </ul>
      <GoDeeper resources={resources} />
    </PageLayout>
  )
}
