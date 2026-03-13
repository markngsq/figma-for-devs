import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import Callout from '../components/Callout'

const toc = [
  { id: 'mcp-workflow',        label: 'MCP Workflow (Current)',       level: 2 },
  { id: 'screenshot-workflow', label: 'Screenshot Workflow (Quick)',   level: 2 },
  { id: 'tools-table',         label: 'Tools Worth Knowing',          level: 2 },
]

function CopyableCode({ code }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="terminal-block">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">Terminal</span>
        <button
          className={`terminal-copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="terminal-code"><code>{code}</code></pre>
    </div>
  )
}

export default function AiWorkflows() {
  return (
    <PageLayout toc={toc}>
      <div className="page-header">
        <div className="page-badge">07 — AI Workflows</div>
        <h1>AI-Powered Workflows</h1>
        <p className="page-subtitle">
          MCP workflow and screenshot workflow. From Figma to working code — with honest caveats.
        </p>
      </div>

      <p>
        There are two ways to get from a Figma design to working code with AI. One is from 2024. One
        is from now. Learn both — but start with the current one.
      </p>

      <hr className="section-divider" />

      <h2 id="mcp-workflow">
        Workflow 1: MCP Workflow (Current — Start Here)
        <a className="heading-anchor" href="#mcp-workflow" aria-hidden="true">#</a>
      </h2>
      <p>
        The <strong>Model Context Protocol (MCP)</strong> workflow is what changes the game. Rather
        than taking a screenshot of a design and asking an AI to approximate it, your AI coding
        assistant gets direct read access to the Figma file. It reads the native design data:
        component names, variable values, Auto Layout rules, spacing tokens. The actual numbers, not
        a guess based on pixels.
      </p>
      <p>
        Think of it as giving your AI agent Dev Mode access — the same thing you use when you inspect
        a design. The AI can navigate the file structure, read token values, understand the component
        hierarchy, and then generate code from that ground truth.
      </p>

      <h3>Setup — About 5 Minutes, One-Time</h3>

      <p>For <strong>Claude Code</strong>, add the MCP server with a single command:</p>

      <CopyableCode code="claude mcp add --transport http figma https://mcp.figma.com/mcp" />

      <p>
        For <strong>Cursor</strong>, add it via the MCP config in settings. The Figma team maintains
        setup instructions at{' '}
        <a href="https://github.com/figma/mcp-server-guide" target="_blank" rel="noopener noreferrer">
          github.com/figma/mcp-server-guide
        </a>.
      </p>
      <p>
        For other tools (Windsurf, Continue, etc.), the official guide covers them:{' '}
        <a href="https://help.figma.com/hc/en-us/articles/32132100833559" target="_blank" rel="noopener noreferrer">
          help.figma.com/hc/en-us/articles/32132100833559
        </a>.
      </p>

      <h3>How to Use It</h3>
      <ol>
        <li>Open the Figma file. Copy the URL from your browser.</li>
        <li>
          In your AI agent, give a prompt like:{' '}
          <em>"Implement the CardComponent from this Figma file: [URL]"</em>
        </li>
        <li>
          The agent reads the file directly and generates code from the actual design data — not
          approximating from a screenshot.
        </li>
        <li>
          Iterate with specific instructions: <em>"Match spacing exactly"</em>,{' '}
          <em>"Use the Variable token names from the file rather than raw values"</em>,{' '}
          <em>"Add hover and focus states"</em>.
        </li>
      </ol>
      <p>
        The quality of the output depends on whether your team has set up <strong>Code Connect</strong>.
        With it, the agent outputs your actual component calls —{' '}
        <code>{'<Button variant="primary">'}</code> — because it knows the mapping between Figma
        components and your codebase. Without it, you get well-structured semantic HTML with accurate
        values, which is still significantly better than screenshot-based generation.
      </p>

      <h3>What the MCP Workflow Gets Right</h3>
      <p>
        Layout fidelity, spacing accuracy, token names, component hierarchy. These are the things that
        take the most time to get right manually, and the AI gets them by reading the file directly
        rather than inferring.
      </p>

      <h3>What Still Needs You</h3>
      <p>
        State logic, accessibility attributes, responsive breakpoints, and real-content edge cases.
        The AI will implement the happy-path default state accurately. It won't know that your empty
        state needs a different layout, or that the component should trap focus when used in a modal.
        That's your job.
      </p>

      <hr className="section-divider" />

      <h2 id="screenshot-workflow">
        Workflow 2: Screenshot Workflow (Quick Experiments)
        <a className="heading-anchor" href="#screenshot-workflow" aria-hidden="true">#</a>
      </h2>
      <p>
        Before MCP existed, the standard approach was simpler: take a screenshot of the design, paste
        it into an AI tool, ask for code. This still works, and it's still useful for specific
        situations — rapid prototyping, layout exploration, or when you don't have access to the
        actual Figma file.
      </p>
      <p>
        The output quality is lower than MCP because the AI is inferring values from pixels. A{' '}
        <code>16px</code> padding becomes "about 16px, maybe 14px, hard to say." Token names are gone
        entirely. But for throwaway experiments or initial scaffolding, it's fast.
      </p>

      <h3>Getting Better Results from Screenshot Prompts</h3>
      <p>
        The biggest mistake is vague prompting. <em>"Make this a React component"</em> is not a
        prompt. Be specific about everything the AI can't see:
      </p>
      <ul>
        <li>Technology: <em>"React component, Tailwind CSS"</em></li>
        <li>Exact values you know: <em>"16px horizontal padding, 10px vertical, 6px border radius"</em></li>
        <li>Colour if you have it: <em>"#2563EB background, white text"</em></li>
        <li>Interaction states: <em>"Include hover state with 10% darker background and focus ring"</em></li>
        <li>
          Structure first, then detail:{' '}
          <em>
            "Horizontal flex row with gap-4. Inside that: a 20px icon on the left, a text column in
            the middle that grows to fill space, a dismiss button on the right."
          </em>
        </li>
      </ul>
      <p>
        Describing structure explicitly before describing individual elements gives the AI a frame to
        work within. It generates better layout decisions.
      </p>

      <hr className="section-divider" />

      <h2 id="tools-table">
        Tools Worth Knowing
        <a className="heading-anchor" href="#tools-table" aria-hidden="true">#</a>
      </h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Best for</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>v0 (Vercel)</td>
            <td>React/Tailwind from screenshot</td>
            <td><a href="https://v0.dev" target="_blank" rel="noopener noreferrer">v0.dev</a></td>
          </tr>
          <tr>
            <td>Claude</td>
            <td>Iteration, complex logic, MCP</td>
            <td><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a></td>
          </tr>
          <tr>
            <td>Cursor</td>
            <td>AI coding inside your IDE</td>
            <td><a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a></td>
          </tr>
          <tr>
            <td>Bolt.new</td>
            <td>Full-stack to live URL, fast</td>
            <td><a href="https://bolt.new" target="_blank" rel="noopener noreferrer">bolt.new</a></td>
          </tr>
          <tr>
            <td>Lovable</td>
            <td>Full-stack React apps</td>
            <td><a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">lovable.dev</a></td>
          </tr>
          <tr>
            <td>Windsurf</td>
            <td>Cursor alternative with MCP support</td>
            <td><a href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer">codeium.com/windsurf</a></td>
          </tr>
        </tbody>
      </table>

      <p>
        These tools overlap significantly and evolve quickly. The right choice depends on your
        workflow. If you're building inside an existing codebase, IDE-based tools (Cursor, Windsurf)
        keep you in context. If you're spinning up something standalone, Bolt or Lovable get you to a
        live URL faster.
      </p>

      <Callout type="tip">
        <p><strong>An Honest Note About AI and Design Implementation</strong></p>
        <p>
          AI is a very fast junior developer who will do exactly what you ask, confidently, even when
          what you asked was slightly wrong.
        </p>
        <p>
          The MCP workflow raises the floor significantly — you'll get accurate spacing and token names
          by default, because the AI is reading real data rather than guessing. The gap between "what
          the designer intended" and "what got implemented" shrinks considerably.
        </p>
        <p>
          But the last 20% — accessibility, edge cases, performance, real-content behaviour — still
          needs a human who understands what they're building. An AI will implement a button that looks
          right and misses <code>aria-disabled</code>, or generate a card layout that breaks when the
          headline is three lines long. Not because it's stupid. Because you didn't tell it about those
          cases, and it didn't know to ask.
        </p>
        <p>Use AI to eliminate scaffolding work. Don't use it to skip the thinking.</p>
      </Callout>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2rem' }}>
        Last reviewed March 2026. This section moves fast — if something feels out of date, it
        probably is. Check the tool's own docs before relying on specific setup steps.
      </p>

      <hr className="section-divider" />

      <h2>Further Reading</h2>
      <ul className="resources-list">
        <li>
          <a href="https://help.figma.com/hc/en-us/articles/32132100833559" target="_blank" rel="noopener noreferrer">
            <strong>Official MCP setup guide</strong>
          </a>{' '}
          — Figma's full guide for all tools.
        </li>
        <li>
          <a href="https://github.com/figma/mcp-server-guide" target="_blank" rel="noopener noreferrer">
            <strong>Cursor MCP configuration</strong>
          </a>{' '}
          — Figma team's guide for Cursor setup.
        </li>
        <li>
          <a href="https://www.figma.com/developers/code-connect" target="_blank" rel="noopener noreferrer">
            <strong>Code Connect</strong>
          </a>{' '}
          — map Figma components to your real codebase.
        </li>
        <li>
          <a href="https://www.figma.com/blog/introducing-claude-code-to-figma/" target="_blank" rel="noopener noreferrer">
            <strong>Claude Code ↔ Figma reverse workflow</strong>
          </a>{' '}
          — generating designs from code.
        </li>
      </ul>
    </PageLayout>
  )
}
