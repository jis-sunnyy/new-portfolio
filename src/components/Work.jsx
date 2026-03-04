import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const projects = [
        { name: 'Sahari Cargo', desc: 'International Cargo Management ERP', role: 'Full Stack Architecture', year: '2022' },
        { name: 'Kenya Airways', desc: 'Staff Travel Management System', role: 'Amadeus API Integration', year: '2023' },
        { name: 'XentryBook', desc: 'Gym Access & Biometric Management', role: 'Design & Development', year: '2023' },
        { name: 'Suprabhaatham', desc: 'Daily News Portal with Headless CMS', role: 'Frontend Architecture', year: '2023' },
        { name: 'Teenzania', desc: 'On-Site Ticketing & Bluetooth Print', role: 'Mobile / Web App', year: '2023' },
        { name: 'Event CRM', desc: 'Custom CRM with Real-time Chat', role: 'Full Stack App', year: '2024' },
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray('.work-item', containerRef.current);

        items.forEach((item) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-semibold leading-[0.9] tracking-tighter mb-16 md:mb-24">
                    Selected<br />
                    <span className="text-muted">Work.</span>
                </h2>

                <div className="flex flex-col border-t-subtle">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="work-item group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-subtle hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer px-4 -mx-4 rounded-lg"
                        >
                            <div className="w-full md:w-3/5">
                                <h3 className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-4 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-muted text-lg transition-transform duration-300 group-hover:translate-x-4">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="w-full md:w-2/5 flex justify-between items-center mt-6 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium tracking-wide uppercase px-4 py-2 border border-black/10 dark:border-white/10 rounded-full bg-white/5">{project.role}</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-medium tracking-wide">{project.year}</span>
                                    <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
