import Editor from '@monaco-editor/react'
import { usePython } from '../hooks/usePython'
import { useState } from 'react'

export function CodeEditor({ initialCode = '', height = '280px' }) {
  const [code, setCode]   = useState(initialCode)
  const [stdin, setStdin] = useState('')
  const [showStdin, setShowStdin] = useState(false)
  const { run, clear, output, running, error } = usePython()

  const handleRun = () => {
    clear()
    run(code, stdin)
  }

  const handleReset = () => {
    setCode(initialCode)
    setStdin('')
    clear()
  }

  const hasInput = code.includes('input(')

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>

      {/* Barra superior */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: '#0d1117', borderBottom: '1px solid #30363d' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          🐍 main.py
        </span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {hasInput && (
            <button
              onClick={() => setShowStdin(!showStdin)}
              style={{
                background: showStdin ? 'rgba(251,191,36,0.15)' : 'transparent',
                color: showStdin ? '#fbbf24' : '#7c93c3',
                border: `1px solid ${showStdin ? '#fbbf24' : '#30363d'}`,
                borderRadius: 6, padding: '3px 10px',
                fontSize: 11, cursor: 'pointer',
              }}
            >
              📥 Respuestas
            </button>
          )}
          <button onClick={handleReset} style={btnStyle('#21262d', '#e6edf3')}>↺ Reiniciar</button>
          <button onClick={handleRun} disabled={running} style={btnStyle(running ? '#388bfd33' : '#238636', '#e6edf3')}>
            {running ? '⏳ Ejecutando...' : '▶ Ejecutar'}
          </button>
        </div>
      </div>

      {/* Panel de stdin — aparece cuando el código tiene input() */}
      {hasInput && showStdin && (
        <div style={{ background: '#0a0f1a', borderBottom: '1px solid #30363d', padding: '10px 14px' }}>
          <div style={{ fontSize: 12, color: '#fbbf24', marginBottom: 6, fontWeight: 700 }}>
            📥 Escribe aquí las respuestas del programa (una por línea, en orden)
          </div>
          <div style={{ fontSize: 11, color: '#4a6080', marginBottom: 8 }}>
            Si el programa pregunta 3 cosas, escribe 3 líneas. Luego pulsa ▶ Ejecutar.
          </div>
          <textarea
            value={stdin}
            onChange={e => setStdin(e.target.value)}
            placeholder={'respuesta 1\nrespuesta 2\nrespuesta 3'}
            rows={4}
            style={{
              width: '100%', background: '#060a10',
              border: '1px solid #fbbf2444', borderRadius: 8,
              color: '#fbbf24', fontFamily: 'var(--font-mono)',
              fontSize: 13, padding: '8px 12px', resize: 'vertical',
              outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
      )}

      {/* Aviso automático si hay input() pero stdin está oculto */}
      {hasInput && !showStdin && (
        <div
          onClick={() => setShowStdin(true)}
          style={{
            background: 'rgba(251,191,36,0.06)', borderBottom: '1px solid rgba(251,191,36,0.2)',
            padding: '8px 14px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8,
          }}
        >
          <span style={{ fontSize: 14 }}>📥</span>
          <span style={{ fontSize: 12, color: '#fbbf24' }}>
            Este código pregunta cosas. Haz clic aquí para escribir las respuestas antes de ejecutar.
          </span>
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
        <div style={{ background: '#010409', borderTop: '1px solid #30363d', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: 13, maxHeight: 200, overflowY: 'auto' }}>
          {running && <span style={{ color: 'var(--text-muted)' }}>Ejecutando...</span>}
          {output && <pre style={{ color: '#e6edf3', margin: 0, whiteSpace: 'pre-wrap' }}>{output}</pre>}
          {error && <pre style={{ color: '#f85149', margin: output ? '8px 0 0' : 0, whiteSpace: 'pre-wrap' }}>{error}</pre>}
        </div>
      )}
    </div>
  )
}

function btnStyle(bg, color) {
  return {
    background: bg, color,
    border: '1px solid #30363d',
    borderRadius: 6, padding: '4px 12px',
    fontSize: 12, cursor: 'pointer',
  }
}
