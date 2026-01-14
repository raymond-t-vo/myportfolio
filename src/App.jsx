import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

import './App.css'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}
