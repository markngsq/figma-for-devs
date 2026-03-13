# Figma for Devs — Content Draft: Sections 5–7

_Draft by Skald · March 2026_

---

## Section 5: Reading & Using the Code Panel

The code Figma generates is a specification, not a template. Read it to understand intent; don't copy-paste it into production.

This distinction matters more than it sounds. Figma's Code panel is a translation layer — it's converting visual design decisions into something developer-shaped. The values are real. The structure is often wrong. Treat it like a knowledgeable colleague who explains what they want but has never actually written production CSS.

### Where to Find It

Switch to Dev Mode (the `</>` icon in the toolbar, top right), then select any layer. The right panel will show a **Code** tab. At the top of that tab, you'll see a dropdown: CSS, iOS (SwiftUI), or Android (Kotlin). If you're building for web, stay on CSS.

Select a layer, read what appears. Simple enough.

### What the CSS Is Actually Telling You

The useful stuff: colour values, typography, spacing, and shadows. When a design has been built properly with Auto Layout, the padding and gap values in the CSS will be accurate — these map to real spacing decisions the designer made. A `padding: 12px 16px` in Figma's output means someone chose that deliberately. Trust it.

Shadow values are faithful too. If you see `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12)`, that's the actual shadow. Use it.

Font properties — `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` — are reliable. These are the designed typographic intentions, and they'll be correct.

### What the CSS Gets Wrong

Two things to watch for.

**Gap mapping.** Figma's CSS output often renders gaps between Auto Layout children as margins on individual elements rather than `gap` on the parent. You'll see `margin-bottom: 8px` on each child when the designer clearly intended `gap: 8px` on the flex container. Read it, then rewrite it properly.

**Absolute positioning.** If a layer isn't inside an Auto Layout frame, Figma outputs `position: absolute` with pixel coordinates. This is almost never what you want. It's Figma saying "I don't know how this element relates to its siblings — here are the raw numbers." Use those numbers to understand the intended spacing, then implement it with real layout.

The rule: when the output looks like something you wouldn't write, understand *why* it's saying what it's saying, then write it right.

### Variables vs Raw Hex

This one's important. When a file has been set up with Design Tokens or Figma Variables, the Code panel will show the token name rather than a raw value — something like `--color-brand-primary` or `color/brand/primary` instead of `#2563EB`.

When you see a token name in the output, use that token in your code. Don't reach for the hex. The whole point of tokens is consistency: if the designer updates the brand colour, you want that change to propagate correctly through your implementation too.

If the Code panel is showing raw hex values everywhere and your codebase already has a token system, that's a conversation to have with your designer. Either the file needs Variables set up, or you'll need to manually map values to your existing tokens.

### Code Connect: The Gold Standard

If your team has configured **Figma Code Connect**, the Code panel stops showing generic CSS and starts showing your actual component calls.

Instead of:

```css
display: flex;
align-items: center;
padding: 8px 16px;
background: #2563EB;
```

You get:

```jsx
<Button variant="primary" size="md">Label</Button>
```

That's the component you actually have in your codebase, with the props that match the design state. It's the closest thing to fully automated handoff that currently exists.

Setting up Code Connect is a one-time investment that pays off on every future component. If your team builds components regularly, it's worth prioritising. Your designer doesn't need to configure it — it lives in your codebase.

