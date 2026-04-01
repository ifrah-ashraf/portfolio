"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Agentic AI Data Engineer Intern",
        company: "Harman Connected Services",
        period: "Jan 2026 — Present",
        current: true,
        accent: "#10b981",
        accentMuted: "#10b98120",
        tagBorder: "#10b98125",
        description:
            "Working in the Data Engineering team building a full-fledged multi-agent system using LangGraph. Focus on the supervisor layer — designing how the supervisor coordinates multiple sub-agents, manages handoffs, and incorporates human-in-the-loop for critical decisions.",
        highlights: [
            "Designing supervisor coordination logic for multi-agent pipelines using LangGraph",
            "Integrating MCP (Model Context Protocol) server for agent tool access",
            "Implementing human-in-the-loop checkpoints for critical data decisions",
            "Building agentic workflows that automate end-to-end data engineering tasks",
        ],
        tags: ["LangGraph", "MCP", "Multi-Agent", "Python", "LLMs", "Data Engineering"],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Poster.fun",
        period: "Aug 2025 — Dec 2025",
        current: false,
        accent: "#818cf8",
        accentMuted: "#818cf815",
        tagBorder: "#818cf822",
        description:
            "Built and shipped production features for a design-generation platform. Owned the AI image pipeline and authentication infrastructure end-to-end.",
        highlights: [
            "Reduced AI image API response time from 2 min → 15 sec by offloading storage to async Redis jobs via BullMQ",
            "Integrated social logins via Privy — X (Twitter) and OAuth services",
            "Architected async job queue system for non-blocking AI generation workflows",
            "Shipped full-stack features across frontend and backend in a fast-paced startup",
        ],
        tags: ["Next.js", "Node.js", "Redis", "BullMQ", "Privy", "OAuth", "TypeScript"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-5xl mx-auto px-6 py-20">
            <div className="mb-16 text-center">
                <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Where I&apos;ve worked</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">
                    Real-world engineering at fast-moving companies — shipped code, solved hard problems.
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-500/60 via-white/10 to-violet-500/30" />

                <div className="flex flex-col gap-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className="relative pl-10"
                        >
                            <div className="absolute left-0 top-1 flex items-center justify-center">
                                {exp.current ? (
                                    <span className="relative flex h-[15px] w-[15px]">
                                        <span
                                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                                            style={{ backgroundColor: exp.accent }}
                                        />
                                        <span
                                            className="relative inline-flex rounded-full h-[15px] w-[15px] border-2"
                                            style={{ backgroundColor: exp.accent, borderColor: '#05050a' }}
                                        />
                                    </span>
                                ) : (
                                    <span
                                        className="h-[15px] w-[15px] rounded-full border-2 flex items-center justify-center"
                                        style={{ borderColor: exp.accent, backgroundColor: '#05050a' }}
                                    >
                                        <span
                                            className="h-[6px] w-[6px] rounded-full"
                                            style={{ backgroundColor: exp.accent }}
                                        />
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
                                <span
                                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                                    style={{
                                        color: exp.accent,
                                        backgroundColor: exp.accentMuted,
                                        borderColor: exp.tagBorder,
                                    }}
                                >
                                    {exp.current ? "● Current" : "✓ Completed"}
                                </span>
                                <span className="text-xs text-white/30 font-mono">{exp.period}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white leading-snug mt-2">{exp.role}</h3>
                            <p className="text-sm font-medium mt-0.5 mb-4" style={{ color: `${exp.accent}bb` }}>
                                {exp.company}
                            </p>

                            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-2xl">
                                {exp.description}
                            </p>

                            <div
                                className="rounded-xl p-4 border mb-5 max-w-2xl"
                                style={{
                                    backgroundColor: `${exp.accent}06`,
                                    borderColor: `${exp.accent}18`,
                                }}
                            >
                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-3">Key Contributions</p>
                                <ul className="flex flex-col gap-2">
                                    {exp.highlights.map((point) => (
                                        <li key={point} className="flex items-start gap-2.5 text-sm text-white/60">
                                            <svg
                                                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                                                style={{ color: exp.accent }}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
                                        style={{
                                            color: `${exp.accent}cc`,
                                            backgroundColor: `${exp.accent}0c`,
                                            borderColor: `${exp.accent}20`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
