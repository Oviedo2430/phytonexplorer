import { useState, useCallback } from 'react'
const KEY = 'python-explorer-progress'
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} } }
const save = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)) } catch {} }
export function useProgress() {
  const [progress, setProgress] = useState(load)
  const toggleLesson = useCallback((mId, lIdx) => {
    setProgress(prev => { const k = `${mId}-${lIdx}`; const n = { ...prev, [k]: !prev[k] }; save(n); return n })
  }, [])
  const isLessonDone = useCallback((mId, lIdx) => !!progress[`${mId}-${lIdx}`], [progress])
  const getMissionProgress = useCallback((m) => {
    const done = m.lessons.filter((_, i) => !!progress[`${m.id}-${i}`]).length
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) }
  }, [progress])
  const totalStats = useCallback((missions) => {
    const total = missions.reduce((a, m) => a + m.lessons.length, 0)
    const done = missions.reduce((a, m) => a + m.lessons.filter((_, i) => !!progress[`${m.id}-${i}`]).length, 0)
    return { done, total, pct: Math.round((done / total) * 100) }
  }, [progress])
  return { toggleLesson, isLessonDone, getMissionProgress, totalStats }
}
