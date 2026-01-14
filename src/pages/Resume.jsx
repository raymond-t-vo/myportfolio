export default function Resume() {
  return (
    <main className="page">
      <section className="resume">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-subtitle">
            Download a PDF or browse highlights below.
          </p>

            <a
            href="https://www.linkedin.com/in/raymond-t-vo/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            >
            View LinkedIn
            </a>


        </header>

        <div className="resume-grid">
          <div className="resume-card">
            <h2>Education</h2>
            <p><strong>Columbia University</strong> — Computer Science (B.S.), Minor in Entrepreneurship & Innovation</p>
            <p>New York, NY</p>
          </div>

          <div className="resume-card">
            <h2>Skills</h2>
            <ul>
              <li>JavaScript / React</li>
              <li>HTML / CSS</li>
              <li>Python</li>
              <li>Git / GitHub</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Experience</h2>
            <p><strong>Role Title</strong> — Company</p>
            <p>1–2 bullet points describing impact.</p>
          </div>


        </div>
      </section>
    </main>
  )
}
