import { useState, useCallback } from 'react'

function storageKey(username) {
  return `python-explorer-progress-${username}`
}

function load(username) {
  try { return JSON.parse(localStorage.getItem(storageKey(username)) || '{}') }
  catch { return {} }
}

function save(username, data) {
  try { localStorage.setItem(storageKey(username), JSON.stringify(data)) }
  catch {}
}

export function useProgress(username = 'default') {
  const [progress, setProgress] = useState(() => load(username))

  const toggleLesson = useCallback((mId, lIdx) => {
    setProgress(prev => {
      const k = `${mId}-${lIdx}`
      const next = { ...prev, [k]: !prev[k] }
      save(username, next)
      return next
    })
  }, [username])

  const isLessonDone = useCallback(
    (mId, lIdx) => !!progress[`${mId}-${lIdx}`],
    [progress]
  )

  const getMissionProgress = useCallback((m) => {
    const done = m.lessons.filter((_, i) => !!progress[`${m.id}-${i}`]).length
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) }
  }, [progress])

  const totalStats = useCallback((missions) => {
    const total = missions.reduce((a, m) => a + m.lessons.length, 0)
    const done  = missions.reduce((a, m) => a + m.lessons.filter((_, i) => !!progress[`${m.id}-${i}`]).length, 0)
    return { done, total, pct: Math.round((done / total) * 100) }
  }, [progress])

  return { toggleLesson, isLessonDone, getMissionProgress, totalStats }
}
