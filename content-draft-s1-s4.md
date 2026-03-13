# Figma for Developers — Content Draft: Sections 1–4

_Draft by Skald · 2026-03-13_

---

## Section 1: What Is Figma & Why Devs Need It

Figma isn't clip-art software — it has a proper layer tree, a component model, and a DOM-like hierarchy. If you've built UIs, you already understand 80% of how it's organised. The mental models transfer almost directly. What's new is the vocabulary and the workflow.

Most developers arrive at Figma because a designer sent them a link. That's deliberate — Figma is entirely cloud-native. There are no Sketch files, no exported PNGs, no "can you send me the latest version" emails. The file lives in the browser, always up to date, and you share it by copying a URL. Multiple people can be in the same file simultaneously, cursors visible, changes live. If you've used Figma Slides or Google Docs in real time, you know what this feels like.

That collaboration model matters for how you work. When a designer hands you a link, you're looking at the actual working file — not an export, not a PDF. Changes the designer makes after sending you the link will already be there when you refresh. This cuts out an entire category of "stale design" problems, but it also means you need to know which role you've been given.

**Pricing: know your role before you touch anything.**

Figma has two relevant roles for developers: Viewer and Editor. Editors pay. Viewers are free. The key difference isn't just cost — it's what you can do. Editors can move things, create frames, edit text. Viewers can inspect and comment. There's also Dev Mode, which gives viewers a purpose-built inspection interface (more on this in Section 4). If your organisation has a Figma plan, you can almost certainly get viewer access with Dev Mode at no extra cost. That's all you need.

[CALLOUT]
Don't edit files you're not supposed to. Ask your designer for viewer/Dev Mode access. You get everything you need without accidentally moving things. Figma has no meaningful "undo someone else's change" workflow — if you accidentally drag a component two pixels to the left and save, the designer now has a problem they don't know exists. Viewer access removes this risk entirely.

**Three surfaces — only one matters right now.**

Figma has three main products: Design, FigJam, and Slides. FigJam is a collaborative whiteboard for workshops and brainstorms. Slides is a presentation tool. Both are occasionally useful but irrelevant to design implementation. When someone sends you a Figma link to review designs, they're sending you into Figma Design. That's the only surface this guide covers.

The rest of this guide is about Figma Design.

[RESOURCES]
- **Figma for Frontend Developers** — good overview of the mental model shift from a developer's perspective: https://www.youtube.com/watch?v=hbN9RGcQFNU
- **Figma Basics community file** — an interactive tutorial you can duplicate and explore: https://www.figma.com/community/file/818692024554023456

---

## Section 2: Getting Around Figma

Three things trip developers up in their first hour in Figma. Here's how to avoid them.

**Trap 1: Zoomed out and lost.**

The Figma canvas is infinite. There's no edge, no boundary. Designers frequently work across multiple pages and have frames scattered at different zoom levels. If you open a file and see a grey void, or a tiny cluster of shapes in the distance, you've probably hit scroll-drift — accidental zooming or panning that's left you somewhere empty.

Hit **Shift+1** to zoom-to-fit the entire page. Everything snaps back into view immediately. If you want to fit just one selected frame, **Shift+2** does that. Keep these shortcuts in muscle memory from day one — they'll save you more confusion than you'd expect.

**Trap 2: The canvas lies.**

What you see on the canvas is not necessarily everything in the file. Layers can be hidden with a visibility toggle (the eye icon in the layers panel). Elements can live off-canvas, outside the frame bounds but still technically present in the layer tree. A designer working fast will sometimes leave stray objects, hidden states, or in-progress components floating somewhere you can't see.

When you're inspecting a component and something doesn't make sense — an unexpected layer, a weird bounding box, a value that doesn't match what you're seeing — open the layers panel on the left and look at what's actually there. It's the equivalent of inspecting the DOM. Trust the panel over the visual.

**Trap 3: Can't find a feature.**

