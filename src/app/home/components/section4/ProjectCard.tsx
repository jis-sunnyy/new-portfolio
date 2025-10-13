"use client";
import React, { useState } from "react";
import { Project } from "@/data/projects";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card" data-index={index}>
      <div className="project-card-header">
        <div className="project-number">0{project.id}</div>
        <div className="project-category">{project.category}</div>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-tech-stack">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`project-details ${isExpanded ? "expanded" : "collapsed"}`}
        >
          <p className="project-description">{project.description}</p>

          <div className="project-highlights">
            <h4>Key Highlights:</h4>
            <ul>
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Show Less <IoChevronUp size={16} />
            </>
          ) : (
            <>
              Learn More <IoChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
