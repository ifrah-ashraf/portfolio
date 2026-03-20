import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-white/5 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white/30 text-sm">
                    © {new Date().getFullYear()} Ifrah Ashraf. Built with Next.js.
                </div>

                <div className="flex items-center gap-4 text-white/30">
                    <a href="https://github.com/ifrah-ashraf/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-white transition-colors duration-200">
                        <FaGithub className="text-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/ifrah-ashraf-6579a7278/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-white transition-colors duration-200">
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a href="https://x.com/ifrah_ashraf24" target="_blank" rel="noopener noreferrer"
                       className="hover:text-white transition-colors duration-200">
                        <FaXTwitter className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
