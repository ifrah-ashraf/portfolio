import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
                <div>
                    <p className="section-kicker mb-7">01 / Profile</p>
                    <h1 className="font-serif text-6xl md:text-8xl tracking-[-0.06em] leading-[0.9] text-[#f1eadb]">
                        Ifrah<br />
                        <span className="text-[#d8c39b]">Ashraf</span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#f1eadb]/60 md:text-xl">
                        I&apos;m a full-stack engineer with a systems habit: I like understanding the data, APIs, UI, and
                        constraints connecting them, not just making one layer look finished. I enjoyed engineering in
                        college in both its forms — learning seriously, and learning with friends through conversations,
                        collaboration, and the occasional late push. I worked hardest when the moment called for it; that
                        balance shaped how I work now.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#f1eadb]/60 md:text-xl">
                        As I move through the professional world, I&apos;m going back to C to strengthen my fundamentals and
                        spending more time understanding systems at depth, including tools like Git rather than using them
                        at a shallow level. These things take time. That is part of the work, and it is worth it.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <a href="#projects" className="inline-flex items-center justify-center bg-[#d8c39b] px-5 py-3 text-sm font-semibold text-[#05050a] transition-colors hover:bg-[#ead8b8]">
                            View selected work
                        </a>
                        <a href="#experience" className="inline-flex items-center justify-center border border-[#f1eadb]/15 px-5 py-3 text-sm font-semibold text-[#f1eadb]/70 transition-colors hover:border-[#d8c39b]/60 hover:text-[#f1eadb]">
                            See experience
                        </a>
                    </div>
                </div>

                <div className="justify-self-start lg:mt-16 lg:justify-self-end">
                    <div className="w-56 md:w-64">
                            <div className="aspect-[4/5] overflow-hidden border border-[#f1eadb]/15 bg-[#101014]">
                            <Image
                                src="/images/ifrah_formal.jpeg"
                                alt="Ifrah Ashraf"
                                width={288}
                                height={360}
                                className="h-full w-full object-cover object-top grayscale-[15%]"
                                priority
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#f1eadb]/35">
                            <span>Software engineer</span>
                            <span>2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
