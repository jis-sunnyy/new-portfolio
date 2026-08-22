"use client";
import React, { useState } from "react";
import "./styles.scss";
import MainDrawer from "./drawer";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/theme/themeToggle";

const navItems = [
  { id: "b", label: "About" },
  { id: "c", label: "Career" },
  { id: "d", label: "Projects" },
  { id: "e", label: "Contact" },
];

interface HeaderProps {
  scrollToSection?: (sectionId: string) => void;
  activeSection?: string | null;
}

export const Header = ({ scrollToSection, activeSection }: HeaderProps) => {
  const [isDrawer, setIsDrawer] = useState(false);

  const goTo = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else if (typeof window !== "undefined") {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <button className="brand" onClick={() => goTo("a")}>
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </button>

          <nav className="site-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`site-nav-link ${
                  activeSection === item.id ? "is-active" : ""
                }`}
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="site-nav-link site-nav-link--cv"
            >
              Résumé
            </a>
            <ThemeToggle />
          </nav>

          <div className="header-mobile-actions">
            <ThemeToggle />
            <button
              className={`hamburger ${isDrawer ? "hamburger--open" : ""}`}
              onClick={() => setIsDrawer((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isDrawer}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      <MainDrawer
        open={isDrawer}
        close={() => setIsDrawer(false)}
        scrollToSection={goTo}
        activeSection={activeSection}
      />
    </>
  );
};
