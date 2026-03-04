import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        // Animate large text
        gsap.fromTo(textRef.current,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        // Stagger Info Items
        const items = infoRef.current.children;
        gsap.fromTo(items,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: 'top 90%',
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-white text-black py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] mb-8 border-b border-black pb-4">
                    What I Do & How I Work
                </h2>

                <div className="overflow-hidden pb-8">
                    <p ref={textRef} className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                        I craft tailored digital experiences specializing in{' '}
                        <span className="font-serif italic text-accent font-medium">engineering, web design,</span>{' '}
                        and comprehensive product management.
                    </p>
                </div>

                <div ref={infoRef} className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-sans">

                    <div className="border-t border-black/20 pt-6">
                        <h3 className="text-2xl font-bold mb-4">My Toolkit</h3>
                        <ul className="space-y-3 text-lg font-light text-black/80">
                            <li>Next.js / React</li>
                            <li>TypeScript / Node.js</li>
                            <li>GSAP / Framer Motion</li>
                            <li>Tailwind CSS / SCSS</li>
                            <li>Design Systems</li>
                        </ul>
                    </div>

                    <div className="border-t border-black/20 pt-6">
                        <h3 className="text-2xl font-bold mb-4">Experience</h3>
                        <ul className="space-y-4 text-sm md:text-base font-light text-black/80">
                            <li>
                                <span className="block font-medium text-black">Software Engineer</span>
                                <span>Process Associate - Sahari Cargo</span>
                            </li>
                            <li>
                                <span className="block font-medium text-black">Software Engineer</span>
                                <span>Kenya Airways</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-black/20 pt-6">
                        <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
                        <p className="text-lg font-light leading-relaxed text-black/80">
                            Transforming complex problems into elegant solutions. I believe in writing clean code, creating beautiful user interfaces, and building products that leave a lasting impression.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
