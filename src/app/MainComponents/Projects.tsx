"use client";
import { motion } from "framer-motion";
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
        status: "In Progress",
        color: "emerald",
    },
];

const colorMap: Record<string, { badge: string; border: string; glow: string; tag: string }> = {
    cyan: {
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        border: "border-cyan-500/20 hover:border-cyan-500/40",
        glow: "group-hover:shadow-cyan-500/10",
        tag: "bg-cyan-500/10 text-cyan-300",
    },
    violet: {
        badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
        border: "border-violet-500/20 hover:border-violet-500/40",
        glow: "group-hover:shadow-violet-500/10",
        tag: "bg-violet-500/10 text-violet-300",
    },
    emerald: {
        badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        border: "border-emerald-500/20 hover:border-emerald-500/40",
        glow: "group-hover:shadow-emerald-500/10",
        tag: "bg-emerald-500/10 text-emerald-300",
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
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative bg-[#0a0a12] border rounded-2xl p-7 transition-all duration-300 ${colors.border} hover:shadow-2xl ${colors.glow}`}
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                            <p className="text-white/40 text-sm mt-0.5">{project.tagline}</p>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                               className="text-white/30 hover:text-white transition-colors duration-200">
                                                <FaGithub className="text-xl" />
                                            </a>
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                   className="text-white/30 hover:text-white transition-colors duration-200">
                                                    <FaExternalLinkAlt className="text-lg" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-lg ${colors.tag}`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:w-72 flex flex-col gap-4">
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Key Outcomes</p>
                                        <ul className="flex flex-col gap-2">
                                            {project.outcomes.map((outcome) => (
                                                <li key={outcome} className="flex items-start gap-2 text-sm text-white/70">
                                                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">What I Learned</p>
                                        <p className="text-sm text-white/50 leading-relaxed">{project.learnings}</p>
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
