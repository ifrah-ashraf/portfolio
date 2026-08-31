import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen bg-[#05050a]">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <Link
                    href="/#blogs"
                    className="group mb-12 inline-flex items-center gap-2 text-sm text-[#f1eadb]/45 transition-colors duration-200 hover:text-[#d8c39b]"
                >
                    <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                    Back to blogs
                </Link>

                <article>
                    <div className="mb-8">
                        <p className="section-kicker">Writing / {params.id}</p>

                        <h1 className="mt-6 mb-4 font-serif text-4xl leading-tight tracking-tight text-[#f1eadb] md:text-5xl">
                            Blog post coming soon
                        </h1>

                        <p className="border-l border-[#d8c39b] pl-4 text-lg leading-relaxed text-[#f1eadb]/50">
                            Internal blog content will be loaded from the database once Supabase is connected.
                        </p>

                        <div className="mt-6 flex items-center gap-5 border-t border-[#f1eadb]/10 pt-6 text-sm text-[#f1eadb]/25">
                            <span>ID: {params.id}</span>
                            <span>Ifrah Ashraf</span>
                        </div>
                    </div>

                    <div className="mt-16 border border-[#f1eadb]/10 bg-[#101014] p-12 text-center">
                        <p className="text-base text-[#f1eadb]/30">
                            Content area — markdown from Supabase will render here.
                        </p>
                    </div>
                </article>

                <div className="mt-16 border-t border-[#f1eadb]/10 pt-8">
                    <Link
                        href="/#blogs"
                        className="group inline-flex items-center gap-2 text-sm text-[#f1eadb]/45 transition-colors duration-200 hover:text-[#d8c39b]"
                    >
                        <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                        All articles
                    </Link>
                </div>
            </div>
        </div>
    );
}
