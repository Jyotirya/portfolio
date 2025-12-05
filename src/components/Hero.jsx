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
        <motion.div
          className="hero__photo-card"
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Replace src with your real photo in /public, e.g. /jyotirya.jpg */}
          <div className="hero__photo-frame">
            <img src="/profile-placeholder.jpg" alt="Jyotirya Agrawal" />
            </div>
            <div className="hero__badge">
            <span className="hero__dot" />
            Open to AI / ML, data & full‑stack roles
            </div>


            <div className="hero__chips">
            <span>Deep RL</span>
            <span>NLP · CV</span>
            <span>DevCom · E‑Cell</span>
            </div>
        </motion.div>

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
            Designing and deploying intelligent systems — from deep RL trading
            agents to apps used by 15k+ students.
          </p>
          <p className="hero__sub">
            I enjoy working end‑to‑end: framing the problem, building robust
            models in PyTorch, and shipping clean experiences with React,
            Django, and Flutter.
          </p>
          <div className="hero__cta">
            <button onClick={() => scrollTo("projects")}>View projects</button>
            <button
              className="hero__ghost"
              onClick={() => scrollTo("about")}
            >
              More about me
            </button>
          </div>
          <div className="hero__meta">
            <span>GPA 9.17 · IIT Bombay</span>
            <span>Deep RL · NLP · Computer Vision</span>
            <span>DevCom · E‑Cell · Inter IIT Tech</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
