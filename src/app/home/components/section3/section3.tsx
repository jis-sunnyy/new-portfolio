"use client";
import React from "react";
import { stack } from "@/data/portfolio";

const Section3 = () => {
  const toolCount = stack.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-num">02 /</span>
        <h2 className="section-title">stack</h2>
        <span className="section-aside">
          {stack.length} domains · {toolCount} tools
        </span>
      </div>

      <div className="stack-grid">
        {stack.map((cat, i) => (
          <div
            className="stack-cell"
            data-reveal
            key={cat.title}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="stack-cell-head">
              <span className="stack-cell-title">{cat.title}</span>
              <span className="stack-cell-num">0{i + 1}</span>
            </div>
            <ul className="stack-list">
              {cat.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
