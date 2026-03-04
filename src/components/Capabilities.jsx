import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Capabilities = () => {
    const services = [
        {
            title: "Software Engineering",
            desc: "Architecting robust web applications, APIs, and scalable backend services focusing on performance and clean code."
        },
        {
            title: "Frontend Architecture",
            desc: "Creating pixel-perfect, highly interactive, and accessible user interfaces using modern frameworks like React and Next.js."
        },
        {
            title: "Product Design",
            desc: "Bridging the gap between design and engineering, ensuring the final product looks and feels exactly as intended."
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const titleItems = gsap.utils.toArray('.anim-title', containerRef.current);
        const listItems = gsap.utils.toArray('.anim-list-item', containerRef.current);

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
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            }
        );
    }, []);

    return (
        <section id="capabilities" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                    {/* Section Title */}
                    <div className="md:col-span-4 anim-title">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight sticky top-24">
                            Capabilities
                        </h2>
                    </div>

                    {/* List */}
                    <div className="md:col-span-8 flex flex-col gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="anim-list-item group border-b-subtle pb-8">
                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:pl-4 transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-muted text-lg font-light leading-relaxed max-w-xl group-hover:pl-4 transition-all duration-300 delay-75">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Capabilities;
