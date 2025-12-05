// src/components/AchievementsMarquee.jsx
import React from "react";

const AchievementsMarquee = () => {
  const badges = [
    "AIR 314 · JEE Advanced 2024",
    "AIR 271 · JEE Main 2024",
    "Top 1% · NSEC State Rank, MP",
    "National Merit Award · UCMAS",
    "Inter IIT Tech · BERT from scratch",
  ];

  return (
    <div className="achievements">
      <h2>Highlights</h2>
      <div className="achievements__track">
        <div className="achievements__inner">
          {badges.concat(badges).map((b, i) => (
            <span key={i} className="achievements__badge">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsMarquee;
