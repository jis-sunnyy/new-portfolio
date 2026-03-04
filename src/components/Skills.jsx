import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux", "Bootstrap", "Vite", "PWA"]
        },
        {
            title: "Backend & Microservices",
            skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "Python", "Django", "GraphQL", "REST APIs", "WebSocket"]
        },
        {
            title: "Databases & Storage",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Vector Databases"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Microsoft Azure", "Scaleway", "Docker", "CI/CD", "Nginx", "Linux"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["LangChain", "LlamaIndex", "TensorFlow", "PyTorch", "RAG", "Hugging Face"]
        },
        {
            title: "Integrations & APIs",
            skills: ["Amadeus Flight API", "Sendbird Chat", "Stripe", "Razorpay", "ESCPOS Printer", "ESSL Biometric"]
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('.anim-skill-section', containerRef.current);

        sections.forEach((sec, i) => {
            gsap.fromTo(sec,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sec,
                        start: 'top 85%',
                    }
                }
            );

            const pills = sec.querySelectorAll('.anim-skill-pill');
            gsap.fromTo(pills,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: sec,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted text-lg max-w-sm md:text-right">
                        A comprehensive toolkit of modern frameworks, robust languages, and cutting-edge technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="anim-skill-section flex flex-col border-t-subtle pt-6">
                            <h3 className="text-2xl font-semibold tracking-tight mb-6 text-[var(--text-primary)]">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="anim-skill-pill px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm font-medium rounded-md border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
