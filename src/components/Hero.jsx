// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import OrbsBackground from "./OrbsBackground.jsx";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      <OrbsBackground />
      <div className="hero__inner">
          {/* Replace src with your real photo in /public, e.g. /jyotirya.jpg */}
          <div className="hero__photo-frame">
            <img src="myphoto.png" alt="Jyotirya Agrawal" />
            </div>

        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: 40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="hero__eyebrow">
            Electrical Engineering · IIT Bombay · AI & Data Science minor
          </p>
          <h1>Jyotirya Agrawal</h1>
          <p className="hero__headline">
            Full Stack Developer & AI/ML Engineer
          </p>
          <p className="hero__sub">I am a Full Stack and AI/ML Engineer who loves digging into the math behind the magic. I build meaningful applications by bridging complex algorithms with intuitive design.</p>
          <div className="hero__socials">
            <SocialLink href="mailto:jyotiryaagrawal@gmail.com" icon={<MailIcon />} label="Email" />
            <SocialLink href="https://github.com/Jyotirya" icon={<GithubIcon />} label="GitHub" />
            <SocialLink href="https://in.linkedin.com/in/jyotirya-agrawal-03b002324" icon={<LinkedinIcon />} label="LinkedIn" />
          </div>
          <div className="hero__cta">
            <button onClick={() => scrollTo("projects")}>View projects</button>
            <button
              className="hero__ghost"
              onClick={() => scrollTo("about")}
            >
              About me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
    {icon}
  </a>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default Hero;

