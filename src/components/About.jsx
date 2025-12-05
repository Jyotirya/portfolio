// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About</h2>
      <p>
        Second‑year Electrical Engineering undergrad at IIT Bombay, pursuing a
        minor in AI & Data Science. I like working at the intersection of ML,
        product, and systems — from deep RL trading strategies to full‑stack
        apps used across campus. [file:1]
      </p>
      <p>
        Recently, I have worked on deep RL for stock trading, multilingual NLP,
        wildlife computer vision, and InstiApp, a 15k+ download app digitising
        student life at IITB. Replace this text with your exact narrative. [file:1]
      </p>
    </motion.div>
  );
};

export default About;
