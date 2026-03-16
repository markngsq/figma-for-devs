export default function GoDeeper({ resources }) {
  if (!resources || resources.length === 0) return null
  return (
    <div className="go-deeper">
      <h2 className="go-deeper-title">Go Deeper</h2>
      <ul className="go-deeper-list">
        {resources.map((r, i) => (
          <li key={i} className="go-deeper-item">
            <span className="go-deeper-type">{r.type === 'video' ? '▶' : '📄'}</span>
            <div>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="go-deeper-link">
                {r.title}
              </a>
              {r.note && <p className="go-deeper-note">{r.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
