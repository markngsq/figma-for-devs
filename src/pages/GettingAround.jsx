import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'three-traps',      label: 'The Three Traps',         level: 2 },
  { id: 'shortcuts',        label: 'Essential Shortcuts',     level: 2 },
  { id: 'pages-frames',     label: 'Pages, Frames & Groups',  level: 2 },
]

export default function GettingAround() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">02 — Navigation</div>
        <h1>Getting Around Figma</h1>
        <p className="page-subtitle">
          Three traps, eight shortcuts, and the frames-vs-groups distinction you need to know.
        </p>
      </div>

      <p>
        Three things trip developers up in their first hour in Figma. Here's how to avoid them.
      </p>

      <hr className="section-divider" />

      <h2 id="three-traps">
        The Three Traps
        <a className="heading-anchor" href="#three-traps" aria-hidden="true">#</a>
      </h2>

      <h3>Trap 1: Zoomed Out and Lost</h3>
      <p>
        The Figma canvas is infinite. There's no edge, no boundary. Designers frequently work across
        multiple pages and have frames scattered at different zoom levels. If you open a file and see
        a grey void, or a tiny cluster of shapes in the distance, you've probably hit scroll-drift —
        accidental zooming or panning that's left you somewhere empty.
      </p>
      <p>
        Hit <strong>Shift+1</strong> to zoom-to-fit the entire page. Everything snaps back into view
        immediately. If you want to fit just one selected frame, <strong>Shift+2</strong> does that.
        Keep these shortcuts in muscle memory from day one — they'll save you more confusion than
        you'd expect.
      </p>

      <h3>Trap 2: The Canvas Lies</h3>
      <p>
        What you see on the canvas is not necessarily everything in the file. Layers can be hidden
        with a visibility toggle (the eye icon in the layers panel). Elements can live off-canvas,
        outside the frame bounds but still technically present in the layer tree. A designer working
        fast will sometimes leave stray objects, hidden states, or in-progress components floating
        somewhere you can't see.
      </p>
      <p>
        When you're inspecting a component and something doesn't make sense — an unexpected layer, a
        weird bounding box, a value that doesn't match what you're seeing — open the layers panel on
        the left and look at what's actually there. It's the equivalent of inspecting the DOM. Trust
        the panel over the visual.
      </p>

      <h3>Trap 3: Can't Find a Feature</h3>
      <p>
        Figma's right-click menus and toolbar options change based on context — what's selected, what
        mode you're in, what type of object you've clicked. If you're looking for something and can't
        find it, hit <strong>Cmd+/</strong> (Mac) or <strong>Ctrl+/</strong> (Windows). This opens a
        universal search across all Figma actions, settings, and help articles. It's your escape hatch.
      </p>

      <hr className="section-divider" />

      <h2 id="shortcuts">
        Essential Shortcuts — Learn These, Skip the Rest
        <a className="heading-anchor" href="#shortcuts" aria-hidden="true">#</a>
      </h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Mac</th>
            <th>Windows</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Zoom to fit page</td><td>Shift+1</td><td>Shift+1</td></tr>
          <tr><td>Zoom to selection</td><td>Shift+2</td><td>Shift+2</td></tr>
          <tr><td>Zoom in / out</td><td>Cmd++ / Cmd+–</td><td>Ctrl++ / Ctrl+–</td></tr>
          <tr><td>Hand tool (pan)</td><td>Space+drag</td><td>Space+drag</td></tr>
          <tr><td>Command palette</td><td>Cmd+/</td><td>Ctrl+/</td></tr>
          <tr><td>Select all</td><td>Cmd+A</td><td>Ctrl+A</td></tr>
          <tr><td>Toggle Dev Mode</td><td>Cmd+Opt+D</td><td>Ctrl+Alt+D</td></tr>
          <tr><td>Show/hide layers panel</td><td>Cmd+\</td><td>Ctrl+\</td></tr>
        </tbody>
      </table>

      <p>
        Don't try to memorise Figma's full shortcut list on day one. These eight are enough to stay
        unblocked.
      </p>

      <hr className="section-divider" />

      <h2 id="pages-frames">
        Pages vs Frames vs Groups — and Why It Matters
        <a className="heading-anchor" href="#pages-frames" aria-hidden="true">#</a>
      </h2>
      <p>
        Figma files are organised into <strong>pages</strong> (tabs at the top of the layers panel —
        think of them like separate canvases). Inside a page, the main structural units are{' '}
        <strong>frames</strong> and <strong>groups</strong>.
      </p>
      <p>
        A <strong>frame</strong> is the thing that matters. It's equivalent to a <code>{'<div>'}</code>{' '}
        with a fixed or auto-calculated size. Frames clip their contents, support Auto Layout
        (Figma's flexbox — covered in Section 3), have padding properties, and show up in the
        prototype flow. Most of the time when you're inspecting a design, you're looking inside frames.
      </p>
      <p>
        A <strong>group</strong> is a loose collection of layers bundled together for convenience.
        Groups don't have independent layout rules — they just wrap their children. This makes them
        awkward: resizing a group rescales everything inside it rather than reflowing content. They're
        useful for organising flat assets but terrible for structured layouts.
      </p>
      <p>
        The practical implication: if you're clicking around a component and can't figure out why
        resizing behaves unexpectedly, or why properties look wrong, check whether you're inside a
        group. If you are, the designer probably should have used a frame. You can fix this yourself
        in editor mode — select the group, right-click, Ungroup, then Frame Selection. But in viewer
        mode, just note it as a design hygiene issue and raise it.
      </p>

      <Callout type="tip">
        If you're fighting a group, you want a frame.
      </Callout>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://help.figma.com/hc/en-us/articles/360041064173" target="_blank" rel="noopener noreferrer">
            <strong>Full Figma keyboard shortcuts reference</strong>
          </a>{' '}
          — the complete list when you're ready for it.
        </li>
      </ul>
    </PageLayout>
  )
}
