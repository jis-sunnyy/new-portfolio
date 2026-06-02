"use client";
import React, { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Keep mounted briefly so the close transition can play
  const [render, setRender] = useState<boolean>(!!project);

  useEffect(() => {
    if (project) {
      setRender(true);
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    const t = setTimeout(() => setRender(false), 280);
    return () => clearTimeout(t);
  }, [project, onClose]);

  if (!render) return null;

  return (
    <div
      className={`modal-backdrop ${project ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-bar">
          <span>~/projects/{project?.slug || "—"}.case</span>
          <button className="x" onClick={onClose} aria-label="Close">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {project && (
          <>
            <div className="modal-hero">
              <div className="modal-tag">
                {project.category.toUpperCase()} · {project.year}
              </div>
              <h2 className="modal-title">{project.title}</h2>
              <div className="modal-sub">{project.subtitle}</div>
              <div className="modal-preview">
                <span>[ {project.slug}.png ]</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h5>// overview</h5>
                <p>{project.description}</p>
                <h5>// problem</h5>
                <p>{project.problem}</p>
                <h5>// solution</h5>
                <p>{project.solution}</p>
                <h5>// highlights</h5>
                <ul>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <aside className="modal-aside">
                <div className="meta-row">
                  <span className="k">client</span>
                  <span className="v">{project.client}</span>
                </div>
                <div className="meta-row">
                  <span className="k">role</span>
                  <span className="v">{project.role}</span>
                </div>
                <div className="meta-row">
                  <span className="k">year</span>
                  <span className="v">{project.year}</span>
                </div>
                <div className="meta-row">
                  <span className="k">stack</span>
                  <div className="tech-chips" style={{ marginTop: 6 }}>
                    {project.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
