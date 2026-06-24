import { useState } from 'react'
import { CodeEditor } from './CodeEditor'

const STEPS = [
  { key: 'ejemplo', emoji: '👀', label: 'Mira este ejemplo', color: '#1e3a5f', border: '#1e40af', hint: 'Ejecuta el código y observa qué pasa. No tienes que cambiar nada todavía.' },
  { key: 'tarea',   emoji: '✏️',  label: 'Ahora tu turno',   color: '#1a2e1a', border: '#16a34a', hint: 'Lee los comentarios. Te dicen exactamente qué escribir en cada línea.' },
  { key: 'reto',    emoji: '🚀',  label: 'Reto extra',        color: '#2d1a4a', border: '#7c3aed', hint: 'Opcional. Solo si quieres un desafío mayor.' },
]

export function LessonView({ lesson, missionId, lessonIdx, isDone, onToggleDone }) {
  const [step, setStep] = useState(0)
  const visibleSteps = STEPS.filter(s => lesson[s.key])

  return (
    <div>
      <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 10, padding: '12px 16px', marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: 'var(--blue)', fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>🎯 Qué vas a aprender</div>
        <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>{lesson.objetivo}</div>
      </div>
      <div style={{ background: '#060a10', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px', marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: '#f59e0b', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>🧠 Cómo funciona</div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{lesson.concepto}</div>
      </div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
        {visibleSteps.map((s, i) => (
          <button key={s.key} onClick={() => setStep(i)}
            style={{ background: step === i ? s.color : 'var(--bg-card)', border: `1px solid ${step === i ? s.border : 'var(--border)'}`, borderRadius: 8, padding: '6px 14px', color: step === i ? '#fff' : 'var(--text-muted)', fontSize: 13, cursor: 'pointer', fontWeight: step === i ? 700 : 400, whiteSpace: 'nowrap' }}>
            {s.emoji} {s.label}
          </button>
        ))}
      </div>
      {visibleSteps[step] && (
        <div style={{ background: 'var(--bg-card)', border: `1px solid ${visibleSteps[step].border}33`, borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '10px 16px', background: visibleSteps[step].color, borderBottom: `1px solid ${visibleSteps[step].border}44`, fontSize: 13, color: '#94a3b8' }}>
            💡 {visibleSteps[step].hint}
          </div>
          <div style={{ padding: 16 }}>
            <CodeEditor key={`${missionId}-${lessonIdx}-${visibleSteps[step].key}`} initialCode={lesson[visibleSteps[step].key]} height="220px" />
          </div>
        </div>
      )}
      <button onClick={onToggleDone}
        style={{ marginTop: 16, background: isDone ? '#16a34a22' : 'transparent', border: `1px solid ${isDone ? '#16a34a' : 'var(--border)'}`, borderRadius: 8, padding: '10px 20px', color: isDone ? '#86efac' : 'var(--text-muted)', fontSize: 14, cursor: 'pointer', fontWeight: isDone ? 700 : 400, width: '100%' }}>
        {isDone ? '✅ Lección completada — haz clic para desmarcar' : '☐ Marcar como completada cuando lo entiendas'}
      </button>
    </div>
  )
}
