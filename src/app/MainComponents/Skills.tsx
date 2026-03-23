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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        className="bg-[#08080f] p-7 flex flex-col gap-5"
                    >
                        <div>
                            <p className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-1">
                                {cat.description}
                            </p>
                            <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                        </div>

                        <div className="w-8 h-px bg-white/10" />

                        {cat.asTags ? (
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium text-white/55 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <ul className="flex flex-col gap-3">
                                {cat.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                                        <span className="text-sm text-white/55 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
