"use client";
import { motion } from "framer-motion";

const categories = [
    {
        number: "01",
        label: "Engineering",
        description: "Build",
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
        number: "02",
        label: "Approach",
        description: "Think",
        items: [
            "First Principles Thinking",
            "Systems Design",
            "Technical Writing",
            "Open Source Contribution",
            "Performance Engineering",
        ],
    },
    {
        number: "03",
        label: "Tech Stack",
        description: "Use",
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
        <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker mb-3">03 / Capabilities</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#f1eadb]">How I work</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#f1eadb]/50">
                    A practical engineering practice: understand the system, make the trade-offs visible, and deliver with care.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-0 border-t border-[#f1eadb]/15 md:grid-cols-3 md:divide-x md:divide-[#f1eadb]/15">
                {categories.map((cat) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        viewport={{ once: true }}
                        className="border-b border-[#f1eadb]/15 px-1 py-7 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8c39b]">{cat.description}</p>
                                <h3 className="text-lg font-semibold text-[#f1eadb]">{cat.label}</h3>
                            </div>
                            <span className="font-mono text-xs text-[#f1eadb]/30">{cat.number}</span>
                        </div>

                        <div className="mt-7">
                            {cat.asTags ? (
                                <div className="flex flex-wrap gap-x-2 gap-y-2">
                                    {cat.items.map((tag) => (
                                        <span key={tag} className="text-xs text-[#f1eadb]/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <ul className="flex flex-col gap-2">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm text-[#f1eadb]/55">
                                            <span className="h-px w-3 bg-[#d8c39b]/70" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
