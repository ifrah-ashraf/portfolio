import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#05050a' }}>
            <div className="max-w-3xl mx-auto px-6 py-16">
                <Link
                    href="/#blogs"
                    className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 mb-12 group"
                >
                    <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                    Back to blogs
                </Link>

                <article>
                    <div className="mb-8">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-300">
                            Article
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-6 mb-4">
                            Blog post coming soon
                        </h1>

                        <p className="text-lg text-white/50 leading-relaxed border-l-2 border-violet-500/40 pl-4">
                            Internal blog content will be loaded from the database once Supabase is connected.
                        </p>

                        <div className="flex items-center gap-5 text-sm text-white/20 pt-6 mt-6 border-t border-white/5">
                            <span>ID: {params.id}</span>
                            <span>Ifrah Ashraf</span>
                        </div>
                    </div>

                    <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
                        <p className="text-white/30 text-base">
                            Content area — markdown from Supabase will render here.
                        </p>
                    </div>
                </article>

                <div className="mt-16 pt-8 border-t border-white/5">
                    <Link
                        href="/#blogs"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
                    >
                        <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                        All articles
                    </Link>
                </div>
            </div>
        </div>
    );
}
