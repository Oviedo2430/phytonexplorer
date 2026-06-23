import { useState, useCallback } from 'react'
const URL = import.meta.env.VITE_PISTON_URL || 'https://emkc.org/api/v2/piston'
export function usePython() {
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)
  const [error, setError] = useState(null)
  const run = useCallback(async (code) => {
    setRunning(true); setError(null); setOutput('')
    try {
      const res = await fetch(`${URL}/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: 'python', version: '3.10.0', files: [{ name: 'main.py', content: code }], run_timeout: 8000 })
      })
      if (!res.ok) throw new Error(`Error ${res.status}`)
      const { run: r } = await res.json()
      if (r.signal === 'SIGKILL') { setError('⏱️ Tiempo límite (8s). ¿Hay un bucle infinito?'); return }
      setOutput(r.stdout || '')
      if (r.stderr) setError(r.stderr)
    } catch (e) { setError(`No se pudo conectar.\n${e.message}`) }
    finally { setRunning(false) }
  }, [])
  const clear = useCallback(() => { setOutput(''); setError(null) }, [])
  return { run, clear, output, running, error }
}
