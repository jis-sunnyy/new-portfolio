import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            name: 'Sahari Cargo',
            tagline: 'International Cargo Management ERP',
            technologies: ['AWS', 'Bluetooth Printer', 'Barcode Printing', 'Cloud Deployment'],
            highlights: [
                'Engineered a scalable ERP integrating logistics, accounting, and tracking systems',
                'Implemented barcode printing and automated cargo tracking, improving operational accuracy',
                'Advanced AWS infrastructure setup for high availability and fault tolerance'
            ]
        },
        {
            name: 'Kenya Airways',
            tagline: 'Staff Travel Management System',
            technologies: ['Amadeus API', 'Role-Based Access Control'],
            highlights: [
                'Integrated Amadeus Flight APIs for real-time flight search, scheduling, and ticketing',
                'Built a secure RBAC system for employee travel management and approval workflows',
                'Deep experience in third-party API integration and airline domain data structures'
            ]
        },
        {
            name: 'XentryBook',
            tagline: 'Gym Access & Biometric Management App',
            technologies: ['ESSL Biometric SDK', 'Realtime Data Sync'],
            highlights: [
                'Integrated biometric attendance devices for automated user access control',
                'Designed real-time synchronization between biometric devices and mobile apps',
                'Enhanced understanding of hardware-software communication protocols and authentication logic'
            ]
        },
        {
            name: 'Suprabhaatham',
            tagline: 'Daily News Portal',
            technologies: ['Strapi CMS', 'GraphQL API', 'Real-Time Notifications'],
            highlights: [
                'Integrated Strapi CMS for headless content management and editorial workflows',
                'Implemented GraphQL to enhance query performance and flexible data fetching',
                'Practical experience in real-time notifications and multi-language architecture'
            ]
        },
        {
            name: 'Event Management CRM',
            tagline: 'International Event Management System',
            technologies: ['Sendbird SDK', 'AWS Hosting'],
            highlights: [
                'Developed custom CRM workflows for event registration, scheduling, and client interaction',
                'Integrated Sendbird for real-time chat and participant communication',
                'Client-facing project delivery experience from requirement gathering to live deployment'
            ]
        },
        {
            name: 'Teenzania',
            tagline: 'On-Site Ticketing & Loyalty System',
            technologies: ['Bluetooth Printer Integration', 'Loyalty System'],
            highlights: [
                'Built on-site ticketing and Bluetooth printer integration for instant ticket issuance',
                'Implemented role-based access for admins and staff',
                'Customer retention systems through loyalty card feature development'
            ]
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray('.project-card', containerRef.current);

        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-4 md:gap-0">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                        Selected Projects
                    </h2>
                    <p className="text-muted text-lg max-w-sm mt-4 md:mt-0 pb-2">
                        A showcase of robust enterprise applications and digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="project-card bg-[var(--bg-primary)] p-8 md:p-12 border border-[var(--border-color)] group hover:-translate-y-2 transition-transform duration-300 rounded-2xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                    {project.name}
                                </h3>
                                <div className="p-3 bg-[var(--bg-secondary)] rounded-full group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-invert)] transition-colors">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            <p className="text-lg font-medium text-[var(--text-primary)] mb-6 opacity-90">
                                {project.tagline}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech, tIdx) => (
                                    <span key={tIdx} className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-wider rounded border border-[var(--border-color)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-4">
                                {project.highlights.map((highlight, hIdx) => (
                                    <li key={hIdx} className="text-muted flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-color)] mt-2.5 shrink-0"></span>
                                        <span className="leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
