"use client";
import React from "react";
import { identity } from "@/data/portfolio";

const Section6 = () => {
  const rows: { label: string; val: string; href: string | null; external?: boolean }[] = [
    { label: "email", val: identity.email, href: `mailto:${identity.email}` },
    { label: "github", val: identity.github, href: identity.githubUrl, external: true },
    { label: "linkedin", val: identity.linkedin, href: identity.linkedinUrl, external: true },
    { label: "resume", val: "Jis_Lead_Software_Engineer.pdf", href: identity.resumeUrl },
    { label: "location", val: `${identity.based} · ${identity.timezone}`, href: null },
  ];

  return (
    <div className="section shell">
      <div className="section-head" data-reveal>
        <span className="section-num">05 /</span>
        <h2 className="section-title">contact</h2>
        <span className="section-aside">~/inbox</span>
      </div>

      <div className="contact-wrap">
        <div data-reveal>
          <h2 className="contact-headline">
            Have something <em>worth&nbsp;building?</em>
            <br />
            Let&apos;s talk.
          </h2>
          <a className="contact-cta" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
        </div>

        <div className="contact-list" data-reveal style={{ transitionDelay: "100ms" }}>
          {rows.map((r) =>
            r.href ? (
              <a
                className="contact-row"
                key={r.label}
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener noreferrer" : undefined}
              >
                <span className="label">{r.label}</span>
                <span>{r.val}</span>
                <span className="arrow">↗</span>
              </a>
            ) : (
              <div className="contact-row" key={r.label}>
                <span className="label">{r.label}</span>
                <span>{r.val}</span>
                <span />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Section6;
