import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home.tsx'
import { UserDetails } from './pages/UserDetails.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  )
}
export default App
