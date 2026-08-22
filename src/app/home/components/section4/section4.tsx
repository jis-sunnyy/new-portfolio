"use client";
import React from "react";
import "./styles.scss";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Section4 = () => {
  return (
    <div className="section" id="projects">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <span className="section-index">03</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="section-body">
          <p className="lede" data-reveal>
            Selected production work — {projectsData.length} systems built and
            shipped for clients across India, the UAE and Africa.
          </p>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
