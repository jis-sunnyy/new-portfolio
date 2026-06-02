"use client";
import React from "react";
import "./styles.scss";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const Section4 = () => {
  return (
    <div className="sec4-main-box">
      <div className="sec4-container">
        <Fade direction="up" triggerOnce>
          <div className="common-txt1">Projects</div>
          <hr className="section-divider" />
        </Fade>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Fade
              key={project.id}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
              <ProjectCard project={project} index={index} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
