import Editor from '@monaco-editor/react'
import { usePython } from '../hooks/usePython'
import { useState, useEffect } from 'react'

export function CodeEditor({ initialCode = '', height = '280px' }) {
  const [code, setCode]         = useState(initialCode)
  const [stdin, setStdin]       = useState('')
  const [showStdin, setShowStdin] = useState(false)
  const { run, clear, output, running, error } = usePython()

  // Detectar si el código usa input()
  const hasInput = code.includes('input(')

  // Contar cuántos input() hay para dar la pista correcta
  const inputCount = (code.match(/input\(/g) || []).length

  // Mostrar el panel automáticamente si hay input()
  useEffect(() => {
    if (hasInput) setShowStdin(true)
    else setShowStdin(false)
  }, [hasInput])

  const handleRun = () => {
    clear()
    run(code, stdin)
  }

  const handleReset = () => {
    setCode(initialCode)
    setStdin('')
    clear()
  }

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>

      {/* Barra superior */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 14px', background: '#0d1117', borderBottom: '1px solid #30363d'
      }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          🐍 main.py
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={handleReset} style={btn('#21262d', '#e6edf3')}>↺ Reiniciar</button>
          <button onClick={handleRun} disabled={running} style={btn(running ? '#388bfd33' : '#238636', '#e6edf3')}>
            {running ? '⏳ Ejecutando...' : '▶ Ejecutar'}
          </button>
        </div>
      </div>

      {/* Panel stdin — aparece automáticamente si hay input() */}
      {hasInput && (
        <div style={{
          background: '#0c0f1a',
          borderBottom: '1px solid rgba(251,191,36,0.3)',
          padding: '12px 14px',
        }}>
          <div style={{ fontSize: 12, color: '#fbbf24', fontWeight: 700, marginBottom: 4 }}>
            📥 Respuestas para el programa
          </div>
          <div style={{ fontSize: 11, color: '#4a6080', marginBottom: 8 }}>
            {inputCount === 1
              ? 'Este código pregunta 1 cosa. Escríbela aquí y luego ejecuta.'
              : `Este código pregunta ${inputCount} cosas. Escribe una respuesta por línea y luego ejecuta.`}
          </div>
          <textarea
            value={stdin}
            onChange={e => setStdin(e.target.value)}
            placeholder={
              inputCount === 1
                ? 'Tu respuesta aquí'
                : Array.from({length: inputCount}, (_, i) => `respuesta ${i+1}`).join('\n')
            }
            rows={Math.min(inputCount + 1, 5)}
            style={{
              width: '100%',
              background: '#060a10',
              border: '1px solid rgba(251,191,36,0.3)',
              borderRadius: 8,
              color: '#fbbf24',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              padding: '8px 12px',
              resize: 'vertical',
              outline: 'none',
              boxSizing: 'border-box',
              lineHeight: 1.6,
            }}
          />
        </div>
      )}

      {/* Editor Monaco */}
      <Editor
        height={height}
        language="python"
        theme="vs-dark"
        value={code}
        onChange={val => setCode(val ?? '')}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          lineNumbers: 'on',
          folding: false,
          automaticLayout: true,
          padding: { top: 12, bottom: 12 },
          fontFamily: "'Fira Code', 'Courier New', monospace",
        }}
      />

      {/* Output */}
      {(output || error || running) && (
        <div style={{
          background: '#010409', borderTop: '1px solid #30363d',
          padding: '12px 16px', fontFamily: 'var(--font-mono)',
          fontSize: 13, maxHeight: 200, overflowY: 'auto'
        }}>
          {running && <span style={{ color: 'var(--text-muted)' }}>Ejecutando...</span>}
          {output && <pre style={{ color: '#e6edf3', margin: 0, whiteSpace: 'pre-wrap' }}>{output}</pre>}
          {error && <pre style={{ color: '#f85149', margin: output ? '8px 0 0' : 0, whiteSpace: 'pre-wrap' }}>{error}</pre>}
        </div>
      )}
    </div>
  )
}

function btn(bg, color) {
  return {
    background: bg, color,
    border: '1px solid #30363d',
    borderRadius: 6, padding: '4px 12px',
    fontSize: 12, cursor: 'pointer',
  }
}
