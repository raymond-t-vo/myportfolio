export default function Resume() {
  return (
    <main className="page">
      <section className="resume">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
         

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
              <li>Python</li>
              <li>Java</li>
              <li>VS Code</li>
              <li>OpenAI API</li>
              
            </ul>
          </div>

          <div className="resume-card">
            <h2>Recent Experience</h2>
            <p><strong>AI Intern – Natural Language Querying</strong> — Tractics</p>
            <p>Built an AI Natural Language Querying chatbot enabling users to ask questions about construction data and receive instant insights.</p>
          </div>


        </div>
      </section>
    </main>
  )
}
