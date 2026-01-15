import React from "react"
import bgImage from "../assets/home_bg.jpg"
import mePhoto from "../assets/pfp.png"

export default function Contact() {
  return (
    <main
      className="page home"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <section className="hero">
        <div className="hero-card contact-card">
          <div className="contact-header">
            <img
              className="contact-photo"
              src={mePhoto}
              alt="Photo of Raymond Vo"
            />

            <div>
              <div className="breaking">CONTACT</div>
              <h1 className="hero-title contact-title">Let’s connect.</h1>
              <p className="hero-subtitle contact-subtitle">
                I’m always down to chat about projects, internships, startups, or
                anything you’re building. The fastest way to reach me is email.
              </p>
            </div>
          </div>

          <div className="contact-actions">
            <a
              className="contact-btn primary"
              href="mailto:Rayxia6@gmail.com"
            >
              Email me: Rayxia6@gmail.com
            </a>

            <a
              className="contact-btn"
              href="https://www.linkedin.com/in/raymond-t-vo/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="contact-btn"
              href="https://github.com/raymond-t-vo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
