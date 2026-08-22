"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  index: number;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  index,
  onClose,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `project-modal-title-${project.id}`;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      // Keep focus inside the dialog.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Remember what was focused so it can be restored on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [handleKeyDown]);

  return createPortal(
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Backdrop is a sibling, so a click inside the panel never closes it. */}
      <div className="project-modal-backdrop" onClick={onClose} />

      <div className="project-modal-panel" ref={panelRef}>
        <header className="project-modal-head">
          <div className="project-modal-meta">
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="project-category">{project.category}</span>
          </div>

          <button
            className="project-modal-close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close project details"
          >
            <IoClose size={20} />
          </button>
        </header>

        <div className="project-modal-body">
          <h3 className="project-modal-title" id={titleId}>
            {project.title}
          </h3>
          <p className="project-modal-subtitle">{project.subtitle}</p>

          <p className="project-modal-description">{project.description}</p>

          {project.highlights.length > 0 && (
            <>
              <h4 className="project-modal-label">Highlights</h4>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="project-modal-label">Built with</h4>
          <ul className="project-tech project-modal-tech">
            {project.technologies.map((tech) => (
              <li key={tech} className="tech-tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
