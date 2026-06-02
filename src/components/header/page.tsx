"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FiSun, FiMoon } from "react-icons/fi";
import { identity } from "@/data/portfolio";

interface HeaderProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const NAV_LINKS = [
  { num: "01", label: "about", id: "b" },
  { num: "02", label: "stack", id: "c" },
  { num: "03", label: "career", id: "d" },
  { num: "04", label: "work", id: "e" },
  { num: "05", label: "contact", id: "f" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (e) {}
      return next;
    });
  }, []);

  return (
    <button
      className="icon-btn"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`${theme === "dark" ? "Light" : "Dark"} mode`}
      onClick={toggle}
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

export const Header = ({ scrollToSection, activeSection }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav-inner">
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="dot" />
          <span>jis.sunny</span>
          <span style={{ color: "var(--fg-dim)" }}>~/portfolio</span>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={activeSection === l.id ? "active" : ""}
              onClick={() => go(l.id)}
            >
              <span className="num">{l.num}.</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <a
            className="resume-btn"
            href={identity.resumeUrl}
            download="Jis_Sunny_Resume.pdf"
          >
            resume
          </a>
          <button
            className="icon-btn mobile-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CgClose size={20} /> : <CgMenuRight size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.num}. {l.label}
            </button>
          ))}
          <a
            href={identity.resumeUrl}
            download="Jis_Sunny_Resume.pdf"
            onClick={() => setMenuOpen(false)}
          >
            → resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
};
