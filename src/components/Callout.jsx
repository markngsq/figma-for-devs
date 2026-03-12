const icons = {
  tip:     '💡',
  warning: '⚠️',
  danger:  '🚫',
  success: '✅',
  info:    'ℹ️',
}

/**
 * Callout component for tips, warnings, and notes.
 *
 * Usage:
 *   <Callout type="tip">Text here</Callout>
 *   <Callout type="warning" title="Heads up">...</Callout>
 */
export default function Callout({ type = 'tip', title, children }) {
  return (
    <div className={`callout callout-${type}`} role="note">
      <span className="callout-icon" aria-hidden="true">{icons[type]}</span>
      <div className="callout-body">
        {title && <strong>{title}</strong>}
        {children}
      </div>
    </div>
  )
}
