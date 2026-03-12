import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'what-is',        label: 'What Vibe Coding Actually Means',     level: 2 },
  { id: 'workflow',       label: 'The Basic Workflow',                   level: 2 },
  { id: 'good-at',        label: 'What AI Code Gen Is Good At',          level: 2 },
  { id: 'struggles',      label: 'Where It Struggles',                   level: 2 },
  { id: 'better-prompts', label: 'Writing Better UI Prompts',            level: 2 },
  { id: 'tools',          label: 'Tools to Try',                         level: 2 },
  { id: 'caveat',         label: 'The Honest Caveat',                    level: 2 },
]

const tools = [
  {
    name: 'v0 by Vercel',
    best: 'React/Tailwind UI generation from description or screenshot',
    url: 'https://v0.dev',
  },
  {
    name: 'Claude (Anthropic)',
    best: 'Detailed UI work, iteration, complex logic, explaining tradeoffs',
    url: 'https://claude.ai',
  },
  {
    name: 'Cursor',
    best: 'AI-assisted coding inside your actual IDE; best for refining generated code',
    url: 'https://cursor.sh',
  },
  {
    name: 'Bolt.new',
    best: 'Full-stack app scaffolding from a prompt; ships to a live URL immediately',
    url: 'https://bolt.new',
  },
  {
    name: 'Lovable',
    best: 'Full-stack React app builder from prompts; growing fast in 2025, strong for complete apps',
    url: 'https://lovable.dev',
  },
  {
    name: 'Figma AI',
    best: 'Built-in AI features: auto-rename layers, generate placeholder content, first-pass design suggestions',
    url: null,
  },
]

export default function VibeCoding() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">08 — AI Tools</div>
        <h1>AI Tools & Vibe Coding Workflow</h1>
        <p className="page-subtitle">
          From Figma to working code with AI. The workflow, the tools, what AI is genuinely good
          at, and where you still need to pay attention.
        </p>
      </div>

      <h2 id="what-is">
        What Vibe Coding Actually Means
        <a className="heading-anchor" href="#what-is" aria-hidden="true">#</a>
      </h2>

      <p>
        "Vibe coding" is using AI tools to generate working code from a design or a description,
        then iterating in natural language until it matches what you want. Instead of writing every
        line, you describe the outcome — "make this button pill-shaped with a subtle shadow on
        hover" — and the AI generates or modifies the code.
      </p>

      <p>
        For developers who already know how code works, this is a superpower. You can move from
        Figma design to working prototype in hours rather than days.
      </p>

      <hr className="section-divider" />

      <h2 id="workflow">
        The Basic Workflow
        <a className="heading-anchor" href="#workflow" aria-hidden="true">#</a>
      </h2>

      <ol>
        <li>
          <strong>Design in Figma</strong> — even rough wireframes work. The more structured your
          file (Auto Layout, named components), the better the handoff.
        </li>
        <li>
          <strong>Export or describe</strong> — take a screenshot of your design, or copy the CSS
          from Dev Mode, or just write a clear description of what you want.
        </li>
        <li>
          <strong>Paste into an AI tool</strong> — Claude (Anthropic), v0 (Vercel), or Bolt.new are
          the best starting points for UI work.
        </li>
        <li>
          <strong>Iterate in natural language</strong> — "make the card wider", "add a hover state",
          "use a 4px border radius instead of 8px"
        </li>
        <li>
          <strong>Refine in code</strong> — once the structure is right, drop into your actual
          codebase and clean up.
        </li>
      </ol>

      <hr className="section-divider" />

      <h2 id="good-at">
        What AI Code Generation Is Good At
        <a className="heading-anchor" href="#good-at" aria-hidden="true">#</a>
      </h2>

      <ul>
        <li>
          <strong>Layout from description or screenshot</strong> — flex/grid structures, spacing,
          basic component composition
        </li>
        <li>
          <strong>Boilerplate</strong> — form structures, card layouts, navigation patterns, modals
        </li>
        <li>
          <strong>Rapid iteration</strong> — changing styles, rearranging layout, trying colour
          variations
        </li>
        <li>
          <strong>First drafts</strong> — getting to 70% of the way there fast, so you can focus
          on the 30% that matters
        </li>
      </ul>

      <hr className="section-divider" />

      <h2 id="struggles">
        Where It Struggles
        <a className="heading-anchor" href="#struggles" aria-hidden="true">#</a>
      </h2>

      <ul>
        <li>
          <strong>Complex interactive state</strong> — multi-step flows, state machines, conditional
          rendering logic
        </li>
        <li>
          <strong>Accessibility</strong> — AI-generated code often misses ARIA attributes, keyboard
          navigation, focus management
        </li>
        <li>
          <strong>Performance</strong> — generated code isn't always optimal; watch for unnecessary
          re-renders or large bundle imports
        </li>
        <li>
          <strong>Exact fidelity</strong> — pixel-perfect output from a screenshot is hard; you'll
          always need to adjust
        </li>
      </ul>

      <hr className="section-divider" />

      <h2 id="better-prompts">
        Writing Better UI Prompts
        <a className="heading-anchor" href="#better-prompts" aria-hidden="true">#</a>
      </h2>

      <p>Be specific. Vague prompts produce vague output.</p>

      <div className="comparison">
        <div className="comparison-bad">
          <div className="comparison-label">Weak</div>
          <p style={{ margin: 0 }}>Make a button</p>
        </div>
        <div className="comparison-good">
          <div className="comparison-label">Better</div>
          <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.5 }}>
            Create a primary button with label text, 16px horizontal padding, 10px vertical padding,
            #2563EB background, white text, 6px border radius, and a subtle shadow on hover. Use
            React with Tailwind.
          </p>
        </div>
      </div>

      <p>Include:</p>
      <ul>
        <li>Component type and purpose</li>
        <li>Layout/spacing values (if you have them from Figma)</li>
        <li>Colour (hex from Figma's Dev Mode)</li>
        <li>Interaction states needed (hover, focus, disabled, loading)</li>
        <li>Tech stack (React? Tailwind? CSS modules?)</li>
      </ul>

      <hr className="section-divider" />

      <h2 id="tools">
        Tools to Try
        <a className="heading-anchor" href="#tools" aria-hidden="true">#</a>
      </h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            {tools.map(tool => (
              <tr key={tool.name}>
                <td>
                  {tool.url ? (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <strong>{tool.name}</strong>
                    </a>
                  ) : (
                    <strong>{tool.name}</strong>
                  )}
                </td>
                <td>{tool.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="section-divider" />

      <h2 id="caveat">
        The Honest Caveat
        <a className="heading-anchor" href="#caveat" aria-hidden="true">#</a>
      </h2>

      <p>
        Vibe coding gets you to 70% fast. The last 30% — accessibility, edge cases, performance,
        real content — still needs a human who understands what they're building and why. Use AI
        to eliminate the boring scaffolding work, not to replace judgment.
      </p>

      <div className="callout-standout">
        <p>
          AI is a very fast junior developer who will do exactly what you ask, confidently, even
          when what you asked was slightly wrong. You still need to review the output.
        </p>
      </div>
    </PageLayout>
  )
}
