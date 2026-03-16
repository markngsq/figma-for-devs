import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'
import GoDeeper from '../components/GoDeeper'

const resources = [
  { type: 'video', title: 'Design to Developer Handoff in Figma — YouTube (Aug 2025)', url: 'https://www.youtube.com/watch?v=ALkqhXv0GPk', note: 'Covers accessibility annotations, reading order, and what makes a handoff engineers actually use.' },
  { type: 'article', title: 'Guide to Developer Handoff — Figma Best Practices', url: 'https://www.figma.com/best-practices/guide-to-developer-handoff/', note: "Figma's canonical reference — covers readiness signals, component specs, annotations." },
]

const toc = [
  { id: 'good-file',         label: 'What a Good File Looks Like', level: 2 },
  { id: 'mess-strategies',   label: 'When the File Is a Mess',     level: 2 },
  { id: 'questions-to-ask',  label: 'Questions to Actually Ask',   level: 2 },
]

export default function CleanHandoff() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">04 — Handoff</div>
        <h1>Clean Handoff</h1>
        <p className="page-subtitle">
          What to check when you receive a file — and what to ask before you start building.
        </p>
      </div>

      <p>
        This section isn't about how designers should structure files. It's about what to do when you
        receive one — good or bad.
      </p>
      <p>
        You don't control what lands in your inbox. Sometimes it's a beautifully organised file with
        named layers, a dedicated handoff page, and annotated edge cases. Sometimes it's forty artboards
        named "Frame 1" through "Frame 40" with floating elements and hardcoded colours. Both happen.
        Both require a strategy.
      </p>

      <hr className="section-divider" />

      <h2 id="good-file">
        What a Good File Looks Like
        <a className="heading-anchor" href="#good-file" aria-hidden="true">#</a>
      </h2>
      <p>
        Worth knowing so you can recognise it when you have it, and ask for it when you don't.
      </p>
      <p>
        A well-structured handoff file has named layers (actual names, not "Group 12"), everything
        inside frames, and Auto Layout used consistently throughout. Colours come from Variables, text
        uses Text Styles. There's usually a dedicated Handoff page containing the complete set of
        component states, edge cases, annotations, and responsive variants. Frames that are ready to
        implement are marked <strong>Ready for Development</strong> — in Dev Mode these appear with a
        green indicator.
      </p>
      <p>
        If all of this is present: you're in good shape. Start with the Handoff page, work through the
        marked frames, use the Code panel and inspect mode to pull values.
      </p>

      <hr className="section-divider" />

      <h2 id="mess-strategies">
        When the File Is a Mess
        <a className="heading-anchor" href="#mess-strategies" aria-hidden="true">#</a>
      </h2>
      <p>This is the section that will actually save you time.</p>

      <p>
        <strong>Cmd+F to search layers.</strong> When the layer panel is a wall of unnamed groups,
        don't try to navigate it manually. Hit Cmd+F and search by element type or content. You're
        looking for the element on canvas — click it, then use the breadcrumb at the top of the screen
        to understand its context in the layer hierarchy.
      </p>

      <p>
        <strong>Click the component name in the breadcrumb.</strong> When you select a component
        instance and see its name in the breadcrumb trail at the top of the canvas, you can click that
        name to jump directly to the master component in the file. This is how you find the canonical
        version of something without hunting through pages manually.
      </p>

      <p>
        <strong>Assets panel (Opt+2) lets you search components by name.</strong> Even in disorganised
        files, if the designer used components, they'll appear here. Search by component name, click to
        locate instances. Faster than navigating the layer panel.
      </p>

      <p>
        <strong>Check the Variants panel — most devs skip this and regret it.</strong> When you select
        a component instance, look at the right panel. If there's a <strong>Variants</strong> section,
        click through it. This shows you every designed state for that component: hover, focus,
        disabled, loading, error, empty. Designers build all of these states in Figma as component
        variants. Developers frequently implement only the default state because they didn't know the
        others existed. Don't be that developer.
      </p>

      <p>
        <strong>If spacing looks arbitrary and there's no Auto Layout: stop.</strong> You can eyeball
        spacing from a static design, but you'll be guessing at intent, and your guesses will need
        revisiting every time the design changes. Either ask for the component to be rebuilt with Auto
        Layout, or interpret the values in the context of the project's overall spacing system —
        usually a 4px or 8px base grid. Don't invent numbers.
      </p>

      <hr className="section-divider" />

      <h2 id="questions-to-ask">
        Questions to Actually Ask
        <a className="heading-anchor" href="#questions-to-ask" aria-hidden="true">#</a>
      </h2>
      <p>
        When you receive a file and something feels off, these are the questions worth raising before
        you start building.
      </p>

      <p>
        <em>"Are colours using Variables or hardcoded hex?"</em> — If hardcoded, you'll need to
        manually map to your token system, or ask for a Variables pass. Better to know upfront.
      </p>

      <p>
        <em>"Do components have all states designed?"</em> — Specifically: hover, focus, disabled,
        loading, error, and empty states. Missing states aren't always obvious from the main flow. If
        they're missing, you need to either design them yourself (which means making product decisions
        you might not be qualified to make) or surface the gap now.
      </p>

      <p>
        <em>"Is there a mobile/responsive variant?"</em> — Responsive layouts aren't automatic in
        Figma. If no mobile designs exist, ask whether they're needed or whether you're expected to
        interpret.
      </p>

      <p>
        <em>"Which frames are marked Ready to implement?"</em> — This stops you building things that
        are still in flux. If nothing is marked, ask which frames are signed off and ready to go.
      </p>

      <p>
        These aren't adversarial questions. They're professional ones. A designer who knows their craft
        will appreciate them. One who doesn't will at least understand what's expected.
      </p>

      <Callout type="warning">
        <p>
          <strong>The Red Line</strong>
        </p>
        <p>
          A file with no layer names, no components, no styles, and loose floating elements is a signal.
          It doesn't mean the designer is bad at their job — it might mean they were given two hours to
          mock something up in a hurry.
        </p>
        <p>
          But you should be clear-eyed about what it means for you: you'll own every spacing decision
          the designer didn't make. Every state they didn't design. Every token they didn't define.
        </p>
        <p>
          You can implement it. But decide consciously whether to proceed or ask for a cleanup pass.
          "I'll just build it" is a choice. Make it explicitly.
        </p>
      </Callout>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://www.figma.com/resources/figma-for-product-teams/" target="_blank" rel="noopener noreferrer">
            <strong>Figma for Product Teams</strong>
          </a>{' '}
          — overview of handoff workflows and best practices.
        </li>
      </ul>
      <GoDeeper resources={resources} />
    </PageLayout>
  )
}
