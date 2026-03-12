import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'panels',         label: 'The Three Panels',                    level: 2 },
  { id: 'pages-frames',   label: 'Pages vs Frames vs Groups',           level: 2 },
  { id: 'toolbar',        label: 'The Toolbar',                         level: 2 },
  { id: 'shortcuts',      label: 'Keyboard Shortcuts That Actually Matter', level: 2 },
  { id: 'navigating',     label: 'Navigating Large Files',              level: 2 },
]

export default function GettingAround() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">02 — Navigation</div>
        <h1>Getting Around Figma Design</h1>
        <p className="page-subtitle">
          The layout, the panels, keyboard shortcuts, and how to stay oriented in big files.
        </p>
      </div>

      <h2 id="panels">
        The Three Panels
        <a className="heading-anchor" href="#panels" aria-hidden="true">#</a>
      </h2>

      <h3>Left panel — Layers and Assets</h3>
      <p>
        Your file tree. The <strong>Layers</strong> tab shows every element on the current page,
        nested like a folder structure. The <strong>Assets</strong> tab shows components, styles,
        and local variables.
      </p>

      <h3>Centre — The Canvas</h3>
      <p>
        Where everything lives. Infinite in every direction. Navigate by scrolling, pinching
        (trackpad), or zooming with shortcuts.
      </p>

      <h3>Right panel — Design and Inspect</h3>
      <p>
        Context-sensitive. When something is selected, shows that element's properties: position,
        dimensions, fill, stroke, effects. Two tabs: <strong>Design</strong> (for editing) and
        <strong> Inspect</strong> (for reading values).
      </p>

      <hr className="section-divider" />

      <h2 id="pages-frames">
        Pages vs Frames vs Groups
        <a className="heading-anchor" href="#pages-frames" aria-hidden="true">#</a>
      </h2>

      <p>
        <strong>Pages</strong> — Like tabs in a file. Use them to separate stages of work or
        different sections of a product.
      </p>
      <p>
        <strong>Frames</strong> — The containers your designs live in. Like an artboard with defined
        dimensions. Supports Auto Layout, constraints, clip content. Most things you design should be
        inside a frame.
      </p>
      <p>
        <strong>Groups</strong> — Lightweight bundling of layers. Use when you need to move things
        together but don't need frame behaviour. If you're fighting a group, you probably want a frame.
      </p>

      <Callout type="tip">
        <p>Default to <strong>Frames</strong> over Groups whenever layout matters.</p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="toolbar">
        The Toolbar
        <a className="heading-anchor" href="#toolbar" aria-hidden="true">#</a>
      </h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>Tool</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['V', 'Move',       'Select and move elements. Your default.'],
              ['K', 'Scale',      'Scale proportionally (affects content too).'],
              ['F', 'Frame',      'Draw a new frame.'],
              ['R', 'Rectangle',  'Draw a rectangle.'],
              ['O', 'Ellipse',    'Draw a circle or ellipse.'],
              ['L', 'Line',       'Draw a line.'],
              ['P', 'Pen',        'Vector pen tool for custom shapes.'],
              ['T', 'Text',       'Create a text layer.'],
              ['H', 'Hand',       'Pan without selecting (Space does this temporarily).'],
              ['I', 'Eyedropper', 'Pick a colour from anywhere on screen.'],
              ['C', 'Comment',    'Leave a comment on the canvas.'],
            ].map(([key, tool, desc]) => (
              <tr key={key}>
                <td><kbd>{key}</kbd></td>
                <td><strong>{tool}</strong></td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="section-divider" />

      <h2 id="shortcuts">
        Keyboard Shortcuts That Actually Matter
        <a className="heading-anchor" href="#shortcuts" aria-hidden="true">#</a>
      </h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cmd + Z',           'Undo'],
              ['Cmd + D',           'Duplicate in place'],
              ['Cmd + G',           'Group selected layers'],
              ['Cmd + Opt + G',     'Frame selection'],
              ['Cmd + Shift + G',   'Ungroup'],
              ['Cmd + [ / ]',       'Move layer backward/forward'],
              ['Cmd + Shift + [ / ]', 'Send to back / bring to front'],
              ['Cmd + Opt + K',     'Create component'],
              ['Opt + drag',        'Copy while dragging'],
              ['Opt + hover',       'Show spacing between elements'],
              ['Cmd + /',           'Quick actions (search for any command)'],
              ['Cmd + P',           'Search files, pages, layers'],
              ['Cmd + F',           'Search layers by name, type, or property'],
              ['Space + drag',      'Pan the canvas'],
              ['Cmd + 0',           'Zoom to 100%'],
              ['Shift + 1',         'Fit page to screen'],
              ['Shift + 2',         'Fit selection to screen'],
              ['Shift + R',         'Toggle rulers'],
            ].map(([shortcut, desc]) => (
              <tr key={shortcut}>
                <td>
                  {shortcut.split(' + ').map((part, i, arr) => (
                    <span key={i}>
                      <kbd>{part}</kbd>
                      {i < arr.length - 1 && <span style={{ color: 'var(--text-faint)', margin: '0 2px' }}>+</span>}
                    </span>
                  ))}
                </td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="section-divider" />

      <h2 id="navigating">
        Navigating Large Files
        <a className="heading-anchor" href="#navigating" aria-hidden="true">#</a>
      </h2>

      <ul>
        <li>Click a layer in the Layers panel to select it; double-click to zoom to it</li>
        <li><kbd>Cmd</kbd> + <kbd>F</kbd> to search layers by name, type, or property</li>
        <li>Mini map in the bottom-right shows your position in the full file</li>
        <li>Pages should tell you where different sections live</li>
      </ul>

      <p>With navigation sorted, the concepts below are what make Figma actually readable.</p>
    </PageLayout>
  )
}
