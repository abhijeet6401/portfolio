import Link from "next/link";
import { CaseStudy } from "@/lib/content-schema";

interface NextCaseProps {
  nextCaseStudy?: CaseStudy;
}

export function NextCase({ nextCaseStudy }: NextCaseProps) {
  if (!nextCaseStudy) {
    return (
      <nav aria-label="End of case studies navigation" className="mt-16 pt-8 border-t border-[#C8C3B8]">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-sm text-[#A7472A] hover:underline"
        >
          ← Back to all case studies
        </Link>
      </nav>
    );
  }

  return (
    <nav aria-label="Next case study navigation" className="mt-20 pt-10 border-t border-[#C8C3B8]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
          Next Case Study →
        </span>
        <Link
          href="/work"
          className="font-mono text-xs text-[#66645E] hover:text-[#1D1D1B] transition-colors"
        >
          Index / All Work
        </Link>
      </div>

      <Link
        href={`/work/${nextCaseStudy.slug}`}
        className="group block bg-[#FAF8F2] border border-[#C8C3B8] p-6 sm:p-8 rounded-sm hover:border-[#1D1D1B] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
      >
        <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#66645E]">
          <span className="text-[#A7472A] font-semibold">
            {nextCaseStudy.organization}
          </span>
          {nextCaseStudy.year && <span>· {nextCaseStudy.year}</span>}
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] group-hover:text-[#A7472A] transition-colors mb-2">
          {nextCaseStudy.title}
        </h3>

        <p className="text-sm text-[#66645E] max-w-2xl">
          {nextCaseStudy.oneLineProblem}
        </p>

        <div className="mt-4 flex items-center gap-1 font-mono text-xs font-medium text-[#A7472A]">
          <span>Continue reading</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>
    </nav>
  );
}
