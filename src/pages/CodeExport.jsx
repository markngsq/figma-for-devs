import TableOfContents from '../components/TableOfContents'
import Callout from '../components/Callout'

const toc = [
  { id: 'code-panel',    label: 'The Code Panel',           level: 2 },
  { id: 'css-output',    label: 'How to Use the CSS Output', level: 2 },
  { id: 'hex-values',    label: 'Copying Hex Values',        level: 2 },
  { id: 'assets',        label: 'Exporting Assets',          level: 2 },
  { id: 'tokens',        label: 'Design Tokens and Variables', level: 2 },
]

export default function CodeExport() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge">06 — Code Export</div>
        <h1>Code Export & Working with Code</h1>
        <p className="page-subtitle">
          The code panel, copying values, exporting assets, and how design tokens bridge
          Figma and your codebase.
        </p>
      </div>

      <TableOfContents items={toc} />

      <h2 id="code-panel">
        The Code Panel
        <a className="heading-anchor" href="#code-panel" aria-hidden="true">#</a>
      </h2>

      <p>
        In Dev Mode, the right panel has a <strong>Code</strong> tab. Select any element and you'll
        see auto-generated code in:
      </p>

      <ul>
        <li><strong>CSS</strong> — properties like <code>background</code>, <code>border-radius</code>, <code>font-size</code>, <code>box-shadow</code></li>
        <li><strong>iOS (Swift/SwiftUI)</strong> — colour and text style references</li>
        <li><strong>Android (XML/Compose)</strong> — similarly</li>
      </ul>

      <p>Switch between platforms using the dropdown at the top of the Code panel.</p>

      <hr className="section-divider" />

      <h2 id="css-output">
        How to Use the CSS Output
        <a className="heading-anchor" href="#css-output" aria-hidden="true">#</a>
      </h2>

      <p>The CSS output is useful as a reference, not necessarily copy-paste ready. It gives you:</p>
      <ul>
        <li>Exact colour values (with opacity)</li>
        <li>Font properties</li>
        <li>Shadow and border values</li>
        <li>Auto Layout values as flexbox properties</li>
      </ul>

      <p>What it <strong>doesn't</strong> give you:</p>
      <ul>
        <li>Semantic HTML structure</li>
        <li>State logic</li>
        <li>Accessibility attributes</li>
        <li>Responsive behaviour beyond the frame's fixed dimensions</li>
      </ul>

      <Callout type="tip">
        <p>
          Treat the CSS panel as a <strong>spec, not a template</strong>. Read it, understand the
          intent, then implement in your own structure.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="hex-values">
        Copying Hex Values
        <a className="heading-anchor" href="#hex-values" aria-hidden="true">#</a>
      </h2>

      <p>
        Click any element. In Dev Mode, fill colours appear as hex values in the right panel.
        Click the hex value to copy it.
      </p>

      <p>
        If the designer used colour Variables, you'll also see the variable name (e.g.{' '}
        <code>--color-primary</code>). That's the token name you should reference in your code,
        not hardcode the hex.
      </p>

      <hr className="section-divider" />

      <h2 id="assets">
        Exporting Assets
        <a className="heading-anchor" href="#assets" aria-hidden="true">#</a>
      </h2>

      <p>To export an image, icon, or graphic:</p>
      <ol>
        <li>Select the layer</li>
        <li>In the Design panel (not Dev Mode), scroll to the bottom — there's an Export section</li>
        <li>Click <code>+</code> to add an export setting</li>
        <li>
          Choose format: <strong>PNG</strong> (photos, complex graphics), <strong>SVG</strong> (icons,
          illustrations, anything that needs to scale), <strong>PDF</strong> (print)
        </li>
        <li>
          Set scale: 1x (base), 2x (retina), 3x (high DPI). For web, 1x + 2x is usually enough.
        </li>
        <li>Click Export</li>
      </ol>

      <p>
        For multiple assets at once: select multiple layers, or use the Export panel at the bottom
        of the left sidebar to see all marked-for-export assets in the file.
      </p>

      <Callout type="warning">
        <p>
          <strong>Clean layer naming matters here.</strong> Figma names exported files after the
          layer. A layer named <code>frame 243</code> exports as <code>frame 243.png</code>. A layer
          named <code>icon/arrow-right</code> exports cleanly as <code>icon-arrow-right.png</code>.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="tokens">
        Design Tokens and Variables
        <a className="heading-anchor" href="#tokens" aria-hidden="true">#</a>
      </h2>

      <p>
        Figma Variables map directly to design tokens. If a designer has set up Variables properly:
      </p>
      <ul>
        <li>You'll see token names in the Dev Mode inspect panel instead of raw hex values</li>
        <li>
          The variable names (e.g. <code>color/primary/500</code>) should match your codebase's
          token names
        </li>
        <li>
          Some teams use tools like{' '}
          <a href="https://tokens.studio" target="_blank" rel="noopener noreferrer">Token Studio</a>{' '}
          (a Figma plugin) to sync Variables to a JSON tokens file that feeds into the codebase
        </li>
      </ul>

      <Callout type="success">
        <p>
          This is the gold standard for design-to-code handoff. In practice, many teams aren't
          there yet — but it's worth knowing what good looks like. If you're building a design
          system, push for Variables from day one.
        </p>
      </Callout>
    </>
  )
}
