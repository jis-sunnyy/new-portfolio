"use client";
import React from "react";
import "./styles.scss";
import { experienceData } from "@/data/experience";

const Section3 = () => {
  return (
    <div className="section" id="career">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <span className="section-index">02</span>
          <h2 className="section-title">Career</h2>
        </div>

        <div className="section-body">
          <ol className="career-list">
            {experienceData.map((role, index) => (
              <li
                className="career-item"
                key={role.id}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="career-period">{role.period}</div>

                <div className="career-detail">
                  <h3 className="career-title">{role.title}</h3>
                  <div className="career-company">
                    {role.company}
                    {role.location && (
                      <span className="career-location">{role.location}</span>
                    )}
                  </div>

                  <p className="body-text career-summary">{role.summary}</p>

                  {role.highlights.length > 0 && (
                    <ul className="career-highlights">
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Section3;
