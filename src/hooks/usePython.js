import { useState, useCallback } from 'react'

const API = import.meta.env.VITE_PISTON_URL || 'https://alcaldia-phyton.ei9yfj.easypanel.host'

export function usePython() {
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)
  const [error, setError] = useState(null)

  const run = useCallback(async (code) => {
    setRunning(true); setError(null); setOutput('')
    try {
      const res = await fetch(`${API}/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      if (!res.ok) throw new Error(`Error ${res.status}`)
      const data = await res.json()
      setOutput(data.stdout || '')
      if (data.stderr) setError(data.stderr)
    } catch (e) {
      setError(`No se pudo conectar.\n${e.message}`)
    } finally {
      setRunning(false) }
  }, [])

  const clear = useCallback(() => { setOutput(''); setError(null) }, [])
  return { run, clear, output, running, error }
}
