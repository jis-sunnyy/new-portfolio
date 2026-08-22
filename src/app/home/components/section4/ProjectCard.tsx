"use client";
import React, { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { IoArrowForward } from "react-icons/io5";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The modal portals into document.body, which only exists on the client.
  useEffect(() => setMounted(true), []);

  return (
    <>
      <article className="project-card" data-reveal>
        <header className="project-card-top">
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project-category">{project.category}</span>
        </header>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>

        <ul className="project-tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>

        <button className="project-toggle" onClick={() => setIsOpen(true)}>
          <span>Details</span>
          <IoArrowForward size={14} className="project-toggle-icon" />
        </button>
      </article>

      {mounted && isOpen && (
        <ProjectModal
          project={project}
          index={index}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
