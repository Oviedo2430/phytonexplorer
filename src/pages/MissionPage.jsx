import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MISSIONS } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { ProgressBar } from '../components/ProgressBar'
import { LessonView } from '../components/LessonView'
import { CodeEditor } from '../components/CodeEditor'

export function MissionPage({ user, onLogout }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const mission = MISSIONS.find(m => m.id === Number(id))
  const { toggleLesson, isLessonDone, getMissionProgress } = useProgress(user?.username)
  const [activeLesson, setActiveLesson] = useState(0)

  if (!mission) return <div style={{ padding: 40, textAlign: 'center' }}><button onClick={() => navigate('/')}>← Volver</button></div>

  const { done, total, pct } = getMissionProgress(mission)
  const showProject = activeLesson === -1

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div style={{ background: 'linear-gradient(160deg,#0d0d2b,#1a0a2e)', borderBottom: '1px solid var(--border)', padding: '16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 14, cursor: 'pointer' }}>← Mapa</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 12, color: '#93c5fd' }}>👤 {user?.username}</span>
            <button onClick={onLogout} style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 8, padding: '3px 10px', color: 'var(--text-muted)', fontSize: 12, cursor: 'pointer' }}>Salir</button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 34 }}>{mission.emoji}</span>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{mission.title}</h1>
            <p style={{ margin: '2px 0 0', color: 'var(--text-muted)', fontSize: 13 }}>{mission.description}</p>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
            <span>Progreso</span>
            <span style={{ color: pct===100?'#86efac':'var(--blue)' }}>{done}/{total} lecciones</span>
          </div>
          <ProgressBar pct={pct} />
        </div>
      </div>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '20px 16px' }}>
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto', marginBottom: 20, paddingBottom: 2 }}>
          {mission.lessons.map((l, i) => {
            const d = isLessonDone(mission.id, i)
            const a = activeLesson === i
            return (
              <button key={i} onClick={() => setActiveLesson(i)}
                style={{ background: a?'var(--blue-dark)':'var(--bg-card)', border: `1px solid ${a?'var(--blue)':d?'#16a34a55':'var(--border)'}`, borderRadius: 8, padding: '6px 14px', color: a?'#fff':d?'#86efac':'var(--text-muted)', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: a?700:400 }}>
                {d?'✓':`${i+1}`} {l.title.split('—')[0].trim()}
              </button>
            )
          })}
          <button onClick={() => setActiveLesson(-1)}
            style={{ background: showProject?'#7c3aed':'var(--bg-card)', border: `1px solid ${showProject?'#8b5cf6':'var(--border)'}`, borderRadius: 8, padding: '6px 14px', color: showProject?'#fff':'var(--text-muted)', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: showProject?700:400 }}>
            🎯 Proyecto
          </button>
        </div>
        {!showProject && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px' }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 18 }}>{mission.lessons[activeLesson].title}</h2>
            <LessonView
              lesson={mission.lessons[activeLesson]}
              missionId={mission.id}
              lessonIdx={activeLesson}
              isDone={isLessonDone(mission.id, activeLesson)}
              onToggleDone={() => toggleLesson(mission.id, activeLesson)}
            />
          </div>
        )}
        {showProject && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(90deg,#1e0a3c,#0a1628)', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{mission.project.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4 }}>{mission.project.desc}</div>
            </div>
            <div style={{ padding: 20 }}><CodeEditor initialCode={mission.project.code} height="380px" /></div>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          {Number(id) > 1 && (
            <button onClick={() => { navigate(`/mision/${Number(id)-1}`); setActiveLesson(0) }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 20px', color: 'var(--text)', fontSize: 14, cursor: 'pointer' }}>
              ← Anterior
            </button>
          )}
          <div style={{ flex: 1 }} />
          {pct === 100 && Number(id) < MISSIONS.length && (
            <button onClick={() => { navigate(`/mision/${Number(id)+1}`); setActiveLesson(0) }}
              style={{ background: '#16a34a', border: 'none', borderRadius: 8, padding: '10px 20px', color: '#fff', fontSize: 14, cursor: 'pointer', fontWeight: 700 }}>
              Siguiente misión 🚀
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
