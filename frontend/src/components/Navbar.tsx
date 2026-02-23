import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between xl:max-w-7xl">
                <a href="#home" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
                    <span className="text-primary">&lt;</span>
                    Meemansa
                    <span className="text-primary">/&gt;</span>
                </a>

                <div className="hidden md:flex items-center gap-8 bg-slate-900/50 px-6 py-2.5 rounded-full border border-slate-800 border-opacity-50">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary/50 hover:bg-primary/10 rounded-lg transition-colors"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
