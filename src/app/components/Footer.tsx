import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-white/5 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-center">
                <p className="text-white/20 text-sm">
                    © {new Date().getFullYear()} Ifrah Ashraf. Built with Next.js.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
