// src/components/OrbsBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const OrbsBackground = () => {
  return (
    <div className="orbs-bg">
      {/* Large gradient blobs */}
      <motion.div
        className="orb orb--lg"
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb--md"
        animate={{ x: [60, 10, 80, 60], y: [-10, 10, -20, -10] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb--sm"
        animate={{ x: [-40, -10, -60, -40], y: [20, -10, 10, 20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle animated grid lines */}
      <motion.div
        className="hero-grid hero-grid--one"
        animate={{ backgroundPositionX: ["0px", "80px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="hero-grid hero-grid--two"
        animate={{ backgroundPositionX: ["0px", "-80px"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />
<motion.div
  className="hero-ring"
  animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.18, 0.3, 0.18] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>

    </div>
  );
};

export default OrbsBackground;
