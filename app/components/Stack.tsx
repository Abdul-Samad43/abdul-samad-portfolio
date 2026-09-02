"use client";

import { SiLangchain, SiGooglegemini, SiPython, SiStreamlit, SiGithub, SiFastapi, SiGit } from "react-icons/si";
import { TbBrain, TbVectorBezier, TbRobot, TbEye, TbCamera, TbChartBar } from "react-icons/tb";

const tools = [
  {
    name: "LangChain",
    role: "LLM Orchestration",
    icon: <SiLangchain size={28} color="#1C8C6C" />,
    bg: "rgba(28,140,108,0.12)",
    border: "rgba(28,140,108,0.25)",
  },
  {
    name: "LangGraph",
    role: "Agent Workflows",
    icon: <TbBrain size={28} color="#a78bfa" />,
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.2)",
  },
{
    name: "AI Agents",
    role: "Autonomous Systems",
    icon: <TbRobot size={28} color="#22c55e" />,
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.2)",
  },
 {
    name: "RAG",
    role: "Retrieval Systems",
    icon: <TbBrain size={28} color="#a78bfa" />,
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    name: "Scikit-learn",
    role: "Machine Learning",
    icon: <TbChartBar size={28} color="#f97316" />,
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.2)",
},
  {
    name: "Google Gemini",
    role: "Embeddings & LLM",
    icon: <SiGooglegemini size={28} color="#4285f4" />,
    bg: "rgba(66,133,244,0.1)",
    border: "rgba(66,133,244,0.2)",
  },
  {
    name: "Groq",
    role: "Inference Engine",
    icon: <TbBrain size={28} color="#f97316" />,
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.2)",
  },
  {
    name: "FAISS",
    role: "Vector Search",
    icon: <TbVectorBezier size={28} color="#60a5fa" />,
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    name: "YOLOv11",
    role: "Object Detection",
    icon: <TbEye size={28} color="#f59e0b" />,
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    name: "OpenCV",
    role: "Computer Vision",
    icon: <TbCamera size={28} color="#ef4444" />,
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.2)",
  },
  {
    name: "FastAPI",
    role: "Backend API",
    icon: <SiFastapi size={28} color="#009688" />,
    bg: "rgba(0,150,136,0.1)",
    border: "rgba(0,150,136,0.2)",
  },
  {
    name: "Python",
    role: "Core Language",
    icon: <SiPython size={28} color="#3b82f6" />,
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    name: "Streamlit",
    role: "Rapid UI",
    icon: <SiStreamlit size={28} color="#ef4444" />,
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.2)",
  },
  {
    name: "GitHub",
    role: "Version Control",
    icon: <SiGithub size={28} color="#f0eeff" />,
    bg: "rgba(240,238,255,0.06)",
    border: "rgba(240,238,255,0.1)",
  },
  {
    name: "Git",
    role: "Version Control",
    icon: <SiGit size={28} color="#f05032" />,
    bg: "rgba(240,80,50,0.1)",
    border: "rgba(240,80,50,0.2)",
},
];

export default function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: "7rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3.5rem" }}>
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
          Technical Stack
        </div>
        <div
          style={{
            width: "32px",
            height: "2px",
            background: "linear-gradient(90deg, #7c3aed, #2563eb)",
            borderRadius: "2px",
            marginBottom: "1.25rem",
          }}
        />
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "#f0eeff",
            marginBottom: "0.875rem",
          }}
        >
          Tools I build with
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#9ca3af",
            maxWidth: "480px",
            lineHeight: 1.8,
          }}
        >
          End-to-end AI development — from LLM orchestration to production deployment.
        </p>
      </div>

      {/* Tools Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "0.875rem",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.name}
            style={{
              background: "#0d0d1a",
              border: `1px solid ${tool.border}`,
              borderRadius: "12px",
              padding: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              transition: "transform 0.2s, border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = tool.border.replace("0.2", "0.5");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = tool.border;
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: tool.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {tool.icon}
            </div>

            {/* Text */}
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#f0eeff",
                  marginBottom: "2px",
                }}
              >
                {tool.name}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#6b7280",
                  fontFamily: "monospace",
                }}
              >
                {tool.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}