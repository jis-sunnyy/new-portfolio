"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "@/components/header/page";
import { Footer } from "@/components/footer/page";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./styles.scss";

import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";

const SECTION_IDS = ["a", "b", "c", "d", "e"] as const;

export default function PageContainer() {
  const [activeSection, setActiveSection] = useState<string | null>("a");
  const bodyRef = useRef<HTMLDivElement>(null);

  useScrollReveal();

  const scrollToSection = useCallback((sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // A section is active once it crosses the upper fifth of the viewport.
      const triggerPoint = window.innerHeight * 0.2;
      let current: string | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          current = id;
          break;
        }
        if (!current && rect.bottom > 0) current = id;
      }

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-container">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <main className="page-body" ref={bodyRef}>
        <section id="a">
          <Section1 />
        </section>
        <section id="b">
          <Section2 />
        </section>
        <section id="c">
          <Section3 />
        </section>
        <section id="d">
          <Section4 />
        </section>
        <section id="e">
          <Section5 />
        </section>
      </main>

      <Footer />
    </div>
  );
}
