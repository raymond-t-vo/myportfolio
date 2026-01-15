import { useEffect, useState } from "react"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"

const projects = [
  {
    title: "The Vo Times",
    tagline: "Personal Portfolio Website",
    githubUrl: "https://github.com/yourname/ecommerce",
    liveUrl: "https://your-demo-link.com",
    problem: "Just a resume is boring, and my beautiful projects don't get to be seen.",
    solution: "This website built using Vite and React.",
    impact: "Getting you to read this.",
    stack: ["React", "Vite", "HTML", "CSS", "Figma"],
    reflection:
      "This project taught me HTML, CSS and gave me a great introduction into UI.",
    gallery: [img1, img2],

  },
  {
    title: "Tractics Natural Language Query (NLQ)",
    tagline: "AI Natural Language Querying chatbot",
    githubUrl: "",
    liveUrl: "",
    problem: "Construction project managers have many questions, but the volume and complexity of data make it difficult to find answers. Most do not know SQL or have the technical skills needed to query the data effectively.",
    solution: "Built an AI Natural Language Querying chatbot enabling users to ask questions about construction data and receive instant insights.",
    impact: "Recieved great praise from the company. My prototype will be used internally to test if they want to implement it throughout the platform.",
    stack: ["React", "Vite", "HTML", "CSS", "Figma"],
    reflection:
      "This project taught me HTML, CSS and gave me a great introduction into UI.",
    gallery: [img3, img4, img5],

  }
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

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [images.length, onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lb-btn lb-close" onClick={onClose}>✕</button>
        <button className="lb-btn lb-left" onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}>‹</button>

        <img src={images[index]} className="lightbox-img" alt="" />

        <button className="lb-btn lb-right" onClick={() => setIndex((i) => (i + 1) % images.length)}>›</button>
      </div>
    </div>
  )
}

function ProjectCard({ p, onOpenGallery }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <div>
          <h2 className="project-title">{p.title}</h2>
          <p className="project-tagline">{p.tagline}</p>
        </div>

        <div className="project-links">
          <IconLink href={p.githubUrl} label="GitHub">
            <span>GitHub</span>
          </IconLink>
          <IconLink href={p.liveUrl} label="Live">
            <span>Live</span>
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
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>

      {p.gallery?.length > 0 && (
        <div className="thumbs">
          {p.gallery.map((src, i) => (
            <button
              key={src}
              className="thumb"
              onClick={() => onOpenGallery(p.gallery, i)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}

      <div className="divider" />

      <div className="reflection">
        <div className="reflection-title">REFLECTION</div>
        <p className="reflection-text">{p.reflection}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <main className="page">
      <section className="projects">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A few things I've built — problem, solution, and impact.
        </p>

        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              p={p}
              onOpenGallery={(images, index) =>
                setLightbox({ images, index })
              }
            />
          ))}
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  )
}