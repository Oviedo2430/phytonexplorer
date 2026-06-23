import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MapPage } from './pages/MapPage'
import { MissionPage } from './pages/MissionPage'
import { ResourcesPage } from './pages/ResourcesPage'
import './styles/globals.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/mision/:id" element={<MissionPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
