import { useState, useCallback } from 'react'

const SESSION_KEY = 'python-explorer-user'

// Usuarios definidos en variable de entorno VITE_USERS
// Formato: "usuario1:1234,usuario2:5678"
function getUsers() {
  const raw = import.meta.env.VITE_USERS || 'mati:1234'
  return raw.split(',').reduce((acc, pair) => {
    const [user, pin] = pair.trim().split(':')
    if (user && pin) acc[user.toLowerCase()] = pin
    return acc
  }, {})
}

function loadSession() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) }
  catch { return null }
}

export function useAuth() {
  const [user, setUser] = useState(loadSession)

  const login = useCallback((username, pin) => {
    const users = getUsers()
    const key = username.toLowerCase().trim()
    if (users[key] && users[key] === pin.trim()) {
      const session = { username: key }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
      setUser(session)
      return { ok: true }
    }
    return { ok: false, error: 'Usuario o PIN incorrecto' }
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY)
    setUser(null)
  }, [])

  return { user, login, logout }
}
