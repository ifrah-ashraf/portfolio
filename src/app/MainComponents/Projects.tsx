"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Project = {
    title: string;
    tagline: string;
    description: string;
    outcomes: string[];
    tech: string[];
    github: string;
    image: string;
    status: string;
};

const projects: Project[] = [
    {
        title: "Multithreaded Web Scraper",
        tagline: "A practical exercise in concurrency",
        description: "I built this to understand concurrency in practice. It fetches multiple URLs at once and makes the coordination visible instead of hiding it behind a framework.",
        outcomes: ["Used goroutines and channels to coordinate work", "Kept shared state safe while collecting results"],
        tech: ["Go", "Goroutines", "Channels", "HTTP"],
        github: "https://github.com/ifrah-ashraf/multithreaded-scrapper",
        image: "/images/scrapper.jpg",
        status: "Completed",
    },
    {
        title: "Smart India Hackathon — School Resource Allocator",
        tagline: "From UDISE data to a resource plan",
        description: "The project is a platform for schools to enter resource data from the UDISE portal — number of teachers, washrooms, classrooms, and other facilities. It categorises each school as “odd” or “standard”, then uses an allocation algorithm to identify the resources required to move an odd school toward the standard.",
        outcomes: ["Structured school data into a usable resource picture", "Used categorisation and an algorithm to identify the transition plan"],
        tech: ["Algorithms", "Next.js", "Node.js", "PostgreSQL"],
        github: "https://github.com/ifrah-ashraf/agni",
        image: "/images/school.jpg",
        status: "Hackathon finalist",
    },
    {
        title: "RAG System from Scratch",
        tagline: "Learning retrieval by building the pieces",
        description: "I built this to understand retrieval instead of treating it as a black box. PDFs are cleaned, split into page-level records, enriched with metadata, embedded, and retrieved for answers.",
        outcomes: ["Made the Bronze → Silver → Gold stages explicit", "Used Qdrant to inspect and query vector data"],
        tech: ["Python", "FastAPI", "Qdrant", "Voyage AI"],
        github: "https://github.com/ifrah-ashraf/rag/",
        image: "/images/rag_ui.png",
        status: "Completed",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker mb-3">04 / Work</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#f1eadb]">Built to understand</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#f1eadb]/50">
                    A small set of systems that show how I think, build, and take problems from idea to implementation.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {projects.map((project, idx) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="group overflow-hidden border border-[#f1eadb]/15 bg-[#101014] transition-colors hover:border-[#d8c39b]/60"
                    >
                        <div className="relative aspect-[5/3] overflow-hidden border-b border-[#f1eadb]/10 bg-[#16161a]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale-[35%] opacity-60 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-80"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                            <div className="absolute inset-0 bg-[#05050a]/25" />
                            <div className="absolute left-4 top-4 flex items-center gap-3">
                                <span className="font-mono text-xs text-[#f1eadb]/70">0{idx + 1}</span>
                                <span className="border border-[#f1eadb]/25 bg-[#05050a]/75 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#f1eadb]/70">
                                    {project.status}
                                </span>
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className="absolute right-4 top-4 text-[#f1eadb]/60 transition-colors hover:text-[#d8c39b]"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#f1eadb]">{project.title}</h3>
                            <p className="mt-2 text-sm text-[#d8c39b]">{project.tagline}</p>
                            <p className="mt-4 text-sm leading-relaxed text-[#f1eadb]/55">{project.description}</p>

                            <div className="mt-5 border-t border-[#f1eadb]/10 pt-4">
                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f1eadb]/35">What I learned</p>
                                <ul className="grid gap-2 text-sm text-[#f1eadb]/65">
                                    {project.outcomes.map((outcome) => (
                                        <li key={outcome} className="flex gap-3">
                                            <span className="mt-2 h-px w-3 shrink-0 bg-[#d8c39b]" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#f1eadb]/35">
                                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f1eadb]/60 transition-colors hover:text-[#d8c39b]"
                            >
                                View repository <FaExternalLinkAlt className="text-[9px]" />
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}