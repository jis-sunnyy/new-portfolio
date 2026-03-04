import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const jobs = [
        {
            company: "Bairuhatech LLP",
            role: "Software Engineer",
            period: "August 2022 - March 2026",
        },
        {
            company: "Tata Consultancy Services (TCS)",
            role: "Process Associate",
            period: "December 2019 - July 2022",
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const titleItems = gsap.utils.toArray('.anim-title-exp', containerRef.current);
        const listItems = gsap.utils.toArray('.anim-list-item-exp', containerRef.current);

        gsap.fromTo(titleItems,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
            }
        );

        gsap.fromTo(listItems,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                }
            }
        );
    }, []);

    return (
        <section id="experience" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">

                    <div className="md:col-span-4 sticky top-24 anim-title-exp">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                            Experience
                        </h2>
                    </div>

                    <div className="md:col-span-8 flex flex-col w-full">
                        {jobs.map((job, index) => (
                            <div key={index} className="anim-list-item-exp flex flex-col md:flex-row justify-between py-10 border-t-subtle first:border-0 md:first:border-t-subtle">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{job.role}</h3>
                                    <p className="text-muted text-lg">{job.company}</p>
                                </div>
                                <div className="text-muted font-mono text-sm tracking-widest mt-2 md:mt-0">
                                    {job.period}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
