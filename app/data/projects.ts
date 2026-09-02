export type ProjectStatus = "completed" | "building" | "planned";

export type Project = {
  id: number;
  number: string;
  title: string;
  slug: string;
  icon: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};
export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    slug: "youtube-rag-chatbot",
    title: "YouTube RAG Chatbot",
    icon: "🎬",
    status: "completed",
    description: "Paste any YouTube URL and ask questions. Get precise answers instantly — no more scrubbing through hour-long videos.",
    technologies: ["LangChain", "FAISS", "Groq", "Gemini", "Streamlit"],
    github: "https://github.com/Abdul-Samad43/youtube-rag-chatbot",
    demo: "",
  },
  {
    id: 2,
    number: "02",
    slug: "ai-resume-screener",
    title: "AI Resume Screener",
    icon: "📄",
    status: "completed",
    description: "Upload your resume and job description — get an instant match score, missing skills, and exactly what to improve.",
    technologies: ["TF-IDF", "Groq", "Streamlit", "Python"],
    github: "https://github.com/Abdul-Samad43/ai-resume-screener",
    demo: "https://ai-resume-screener-gwmw9dveukcgqxgtg3zvzk.streamlit.app/",
  },
  {
    id: 3,
    number: "03",
    slug: "multi-document-rag",
    title: "AI Multi-Document RAG",
    icon: "🗂️",
    status: "building",
    description: "Upload all your documents, ask one question — get the answer with the exact source it came from across all files.",
    technologies: ["LangChain", "FAISS", "Gemini", "Streamlit", "Python"],
    github: "https://github.com/Abdul-Samad43",
    demo: "",
  },
  {
    id: 4,
    number: "06",
    slug: "code-agent",
    title: "AI Code Agent — Self-Healing & HITL",
    icon: "⚙️",
    status: "completed",
    description: "Most AI tools generate code and stop. This agent generates, executes, and self-heals — autonomously detecting runtime errors and fixing them in a feedback loop. When the code passes, it halts for human approval before saving. Zero guesswork. Zero unsafe execution. Production-grade agentic workflow built with LangGraph and Gemini.",
    technologies: ["LangGraph", "Gemini", "LangChain", "Streamlit", "Python subprocess"],
    github: "https://github.com/Abdul-Samad43/code-agent",
    demo: "",
  },
  {
    id: 5,
    number: "07",
    slug: "cold-email-agent",
    title: "AI Cold Email Agent — Multi-Agent Outreach System",
    icon: "📧",
    status: "completed",
    description: "Generic emails get ignored. This multi-agent system autonomously researches target companies in real-time, identifies their core pain points, and generates hyper-personalized cold emails — then self-reviews and improves them before output. No templates. No guesswork. Just data-driven outreach built with LangGraph, Groq, Tavily, and Firecrawl.",
    technologies: ["LangGraph", "Groq", "Tavily", "Firecrawl", "Streamlit", "Python"],
    github: "https://github.com/Abdul-Samad43/cold-email-agent",
    demo: "https://cold-email-agent-ddumxnlaewwu9ngpghaahi.streamlit.app/",
  },
];