→ [https://www.figma.com/developers/code-connect](https://www.figma.com/developers/code-connect)

### Exporting Assets

Select any layer, then look for the **Export** section at the bottom of the right panel (Dev Mode makes this more prominent). A few things to know:

**Format:** Use PNG for photographs and raster images. Use SVG for icons, illustrations, and anything that needs to scale — SVGs from Figma are generally clean and production-safe. PDF is for print.

**Scale:** Export icons at 1x, 2x, and 3x if you need raster fallbacks. For SVGs, one export is enough — they scale infinitely.

**Naming:** Whatever you name the layer in Figma becomes the filename on export. If the layer is called `icon-chevron-right`, that's what you'll get. This is why named layers matter — unnamed layers export as `Group 47.svg` and that's everyone's problem.

[CALLOUT]

**Using Cursor, Claude Code, or Windsurf?**

Skip the manual copy-paste entirely. The Figma MCP server gives your AI coding agent direct read access to the design file — it reads component names, variable values, Auto Layout rules, and tokens natively. No screenshots, no copy-pasted CSS.

See **Section 7: AI-Powered Workflows** for setup and usage.

[/CALLOUT]

[RESOURCES]

- **Code Connect** — set up component mapping between Figma and your codebase: [https://www.figma.com/developers/code-connect](https://www.figma.com/developers/code-connect)
- **Figma Developer API** — programmatic access to file data, useful for tooling and automation: [https://www.figma.com/developers/api](https://www.figma.com/developers/api)

[/RESOURCES]

---

## Section 6: Clean Handoff — What to Check & What to Ask For

This section isn't about how designers should structure files. It's about what to do when you receive one — good or bad.

You don't control what lands in your inbox. Sometimes it's a beautifully organised file with named layers, a dedicated handoff page, and annotated edge cases. Sometimes it's forty artboards named "Frame 1" through "Frame 40" with floating elements and hardcoded colours. Both happen. Both require a strategy.

### What a Good File Looks Like

Worth knowing so you can recognise it when you have it, and ask for it when you don't.

A well-structured handoff file has named layers (actual names, not "Group 12"), everything inside frames, and Auto Layout used consistently throughout. Colours come from Variables, text uses Text Styles. There's usually a dedicated Handoff page containing the complete set of component states, edge cases, annotations, and responsive variants. Frames that are ready to implement are marked **Ready for Development** — in Dev Mode these appear with a green indicator.

If all of this is present: you're in good shape. Start with the Handoff page, work through the marked frames, use the Code panel and inspect mode to pull values.

### When the File Is a Mess

This is the section that will actually save you time.

**Cmd+F to search layers.** When the layer panel is a wall of unnamed groups, don't try to navigate it manually. Hit Cmd+F and search by element type or content. You're looking for the element on canvas — click it, then use the breadcrumb at the top of the screen to understand its context in the layer hierarchy.

**Click the component name in the breadcrumb.** When you select a component instance and see its name in the breadcrumb trail at the top of the canvas, you can click that name to jump directly to the master component in the file. This is how you find the canonical version of something without hunting through pages manually.

**Assets panel (Opt+2) lets you search components by name.** Even in disorganised files, if the designer used components, they'll appear here. Search by component name, click to locate instances. Faster than navigating the layer panel.

**Check the Variants panel — most devs skip this and regret it.** When you select a component instance, look at the right panel. If there's a **Variants** section, click through it. This shows you every designed state for that component: hover, focus, disabled, loading, error, empty. Designers build all of these states in Figma as component variants. Developers frequently implement only the default state because they didn't know the others existed. Don't be that developer.

**If spacing looks arbitrary and there's no Auto Layout: stop.** You can eyeball spacing from a static design, but you'll be guessing at intent, and your guesses will need revisiting every time the design changes. Either ask for the component to be rebuilt with Auto Layout, or interpret the values in the context of the project's overall spacing system — usually a 4px or 8px base grid. Don't invent numbers.

### Questions to Actually Ask

When you receive a file and something feels off, these are the questions worth raising before you start building.

*"Are colours using Variables or hardcoded hex?"* — If hardcoded, you'll need to manually map to your token system, or ask for a Variables pass. Better to know upfront.

*"Do components have all states designed?"* — Specifically: hover, focus, disabled, loading, error, and empty states. Missing states aren't always obvious from the main flow. If they're missing, you need to either design them yourself (which means making product decisions you might not be qualified to make) or surface the gap now.

*"Is there a mobile/responsive variant?"* — Responsive layouts aren't automatic in Figma. If no mobile designs exist, ask whether they're needed or whether you're expected to interpret.

*"Which frames are marked Ready to implement?"* — This stops you building things that are still in flux. If nothing is marked, ask which frames are signed off and ready to go.

These aren't adversarial questions. They're professional ones. A designer who knows their craft will appreciate them. One who doesn't will at least understand what's expected.

[CALLOUT]

**The Red Line**

A file with no layer names, no components, no styles, and loose floating elements is a signal. It doesn't mean the designer is bad at their job — it might mean they were given two hours to mock something up in a hurry.

But you should be clear-eyed about what it means for you: you'll own every spacing decision the designer didn't make. Every state they didn't design. Every token they didn't define.

You can implement it. But decide consciously whether to proceed or ask for a cleanup pass. "I'll just build it" is a choice. Make it explicitly.

[/CALLOUT]

[RESOURCES]

- **Figma for Product Teams** — overview of handoff workflows and best practices: [https://www.figma.com/resources/figma-for-product-teams/](https://www.figma.com/resources/figma-for-product-teams/)

[/RESOURCES]

---

## Section 7: AI-Powered Workflows

There are two ways to get from a Figma design to working code with AI. One is from 2024. One is from now. Learn both — but start with the current one.

### Workflow 1: MCP Workflow (Current — start here)

The **Model Context Protocol (MCP)** workflow is what changes the game. Rather than taking a screenshot of a design and asking an AI to approximate it, your AI coding assistant gets direct read access to the Figma file. It reads the native design data: component names, variable values, Auto Layout rules, spacing tokens. The actual numbers, not a guess based on pixels.

Think of it as giving your AI agent Dev Mode access — the same thing you use when you inspect a design. The AI can navigate the file structure, read token values, understand the component hierarchy, and then generate code from that ground truth.

**Setup — about 5 minutes, one-time per project or machine:**

For **Claude Code**, add the MCP server with a single command:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

For **Cursor**, add it via the MCP config in settings. The Figma team maintains setup instructions at [https://github.com/figma/mcp-server-guide](https://github.com/figma/mcp-server-guide).

For other tools (Windsurf, Continue, etc.), the official guide covers them: [https://help.figma.com/hc/en-us/articles/32132100833559](https://help.figma.com/hc/en-us/articles/32132100833559)

**How to use it:**

1. Open the Figma file. Copy the URL from your browser.
2. In your AI agent, give a prompt like: *"Implement the `CardComponent` from this Figma file: [URL]"*
3. The agent reads the file directly and generates code from the actual design data — not approximating from a screenshot.
4. Iterate with specific instructions: *"Match spacing exactly"*, *"Use the Variable token names from the file rather than raw values"*, *"Add hover and focus states"*.

The quality of the output depends on whether your team has set up **Code Connect**. With it, the agent outputs your actual component calls — `<Button variant="primary">` — because it knows the mapping between Figma components and your codebase. Without it, you get well-structured semantic HTML with accurate values, which is still significantly better than screenshot-based generation.

**What the MCP workflow gets right:** layout fidelity, spacing accuracy, token names, component hierarchy. These are the things that take the most time to get right manually, and the AI gets them by reading the file directly rather than inferring.

**What still needs you:** state logic, accessibility attributes, responsive breakpoints, and real-content edge cases. The AI will implement the happy-path default state accurately. It won't know that your empty state needs a different layout, or that the component should trap focus when used in a modal. That's your job.

[RESOURCES]

- **Official MCP setup guide:** [https://help.figma.com/hc/en-us/articles/32132100833559](https://help.figma.com/hc/en-us/articles/32132100833559)
- **Cursor MCP configuration:** [https://github.com/figma/mcp-server-guide](https://github.com/figma/mcp-server-guide)
- **Code Connect** — map Figma components to your real codebase: [https://www.figma.com/developers/code-connect](https://www.figma.com/developers/code-connect)
- **Claude Code ↔ Figma reverse workflow** (generating designs from code): [https://www.figma.com/blog/introducing-claude-code-to-figma/](https://www.figma.com/blog/introducing-claude-code-to-figma/)

[/RESOURCES]

### Workflow 2: Screenshot Workflow (Quick Experiments)

Before MCP existed, the standard approach was simpler: take a screenshot of the design, paste it into an AI tool, ask for code. This still works, and it's still useful for specific situations — rapid prototyping, layout exploration, or when you don't have access to the actual Figma file.

The output quality is lower than MCP because the AI is inferring values from pixels. A `16px` padding becomes "about 16px, maybe 14px, hard to say." Token names are gone entirely. But for throwaway experiments or initial scaffolding, it's fast.

**Getting better results from screenshot prompts:**

The biggest mistake is vague prompting. *"Make this a React component"* is not a prompt. Be specific about everything the AI can't see:

- Technology: *"React component, Tailwind CSS"*
- Exact values you know: *"16px horizontal padding, 10px vertical, 6px border radius"*
- Colour if you have it: *"#2563EB background, white text"*
- Interaction states: *"Include hover state with 10% darker background and focus ring"*
- Structure first, then detail: *"Horizontal flex row with gap-4. Inside that: a 20px icon on the left, a text column in the middle that grows to fill space, a dismiss button on the right."*

Describing structure explicitly before describing individual elements gives the AI a frame to work within. It generates better layout decisions.

**Tools worth knowing:**

| Tool | Best for | URL |
|---|---|---|
| v0 (Vercel) | React/Tailwind from screenshot | [v0.dev](https://v0.dev) |
| Claude | Iteration, complex logic, MCP | [claude.ai](https://claude.ai) |
| Cursor | AI coding inside your IDE | [cursor.sh](https://cursor.sh) |
| Bolt.new | Full-stack to live URL, fast | [bolt.new](https://bolt.new) |
| Lovable | Full-stack React apps | [lovable.dev](https://lovable.dev) |
| Windsurf | Cursor alternative with MCP support | [codeium.com/windsurf](https://codeium.com/windsurf) |

These tools overlap significantly and evolve quickly. The right choice depends on your workflow. If you're building inside an existing codebase, IDE-based tools (Cursor, Windsurf) keep you in context. If you're spinning up something standalone, Bolt or Lovable get you to a live URL faster.

[CALLOUT]

**An Honest Note About AI and Design Implementation**

AI is a very fast junior developer who will do exactly what you ask, confidently, even when what you asked was slightly wrong.

The MCP workflow raises the floor significantly — you'll get accurate spacing and token names by default, because the AI is reading real data rather than guessing. The gap between "what the designer intended" and "what got implemented" shrinks considerably.

But the last 20% — accessibility, edge cases, performance, real-content behaviour — still needs a human who understands what they're building. An AI will implement a button that looks right and misses `aria-disabled`, or generate a card layout that breaks when the headline is three lines long. Not because it's stupid. Because you didn't tell it about those cases, and it didn't know to ask.

Use AI to eliminate scaffolding work. Don't use it to skip the thinking.

[/CALLOUT]

---

_Last reviewed March 2026. This section moves fast — if something feels out of date, it probably is. Check the tool's own docs before relying on specific setup steps._
