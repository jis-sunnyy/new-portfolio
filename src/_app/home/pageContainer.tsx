"use client";
import { Header } from "@/components/header/page";
import "./styles.scss";
import { Footer } from "@/components/footer/page";

import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import { useEffect, useRef, useState } from "react";

export default function PageContainer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs: any = {
    a: useRef(null),
    b: useRef(null),
    c: useRef(null),
    d: useRef(null),
    e: useRef(null),
  };

  const scrollToSection = (sectionId: any) => {
    sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const allSections = Object.values(sectionRefs)
        .map((ref: any) => ref.current)
        .filter((el: any) => el !== null);

      // Trigger point: when section reaches 20% from top of viewport
      const triggerPoint = window.innerHeight * 0.2;

      // Find which section is at the trigger point
      let activeSection = null;

      for (const section of allSections) {
        const rect = section.getBoundingClientRect();

        // If section's top is at or above trigger point AND bottom is below trigger point
        // Then this section is active
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          activeSection = section;
          break;
        }
      }

      // If no section found at trigger point (edge case at very top)
      // Use the first section whose bottom is still visible
      if (!activeSection) {
        for (const section of allSections) {
          const rect = section.getBoundingClientRect();
          if (rect.bottom > 0) {
            activeSection = section;
            break;
          }
        }
      }

      if (activeSection) {
        setActiveSection(activeSection.id);
      }
    };

    // Run once on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <div className="page-container">
      <Header scrollToSection={scrollToSection} activeSection={activeSection || "a"} />
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
      </div>
      <Footer />
    </div>
  );
}
