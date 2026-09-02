"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — WHO I AM */}
        <div>
          {/* Section Label */}
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7c3aed",
              marginBottom: "0.75rem",
            }}
          >
            Who I Am
          </div>

          <div
            style={{
              width: "32px",
              height: "2px",
              background: "linear-gradient(90deg, #7c3aed, #2563eb)",
              borderRadius: "2px",
              marginBottom: "1.5rem",
            }}
          />

          {/* Heading */}
          <h2
            style={{
              margin: 0,
              marginBottom: "1.75rem",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              fontWeight: 800,
              color: "#f0eeff",
            }}
          >
            I build AI systems
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              around real problems.
            </span>
          </h2>

          {/* Bio */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.15rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.98rem",
                color: "#9ca3af",
                lineHeight: 1.85,
              }}
            >
              I'm{" "}
              <span
                style={{
                  color: "#f0eeff",
                  fontWeight: 600,
                }}
              >
                Abdul Samad
              </span>
              , an AI Engineer focused on building intelligent systems that
              solve{" "}
              <span
                style={{
                  color: "#a78bfa",
                  fontWeight: 500,
                }}
              >
                real-world problems
              </span>
              , not just impressive demos.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.98rem",
                color: "#9ca3af",
                lineHeight: 1.85,
              }}
            >
              I work with{" "}
              <span
                style={{
                  color: "#f0eeff",
                  fontWeight: 600,
                }}
              >
                RAG systems, LLM applications, and AI agents
              </span>
              {" "}
              to build software that can retrieve information, understand
              context, reason through tasks, and produce useful results.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.98rem",
                color: "#9ca3af",
                lineHeight: 1.85,
              }}
            >
              My approach is simple: start with a problem, understand why it
              is painful, then build an AI solution that makes the work
              easier, faster, or more reliable.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.98rem",
                color: "#9ca3af",
                lineHeight: 1.85,
              }}
            >
              I learn by building. Each project is an opportunity to turn what
              I learn into something{" "}
              <span
                style={{
                  color: "#f0eeff",
                  fontWeight: 600,
                }}
              >
                usable, testable, and deployable
              </span>
              .
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "2.25rem",
              display: "flex",
              gap: "0.85rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:Abdulsamadlaghari01@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.75rem 1.5rem",
                background:
                  "linear-gradient(135deg, #7c3aed, #2563eb)",
                borderRadius: "7px",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.82rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Let's Work Together
            </a>

            <a
              href="https://github.com/Abdul-Samad43"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.75rem 1.5rem",
                background: "transparent",
                border: "1px solid rgba(124,58,237,0.35)",
                borderRadius: "7px",
                color: "#a78bfa",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(124,58,237,0.08)";
                e.currentTarget.style.borderColor = "#a78bfa";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor =
                  "rgba(124,58,237,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* RIGHT — ENGINEERING PROFILE */}
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              padding: "1.75rem",
              background:
                "linear-gradient(145deg, #0e0e1c, #0a0a14)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "14px",
              boxShadow:
                "0 25px 70px rgba(0,0,0,0.25)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.75rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "0.4rem",
                  }}
                >
                  Engineering Profile
                </div>

                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f0eeff",
                  }}
                >
                  AI Engineer
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#22c55e",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow:
                      "0 0 10px rgba(34,197,94,0.5)",
                  }}
                />
                BUILDING
              </div>
            </div>

            {/* Focus */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {[
                {
                  title: "RAG Systems",
                  text: "Grounding LLMs with relevant knowledge.",
                },
                {
                  title: "LLM Applications",
                  text: "Turning language models into useful software.",
                },
                {
                  title: "AI Agents",
                  text: "Building systems that reason and take action.",
                },
                {
                  title: "AI Engineering",
                  text: "Moving from prototypes toward deployable systems.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "0.9rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(124,58,237,0.045)",
                    border:
                      "1px solid rgba(124,58,237,0.1)",
                  }}
                >
                  <div
                    style={{
                      color: "#f0eeff",
                      fontSize: "0.8rem",
                      fontWeight: 650,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "0.72rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#6b7280",
                fontSize: "0.7rem",
                lineHeight: 1.6,
              }}
            >
              Problem first. Engineering second.{" "}
              <span style={{ color: "#a78bfa" }}>
                AI where it actually helps.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}