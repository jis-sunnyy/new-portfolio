import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b-subtle py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <div className="font-semibold text-xl tracking-tight">
                    Jis Sunny.
                </div>

                {/* Links & Controls */}
                <div className="flex items-center gap-6 md:gap-8">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
                        <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</a>
                        <a href="#capabilities" className="hover:text-[var(--text-primary)] transition-colors">Capabilities</a>
                        <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">Experience</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="hidden md:flex px-4 py-2 bg-[var(--accent)] text-[var(--accent-invert)] text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                        >
                            Let's Talk
                        </a>
                        <button
                            className="md:hidden p-2 -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b-subtle shadow-xl py-6 px-6 flex flex-col gap-6 font-medium z-40">
                    <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-xl hover:text-muted transition-colors">Work</a>
                    <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-xl hover:text-muted transition-colors">Capabilities</a>
                    <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-xl hover:text-muted transition-colors">Experience</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-xl hover:text-muted transition-colors">Contact</a>

                    <div className="mt-4 pt-4 border-t-subtle">
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-block px-6 py-3 bg-[var(--accent)] text-[var(--accent-invert)] text-[15px] font-medium rounded-full hover:opacity-90 transition-opacity"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
