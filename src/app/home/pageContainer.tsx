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
  const [activeSection, setActiveSection] = useState(null);

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
    const options = {
      root: null,
      rootMargin: "0px 0px -65% 0px", // Adjust the bottom margin as needed
      threshold: 0.25,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(sectionRefs).forEach((ref: any) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      Object.values(sectionRefs).forEach((ref: any) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

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
      </div>
      <Footer />
    </div>
  );
}
