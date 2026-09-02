"use client";
import { projects } from "../data/projects";

const icons: Record<string, string> = {
  "youtube-rag-chatbot": "🎬",
  "ai-resume-screener": "📄",
  "multi-document-rag": "🗂️",
  "code-agent": "⚙️",
  "cold-email-agent": "📧",
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c3aed", marginBottom: "0.75rem" }}>
          What I've Built
        </div>
        <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg, #7c3aed, #2563eb)", borderRadius: "2px", marginBottom: "1.25rem" }} />
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0eeff", margin: 0 }}>
          Projects
        </h2>
        <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", color: "#9ca3af", maxWidth: "520px", lineHeight: 1.7 }}>
          Practical AI systems built to solve real-world problems.
        </p>
      </div>

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {projects.map((project) => {
          const icon = icons[project.slug] || "◆";
          return (
            <div
              key={project.id}
              style={{ background: "#0d0d1a", border: "1px solid rgba(124,58,237,0.12)", borderRadius: "14px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.9rem", minHeight: "300px", transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(124,58,237,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa", fontSize: "1.1rem", fontWeight: 700 }}>
                  {icon}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ padding: "5px 12px", fontSize: "0.72rem", fontWeight: 600, borderRadius: "6px", textDecoration: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#f0eeff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    GitHub
                  </a>
                )}
              </div>

              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f0eeff", letterSpacing: "-0.01em", lineHeight: 1.35, margin: 0 }}>
                {project.title}
              </h3>

              <p style={{ fontSize: "0.84rem", color: "#9ca3af", lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "auto" }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{ fontSize: "0.66rem", fontWeight: 600, padding: "3px 8px", borderRadius: "100px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#a78bfa" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}