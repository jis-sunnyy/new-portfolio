"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { mailto, profile } from "@/data/profile";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoArrowDown,
} from "react-icons/io5";

const navItems = [
  { id: "b", label: "About" },
  { id: "c", label: "Career" },
  { id: "d", label: "Projects" },
  { id: "e", label: "Contact" },
];

interface DrawerProps {
  open: boolean;
  close: () => void;
  scrollToSection: (sectionId: string) => void;
  activeSection?: string | null;
}

const MainDrawer = ({
  open,
  close,
  scrollToSection,
  activeSection,
}: DrawerProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => close(), 260);
  };

  const handleNavClick = (sectionId: string) => {
    setVisible(false);
    setTimeout(() => {
      scrollToSection(sectionId);
      close();
    }, 260);
  };

  if (!open) return null;

  return (
    <div className={`fs-overlay ${visible ? "fs-overlay--open" : ""}`}>
      <div className="fs-top">
        <span className="fs-top-label">Menu</span>
      </div>

      <nav className="fs-nav">
        {navItems.map((item, i) => (
          <button
            key={item.id}
            className={`fs-nav-item ${
              activeSection === item.id ? "is-active" : ""
            }`}
            style={{ transitionDelay: visible ? `${i * 45 + 60}ms` : "0ms" }}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="fs-nav-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="fs-nav-label">{item.label}</span>
          </button>
        ))}

        <a
          href={profile.resumeUrl}
          download={profile.resumeFileName}
          className="fs-nav-item"
          style={{ transitionDelay: visible ? `${4 * 45 + 60}ms` : "0ms" }}
          onClick={handleClose}
        >
          <span className="fs-nav-index">05</span>
          <span className="fs-nav-label">Résumé</span>
          <IoArrowDown size={18} className="fs-nav-ext" />
        </a>
      </nav>

      <div className="fs-footer">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-social"
        >
          <IoLogoGithub size={17} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="fs-social"
        >
          <IoLogoLinkedin size={17} />
        </a>
        <a href={mailto} className="fs-social">
          <IoMailOutline size={17} />
        </a>
      </div>
    </div>
  );
};

export default MainDrawer;
