import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            <div className="max-w-6xl mx-auto flex flex-col gap-2 px-6 py-10 text-xs text-[#f1eadb]/35 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} Ifrah Ashraf</p>
                <p>Built with intent.</p>
            </div>
        </footer>
    );
};

export default Footer;
