const Contact = () => {
    return (
        <footer id="contact" className="bg-accent text-[var(--accent-invert)] pt-32 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-24">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <p className="font-medium tracking-widest uppercase text-sm mb-6 opacity-70">
                    Have an idea?
                </p>

                <h2 className="text-[12vw] md:text-[8vw] font-semibold leading-[1.1] tracking-tighter hover:opacity-80 transition-opacity cursor-pointer mb-24 pb-4">
                    <a href="mailto:tojis.sunny@gmail.com">Let's Talk.</a>
                </h2>

                <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[var(--accent-invert)]/20 pt-8 text-sm font-medium opacity-70">

                    <p>© {new Date().getFullYear()} Jis Sunny.</p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6 md:mt-0">
                        <a href="https://www.linkedin.com/in/jis-sunny-28241815a/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
                        <a href="https://github.com/jissunny" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
                        <a href="mailto:tojis.sunny@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
                        <a href="tel:+918547983028" className="hover:opacity-100 transition-opacity">Phone</a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Contact;
