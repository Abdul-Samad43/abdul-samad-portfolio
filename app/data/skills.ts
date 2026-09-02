export type SkillLevel =
  | "learning"
  | "working-knowledge"
  | "project-experience"
  | "advanced";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI & LLMs",
    skills: [
      { name: "LangChain", level: "project-experience" },
      { name: "LangGraph", level: "learning" },
      { name: "Google Gemini", level: "project-experience" },
      { name: "Groq", level: "project-experience" },
      { name: "RAG", level: "project-experience" },
      { name: "Embeddings", level: "project-experience" },
      { name: "Prompt Engineering", level: "project-experience" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: "working-knowledge" },
      { name: "PyTorch", level: "learning" },
      { name: "TF-IDF", level: "working-knowledge" },
    ],
  },
  {
    category: "Computer Vision",
    skills: [
      { name: "YOLOv11", level: "project-experience" },
      { name: "OpenCV", level: "project-experience" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Python", level: "working-knowledge" },
      { name: "FastAPI", level: "learning" },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "NumPy", level: "working-knowledge" },
      { name: "Pandas", level: "working-knowledge" },
      { name: "FAISS", level: "project-experience" },
    ],
  },
  {
    category: "Frontend & Deployment",
    skills: [
      { name: "Streamlit", level: "project-experience" },
      { name: "React", level: "learning" },
      { name: "GitHub", level: "working-knowledge" },
    ],
  },
];