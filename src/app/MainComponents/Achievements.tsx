"use client";
import { motion } from "framer-motion";

const achievements = [
    {
        icon: "🏆",
        title: "Smart India Hackathon Finalist",
        subtitle: "National-Level Competition",
        description: "Built and presented a dynamic resource allocation algorithm for standardizing government schools. Competed at national level.",
        date: "2024",
        tags: ["Hackathon", "Algorithm", "EdTech"],
        color: "violet",
    },
    {
        icon: "⚙️",
        title: "Open Source Contributor",
        subtitle: "GitHub Projects",
        description: "Actively contributing to the open source ecosystem. Building tools and scrapers used by developers in the community.",
        date: "2023 – Present",
        tags: ["Open Source", "Go", "Node.js"],
        color: "cyan",
    },
    {
        icon: "🤖",
        title: "AI Agent Builder",
        subtitle: "Autonomous Systems",
        description: "Developing autonomous AI agents and LLM-powered tools that go beyond basic chatbots — reasoning, planning, and taking actions.",
        date: "2024 – Present",
        tags: ["AI", "LLMs", "Agents", "Python"],
        color: "emerald",
    },
    {
        icon: "🌐",
        title: "Full Stack Engineer",
        subtitle: "Production Systems",
        description: "Shipped multiple production-ready full-stack applications spanning real-time systems, APIs, and modern frontends.",
        date: "2022 – Present",
        tags: ["Next.js", "Go", "PostgreSQL", "Cloud"],
        color: "orange",
    },
];

const colorMap: Record<string, { border: string; icon: string; tag: string; glow: string }> = {
    violet: {
        border: "border-violet-500/20 hover:border-violet-500/40",
        icon: "bg-violet-500/10 text-violet-300",
        tag: "bg-violet-500/10 text-violet-300",
        glow: "hover:shadow-violet-500/10",
    },
    cyan: {
        border: "border-cyan-500/20 hover:border-cyan-500/40",
        icon: "bg-cyan-500/10 text-cyan-300",
        tag: "bg-cyan-500/10 text-cyan-300",
        glow: "hover:shadow-cyan-500/10",
    },
    emerald: {
        border: "border-emerald-500/20 hover:border-emerald-500/40",
        icon: "bg-emerald-500/10 text-emerald-300",
        tag: "bg-emerald-500/10 text-emerald-300",
        glow: "hover:shadow-emerald-500/10",
    },
    orange: {
        border: "border-orange-500/20 hover:border-orange-500/40",
        icon: "bg-orange-500/10 text-orange-300",
        tag: "bg-orange-500/10 text-orange-300",
        glow: "hover:shadow-orange-500/10",
    },
};

export default function Achievements() {
    return (
        <section id="achievements" className="w-full max-w-6xl mx-auto px-6 py-20">
            <div className="mb-12 text-center">
                <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Milestones</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Achievements &amp; <span className="gradient-text">Work</span>
                </h2>
                <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">
                    Things I&apos;ve built, shipped, competed in, and contributed to.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {achievements.map((item, idx) => {
                    const colors = colorMap[item.color];
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            className={`group bg-[#0a0a12] border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl card-hover ${colors.border} ${colors.glow}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${colors.icon}`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <div>
                                            <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                                            <p className="text-xs text-white/40 mt-0.5">{item.subtitle}</p>
                                        </div>
                                        <span className="text-xs text-white/30 font-medium flex-shrink-0 mt-0.5">{item.date}</span>
                                    </div>
                                    <p className="text-sm text-white/55 leading-relaxed mt-2 mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className={`text-xs font-medium px-2 py-0.5 rounded-md ${colors.tag}`}>
                                                {tag}
                                            </span>
                                        ))}
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
