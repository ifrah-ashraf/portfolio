"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Multithreaded Web Scraper",
        tagline: "Concurrent data extraction at scale",
        description: "Built from scratch using Go's concurrency model to scrape and process thousands of URLs simultaneously with zero race conditions.",
        outcomes: [
            "10x faster than single-threaded alternatives",
            "Zero-downtime concurrent processing",
            "Handles 1000+ URLs in parallel",
        ],
        learnings: "Mastered goroutines, channels, and WaitGroups. Learned to design race-condition-free concurrent systems.",
        tech: ["Go", "Goroutines", "Channels", "HTTP"],
        github: "https://github.com/ifrah-ashraf/multithreaded-scrapper",
        live: null,
        image: "/images/scrapper.jpg",
        status: "Completed",
        color: "cyan",
    },
    {
        title: "Smart India Hackathon — School Resource Allocator",
        tagline: "Algorithm-driven resource standardization",
        description: "Designed and built the core algorithm that dynamically allocates educational resources to standardize schools across different tier categories.",
        outcomes: [
            "Submitted to national-level competition",
            "Dynamic allocation with constraint satisfaction",
            "Reduced manual effort by ~80% in resource planning",
        ],
        learnings: "Deep dive into constraint-based optimization, greedy algorithms, and building systems with real government-scale impact.",
        tech: ["Algorithm Design", "Next.js", "Node.js", "PostgreSQL"],
        github: "https://github.com/ifrah-ashraf/agni",
        live: null,
        image: "/images/school.jpg",
        status: "Hackathon",
        color: "violet",
    },
    {
        title: "Real-Time Chat Application",
        tagline: "WebSocket-based messaging system",
        description: "Building a production-grade real-time chat system with persistent message history, user presence, and room management.",
        outcomes: [
            "Sub-50ms message delivery",
            "Persistent chat history with pagination",
            "Multi-room support",
        ],
        learnings: "WebSocket lifecycle management in Go, handling concurrent connections, and building event-driven architectures.",
        tech: ["Go", "WebSockets", "Next.js", "Redis"],
        github: "https://github.com/ifrah-ashraf/livechat",
        live: null,
        image: "/images/work_in_progress.jpg",
        status: "In Progress",
        color: "emerald",
    },
];

const colorMap: Record<string, { badge: string; border: string; glow: string; tag: string; check: string }> = {
    cyan: {
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        border: "border-cyan-500/15 hover:border-cyan-500/30",
        glow: "hover:shadow-cyan-500/8",
        tag: "bg-cyan-500/10 text-cyan-300/80 border-cyan-500/15",
        check: "text-cyan-400",
    },
    violet: {
        badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
        border: "border-violet-500/15 hover:border-violet-500/30",
        glow: "hover:shadow-violet-500/8",
        tag: "bg-violet-500/10 text-violet-300/80 border-violet-500/15",
        check: "text-violet-400",
    },
    emerald: {
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        border: "border-emerald-500/15 hover:border-emerald-500/30",
        glow: "hover:shadow-emerald-500/8",
        tag: "bg-emerald-500/10 text-emerald-300/80 border-emerald-500/15",
        check: "text-emerald-400",
    },
};

export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20">
            <div className="mb-12 text-center">
                <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">What I&apos;ve built</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">
                    Each project is a story of solving a real problem — with outcomes, learnings, and impact.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                {projects.map((project, idx) => {
                    const colors = colorMap[project.color];
                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className={`group relative bg-[#0a0a12] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${colors.border} ${colors.glow}`}
                        >
                            {project.image && (
                                <div className="relative w-full h-48 overflow-hidden border-b border-white/[0.05]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-[1.02] transition-transform"
                                        sizes="(max-width: 768px) 100vw, 900px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a12]" />
                                    <div className="absolute top-3 left-3">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${colors.badge}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                           className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
                                            <FaGithub className="text-sm" />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                               className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200">
                                                <FaExternalLinkAlt className="text-xs" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="p-6 lg:p-7">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1">
                                        {!project.image && (
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                                                    {project.status}
                                                </span>
                                                <div className="flex gap-2 ml-auto">
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                       className="text-white/30 hover:text-white transition-colors duration-200">
                                                        <FaGithub className="text-lg" />
                                                    </a>
                                                    {project.live && (
                                                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                           className="text-white/30 hover:text-white transition-colors duration-200">
                                                            <FaExternalLinkAlt className="text-base" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <h3 className="text-xl font-bold text-white mb-0.5">{project.title}</h3>
                                        <p className="text-white/35 text-sm mb-4">{project.tagline}</p>
                                        <p className="text-white/55 text-sm leading-relaxed mb-5">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t) => (
                                                <span key={t} className={`text-xs font-medium px-2.5 py-0.5 rounded-md border ${colors.tag}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="lg:w-64 flex flex-col gap-3 flex-shrink-0">
                                        <div className="rounded-xl p-4 border border-white/[0.05] bg-white/[0.02]">
                                            <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">Key Outcomes</p>
                                            <ul className="flex flex-col gap-2">
                                                {project.outcomes.map((outcome) => (
                                                    <li key={outcome} className="flex items-start gap-2 text-sm text-white/60">
                                                        <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colors.check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                                        </svg>
                                                        {outcome}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-xl p-4 border border-white/[0.05] bg-white/[0.02]">
                                            <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-2">What I Learned</p>
                                            <p className="text-sm text-white/45 leading-relaxed">{project.learnings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
