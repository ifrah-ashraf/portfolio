"use client";
import { motion } from "framer-motion";

const skillCategories = [
    {
        label: "Engineering",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        accent: "#6366f1",
        badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
        checkColor: "text-indigo-400",
        cardBg: "bg-[#0c0c18]",
        border: "border-indigo-500/15 hover:border-indigo-500/40",
        glow: "hover:shadow-indigo-500/10",
        topBar: "from-indigo-500 to-violet-600",
        skills: [
            "Full Stack Development",
            "AI / Agent Development",
            "Backend Systems",
            "API Design & Integration",
            "Database Architecture",
            "Cloud Infrastructure",
        ],
    },
    {
        label: "Craft",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        accent: "#f59e0b",
        badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        checkColor: "text-amber-400",
        cardBg: "bg-[#100f08]",
        border: "border-amber-500/15 hover:border-amber-500/40",
        glow: "hover:shadow-amber-500/10",
        topBar: "from-amber-400 to-orange-500",
        skills: [
            "First Principles Thinking",
            "Systems Design",
            "Technical Writing",
            "Open Source Contribution",
            "Performance Optimization",
        ],
    },
    {
        label: "Expertise",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        accent: "#14b8a6",
        badgeBg: "bg-teal-500/10 text-teal-300 border-teal-500/20",
        checkColor: "text-teal-400",
        cardBg: "bg-[#07100f]",
        border: "border-teal-500/15 hover:border-teal-500/40",
        glow: "hover:shadow-teal-500/10",
        topBar: "from-teal-400 to-emerald-500",
        skills: [
            "Go · Node.js · Python",
            "Next.js · React",
            "PostgreSQL · MongoDB",
            "Docker · Linux · Redis",
            "Prompt Engineering",
            "LangGraph · MCP · BullMQ",
        ],
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
                <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">
                    I don&apos;t just write code — I architect solutions and think from first principles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.label}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                        viewport={{ once: true }}
                        className={`relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl ${category.cardBg} ${category.border} ${category.glow} card-hover`}
                    >
                        <div className={`h-0.5 w-full bg-gradient-to-r ${category.topBar} opacity-80`} />

                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${category.accent}18`, color: category.accent }}
                                    >
                                        {category.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{category.label}</p>
                                        <p className="text-white/30 text-xs mt-0.5">{category.skills.length} skills</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${category.badgeBg}`}>
                                    Active
                                </span>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-2.5 group/skill"
                                    >
                                        <svg
                                            className={`w-3.5 h-3.5 flex-shrink-0 ${category.checkColor}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-white/65 group-hover/skill:text-white/90 transition-colors duration-150">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-[0.04] blur-2xl pointer-events-none"
                            style={{ backgroundColor: category.accent, transform: 'translate(30%, 30%)' }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
