// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import AchievementsMarquee from "./components/AchievementsMarquee.jsx";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <main className="page">
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="achievements" className="section section--last">
          <AchievementsMarquee />
        </section>
      </main>
    </div>
  );
};

export default App;
