export function ProgressBar({ pct, height = 6 }) {
  return (
    <div style={{ height, background: 'var(--border-dim)', borderRadius: height, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: pct === 100 ? '#16a34a' : 'linear-gradient(90deg,#3b82f6,#8b5cf6)', borderRadius: height, transition: 'width 0.4s' }} />
    </div>
  )
}
