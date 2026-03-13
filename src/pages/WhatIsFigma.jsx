import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'cloud-native',      label: 'Cloud-Native by Design',  level: 2 },
  { id: 'roles-pricing',     label: 'Roles & Pricing',         level: 2 },
  { id: 'three-surfaces',    label: 'Three Surfaces',          level: 2 },
]

export default function WhatIsFigma() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">01 — Foundation</div>
        <h1>What Is Figma & Why Devs Need It</h1>
        <p className="page-subtitle">
          The mental models transfer almost directly. Here's what's actually new.
        </p>
      </div>

      <p>
        Figma isn't clip-art software — it has a proper layer tree, a component model, and a DOM-like
        hierarchy. If you've built UIs, you already understand 80% of how it's organised. The mental
        models transfer almost directly. What's new is the vocabulary and the workflow.
      </p>

      <hr className="section-divider" />

      <h2 id="cloud-native">
        Cloud-Native by Design
        <a className="heading-anchor" href="#cloud-native" aria-hidden="true">#</a>
      </h2>
      <p>
        Most developers arrive at Figma because a designer sent them a link. That's deliberate — Figma
        is entirely cloud-native. There are no Sketch files, no exported PNGs, no "can you send me the
        latest version" emails. The file lives in the browser, always up to date, and you share it by
        copying a URL. Multiple people can be in the same file simultaneously, cursors visible, changes
        live.
      </p>
      <p>
        That collaboration model matters for how you work. When a designer hands you a link, you're
        looking at the actual working file — not an export, not a PDF. Changes the designer makes after
        sending you the link will already be there when you refresh. This cuts out an entire category
        of "stale design" problems, but it also means you need to know which role you've been given.
      </p>

      <hr className="section-divider" />

      <h2 id="roles-pricing">
        Pricing: Know Your Role Before You Touch Anything
        <a className="heading-anchor" href="#roles-pricing" aria-hidden="true">#</a>
      </h2>
      <p>
        Figma has two relevant roles for developers: <strong>Viewer</strong> and <strong>Editor</strong>.
        Editors pay. Viewers are free. The key difference isn't just cost — it's what you can do.
        Editors can move things, create frames, edit text. Viewers can inspect and comment. There's also
        Dev Mode, which gives viewers a purpose-built inspection interface (more on this in Section 4).
        If your organisation has a Figma plan, you can almost certainly get viewer access with Dev Mode
        at no extra cost. That's all you need.
      </p>

      <Callout type="warning">
        <p>
          Don't edit files you're not supposed to. Ask your designer for viewer/Dev Mode access. You get
          everything you need without accidentally moving things. Figma has no meaningful "undo someone
          else's change" workflow — if you accidentally drag a component two pixels to the left and save,
          the designer now has a problem they don't know exists. Viewer access removes this risk entirely.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2 id="three-surfaces">
        Three Surfaces — Only One Matters Right Now
        <a className="heading-anchor" href="#three-surfaces" aria-hidden="true">#</a>
      </h2>
      <p>
        Figma has three main products: <strong>Design</strong>, <strong>FigJam</strong>, and <strong>Slides</strong>.
        FigJam is a collaborative whiteboard for workshops and brainstorms. Slides is a presentation tool.
        Both are occasionally useful but irrelevant to design implementation. When someone sends you a
        Figma link to review designs, they're sending you into Figma Design. That's the only surface
        this guide covers.
      </p>
      <p>
        The rest of this guide is about Figma Design.
      </p>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://www.youtube.com/watch?v=hbN9RGcQFNU" target="_blank" rel="noopener noreferrer">
            <strong>Figma for Frontend Developers</strong>
          </a>{' '}
          — good overview of the mental model shift from a developer's perspective.
        </li>
        <li>
          <a href="https://www.figma.com/community/file/818692024554023456" target="_blank" rel="noopener noreferrer">
            <strong>Figma Basics community file</strong>
          </a>{' '}
          — an interactive tutorial you can duplicate and explore.
        </li>
      </ul>
    </PageLayout>
  )
}
