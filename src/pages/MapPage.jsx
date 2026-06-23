import { useNavigate } from 'react-router-dom'
import { MISSIONS } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { ProgressBar } from '../components/ProgressBar'

export function MapPage() {
  const navigate = useNavigate()
  const { getMissionProgress, totalStats } = useProgress()
  const stats = totalStats(MISSIONS)
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ background: 'linear-gradient(160deg,#0d0d2b,#1a0a2e)', borderBottom: '1px solid var(--border)', padding: '32px 20px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🐍🚀</div>
        <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1, color: '#fff', margin: 0 }}>Python Explorer</h1>
        <p style={{ color: 'var(--text-muted)', margin: '6px 0 20px', fontSize: 15 }}>Aprende a programar con misiones espaciales</p>
        <div style={{ maxWidth: 360, margin: '0 auto', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
            <span style={{ color: 'var(--text-muted)' }}>Progreso total</span>
            <span style={{ color: 'var(--blue)', fontWeight: 700 }}>{stats.done}/{stats.total} · {stats.pct}%</span>
          </div>
          <ProgressBar pct={stats.pct} />
        </div>
      </div>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '24px 16px' }}>
        <p style={{ fontSize: 13, color: 'var(--text-dim)', textAlign: 'center', marginBottom: 20 }}>Completa las misiones en orden — cada una desbloquea la siguiente</p>
        {MISSIONS.map((m, idx) => {
          const { done, total, pct } = getMissionProgress(m)
          const prevPct = idx === 0 ? 100 : getMissionProgress(MISSIONS[idx - 1]).pct
          const locked = prevPct < 100 && pct === 0
          return (
            <div key={m.id} onClick={() => !locked && navigate(`/mision/${m.id}`)}
              style={{ background: locked ? 'rgba(13,22,39,0.5)' : 'var(--bg-card)', border: `1px solid ${pct===100?'#16a34a55':'var(--border)'}`, borderRadius: 14, marginBottom: 12, padding: '16px 18px', cursor: locked ? 'not-allowed' : 'pointer', opacity: locked ? 0.45 : 1, transition: 'transform 0.15s' }}
              onMouseEnter={e => { if (!locked) e.currentTarget.style.transform = 'translateX(5px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 32 }}>{locked ? '🔒' : m.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 700, fontSize: 16 }}>{m.title}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>{m.weeks}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', margin: '2px 0 10px' }}>{m.subtitle}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1 }}><ProgressBar pct={pct} height={5} /></div>
                    <span style={{ fontSize: 12, color: pct===100?'#86efac':'var(--text-dim)' }}>{pct===100?'✓ Completa':`${done}/${total}`}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <button onClick={() => navigate('/recursos')}
          style={{ width: '100%', marginTop: 8, background: 'transparent', border: '1px dashed var(--border)', borderRadius: 14, padding: 14, color: 'var(--text-muted)', fontSize: 14, cursor: 'pointer' }}>
          📚 Ver recursos y herramientas extra
        </button>
      </div>
    </div>
  )
}
