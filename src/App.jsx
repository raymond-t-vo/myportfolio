import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import BreakingLoader from "./components/BreakingLoader"

import "./App.css"

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <BreakingLoader onDone={() => setLoading(false)} />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
