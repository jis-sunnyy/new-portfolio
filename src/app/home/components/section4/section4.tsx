"use client";
import React from "react";
import { career } from "@/data/portfolio";

const Section4 = () => {
  return (
    <div className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-num">03 /</span>
        <h2 className="section-title">career</h2>
        <span className="section-aside">timeline · since 2019</span>
      </div>

      <div className="career-list">
        {career.map((job, i) => (
          <div
            className="career-item"
            data-reveal
            key={job.company}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="career-when">
              {job.when}
              {job.current && <span className="current">CURRENT</span>}
            </div>
            <div>
              <h3 className="career-role">{job.role}</h3>
              <div className="career-co">{job.company}</div>
              <p className="career-desc">{job.desc}</p>
              <ul className="career-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
