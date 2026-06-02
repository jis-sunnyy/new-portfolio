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
                  Node.js, NestJS, Express • Python, FastAPI • GraphQL, REST
                  APIs • JWT Authentication
                </p>
              </div>
              <div className="skill-category">
                <h4>Data & Storage</h4>
                <p>
                  PostgreSQL, MongoDB, MySQL • SQLite, Oracle • Sequelize,
                  TypeORM
                </p>
              </div>
              <div className="skill-category">
                <h4>Cloud & Infrastructure</h4>
                <p>
                  AWS, Azure, Scaleway • CI/CD (GitHub Actions, GitLab CI) •
                  Nginx, PM2 • Linux Server Management
                </p>
              </div>
              <div className="skill-category">
                <h4>AI-Assisted Development</h4>
                <p>
                  Claude Code, Cursor • GitHub Copilot • LLM Integration •
                  AI-powered workflow automation
                </p>
              </div>
              <div className="skill-category">
                <h4>Mobile Development</h4>
                <p>
                  React Native CLI, Expo • iOS & Android • Bluetooth
                  Integration • Barcode Scanning • NFC
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
