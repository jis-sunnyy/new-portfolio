"use client";
import React from "react";
import "./styles.scss";
import { mailto, profile } from "@/data/profile";
import {
  IoArrowUp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoDownloadOutline,
} from "react-icons/io5";

const socials = [
  {
    label: "GitHub",
    href: profile.github,
    icon: <IoLogoGithub size={17} />,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: <IoLogoLinkedin size={17} />,
  },
  {
    label: "Email",
    href: mailto,
    icon: <IoMailOutline size={17} />,
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">{profile.name}</span>
            <span className="footer-role">{profile.role}</span>
          </div>

          <div className="footer-actions">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="footer-icon"
              aria-label="Download résumé"
            >
              <IoDownloadOutline size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <button
            className="footer-top-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
            <IoArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
