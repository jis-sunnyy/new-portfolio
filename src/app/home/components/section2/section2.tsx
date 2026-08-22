"use client";
import React from "react";
import "./styles.scss";
import { toolkitData } from "@/data/toolkit";
import { profile } from "@/data/profile";

const Section2 = () => {
  return (
    <div className="section" id="about">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="section-body">
          <p className="lede" data-reveal>
            I&apos;m a {profile.role} who takes products from concept to
            production — architecture, implementation, deployment and the
            unglamorous parts in between.
          </p>

          <div className="about-blocks">
            <div className="about-block" data-reveal>
              <h3 className="label">What I do</h3>
              <p className="body-text">
                I build across the full stack: enterprise ERP systems, AI
                integrations, multi-vendor marketplaces and mobile apps. That
                work has shipped into healthcare, e-commerce, aviation and
                logistics — each with its own constraints around scale,
                compliance and uptime.
              </p>
            </div>

            <div className="about-block" data-reveal>
              <h3 className="label">How I work</h3>
              <p className="body-text">
                I&apos;ve led teams and worked directly with clients across
                India, the UAE and Africa, translating business requirements
                into technical decisions. I favour boring, reliable
                architecture over novelty, and I ship things that stay shipped.
              </p>
            </div>
          </div>

          <div className="toolkit">
            <h3 className="label toolkit-label" data-reveal>
              Expertise
            </h3>
            <dl className="toolkit-list">
              {toolkitData.map((row, index) => (
                <div
                  className="toolkit-row"
                  key={row.area}
                  data-reveal
                  style={{ transitionDelay: `${index * 45}ms` }}
                >
                  <dt>{row.area}</dt>
                  <dd>{row.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
