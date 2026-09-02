import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <div style={{ height: "1px", background: "rgba(124,58,237,0.08)", maxWidth: "1100px", margin: "0 auto" }} />
      <Stack />
      <div style={{ height: "1px", background: "rgba(124,58,237,0.08)", maxWidth: "1100px", margin: "0 auto" }} />
      <Projects />
      <div style={{ height: "1px", background: "rgba(124,58,237,0.08)", maxWidth: "1100px", margin: "0 auto" }} />
      <About />
      <div style={{ height: "1px", background: "rgba(124,58,237,0.08)", maxWidth: "1100px", margin: "0 auto" }} />
      <Contact />
    </main>
  );
}