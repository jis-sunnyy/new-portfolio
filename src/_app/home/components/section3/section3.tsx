"use client";
import React from "react";
import "./styles.scss";
import {
  IoRocketSharp,
  IoGlobeOutline,
  IoFlashSharp,
  IoHardwareChipOutline,
  IoBarChartSharp,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoCodeSlashOutline,
  IoLayersOutline,
} from "react-icons/io5";

const Section3 = () => {
  return (
    <div className="sec3-main-box">
      <div className="sec3-container">
        <div className="common-txt1">Career Journey</div>
        <hr />

        <div className="career-timeline">
          <div className="career-item">
            <div className="career-header">
              <div>
                <h3 className="career-title">Software Engineer</h3>
                <div className="career-company">Bairuhatech LLP</div>
              </div>
              <div className="career-period">
                <div className="career-dates">August 2022 – March 2026</div>
              </div>
            </div>

            <div className="career-description">
              <p>
                Led the architecture and delivery of production-grade web and
                mobile applications across logistics, facility management, and
                enterprise SaaS platforms. Architected and deployed cloud
                infrastructure on AWS and Scaleway, implemented CI/CD pipelines,
                and delivered on-site enterprise system deployments in Dubai
                (UAE) and Nairobi (Kenya).
              </p>
            </div>

            <div className="career-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoGlobeOutline />
                </span>
                <span>
                  Delivered on-site enterprise deployments in Dubai (UAE) and
                  Nairobi (Kenya)
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoFlashSharp />
                </span>
                <span>
                  Architected cloud infrastructure on AWS and Scaleway for
                  high-availability production workloads
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoRocketSharp />
                </span>
                <span>
                  Implemented CI/CD pipelines and DevOps automation improving
                  deployment efficiency
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoHardwareChipOutline />
                </span>
                <span>
                  Leveraged Claude Code and Cursor to accelerate development and
                  improve code quality
                </span>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="career-header">
              <div>
                <h3 className="career-title">Full Stack Developer Intern</h3>
                <div className="career-company">Bairuhatech LLP</div>
              </div>
              <div className="career-period">
                <div className="career-dates">January 2021 – July 2022</div>
              </div>
            </div>

            <div className="career-description">
              <p>
                Contributed to the development of web and mobile applications
                while managing concurrent responsibilities at TCS. Assisted in
                building scalable backend services and responsive frontend
                components, and collaborated with the senior engineering team to
                implement new features and API integrations.
              </p>
            </div>

            <div className="career-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoCodeSlashOutline />
                </span>
                <span>
                  Built scalable backend services and responsive frontend
                  components
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoLayersOutline />
                </span>
                <span>
                  Implemented new features and third-party API integrations
                </span>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="career-header">
              <div>
                <h3 className="career-title">Process Associate</h3>
                <div className="career-company">
                  Tata Consultancy Services (TCS)
                </div>
              </div>
              <div className="career-period">
                <div className="career-dates">December 2019 – July 2022</div>
              </div>
            </div>

            <div className="career-description">
              <p>
                Supported enterprise operations by improving internal workflows
                through automation and process optimization. Collaborated with
                global teams to ensure high-quality deliverables and developed
                technical documentation for internal tools and system
                enhancements.
              </p>
            </div>

            <div className="career-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoBarChartSharp />
                </span>
                <span>
                  Enhanced operational efficiency through workflow automation
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoPeopleOutline />
                </span>
                <span>
                  Collaborated with global teams for timely client support
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoDocumentTextOutline />
                </span>
                <span>
                  Developed technical documentation and process improvement
                  initiatives
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
