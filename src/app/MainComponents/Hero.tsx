"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
    "Full Stack Developer",
    "AI / Agent Builder",
    "First Principles Thinker",
    "Open Source Contributor",
    "Systems Engineer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setRoleIndex((i) => (i + 1) % roles.length);
                setVisible(true);
            }, 400);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

                    <div className="flex flex-col items-center lg:items-start order-2 lg:order-1 flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-400 text-sm font-medium tracking-wide">Available for opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white leading-none">
                            Ifrah <br />
                            <span className="gradient-text">Ashraf</span>
                        </h1>

                        <div className="h-9 mb-6 overflow-hidden">
                            <p
                                className="text-xl md:text-2xl font-semibold text-violet-300"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                                }}
                            >
                                {roles[roleIndex]}
                            </p>
                        </div>

                        <p className="text-white/55 text-lg leading-relaxed max-w-xl mb-10 text-center lg:text-left">
                            Engineer driven by curiosity and first principles. I build full-stack systems,
                            autonomous AI agents, and anything that solves real problems from the ground up.
                            Started with C, never stopped exploring.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
                            >
                                View Projects
                            </a>
                            <a
                                href="#blogs"
                                className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                            >
                                Read Blogs
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex-shrink-0">
                        <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                            <div className="glow-border rounded-full p-0.5">
                                <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0f1a]">
                                    <Image
                                        src="/images/ai_1.png"
                                        alt="Ifrah Ashraf"
                                        width={288}
                                        height={288}
                                        className="object-cover w-full h-full"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-3 -right-3 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-sm">
                                Building in Public
                            </div>

                            <div className="absolute -top-3 -left-3 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-1.5 text-xs font-medium text-violet-400 backdrop-blur-sm">
                                Full Stack
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
