"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

type Contribution = {
    name: string;
    url: string;
    initials: string;
};

type Achievement = {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    tags: string[];
    color: string;
    image?: string;
    link?: string;
    contributions?: Contribution[];
};

const achievements: Achievement[] = [
    {
        icon: "🏆",
        title: "Smart India Hackathon Finalist",
        subtitle: "National-Level Competition · 2024",
        description: "Built and presented a dynamic resource allocation algorithm for standardizing government schools. Competed at national level.",
        date: "2024",
        tags: ["Hackathon", "Algorithm", "EdTech"],
        color: "violet",
        image: "/images/school.jpg",
        link: "https://github.com/ifrah-ashraf/agni",
    },
    {
        icon: "⚙️",
        title: "Open Source Contributor",
        subtitle: "GitHub Projects · 2023 – Present",
        description: "Actively contributing to production open-source projects used by thousands of developers worldwide.",
        date: "2023 – Present",
        tags: ["Open Source", "Go", "Node.js"],
        color: "cyan",
        contributions: [
            { name: "cal.com", url: "https://github.com/calcom/cal.com", initials: "CA" },
        ],
    },
    {
        icon: "🤖",
        title: "AI Agent Builder",
        subtitle: "Autonomous Systems · 2024 – Present",
        description: "Developing autonomous AI agents and LLM-powered tools that go beyond basic chatbots — reasoning, planning, and taking actions.",
        date: "2024 – Present",
        tags: ["AI", "LLMs", "Agents", "Python"],
        color: "emerald",
    },
    {
        icon: "🌐",
        title: "Full Stack Engineer",
        subtitle: "Production Systems · 2022 – Present",
        description: "Shipped multiple production-ready full-stack applications spanning real-time systems, APIs, and modern frontends.",
        date: "2022 – Present",
        tags: ["Next.js", "Go", "PostgreSQL", "Cloud"],
        color: "orange",
    },
];

const colorMap: Record<string, { border: string; iconBg: string; tag: string; glow: string; contrib: string }> = {
    violet: {
        border: "border-violet-500/15 hover:border-violet-500/30",
        iconBg: "bg-violet-500/10",
        tag: "bg-violet-500/10 text-violet-300/80 border-violet-500/15",
        glow: "hover:shadow-violet-500/8",
        contrib: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400/40",
    },
    cyan: {
        border: "border-cyan-500/15 hover:border-cyan-500/30",
        iconBg: "bg-cyan-500/10",
        tag: "bg-cyan-500/10 text-cyan-300/80 border-cyan-500/15",
        glow: "hover:shadow-cyan-500/8",
        contrib: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/40",
    },
    emerald: {
        border: "border-emerald-500/15 hover:border-emerald-500/30",
        iconBg: "bg-emerald-500/10",
        tag: "bg-emerald-500/10 text-emerald-300/80 border-emerald-500/15",
        glow: "hover:shadow-emerald-500/8",
        contrib: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40",
    },
    orange: {
        border: "border-orange-500/15 hover:border-orange-500/30",
        iconBg: "bg-orange-500/10",
        tag: "bg-orange-500/10 text-orange-300/80 border-orange-500/15",
        glow: "hover:shadow-orange-500/8",
        contrib: "bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/40",
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            viewport={{ once: true }}
                            className={`group bg-[#0a0a12] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.glow}`}
                        >
                            {item.image && (
                                <div className="relative w-full h-32 overflow-hidden border-b border-white/[0.04]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
                                        sizes="(max-width: 768px) 100vw, 600px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a12]" />
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    )}
                                </div>
                            )}

                            <div className="p-5">
                                <div className="flex items-start gap-3.5">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${colors.iconBg}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-0.5">
                                            <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                                        </div>
                                        <p className="text-[11px] text-white/35 mb-2">{item.subtitle}</p>
                                        <p className="text-sm text-white/50 leading-relaxed mb-3">{item.description}</p>

                                        {item.contributions && item.contributions.length > 0 && (
                                            <div className="mb-3">
                                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2">Contributions</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.contributions.map((contrib) => (
                                                        <a
                                                            key={contrib.name}
                                                            href={contrib.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors duration-200 ${colors.contrib}`}
                                                        >
                                                            <span className="w-4 h-4 rounded text-[9px] font-bold bg-white/10 flex items-center justify-center flex-shrink-0">
                                                                {contrib.initials}
                                                            </span>
                                                            {contrib.name}
                                                            <FaExternalLinkAlt className="text-[9px] opacity-50" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${colors.tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
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
