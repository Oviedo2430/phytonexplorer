import { useNavigate } from 'react-router-dom'
import { RESOURCES } from '../data/missions'
export function ResourcesPage() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ background: 'linear-gradient(160deg,#0d0d2b,#1a0a2e)', borderBottom: '1px solid var(--border)', padding: '16px 20px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 14, cursor: 'pointer', marginBottom: 12 }}>← Mapa de misiones</button>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>📚 Recursos</h1>
        <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: 14 }}>Herramientas y materiales extra</p>
      </div>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '24px 16px' }}>
        {RESOURCES.map((r, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: 32 }}>{r.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: 'var(--blue)', margin: '2px 0 6px' }}>{r.type}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.desc}</div>
                {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, fontSize: 12, color: 'var(--blue)' }}>Abrir →</a>}
              </div>
            </div>
          </div>
        ))}
        <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 14, padding: '16px 18px', marginTop: 8 }}>
          <div style={{ fontWeight: 700, color: '#93c5fd', marginBottom: 8 }}>📌 Nota para el tutor</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.8 }}>
            <li>No hay prisa. 2–3 horas por semana es suficiente.</li>
            <li>Si se bloquea, está bien dejarlo y volver mañana.</li>
            <li>Celebra cada proyecto que funcione, aunque sea pequeño.</li>
            <li>Los errores son parte del proceso, no fracasos.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
