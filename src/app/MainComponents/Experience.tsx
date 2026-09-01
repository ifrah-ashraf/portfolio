"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Software Engineer",
        company: "Wipro",
        period: "Jul 2026 — Present",
        current: true,
        description:
            "Joined Wipro as a full-time software engineer following its acquisition of Harman Connected Services. Currently completing the training programme and preparing to contribute at production scale.",
        highlights: [
            "Building depth across Wipro’s engineering practices and delivery standards",
            "Translating training into reliable, production-ready software habits",
        ],
        tags: ["Software Engineering", "Training", "Wipro"],
    },
    {
        role: "Agentic AI Data Engineer Intern",
        company: "Harman Connected Services",
        period: "Jan 2026 — Jun 2026",
        current: false,
        description:
            "Completed an internship in the Data Engineering team, building a multi-agent system with LangGraph and focusing on the supervisor layer.",
        highlights: [
            "Designed supervisor coordination logic for multi-agent pipelines using LangGraph",
            "Integrated MCP server tooling and human-in-the-loop checkpoints",
            "Built agentic workflows to automate end-to-end data engineering tasks",
        ],
        tags: ["LangGraph", "MCP", "Multi-Agent", "Python", "Data Engineering"],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Poster.fun",
        period: "Aug 2025 — Dec 2025",
        current: false,
        description:
            "Built and shipped production features for a design-generation platform, owning the AI image pipeline and authentication infrastructure end-to-end.",
        highlights: [
            "Reduced AI image API response time from 2 min → 15 sec with async Redis jobs",
            "Architected non-blocking generation workflows with BullMQ",
            "Shipped full-stack features across frontend and backend",
        ],
        tags: ["Next.js", "Node.js", "Redis", "BullMQ", "TypeScript"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker mb-3">02 / Experience</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#f1eadb]">Where I&apos;ve worked</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#f1eadb]/50">
                    From shipping product features to entering a full-time engineering role, each step has increased my ownership.
                </p>
            </div>

            <div className="border-t border-[#f1eadb]/15">
                {experiences.map((exp, idx) => (
                    <motion.article
                        key={`${exp.company}-${exp.role}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="grid gap-5 border-b border-[#f1eadb]/15 py-8 md:grid-cols-[90px_190px_1fr] md:gap-8"
                    >
                        <div className="font-mono text-sm text-[#d8c39b]">0{idx + 1}</div>
                        <div>
                            <p className="text-sm font-semibold text-[#f1eadb]">{exp.company}</p>
                            <p className="mt-1 text-xs text-[#f1eadb]/40">{exp.period}</p>
                            <p className={`mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${exp.current ? "text-[#d8c39b]" : "text-[#f1eadb]/35"}`}>
                                {exp.current ? "Current role" : "Completed"}
                            </p>
                        </div>
                        <div className="max-w-3xl">
                            <h3 className="text-xl font-semibold tracking-tight text-[#f1eadb]">{exp.role}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[#f1eadb]/55">{exp.description}</p>
                            <ul className="mt-5 grid gap-2 text-sm text-[#f1eadb]/60">
                                {exp.highlights.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <span className="mt-2 h-px w-3 shrink-0 bg-[#d8c39b]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#f1eadb]/35">
                                {exp.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
