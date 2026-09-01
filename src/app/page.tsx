import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./MainComponents/Hero";
import Skills from "./MainComponents/Skills";
import Projects from "./MainComponents/Projects";
import Experience from "./MainComponents/Experience";
import Achievements from "./MainComponents/Achievements";
import Blogs from "./MainComponents/Blogs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05050a]">
      <Navbar />
      <main>
        <Hero />
        <div className="section-rule" />
        <Experience />
        <div className="section-rule" />
        <Skills />
        <div className="section-rule" />
        <Projects />
        <div className="section-rule" />
        <Achievements />
        <div className="section-rule" />
        <Blogs />
        <Footer />
      </main>
    </div>
  );
}
