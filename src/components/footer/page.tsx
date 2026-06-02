"use client";
import React from "react";
import {
  IoChevronUp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { identity } from "@/data/portfolio";

interface FooterProps {
  scrollToSection?: (id: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-top">
          <span>© {new Date().getFullYear()} Jis Sunny — Full Stack Engineer</span>

          <div className="footer-social">
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin size={18} />
            </a>
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub size={18} />
            </a>
            <a href={`mailto:${identity.email}`} aria-label="Email">
              <IoMail size={18} />
            </a>
            <a
              href={identity.resumeUrl}
              download="Jis_Sunny_Resume.pdf"
              aria-label="Resume"
            >
              <IoMdDownload size={18} />
            </a>
          </div>

          <span
            className="footer-top-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <IoChevronUp size={14} style={{ verticalAlign: "middle" }} /> back to top
          </span>
        </div>

        <div className="footer-bottom">
          <span>handcrafted in Calicut, Kerala · v2.0</span>
          <span>built with Next.js · IBM Plex Mono</span>
        </div>
      </div>
    </footer>
  );
};
