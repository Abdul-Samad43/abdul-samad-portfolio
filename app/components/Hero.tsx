"use client";

import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        alignItems: "center",
        padding: "5rem 2rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          width: "650px",
          height: "650px",
          right: "-280px",
          top: "50%",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.09), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "4.5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* =========================
            LEFT — HERO
        ========================== */}

        <div>
          {/* Identity */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "1.4rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 12px rgba(34,197,94,0.45)",
              }}
            />
<span
  style={{
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#7c3aed",
  }}
>
  Hi, I'm Abdul Samad
</span>
            <span
              style={{
                color: "#a78bfa",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              AI Engineer
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              margin: 0,
              maxWidth: "700px",
              fontSize: "clamp(2.55rem, 4.2vw, 4rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.045em",
              fontWeight: 800,
              color: "#f5f3ff",
            }}
          >
            AI Engineer
            <br />
            <span style={{ color: "#f5f3ff" }}>
              building intelligent systems that
            </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              never need a coffee break.
            </span>
          </h1>

          {/* Supporting text */}
          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "610px",
              color: "#9ca3af",
              fontSize: "0.98rem",
              lineHeight: 1.8,
            }}
          >
            I build AI agents, RAG systems, and LLM applications that
            automate repetitive work, turn complex information into answers,
            and help people get more done.
          </p>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.78rem 1.25rem",
                borderRadius: "7px",
                background:
                  "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 700,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.opacity = "1";
              }}
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>

            <a
              
  href="#contact"
  style={{
    display: "inline-flex",
    alignItems: "center",
    padding: "0.78rem 1.25rem",
    borderRadius: "7px",
    border: "1px solid rgba(167,139,250,0.25)",
    background: "rgba(124,58,237,0.04)",
    color: "#c4b5fd",
    textDecoration: "none",
    fontSize: "0.82rem",
    fontWeight: 600,
    transition: "all 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background =
      "rgba(124,58,237,0.1)";
    e.currentTarget.style.borderColor =
      "rgba(167,139,250,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background =
      "rgba(124,58,237,0.04)";
    e.currentTarget.style.borderColor =
      "rgba(167,139,250,0.25)";
  }}
>
  Get in Touch
</a> 
          </div>
        </div>

        {/* =========================
            RIGHT — CODE CARD
        ========================== */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "470px",
              borderRadius: "14px",
              border: "1px solid rgba(124,58,237,0.2)",
              background:
                "linear-gradient(145deg, rgba(15,15,28,0.98), rgba(8,8,16,0.98))",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.35), 0 0 60px rgba(124,58,237,0.05)",
              overflow: "hidden",
            }}
          >
            {/* Code window header */}
            <div
              style={{
                height: "46px",
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
                borderBottom:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#ef4444",
                  }}
                />

                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#eab308",
                  }}
                />

                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
              </div>

              <span
                style={{
                  position: "absolute",
                  left: "68%",
                  transform: "translateX(-50%)",
                  fontSize: "0.68rem",
                  color: "#6b7280",
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                }}
              >
                intelligent_system.py
              </span>
            </div>

            {/* Code */}
            <div
              style={{
                padding: "1.7rem 1.5rem 1.8rem",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "0.8rem",
                lineHeight: 2,
              }}
            >
              <div style={{ color: "#6b7280" }}>
                # intelligent_system.py
              </div>

              <div style={{ height: "0.9rem" }} />

              <div>
                <span style={{ color: "#c084fc" }}>task</span>
                <span style={{ color: "#9ca3af" }}> = </span>
                <span style={{ color: "#60a5fa" }}>receive</span>
                <span style={{ color: "#d1d5db" }}>()</span>
              </div>

              <div>
                <span style={{ color: "#c084fc" }}>context</span>
                <span style={{ color: "#9ca3af" }}> = </span>
                <span style={{ color: "#60a5fa" }}>retrieve</span>
                <span style={{ color: "#d1d5db" }}>(task)</span>
              </div>

              <div>
                <span style={{ color: "#c084fc" }}>decision</span>
                <span style={{ color: "#9ca3af" }}> = </span>
                <span style={{ color: "#60a5fa" }}>reason</span>
                <span style={{ color: "#d1d5db" }}>(context)</span>
              </div>

              <div style={{ height: "0.9rem" }} />

              <div>
                <span style={{ color: "#c084fc" }}>result</span>
                <span style={{ color: "#9ca3af" }}> = </span>
                <span style={{ color: "#60a5fa" }}>execute</span>
                <span style={{ color: "#d1d5db" }}>(decision)</span>
              </div>

              <div style={{ height: "0.9rem" }} />

              <div>
                <span style={{ color: "#c084fc" }}>if</span>
                <span style={{ color: "#d1d5db" }}>
                  {" "}
                  result.success:
                </span>
              </div>

              <div style={{ paddingLeft: "1.5rem" }}>
                <span style={{ color: "#60a5fa" }}>
                  keep_working
                </span>
                <span style={{ color: "#d1d5db" }}>()</span>
              </div>

              {/* Status */}
              <div
                style={{
                  marginTop: "1.8rem",
                  paddingTop: "0.9rem",
                  borderTop:
                    "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  System status
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    color: "#22c55e",
                    fontSize: "0.62rem",
                    fontWeight: 700,
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

                  READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 850px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 600px) {
          section {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}