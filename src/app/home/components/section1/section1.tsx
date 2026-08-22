"use client";
import React from "react";
import "./styles.scss";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { mailto, profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github, icon: <IoLogoGithub /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <IoLogoLinkedin /> },
  { label: "Email", href: mailto, icon: <IoMail /> },
];

const Section1 = () => {
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-mark" />
          {profile.role}
        </div>

        <h1 className="hero-name">
          {firstName}
          <br />
          {rest.join(" ")}
        </h1>

        <p className="hero-description">{profile.intro}</p>

        <div className="hero-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="hero-link"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-meta">
        <dl className="hero-meta-list">
          <div className="hero-meta-item">
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="hero-meta-item">
            <dt>Experience</dt>
            <dd>{profile.experience}</dd>
          </div>
          <div className="hero-meta-item">
            <dt>Status</dt>
            <dd>{profile.availability}</dd>
          </div>
        </dl>
        <div className="hero-scroll">Scroll ↓</div>
      </div>
    </div>
  );
};

export default Section1;
