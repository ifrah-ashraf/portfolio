"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-[#05050a]/95 backdrop-blur-md border-b border-[#f1eadb]/10'
                : 'bg-[#05050a]'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-[#f1eadb] font-semibold text-lg tracking-tight">
                        <span className="text-[#d8c39b]">IA</span>
                        <span className="text-[#f1eadb]/55 text-sm ml-2 font-normal">Ifrah Ashraf</span>
                    </a>

                    <div className="flex items-center gap-7">
                        <div className="hidden md:flex items-center gap-5 text-[13px] text-[#f1eadb]/50">
                            <a href="#experience" className="hover:text-[#f1eadb] transition-colors duration-200">Experience</a>
                            <a href="#projects" className="hover:text-[#f1eadb] transition-colors duration-200">Work</a>
                            <a href="#blogs" className="hover:text-[#f1eadb] transition-colors duration-200">Writing</a>
                            <a href="#" className="hover:text-[#f1eadb] transition-colors duration-200" title="Logbook link pending">Logbook</a>
                        </div>

                        <div className="flex items-center gap-3 text-[#f1eadb]/45">
                            <a href="https://github.com/ifrah-ashraf/" target="_blank" rel="noopener noreferrer"
                               aria-label="GitHub" className="hover:text-[#d8c39b] transition-colors duration-200">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/ifrah-ashraf-6579a7278/" target="_blank" rel="noopener noreferrer"
                               aria-label="LinkedIn" className="hover:text-[#d8c39b] transition-colors duration-200">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://x.com/ifrah_ashraf24" target="_blank" rel="noopener noreferrer"
                               aria-label="X" className="hover:text-[#d8c39b] transition-colors duration-200">
                                <FaXTwitter className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
