import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="navbar">
        <div class="nav-left">
          <span class="logo">🌿 The Vo Times</span>
        </div>

        <nav class="nav-right">
          <a href="#">Home</a>
          <a href="#"> Resume</a>
          <a href="#"> Projects</a>
          <a href="#"> About</a>
          <a href="#"> Contact</a>

        </nav>
      </header>
      <main className="page">
  <section className="hero">
    <div className="hero-card">
      <div className="breaking">↗ BREAKING NEWS ↗</div>

      <h1 className="hero-title">
        Raymond Vo makes personal <br />  portfolio website "The Vo Times"
      </h1>

      <p className="hero-subtitle">
        NYC-based student brings his work on display
      </p>

      <div className="hero-footer">
        Read more
      </div>
    </div>
  </section>
</main>

    </>
  )
}

export default App
