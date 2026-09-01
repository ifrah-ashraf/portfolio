"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
    {
        number: "01",
        title: "Smart India Hackathon finalist",
        context: "National-level competition · 2024",
        description: "Built and presented a dynamic resource allocation algorithm for standardizing government schools.",
        link: "https://github.com/ifrah-ashraf/agni",
    },
    {
        number: "02",
        title: "Open source contributor",
        context: "cal.com · 2025 — present",
        description: "Contributing to a production open-source monorepo used by developers around the world.",
        link: "https://github.com/calcom/cal.com/commits/main/?author=ifrah-ashraf",
    },
    {
        number: "03",
        title: "Agentic systems builder",
        context: "LangGraph · MCP · Python",
        description: "Designing agent coordination, tool access, and human review into useful data workflows.",
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker mb-3">05 / Proof</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#f1eadb]">Signals that matter</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#f1eadb]/50">
                    A few concrete markers of how I learn, contribute, and follow through.
                </p>
            </div>

            <div className="border-t border-[#f1eadb]/15">
                {achievements.map((item, idx) => (
                    <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="grid gap-4 border-b border-[#f1eadb]/15 py-7 md:grid-cols-[70px_260px_1fr_auto] md:items-start md:gap-8"
                    >
                        <span className="font-mono text-sm text-[#d8c39b]">{item.number}</span>
                        <div>
                            <h3 className="text-base font-semibold text-[#f1eadb]">{item.title}</h3>
                            <p className="mt-1 text-xs text-[#f1eadb]/40">{item.context}</p>
                        </div>
                        <p className="max-w-xl text-sm leading-relaxed text-[#f1eadb]/55">{item.description}</p>
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${item.title}`}
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#f1eadb]/45 transition-colors hover:text-[#d8c39b]"
                            >
                                View <FaExternalLinkAlt className="text-[9px]" />
                            </a>
                        ) : <span />}
                    </motion.article>
                ))}
            </div>
        </section>
    );
}