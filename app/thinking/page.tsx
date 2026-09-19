import { Metadata } from "next";
import Link from "next/link";
import { PortfolioImage as Image } from "@/components/portfolio-image";
import { principles } from "@/content/principles";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "How I Think · Operating Principles",
  description:
    "The methods change. The habits are more consistent. Five core product and problem-solving principles grounded in field evidence across Snabbit, Aequitas, and early-stage diligence.",
  path: "/thinking",
});

export default function ThinkingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#C8C3B8]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Approach &amp; Habits
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1D1D1B] tracking-tight mb-6">
            The methods change. The habits are more consistent.
          </h1>

          <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed">
            Product frameworks and tech stacks evolve across projects. What endures is the habit of getting close to how the operation behaves, structuring uncertainty into explicit choices, and respecting evidence over slide decks.
          </p>
        </div>

        {/* Five Numbered Principles */}
        <div className="max-w-4xl space-y-16">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="bg-[#FAF8F2] border border-[#C8C3B8] p-8 sm:p-10 rounded-sm shadow-xs transition-colors hover:border-[#1D1D1B]"
            >
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#C8C3B8]/60">
                <span className="font-mono text-sm font-semibold text-[#A7472A]">
                  Principle {principle.number}
                </span>
                <span className="font-mono text-xs text-[#66645E]">
                  Operating Habit
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] tracking-tight mb-4">
                {principle.title}
              </h2>

              <blockquote className="font-serif italic text-lg sm:text-xl text-[#1D1D1B] pl-4 border-l-2 border-[#A7472A] mb-6 leading-relaxed bg-[#F3F0E8]/50 py-2">
                “{principle.quote}”
              </blockquote>

              <p className="text-base sm:text-lg text-[#66645E] leading-relaxed mb-6 font-normal">
                {principle.description}
              </p>

              <div className="pt-4 border-t border-[#C8C3B8]/40 flex items-center justify-between">
                <Link
                  href={principle.evidenceLink.href}
                  className="inline-flex items-center text-xs font-mono font-medium text-[#A7472A] hover:underline"
                >
                  <span>{principle.evidenceLink.text}</span>
                  <span className="ml-1" aria-hidden="true">→</span>
                </Link>
                <span className="font-mono text-[11px] text-[#66645E]">
                  Verified proof ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Documentary Photo Inset */}
        <div className="max-w-4xl my-20">
          <figure className="bg-[#FAF8F2] border border-[#C8C3B8] p-3 rounded-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3F0E8]">
              <Image
                src="/images/warehouse-fieldwork.jpg"
                alt="Documentary fieldwork examining operations and physical SKU movement"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 px-1 flex items-center justify-between text-xs text-[#66645E]">
              <span>
                Auditing operations at ground level: testing whether process assumptions survive the warehouse floor.
              </span>
              <span className="font-mono text-[10px] text-[#A7472A]">
                Documentary Record
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Closing Habits Reflection */}
        <div className="max-w-3xl pt-8 border-t border-[#C8C3B8]">
          <p className="font-serif italic text-xl text-[#1D1D1B] mb-8 leading-relaxed">
            “These are working habits, not a manifesto. The proof is in the case studies.”
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium rounded-sm hover:bg-[#A7472A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
            >
              Explore the Case Studies
              <span className="ml-2 font-mono" aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#C8C3B8] bg-[#FAF8F2] text-[#1D1D1B] text-sm font-medium rounded-sm hover:border-[#1D1D1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
            >
              Discuss a role
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
