"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoOpenOutline,
} from "react-icons/io5";

const navItems = [
  { id: "b", label: "About" },
  { id: "c", label: "Career" },
  { id: "d", label: "Projects" },
];

const MainDrawer = (props: any) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.open) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [props.open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => props?.close(), 400);
  };

  const handleNavClick = (sectionId: string) => {
    setVisible(false);
    setTimeout(() => {
      props?.scrollToSection(sectionId);
      props?.close();
    }, 400);
  };

  if (!props.open) return null;

  return (
    <div className={`fs-overlay ${visible ? "fs-overlay--open" : ""}`}>
      <button className="fs-close" onClick={handleClose}>
        <span className="fs-close-line" />
        <span className="fs-close-line" />
      </button>

      <nav className="fs-nav">
        {navItems.map((item, i) => (
          <button
            key={item.id}
            className={`fs-nav-item ${visible ? "fs-nav-item--in" : ""}`}
            style={{ transitionDelay: visible ? `${i * 70 + 100}ms` : "0ms" }}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="fs-nav-label">{item.label}</span>
          </button>
        ))}

        <a
          href="/Jis_Software_Engineer_CV.pdf"
          download="Jis_Sunny_Resume.pdf"
          className={`fs-nav-item ${visible ? "fs-nav-item--in" : ""}`}
          style={{ transitionDelay: visible ? `${3 * 70 + 100}ms` : "0ms" }}
          onClick={handleClose}
        >
          <span className="fs-nav-label">Resume</span>
          <IoOpenOutline size={18} className="fs-nav-ext" />
        </a>

        <button
          className={`fs-nav-cta ${visible ? "fs-nav-cta--in" : ""}`}
          style={{ transitionDelay: visible ? `${4 * 70 + 100}ms` : "0ms" }}
          onClick={() => handleNavClick("e")}
        >
          Contact
        </button>
      </nav>

      <div className={`fs-footer ${visible ? "fs-footer--in" : ""}`}>
        <a href="https://github.com/jissunny" target="_blank" rel="noopener noreferrer" className="fs-social">
          <IoLogoGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/jis-sunny-28241815a/" target="_blank" rel="noopener noreferrer" className="fs-social">
          <IoLogoLinkedin size={18} />
        </a>
        <a href="mailto:tojis.sunny@gmail.com" className="fs-social">
          <IoMailOutline size={18} />
        </a>
      </div>
    </div>
  );
};

export default MainDrawer;
