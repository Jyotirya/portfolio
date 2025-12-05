// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar__brand">Jyotirya Agrawal</div>
      <nav className="navbar__links">
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("experience")}>Experience</button>
        <button onClick={() => scrollTo("achievements")}>Achievements</button>
      </nav>
    </header>
  );
};

export default Navbar;
