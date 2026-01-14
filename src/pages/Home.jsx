import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-card">
          <div className="breaking">↗ BREAKING NEWS ↗</div>

          <h1 className="hero-title">
            Raymond Vo makes personal <br /> portfolio website <br />"The Vo Times"
          </h1>

          <p className="hero-subtitle">
            NYC-based student brings his work on display
          </p>

          <div className="hero-footer">
            <NavLink className="read-more-btn" to="/resume">
              Read more →
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}
