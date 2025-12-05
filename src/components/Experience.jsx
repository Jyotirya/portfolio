// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Developer · DevCom, IIT Bombay",
    period: "Apr 2025 – Present",
    desc: "Working on InstiApp redesign and new features used daily by thousands of students.",
  },
  {
    title: "Events & PR Coordinator · E-Cell, IITB",
    period: "Apr 2025 – Present",
    desc: "Scaling Eureka! and building partnerships with mentors, corporates, and ecosystem leaders.",
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience & leadership</h2>
      <div className="timeline">
        <div className="timeline__line" />
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            className="timeline__item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline__dot" />
            <h3>{item.title}</h3>
            <span className="timeline__period">{item.period}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