Figma's right-click menus and toolbar options change based on context — what's selected, what mode you're in, what type of object you've clicked. If you're looking for something and can't find it, hit **Cmd+/** (Mac) or **Ctrl+/** (Windows). This opens a universal search across all Figma actions, settings, and help articles. It's your escape hatch.

---

**Essential shortcuts — learn these, skip the rest.**

| Action | Mac | Windows |
|---|---|---|
| Zoom to fit page | Shift+1 | Shift+1 |
| Zoom to selection | Shift+2 | Shift+2 |
| Zoom in / out | Cmd++ / Cmd+– | Ctrl++ / Ctrl+– |
| Hand tool (pan) | Space+drag | Space+drag |
| Command palette | Cmd+/ | Ctrl+/ |
| Select all | Cmd+A | Ctrl+A |
| Toggle Dev Mode | Cmd+Opt+D | Ctrl+Alt+D |
| Copy as CSS | Dev Mode → right panel | Dev Mode → right panel |
| Show/hide layers panel | Cmd+\ | Ctrl+\ |

Don't try to memorise Figma's full shortcut list on day one. These eight are enough to stay unblocked.

---

**Pages vs Frames vs Groups — and why it matters.**

Figma files are organised into pages (tabs at the top of the layers panel — think of them like separate canvases). Inside a page, the main structural units are **frames** and **groups**.

A **frame** is the thing that matters. It's equivalent to a `<div>` with a fixed or auto-calculated size. Frames clip their contents, support Auto Layout (Figma's flexbox — covered in Section 3), have padding properties, and show up in the prototype flow. Most of the time when you're inspecting a design, you're looking inside frames.

A **group** is a loose collection of layers bundled together for convenience. Groups don't have independent layout rules — they just wrap their children. This makes them awkward: resizing a group rescales everything inside it rather than reflowing content. They're useful for organising flat assets but terrible for structured layouts.

The practical implication: if you're clicking around a component and can't figure out why resizing behaves unexpectedly, or why properties look wrong, check whether you're inside a group. If you are, the designer probably should have used a frame. You can actually fix this yourself in editor mode — select the group, right-click, Ungroup, then Frame Selection. But in viewer mode, just note it as a design hygiene issue and raise it.

If you're fighting a group, you want a frame.

Now you can navigate without getting lost.

[RESOURCES]
- **Full Figma keyboard shortcuts reference**: https://help.figma.com/hc/en-us/articles/360041064173

---

## Section 3: Core Design Concepts

**Auto Layout is CSS Flexbox.**

That's not an approximation — it's a near-exact mapping. If you understand flexbox, you understand Auto Layout. The vocabulary is different; the behaviour is the same.

Here's the translation table you actually need:

| CSS | Figma Auto Layout |
|---|---|
| `flex-direction: row` | Horizontal direction |
| `flex-direction: column` | Vertical direction |
| `gap: 8px` | Gap: 8 |
| `padding: 16px 24px` | Padding top/bottom: 16, left/right: 24 |
| `flex-grow: 1` (fill parent) | Fill container |
| `width: fit-content` | Hug contents |
| `flex-wrap: wrap` | Wrap: enabled |

Figma also supports wrap mode for Auto Layout — elements wrap to the next line when they run out of space, exactly like `flex-wrap: wrap`. If you see a component that wraps, it's using this.

The most important real-world pattern is nested Auto Layout. A card component might have a vertical Auto Layout frame containing several horizontal Auto Layout rows — header, body, footer. Each row is its own frame with its own gap and alignment. This mirrors how you'd actually write the markup: a vertical flex container wrapping horizontal flex rows. When you see a well-structured Figma file, you should be able to read the layer tree and derive the HTML structure almost directly.

[CALLOUT]
Files without Auto Layout are a nightmare to implement. Spacing is arbitrary, nothing scales, and every measurement you take is a best-guess pixel value rather than a semantic token. If you receive a file like this — components with fixed widths, manually placed elements, no layout rules — ask the designer to rebuild the components with Auto Layout before you start implementing. That conversation might take an hour of their time. It will save you days of yours. This is not a nitpick; it's a professional standard.

---

**Components are React components.**

The parallel is exact. Figma components work on the same publish-and-consume model as a React component library.

The **master component** (now often called the "main component" in Figma's UI) is the definition — the source of truth. It lives somewhere in the file, often on a dedicated "Components" page hidden from the main design pages. **Instances** are the used copies. When you see a button on a screen design, you're looking at an instance. The master component is elsewhere.

This matters because: changes to the master propagate to all instances. If a designer updates the corner radius on the master Button, every button in every frame updates. Exactly like changing your `<Button>` component — all consumers update.

**Instance overrides are props.** When a designer selects a button instance and changes the label text or swaps the icon, they're setting instance-level overrides. The instance still tracks the master for everything else — structure, colours, spacing — but those specific properties are locally overridden. In React terms: they've passed different props.

**Variants are prop combinations.** A button component might have variants for type (`primary`, `secondary`, `ghost`) crossed with state (`default`, `hover`, `disabled`, `loading`). Figma groups these into a variant set — you see them as a grid of component options in the master. When a designer hands off a component with variants, they're documenting the full prop matrix you need to implement. Read the variant names carefully — they usually map directly to the prop names you should use in code.

[CALLOUT]
**Right-click → Detach Instance** breaks the link between an instance and its master component. The instance becomes a flat copy — it no longer tracks master updates, variants stop working, and overrides become permanent. Don't do this unless you have a very specific reason. In viewer/Dev Mode you can't detach anything, so this is only relevant if you've been given editor access. Treat Detach as a one-way door.

---

**Component Properties — the props panel.**

When you select an instance in Dev Mode (or Design Mode as an editor), the right panel shows **Component Properties** — named inputs the designer has exposed on that component. These might be text values (the button label), boolean toggles (show/hide an icon), or instance swaps (swap one icon for another).

These map directly to the props you'll implement. If a component property is called `label`, your prop should probably be called `label`. If it's `isDestructive: boolean`, that's your API. When inspecting a component in Dev Mode, treat the properties panel as the intended prop interface.

---

**Styles & Variables — CSS variables and design tokens.**

Two systems exist in Figma for defining reusable values, and they're not the same thing.

**Styles** are the older system. A colour style is a named fixed value — `Brand/Primary` maps to `#3B5BDB`. Same for text styles (font-size, weight, line-height bundled together) and effect styles (shadows, blurs). Styles are fine, but they're static. No dark mode, no theming, no modes of any kind.

**Variables** are the modern system and the one that matters for serious design systems. A variable is a named value that can differ across modes. `color/background` might be `#FFFFFF` in light mode and `#1A1A2E` in dark mode. This is exactly how CSS custom properties and design tokens work — and when implemented properly, the variable names in Figma should match the token names in your codebase.

How to tell which system a file is using: open Dev Mode, click on a coloured element, look at the fill value in the right panel. If you see a token name like `color/background/primary`, it's using Variables. If you see a raw hex like `#3B5BDB`, it's using Styles — or worse, it's a hardcoded value with no system at all.

Why it matters for code: if the designer's Variables are named `color/button/primary/default` and your CSS tokens are named `--color-button-primary-default`, the handoff is clean. You're reading token names, not guessing at colours. If the file has no token names, you're translating design decisions into implementation decisions — which is extra work you shouldn't have to do.

---

**Constraints — brief but worth knowing.**

Constraints define how a layer behaves when its parent frame is resized. A layer constrained to the right stays flush to the right edge as the frame grows. A layer constrained to centre stays centred. It's CSS positioning — `position: absolute`, `right: 0`, `margin: auto`.

You'll mostly encounter constraints in older files or in components that genuinely need fixed positioning: a close button always in the top-right corner of a modal, a badge pinned to a specific corner of an avatar. In those cases, the constraint tells you what the CSS intent is.

If a file uses Auto Layout throughout — which well-built files do — you'll rarely need to think about constraints. Auto Layout handles spacing and resizing. Constraints are the fallback for cases where layout context doesn't apply.

[RESOURCES]
- **Auto Layout = display:flex community file** — interactive reference for the CSS/Figma mapping: https://www.figma.com/community/file/1127864650040224142
- **Figma Variables explainer** — the official announcement post, good conceptual overview: https://www.figma.com/blog/announcing-variables/

---

## Section 4: Dev Mode

Most developers open Figma in Design Mode and immediately touch things they shouldn't. Layers shift. Frames resize. The designer opens their file later and something is subtly broken. This happens because Design Mode is a fully editable interface, even when you have viewer access — some actions still bleed through.

Switch to Dev Mode. It's read-only, shows exactly what you need, and reorganises the interface around implementation rather than design.

**How to switch: Cmd+Opt+D** (Mac) or **Ctrl+Alt+D** (Windows). If you're on a viewer plan, Dev Mode is on by default — you may already be in it. If you're an editor, you'll need to toggle it explicitly. When active, the toolbar shows a "</>" icon highlighted and the right panel completely reorganises.

---

**What's different in Dev Mode.**

The canvas becomes read-only. You can click, inspect, and navigate, but you can't accidentally move anything. The right panel switches from design properties to implementation properties — spacing values, CSS-friendly output, exact pixel measurements, font details, and colour values with their token names (if Variables are in use). Components are labelled with their master component name, which helps you find the right component in your own library.

The left panel in Dev Mode also surfaces the layer tree more clearly. Each frame you click shows you its structure, and you can navigate up and down the hierarchy to understand the nesting without risk of editing anything.

---

**Ready for Development status — check this first.**

Figma lets designers mark frames with a development status: Ready for Development, In Progress, or no status at all. This is the handoff signal.

[CALLOUT]
Before you implement anything, check for the green **Ready for Development** badge on the frame. You'll see it in Dev Mode at the top of the right panel when a frame is selected. If the frame is marked In Progress — or has no status — stop and ask the designer. Implementing in-progress designs wastes days. You'll build something, the design will change, and you'll rebuild it. This is not pedantic; it's how professional design-development workflows actually work. The badge is the contract.

---

**Inspecting values.**

Click any element in Dev Mode and the right panel shows you its implementation properties. Here's what you'll actually use:

- **Spacing and size** — width, height, padding, gap (Auto Layout), and margin from siblings. These are the exact values you'll use in CSS.
- **Fill** — colour values, with token names if Variables are active. Raw hex if not.
- **Typography** — font family, weight, size, line height, letter spacing. Often copyable as a CSS snippet.
- **Effects** — box shadows and blurs displayed as CSS-ready values. Figma's "Copy as CSS" button in the right panel produces valid CSS you can paste directly.
- **Border radius** — per-corner values or uniform, shown numerically.

The "Copy as CSS" button is in the right panel when a frame or component is selected. It outputs CSS for the selected layer — not always production-ready, but a good starting point and a fast way to verify values.

---

**Focus view — the cleanest way to inspect.**

When a file has many frames on a busy canvas, double-click a specific frame in Dev Mode. The rest of the canvas dims and the selected frame fills the viewport. This is focus view — a clean inspection state where you can read the design without visual noise from surrounding frames. Double-click the background or hit Escape to exit.

Use this whenever you're implementing a specific screen. It cuts cognitive load significantly.

---

**Annotations — look for them, ask for them.**

Designers can add annotations to frames in Figma — implementation notes attached directly to the design. These might document interaction behaviours, animation timing, conditional states, edge cases, or anything else that isn't obvious from the visual alone. In Dev Mode, annotations appear as numbered markers on the frame, with the note text in the right panel.

Not all designers annotate consistently, and not all files will have them. If you're implementing a complex component — a multi-state form, an animated transition, a component with a lot of conditional logic — and there are no annotations, ask for them. A designer who's thought carefully about a component can usually write annotations in fifteen minutes. That fifteen minutes might save you an hour of guessing.

[RESOURCES]
- **Dev Mode guide** — full Figma Help Centre article on Dev Mode features and workflow: https://help.figma.com/hc/en-us/articles/15023124644247
- **Dev Mode video playlist** — official video series walking through Dev Mode end-to-end: https://www.youtube.com/playlist?list=PLXDU_eVOJTx7I9CMOHnTEzuxDwoq0Cjqt
