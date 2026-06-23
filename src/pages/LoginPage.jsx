import { useState } from 'react'

export function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [pin, setPin]           = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = () => {
    if (!username.trim() || !pin.trim()) {
      setError('Ingresa tu usuario y PIN'); return
    }
    setLoading(true); setError('')
    setTimeout(() => {
      const result = onLogin(username, pin)
      if (!result.ok) { setError(result.error); setLoading(false) }
    }, 400)
  }

  const handleKeyDown = (e) => { if (e.key === 'Enter') handleSubmit() }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div style={{ width: '100%', maxWidth: 360 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🐍🚀</div>
          <h1 style={{ fontSize: 26, fontWeight: 900, margin: 0, color: '#fff' }}>Python Explorer</h1>
          <p style={{ color: 'var(--text-muted)', margin: '6px 0 0', fontSize: 14 }}>
            Ingresa para continuar tu misión
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 16, padding: '28px 24px',
        }}>
          {/* Usuario */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>
              👤 Nombre de usuario
            </label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tu nombre"
              autoComplete="username"
              style={inputStyle}
            />
          </div>

          {/* PIN */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>
              🔑 PIN (4 dígitos)
            </label>
            <input
              value={pin}
              onChange={e => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              onKeyDown={handleKeyDown}
              placeholder="••••"
              type="password"
              inputMode="numeric"
              maxLength={4}
              autoComplete="current-password"
              style={{ ...inputStyle, letterSpacing: 6, fontSize: 20, textAlign: 'center' }}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 8, padding: '10px 14px', marginBottom: 16,
              color: '#f87171', fontSize: 13, textAlign: 'center',
            }}>
              {error}
            </div>
          )}

          {/* Botón */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%', padding: '12px',
              background: loading ? '#1d4ed8' : 'var(--blue)',
              border: 'none', borderRadius: 10,
              color: '#fff', fontSize: 16, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? '🚀 Entrando...' : 'Iniciar misión →'}
          </button>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: 12, marginTop: 20 }}>
          Pide tu usuario y PIN al administrador
        </p>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%', padding: '10px 14px',
  background: '#060a10', border: '1px solid var(--border)',
  borderRadius: 8, color: 'var(--text)', fontSize: 15,
  outline: 'none', boxSizing: 'border-box',
  fontFamily: 'var(--font-ui)',
}
