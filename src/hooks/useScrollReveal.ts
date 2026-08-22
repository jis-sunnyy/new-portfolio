"use client";
import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element once, as it scrolls into view.
 *
 * The hiding styles are scoped to `html.reveal-ready`, and that class is only
 * added here — so if JavaScript never runs, nothing is hidden. Elements are
 * unobserved after firing, so this is a one-shot reveal, not a scroll effect.
 *
 * The revealed state is a `data-revealed` attribute, deliberately NOT a class:
 * these elements have React-managed `className`s, and any re-render would
 * rewrite `class` and silently drop a class added out-of-band here — leaving
 * the element stuck at opacity 0 forever. React never touches an attribute it
 * doesn't render, so this survives re-renders.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));

    // Failsafe: content must never be left permanently invisible. If the
    // observer hasn't reported by now (background tabs suspend its callbacks,
    // for one), reveal whatever is left outright.
    const failsafe = window.setTimeout(() => {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
    }, 3000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}
