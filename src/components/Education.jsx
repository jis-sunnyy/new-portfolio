import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const educationItems = [
        {
            degree: "Bachelor of Science (B.Sc.) in Computer Science",
            institution: "Little Flower Institute of Social Sciences and Health (LISSAH) – Calicut, Kerala",
            period: "2016 – 2019"
        },
        {
            degree: "Higher Secondary Education (Bio-Maths Stream)",
            institution: "Government Higher Secondary School (GHSS) Puthuppady – Calicut, Kerala",
            period: "2013 – 2015"
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const titleItems = gsap.utils.toArray('.anim-title-edu', containerRef.current);
        const listItems = gsap.utils.toArray('.anim-list-item-edu', containerRef.current);

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
            { x: -50, opacity: 0 },
            {
                x: 0,
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
        <section id="education" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">

                    <div className="md:col-span-4 sticky top-24 anim-title-edu">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                            Education
                        </h2>
                    </div>

                    <div className="md:col-span-8 flex flex-col w-full">
                        {educationItems.map((item, index) => (
                            <div key={index} className="anim-list-item-edu flex flex-col md:flex-row justify-between py-10 border-t-subtle first:border-0 md:first:border-t-subtle hover:bg-black/5 dark:hover:bg-white/5 px-6 -mx-6 rounded-lg transition-colors">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight mb-2">{item.degree}</h3>
                                    <p className="text-muted text-lg">{item.institution}</p>
                                </div>
                                <div className="text-[var(--text-primary)] font-mono text-sm tracking-widest mt-4 md:mt-0 font-medium bg-[var(--bg-primary)] px-4 py-2 rounded-full border border-[var(--border-color)] h-fit">
                                    {item.period}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
