"use client";
import React from "react";
import "./styles.scss";

const Section2 = () => {
  return (
    <div className="sec2-main-box">
      <div className="sec2-container">
        <div className="common-txt1">About Me</div>
        <hr />

        <div className="about-intro">
          <p className="intro-highlight">
            I&apos;m a Full Stack Engineer passionate about building elegant,
            scalable solutions that solve real-world problems. From concept to
            deployment, I transform ideas into powerful web and mobile
            applications.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h3 className="section-heading">What I Do</h3>
            <p className="common-txt2">
              I craft digital experiences across the full stack. Whether
              it&apos;s architecting a complex ERP system, integrating AI
              capabilities, or building intuitive mobile apps—I bring technical
              excellence and creative problem-solving to every project. My work
              has powered solutions across healthcare, e-commerce, aviation,
              logistics, and more.
            </p>
          </div>

          <div className="about-section">
            <h3 className="section-heading">How I Work</h3>
            <p className="common-txt2">
              I believe great software is born from collaboration. I&apos;ve led
              teams and worked directly with clients across India, UAE, and
              Africa—translating business needs into technical solutions that
              deliver results. My approach balances innovation with reliability,
              ensuring every solution is both cutting-edge and production-ready.
            </p>
          </div>

          <div className="about-section">
            <h3 className="section-heading">My Toolkit</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend Magic</h4>
                <p>
                  React, Next.js, React Native • TypeScript • Tailwind CSS •
                  Redux • Modern UI/UX
                </p>
              </div>
              <div className="skill-category">
                <h4>Backend Power</h4>
                <p>
                  Node.js, NestJS, Express • Python, Django • GraphQL, REST APIs
                  • Real-time Systems
                </p>
              </div>
              <div className="skill-category">
                <h4>Data & Storage</h4>
                <p>
                  PostgreSQL, MongoDB, MySQL • Redis • Database Optimization •
                  Vector Databases
                </p>
              </div>
              <div className="skill-category">
                <h4>Cloud & Infrastructure</h4>
                <p>
                  AWS (EC2, S3) • Docker • CI/CD Pipelines • Nginx • Server
                  Management
                </p>
              </div>
              <div className="skill-category">
                <h4>AI & Emerging Tech</h4>
                <p>
                  LangChain, LlamaIndex • TensorFlow, PyTorch • RAG Systems •
                  NLP & Computer Vision
                </p>
              </div>
              <div className="skill-category">
                <h4>Mobile Development</h4>
                <p>
                  React Native • iOS & Android • Native Integrations • Push
                  Notifications • Bluetooth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
