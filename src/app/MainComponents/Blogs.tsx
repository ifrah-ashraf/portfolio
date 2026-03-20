"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import type { Blog } from "@/lib/blogs";
import { staticBlogs } from "@/lib/blogs";
import Link from "next/link";

const platformColors: Record<string, string> = {
    "Medium": "bg-green-500/10 text-green-300 border-green-500/20",
    "Dev.to": "bg-blue-500/10 text-blue-300 border-blue-500/20",
    "Hashnode": "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
    });
}

function BlogCard({ blog }: { blog: Blog }) {
    const isExternal = blog.type === 'external';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-[#0a0a12] border border-white/[0.07] hover:border-white/[0.15] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/5 card-hover"
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                    {isExternal && blog.platform && (
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${platformColors[blog.platform] || 'bg-white/5 text-white/50 border-white/10'}`}>
                            {blog.platform}
                        </span>
                    )}
                    {!isExternal && (
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-violet-500/10 text-violet-300 border-violet-500/20">
                            Article
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/30 flex-shrink-0">
                    {blog.reading_time && <span>{blog.reading_time} min read</span>}
                    {isExternal && <FaExternalLinkAlt className="text-xs opacity-50" />}
                </div>
            </div>

            <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-violet-200 transition-colors duration-200">
                {blog.title}
            </h3>

            {blog.excerpt && (
                <p className="text-sm text-white/45 leading-relaxed mb-4 line-clamp-2">
                    {blog.excerpt}
                </p>
            )}

            <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-white/25">{formatDate(blog.published_at)}</span>

                <div className="flex items-center gap-2 flex-wrap">
                    {blog.tags?.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
                {isExternal ? (
                    <a
                        href={blog.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group/link"
                    >
                        Read on {blog.platform}
                        <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                ) : (
                    <Link
                        href={`/blog/${blog.id}`}
                        className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200 group/link"
                    >
                        Read article
                        <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

export default function Blogs() {
    const allBlogs = [...staticBlogs].sort(
        (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    return (
        <section id="blogs" className="w-full max-w-6xl mx-auto px-6 py-20">
            <div className="mb-12 text-center">
                <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Thoughts &amp; Writing</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    The <span className="gradient-text">Blog</span>
                </h2>
                <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">
                    Engineering deep dives, lessons from building, and ideas worth sharing.
                </p>
            </div>

            {allBlogs.length === 0 ? (
                <div className="text-center py-20 text-white/30">
                    <p className="text-lg">No posts yet — check back soon.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            )}
        </section>
    );
}
