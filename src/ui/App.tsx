import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage.tsx'
import { UserDetailsPage } from './pages/UserDetailsPage.tsx'
import { AlbumPage } from './pages/AlbumPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Routes>
  )
}
export default App
