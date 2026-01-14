const projects = [
  {
    title: "The Vo Times",
    tagline: "Personal Portfolio Website",
    githubUrl: "https://github.com/yourname/ecommerce",
    liveUrl: "https://your-demo-link.com",
    problem: "Just a resume is boring, and my beautiful projects don't get to be seen.",
    solution:
      "This website built using vite and react.",
    impact: "Getting you to read this.",
    stack: ["React", "Node.js", "Vite", "HTML", "CSS","Figma"],
    reflection: "This project taught me HTML, CSS and gave me a great introduction into UI",
  },
  // Add more projects here
]

function IconLink({ href, label, children }) {
  if (!href) return null
  return (
    <a
      className="icon-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <div>
          <h2 className="project-title">{p.title}</h2>
          <p className="project-tagline">{p.tagline}</p>
        </div>

        <div className="project-links">
          <IconLink href={p.githubUrl} label="GitHub">
            {/* GitHub icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.37 1.14 2.95.87.09-.67.35-1.14.64-1.4-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.4.2 2.44.1 2.7.64.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.83-4.57 5.09.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
              />
            </svg>
          </IconLink>

          <IconLink href={p.liveUrl} label="Live demo">
            {/* External link icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
              />
              <path
                fill="currentColor"
                d="M5 5h6v2H7v10h10v-4h2v6H5V5z"
              />
            </svg>
          </IconLink>
        </div>
      </div>

      <div className="psi-grid">
        <div className="psi-card">
          <div className="psi-label">PROBLEM</div>
          <p>{p.problem}</p>
        </div>
        <div className="psi-card">
          <div className="psi-label">SOLUTION</div>
          <p>{p.solution}</p>
        </div>
        <div className="psi-card">
          <div className="psi-label">IMPACT</div>
          <p>{p.impact}</p>
        </div>
      </div>

      <div className="stack-row">
        <div className="stack-title">{"</>"} Tech Stack</div>
        <div className="chips">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="reflection">
        <div className="reflection-title">REFLECTION</div>
        <p className="reflection-text">{p.reflection}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <main className="page">
      <section className="projects">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A few things I’ve built — problem, solution, and impact.
        </p>

        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
