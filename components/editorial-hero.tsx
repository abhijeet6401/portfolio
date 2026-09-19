import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export function EditorialHero() {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#C8C3B8]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text Content: 7 Columns on Desktop */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
                  Product Builder · India
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1D1B] leading-[1.12] tracking-tight mb-8">
                {profile.headline}
              </h1>

              {/* Intro Paragraph */}
              <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed max-w-2xl mb-10">
                {profile.intro}
              </p>
            </div>

            {/* CTAs & Proof Line */}
            <div className="pt-2 border-t border-[#C8C3B8]/40">
              <div className="flex flex-wrap items-center gap-5 my-6">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium tracking-wide rounded-sm hover:bg-[#A7472A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
                >
                  See selected work
                  <span className="ml-2 font-mono" aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/thinking"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-[#C8C3B8] text-[#1D1D1B] text-sm font-medium tracking-wide rounded-sm hover:border-[#1D1D1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
                >
                  How I think
                </Link>
              </div>

              {/* Proof Line */}
              <p className="font-mono text-xs text-[#66645E] leading-normal pt-2">
                Selected work across Snabbit, Aequitas, Frost &amp; Sullivan, India Accelerator, and independent builds.
              </p>
            </div>
          </div>

          {/* Hero Media: 5 Columns on Desktop */}
          <div className="lg:col-span-5">
            <figure className="relative flex flex-col bg-[#FAF8F2] p-2.5 border border-[#C8C3B8] rounded-sm shadow-xs">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F0E8] rounded-[2px]">
                <Image
                  src="/images/snabbit-desk-builder.jpg"
                  alt="Abhijeet Kumar working at his desk in Snabbit operations office with Make Snabbit a Habit in background"
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 42vw"
                  className="object-cover object-[50%_35%] grayscale-0 transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
              <figcaption className="mt-3 px-1 text-xs text-[#66645E] leading-normal flex items-start justify-between gap-2">
                <span>
                  Operations desk, Snabbit · Translating field telemetry into service product roadmaps.
                </span>
                <span className="font-mono text-[10px] uppercase text-[#A7472A] whitespace-nowrap">
                  Bengaluru · 2026
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
