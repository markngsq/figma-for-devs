/**
 * TableOfContents — renders an in-page anchor nav.
 *
 * items: Array<{ id: string, label: string, level?: 2 | 3 }>
 */
export default function TableOfContents({ items }) {
  if (!items || items.length === 0) return null

  return (
    <nav className="toc" aria-label="On this page">
      <div className="toc-title">On this page</div>
      <ul className="toc-list">
        {items.map(item => (
          <li key={item.id} className={item.level === 3 ? 'toc-h3' : ''}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
