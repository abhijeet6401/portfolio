import Link from "next/link";
import { CaseStudy } from "@/lib/content-schema";

interface WorkIndexItemProps {
  caseStudy: CaseStudy;
  index: number;
}

export function WorkIndexItem({ caseStudy, index }: WorkIndexItemProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative py-8 md:py-10 border-b border-[#C8C3B8] transition-colors hover:bg-[#FAF8F2]/70 -mx-4 px-4 rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Index & Org */}
        <div className="lg:col-span-3 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-[#A7472A]">
              {formattedIndex}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#66645E]">
              {caseStudy.organization}
            </span>
            {caseStudy.year && (
              <span className="font-mono text-xs text-[#66645E]/80">
                · {caseStudy.year}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {caseStudy.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 border border-[#C8C3B8] text-[#66645E] bg-[#F3F0E8] rounded-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Title, Problem & Link */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <h3 className="font-serif text-2xl sm:text-2xl text-[#1D1D1B] group-hover:text-[#A7472A] transition-colors leading-snug">
            <Link
              href={`/work/${caseStudy.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A] rounded-xs after:absolute after:inset-0"
            >
              {caseStudy.title}
            </Link>
          </h3>
          <p className="text-sm sm:text-base text-[#66645E] leading-relaxed">
            {caseStudy.oneLineProblem}
          </p>
        </div>

        {/* Verified Fact Chips */}
        <div className="lg:col-span-4 flex flex-col gap-2 relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#A7472A] font-semibold">
            Verified Proof
          </span>
          <div className="flex flex-col gap-2">
            {caseStudy.verifiedFacts.slice(0, 3).map((fact, i) => (
              <div
                key={i}
                className="bg-[#FAF8F2] border border-[#C8C3B8] px-3 py-2 rounded-xs flex flex-col"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium text-[#1D1D1B]">
                    {fact.label}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#A7472A] whitespace-nowrap">
                    {fact.value}
                  </span>
                </div>
                {fact.caveat && (
                  <span className="text-[11px] text-[#66645E] mt-0.5 leading-tight">
                    {fact.caveat}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-1 text-xs font-mono font-medium text-[#A7472A]">
            <span>Read full case study</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </article>
  );
}
