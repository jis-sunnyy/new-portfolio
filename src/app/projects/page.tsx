"use client";
import React from "react";
import { Footer } from "@/components/footer/page";
import { Header } from "@/components/header/page";
import { projectsData } from "@/data/projects";
import ProjectCard from "../home/components/section4/ProjectCard";
import "../home/styles.scss";
import "../home/components/section4/styles.scss";

const AllProjects = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="page-body">
        <div className="section">
          <div className="section-inner">
            <div className="section-head">
              <span className="section-index">03</span>
              <h2 className="section-title">All projects</h2>
            </div>

            <div className="section-body">
              <p className="lede">
                Every production system I&apos;ve built and shipped.
              </p>

              <div className="projects-grid">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
