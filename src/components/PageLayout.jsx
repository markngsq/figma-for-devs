/**
 * PageLayout — wraps content pages with:
 * - Inline TOC on mobile (< 1280px)
 * - Sticky right-rail TOC on desktop (≥ 1280px)
 * - Prev/Next navigation at bottom
 */
import TableOfContents from './TableOfContents'
import PrevNext from './PrevNext'

export default function PageLayout({ toc, children }) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* Inline TOC — visible on mobile, hidden on desktop */}
        {toc && (
          <div className="toc-inline">
            <TableOfContents items={toc} />
          </div>
        )}

        {children}

        <PrevNext />
      </div>

      {/* Right-rail TOC — hidden on mobile, sticky on desktop */}
      {toc && (
        <aside className="toc-rail" aria-label="On this page">
          <TableOfContents items={toc} />
        </aside>
      )}
    </div>
  )
}
