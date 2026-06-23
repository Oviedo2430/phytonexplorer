import Editor from '@monaco-editor/react'
import { usePython } from '../hooks/usePython'
import { useState } from 'react'
export function CodeEditor({ initialCode = '', height = '280px' }) {
  const [code, setCode] = useState(initialCode)
  const { run, clear, output, running, error } = usePython()
  const btn = (bg, color) => ({ background: bg, color, border: '1px solid #30363d', borderRadius: 6, padding: '4px 12px', fontSize: 12, cursor: 'pointer' })
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: '#0d1117', borderBottom: '1px solid #30363d' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>🐍 main.py</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => { setCode(initialCode); clear() }} style={btn('#21262d','#e6edf3')}>↺ Reiniciar</button>
          <button onClick={() => { clear(); run(code) }} disabled={running} style={btn(running ? '#388bfd33' : '#238636','#e6edf3')}>{running ? '⏳ Ejecutando...' : '▶ Ejecutar'}</button>
        </div>
      </div>
      <Editor height={height} language="python" theme="vs-dark" value={code} onChange={v => setCode(v ?? '')}
        options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false, wordWrap: 'on', padding: { top: 12, bottom: 12 }, automaticLayout: true }} />
      {(output || error || running) && (
        <div style={{ background: '#010409', borderTop: '1px solid #30363d', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: 13, maxHeight: 180, overflowY: 'auto' }}>
          {running && <span style={{ color: 'var(--text-muted)' }}>Ejecutando...</span>}
          {output && <pre style={{ color: '#e6edf3', margin: 0, whiteSpace: 'pre-wrap' }}>{output}</pre>}
          {error && <pre style={{ color: '#f85149', margin: output ? '8px 0 0' : 0, whiteSpace: 'pre-wrap' }}>{error}</pre>}
        </div>
      )}
    </div>
  )
}
