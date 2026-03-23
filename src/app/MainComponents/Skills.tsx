"use client";
import { motion } from "framer-motion";

const categories = [
    {
        label: "Engineering",
        description: "What I build",
        items: [
            "Full Stack Development",
            "AI / Agent Systems",
            "Backend Architecture",
            "API Design & Integration",
            "Database Design",
            "Cloud Infrastructure",
        ],
    },
    {
        label: "Approach",
        description: "How I think",
        items: [
            "First Principles Thinking",
            "Systems Design",
            "Technical Writing",
            "Open Source Contribution",
            "Performance Engineering",
        ],
    },
    {
        label: "Stack",
        description: "What I use",
        items: [
            "Go", "Node.js", "Python", "TypeScript",
            "Next.js", "React",
            "PostgreSQL", "MongoDB", "Redis",
            "Docker", "Linux",
            "LangGraph", "BullMQ", "MCP",
        ],
        asTags: true,
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20">
            <div className="mb-14 text-center">
                <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">What I bring</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Skills &amp; <span className="gradient-text">Expertise</span>
                </h2>
                <p className="text-white/35 mt-4 text-base max-w-xl mx-auto">
                    I don&apos;t just write code — I architect solutions and think from first principles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        className="relative rounded-xl border border-white/[0.07] bg-[#0b0b15] overflow-hidden group"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />

                        <div className="px-6 pt-6 pb-5">
                            <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-1">
                                {cat.description}
                            </p>
                            <h3 className="text-base font-semibold text-white/90">{cat.label}</h3>
                        </div>

                        <div className="mx-6 h-px bg-white/[0.06]" />

                        <div className="px-6 py-5">
                            {cat.asTags ? (
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-white/50 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-md font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <ul className="flex flex-col gap-2.5">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="w-1 h-1 rounded-full bg-violet-400/40 flex-shrink-0" />
                                            <span className="text-sm text-white/50">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
