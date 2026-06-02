"use client";
import React, { useEffect, useState } from "react";
import { projectsData, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const Section5 = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [hover, setHover] = useState<Project | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-num">04 /</span>
        <h2 className="section-title">selected work</h2>
        <span className="section-aside">
          {projectsData.length} projects · 2022–2024
        </span>
      </div>

      <div className="projects-wrap">
        {projectsData.map((p, i) => (
          <button
            type="button"
            className="project-row"
            data-reveal
            key={p.id}
            style={{ transitionDelay: `${i * 60}ms` }}
            onMouseEnter={() => setHover(p)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setActive(p)}
          >
            <span className="proj-num">/ {String(i + 1).padStart(2, "0")}</span>
            <span className="proj-tag">{p.category.toUpperCase()}</span>
            <span className="proj-info">
              <span className="proj-name" style={{ display: "block" }}>
                {p.title}
              </span>
              <span className="proj-sub">
                {p.subtitle} · {p.year}
              </span>
            </span>
            <span className="proj-arrow">→</span>
          </button>
        ))}
      </div>

      {/* Floating cursor preview */}
      <div
        className={`proj-preview ${hover ? "visible" : ""}`}
        style={{ left: pos.x, top: pos.y - 80 }}
      >
        <div className="proj-preview-inner">
          <div className="proj-preview-bg" />
          <div className="proj-preview-label">
            {hover ? `${hover.category} · view case` : ""}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default Section5;
