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
                ? 'bg-[#05050a]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
                : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-white font-bold text-lg tracking-tight">
                        <span className="gradient-text">IA</span>
                        <span className="text-white/60 text-sm ml-2 font-normal">Ifrah Ashraf</span>
                    </a>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
                            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
                            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
                            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
                            <a href="#achievements" className="hover:text-white transition-colors duration-200">Achievements</a>
                            <a href="#blogs" className="hover:text-white transition-colors duration-200">Blogs</a>
                        </div>

                        <div className="flex items-center gap-3 text-white/60">
                            <a href="https://github.com/ifrah-ashraf/" target="_blank" rel="noopener noreferrer"
                               className="hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/ifrah-ashraf-6579a7278/" target="_blank" rel="noopener noreferrer"
                               className="hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://x.com/ifrah_ashraf24" target="_blank" rel="noopener noreferrer"
                               className="hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                <FaXTwitter className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
