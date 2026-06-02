"use client";
import React from "react";
import { about } from "@/data/portfolio";

const Section2 = () => {
  return (
    <div className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-num">01 /</span>
        <h2 className="section-title">about</h2>
        <span className="section-aside">~/about.mdx</span>
      </div>

      <div className="about-grid">
        <p className="about-lede" data-reveal>
          I build elegant, scalable systems for businesses that need to ship.
          From cloud architecture to <em>AI integration</em> — I turn complex
          requirements into production software that holds up under real load.
        </p>

        <div className="about-cols">
          {about.cards.map((c, i) => (
            <div
              className="about-card"
              data-reveal
              key={c.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
