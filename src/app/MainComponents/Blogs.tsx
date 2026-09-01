"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import type { Blog } from "@/lib/blogs";
import { staticBlogs } from "@/lib/blogs";

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function BlogCard({ blog }: { blog: Blog }) {
    const isExternal = blog.type === "external";

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="flex h-full flex-col border border-[#f1eadb]/15 bg-[#101014] p-6 transition-colors hover:border-[#d8c39b]/60"
        >
            <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.16em] text-[#f1eadb]/35">
                <span>{blog.platform || "Article"}</span>
                <span>{formatDate(blog.published_at)}</span>
            </div>
            <h3 className="mt-7 text-lg font-semibold leading-snug text-[#f1eadb]">{blog.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#f1eadb]/50">{blog.excerpt}</p>
            <div className="mt-7 flex items-center justify-between border-t border-[#f1eadb]/10 pt-4">
                <span className="text-xs text-[#f1eadb]/35">{blog.reading_time ? `${blog.reading_time} min read` : "Read"}</span>
                {isExternal ? (
                    <a href={blog.external_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8c39b]">
                        Read <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                ) : (
                    <Link href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d8c39b]">
                        Read <FaArrowRight className="text-[9px]" />
                    </Link>
                )}
            </div>
        </motion.article>
    );
}

export default function Blogs() {
    const allBlogs = [...staticBlogs].sort(
        (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    );

    return (
        <section id="blogs" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="section-kicker mb-3">06 / Writing</p>
                    <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#f1eadb]">Notes from the work</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#f1eadb]/50">
                    Short reflections on systems, learning, and the decisions behind the code.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {allBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </section>
    );
}