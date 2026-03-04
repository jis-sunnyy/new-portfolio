import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroScene from './HeroScene';

const SplitText = ({ text, className }) => {
    return (
        <span className={className}>
            {String(text).split(' ').map((word, wIdx) => (
                <span key={wIdx} className="inline-flex whitespace-nowrap mr-[0.3em] last:mr-0">
                    {word.split('').map((char, cIdx) => (
                        <span key={cIdx} className="inline-block hero-char">
                            {char}
                        </span>
                    ))}
                </span>
            ))}
        </span>
    );
};

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const chars = containerRef.current.querySelectorAll('.hero-char');
        const paragraphs = containerRef.current.querySelectorAll('.hero-p');

        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.fromTo(chars,
            { y: 100, opacity: 0, rotateX: -90 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.02, delay: 0.1 }
        );

        tl.fromTo(paragraphs,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
            "-=0.8"
        );
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-6 md:px-12 pt-32 perspective-1000">
            <HeroScene />

            <div className="max-w-7xl mx-auto w-full z-10 pointer-events-none">

                <div className="flex flex-col gap-0 md:gap-2 max-w-5xl">
                    <div className="overflow-hidden py-2" style={{ perspective: '400px' }}>
                        <h1 className="text-[13vw] sm:text-[11vw] md:text-8xl lg:text-[10vw] leading-[1] font-semibold tracking-tighter">
                            <SplitText text="Lead Software" />
                        </h1>
                    </div>
                    <div className="overflow-hidden py-2" style={{ perspective: '400px' }}>
                        <h1 className="text-[13vw] sm:text-[11vw] md:text-8xl lg:text-[10vw] leading-[1] font-semibold tracking-tighter text-muted">
                            <SplitText text="Engineer." />
                        </h1>
                    </div>
                </div>

                <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t-subtle pt-8">
                    <div className="md:col-span-4 overflow-hidden pointer-events-auto">
                        <p className="hero-p text-muted font-medium uppercase tracking-widest text-xs md:text-sm">
                            Current Location
                            <br />
                            <span className="text-[var(--text-primary)] mt-1 block">Calicut, Kerala, India</span>
                        </p>
                    </div>

                    <div className="md:col-span-8 overflow-hidden pointer-events-auto">
                        <p className="hero-p text-xl md:text-3xl font-light leading-snug tracking-tight max-w-2xl">
                            Experienced Full Stack Engineer with 5+ years of expertise designing, developing, and deploying scalable web and mobile applications across India, UAE, and Africa.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
