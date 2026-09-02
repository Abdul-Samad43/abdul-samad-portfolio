"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
          Contact
        </div>

        <div
          style={{
            width: "32px",
            height: "2px",
            background: "linear-gradient(90deg, #7c3aed, #2563eb)",
            borderRadius: "2px",
            margin: "0 auto 1.5rem",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "#f0eeff",
            marginBottom: "1rem",
          }}
        >
          Have a problem worth solving?
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#9ca3af",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          I&apos;m open to AI engineering projects, automation opportunities,
          internships, and conversations around intelligent software.
        </p>
      </div>

      {/* Contact Box */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#0d0d1a",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "16px",
          padding: "3rem 2.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gradient line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #7c3aed, #2563eb, transparent)",
          }}
        />

        {/* Availability badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            borderRadius: "100px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />

          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#22c55e",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}
        >
          {[
            {
              icon: <FaEnvelope size={16} />,
              label: "Email",
              value: "Abdulsamadlaghari01@gmail.com",
              href: "mailto:Abdulsamadlaghari01@gmail.com",
              color: "#a78bfa",
              bg: "rgba(124,58,237,0.08)",
              borderColor: "rgba(124,58,237,0.2)",
            },
            {
              icon: <FaGithub size={16} />,
              label: "GitHub",
              value: "github.com/Abdul-Samad43",
              href: "https://github.com/Abdul-Samad43",
              color: "#f0eeff",
              bg: "rgba(240,238,255,0.05)",
              borderColor: "rgba(240,238,255,0.1)",
            },
            {
              icon: <FaLinkedinIn size={16} />,
              label: "LinkedIn",
              value: "abdul-samad-95541a388",
              href: "https://www.linkedin.com/in/abdul-samad-95541a388",
              color: "#60a5fa",
              bg: "rgba(96,165,250,0.08)",
              borderColor: "rgba(96,165,250,0.2)",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={
                item.label !== "Email" ? "noopener noreferrer" : undefined
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: item.bg,
                border: `1px solid ${item.borderColor}`,
                borderRadius: "10px",
                textDecoration: "none",
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = item.borderColor;
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: item.bg,
                  border: `1px solid ${item.borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#6b7280",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}