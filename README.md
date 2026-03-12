# Figma for Devs

A practical Figma guide for developers making the transition into product design. Written to be read, not watched.

**Live site:** https://markngsq.github.io/figma-for-devs/

## Stack

- React 18 + Vite
- React Router (hash-based for GitHub Pages)
- Vanilla CSS — dark mode first, no UI framework
- `gh-pages` for deployment

## Getting started

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`), then pushes the `dist` folder to the `gh-pages` branch.

The GitHub Pages source should be set to the `gh-pages` branch, root directory.

## Structure

```
src/
├── components/
│   ├── Layout.jsx        # Sidebar + main content wrapper
│   ├── Sidebar.jsx       # Navigation
│   ├── TableOfContents.jsx # In-page anchor nav
│   └── Callout.jsx       # Tip/note callout component
├── pages/
│   ├── Home.jsx
│   ├── WhatIsFigma.jsx
│   ├── GettingAround.jsx
│   ├── CoreConcepts.jsx
│   ├── AdjacentTools.jsx
│   ├── DeveloperMode.jsx
│   ├── CodeExport.jsx
│   ├── BestPractices.jsx
│   └── VibeCoding.jsx
├── styles/
│   └── main.css          # All styles
├── App.jsx               # Router setup
└── main.jsx              # Entry point
```

## Sections

1. What Figma Actually Is
2. Getting Around Figma Design
3. Core Design Concepts
4. Key Adjacent Tools
5. Developer Mode
6. Code Export & Working with Code
7. Best Practices for Clean Handoff
8. AI Tools & Vibe Coding Workflow

## Content

Wiki content by Skald.
