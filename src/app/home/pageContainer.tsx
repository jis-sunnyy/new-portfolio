"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header/page";
import { Footer } from "@/components/footer/page";

import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";

const NAV_OFFSET = 64; // fixed header height

export default function PageContainer() {
  const [activeSection, setActiveSection] = useState<string>("a");

  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    a: useRef<HTMLElement>(null),
    b: useRef<HTMLElement>(null),
    c: useRef<HTMLElement>(null),
    d: useRef<HTMLElement>(null),
    e: useRef<HTMLElement>(null),
    f: useRef<HTMLElement>(null),
  };

  const scrollToSection = (id: string) => {
    const el = sectionRefs[id]?.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Scroll-spy: which section is under the trigger line
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.3;
      let current: string = "a";
      for (const id of Object.keys(sectionRefs)) {
        const el = sectionRefs[id].current;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page-container">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <div className="page-body">
        <section id="a" ref={sectionRefs.a}>
          <Section1 />
        </section>
        <section id="b" ref={sectionRefs.b}>
          <Section2 />
        </section>
        <section id="c" ref={sectionRefs.c}>
          <Section3 />
        </section>
        <section id="d" ref={sectionRefs.d}>
          <Section4 />
        </section>
        <section id="e" ref={sectionRefs.e}>
          <Section5 />
        </section>
        <section id="f" ref={sectionRefs.f}>
          <Section6 />
        </section>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
