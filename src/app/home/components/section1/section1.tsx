"use client";
import React from "react";
import Terminal from "./Terminal";
import { identity } from "@/data/portfolio";

const Section1 = () => {
  return (
    <div className="shell" style={{ position: "relative" }}>
      <div className="bg-grid" />
      <div className="hero">
        <div className="hero-left">
          <div className="greet">hello world — i&apos;m</div>
          <h1 className="hero-name">
            {identity.firstName}
            <br />
            <span className="last">{identity.lastName}.</span>
          </h1>
          <div className="hero-role">
            <span className="accent">→</span> {identity.role}{" "}
            <span style={{ color: "var(--fg-dim)" }}>·</span> building scalable,
            AI-aware systems
          </div>
          <div className="hero-meta">
            <div>
              <span className="label">based</span>
              <span className="val">{identity.based}</span>
            </div>
            <div>
              <span className="label">experience</span>
              <span className="val">{identity.yearsActive} yrs</span>
            </div>
            <div>
              <span className="label">status</span>
              <span className="val status-pill">
                <span className="blip" />
                available
              </span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <Terminal />
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <span className="line" />
      </div>
    </div>
  );
};

export default Section1;
