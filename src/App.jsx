import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { LoginPage }     from './pages/LoginPage'
import { MapPage }       from './pages/MapPage'
import { MissionPage }   from './pages/MissionPage'
import { ResourcesPage } from './pages/ResourcesPage'
import './styles/globals.css'

export default function App() {
  const { user, login, logout } = useAuth()

  if (!user) return <LoginPage onLogin={login} />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<MapPage user={user} onLogout={logout} />} />
        <Route path="/mision/:id" element={<MissionPage user={user} onLogout={logout} />} />
        <Route path="/recursos"   element={<ResourcesPage user={user} onLogout={logout} />} />
        <Route path="*"           element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
