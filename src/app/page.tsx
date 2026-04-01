import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./MainComponents/Hero";
import Skills from "./MainComponents/Skills";
import Projects from "./MainComponents/Projects";
import Experience from "./MainComponents/Experience";
import Achievements from "./MainComponents/Achievements";
import Blogs from "./MainComponents/Blogs";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen" style={{ backgroundColor: '#05050a' }}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundColor: '#05050a' }} />
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex flex-col items-center">
          <Hero />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Skills />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Experience />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Projects />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Achievements />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Blogs />

          <Footer />
        </main>
      </div>
    </div>
  );
}
