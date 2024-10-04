import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage.tsx'
import { UserDetailsPage } from './pages/UserDetailsPage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
    </Routes>
  )
}
export default App
