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
                <span className="career-badge current">Current</span>
                <div className="career-dates">August 2022 - Present</div>
              </div>
            </div>

            <div className="career-description">
              <p>
                Leading the design, development, and delivery of multi-platform
                applications while architecting cloud infrastructure on AWS.
                Working directly with international clients across Dubai and
                Nairobi, managing full deployment cycles and integrating
                cutting-edge AI/LLM capabilities into production systems.
              </p>
            </div>

            <div className="career-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoRocketSharp />
                </span>
                <span>
                  Reduced project delivery timelines by 20% through agile
                  methodologies
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoGlobeOutline />
                </span>
                <span>
                  Delivered onsite implementations in Dubai (UAE) and Nairobi
                  (Kenya)
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoFlashSharp />
                </span>
                <span>
                  Architected scalable cloud infrastructure improving
                  performance and uptime
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoHardwareChipOutline />
                </span>
                <span>
                  Integrated AI/LLM APIs and vector databases for intelligent
                  solutions
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
                <div className="career-dates">December 2019 - July 2022</div>
              </div>
            </div>

            <div className="career-description">
              <p>
                Improved internal business workflows through automation and
                process optimization in a global delivery environment.
                Collaborated with cross-functional teams to ensure high-quality
                project deliverables and developed technical documentation for
                system enhancements.
              </p>
            </div>

            <div className="career-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <IoBarChartSharp />
                </span>
                <span>
                  Enhanced operational efficiency through automation tools
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
                  Developed comprehensive technical documentation and process
                  improvements
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
