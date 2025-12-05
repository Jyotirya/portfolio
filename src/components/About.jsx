import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>

        <div className="about-grid">
          {/* Main Biography Card - Expanded */}
          <motion.div className="grid-item bio-card" variants={itemVariants}>
            <h3>The Engineer & The Builder</h3>
            <p>
              I am a pre-final year undergraduate at <strong>IIT Bombay</strong>, pursuing a major in 
              Electrical Engineering and a minor in <strong>Artificial Intelligence & Data Science</strong>. 
              My technical journey sits at the intersection of hardware logic and software intelligence.
            </p>
            <p>
              As a <strong>Full Stack Developer</strong> and <strong>AI/ML Engineer</strong>, I don't just write code; 
              I engineer solutions. From developing Deep Reinforcement Learning agents that navigate complex financial markets 
              to architecting large-scale applications that digitize campus life, I am driven by the challenge of building 
              systems that are robust under the hood and intuitive on the surface.
            </p>
            <p>
              I believe in using technology to build meaningful things that simplify people's lives. 
              My approach combines rigorous engineering principles with a product-first mindset, ensuring 
              that every line of code serves a purpose.
            </p>
          </motion.div>

          {/* Right Column Container */}
          <div className="right-column">
            
            {/* Collaboration Focus */}
            <motion.div className="grid-item collab-card" variants={itemVariants}>
              <h3>🤝 Philosophy of Collaboration</h3>
              <p>
                I thrive in the feedback loop between design and engineering. I love collaborating with 
                <strong> designers</strong> to translate creative visions into pixel-perfect realities, 
                and working alongside <strong> developers</strong> to architect scalable, maintainable codebases. 
                I believe the best products are born where aesthetics meet engineering rigor.
              </p>
            </motion.div>

            {/* Personal Interests */}
            <motion.div className="grid-item interests-card" variants={itemVariants}>
              <h3>Beyond the Terminal</h3>
              <p>
                Apart from coding, I focus on resetting my mind and staying disciplined.
                I am a <strong>fitness enthusiast</strong> who believes in consistency. 
                I also spend my downtime <strong>reading books</strong> to broaden my perspective 
                and listening to <strong>music</strong> to find my flow.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;