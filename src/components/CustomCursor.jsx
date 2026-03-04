import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Check if device supports hover and pointer
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out',
            });
        };

        const onMouseEnter = () => cursor.classList.add('hovering');
        const onMouseLeave = () => cursor.classList.remove('hovering');

        window.addEventListener('mousemove', onMouseMove);

        const interactables = document.querySelectorAll('a, button, [data-hover]');
        interactables.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            interactables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor hidden md:block"></div>;
};

export default CustomCursor;
