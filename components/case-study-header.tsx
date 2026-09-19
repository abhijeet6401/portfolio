import Link from "next/link";
import { CaseStudy } from "@/lib/content-schema";

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <header className="pt-8 pb-12 border-b border-[#C8C3B8]">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumbs" className="mb-6">
        <ol className="flex items-center gap-2 font-mono text-xs text-[#66645E]">
          <li>
            <Link href="/" className="hover:text-[#1D1D1B] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/work" className="hover:text-[#1D1D1B] transition-colors">
              Work
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[#A7472A] truncate max-w-[200px] sm:max-w-none">
            {caseStudy.organization}
          </li>
        </ol>
      </nav>

      {/* Organization & Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#A7472A] font-semibold">
          {caseStudy.organization}
        </span>
        {caseStudy.year && (
          <span className="font-mono text-xs text-[#66645E]">
            · {caseStudy.year}
          </span>
        )}
        <div className="flex items-center gap-1.5 ml-2">
          {caseStudy.categories.map((cat) => (
            <span
              key={cat}
              className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 border border-[#C8C3B8] text-[#66645E] bg-[#FAF8F2] rounded-xs"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] leading-[1.15] tracking-tight max-w-4xl mb-6">
        {caseStudy.title}
      </h1>

      {/* Deck / Subtitle */}
      <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed max-w-3xl mb-8 font-normal">
        {caseStudy.deck}
      </p>

      {/* At a Glance Metadata Box */}
      <div className="bg-[#FAF8F2] border border-[#C8C3B8] p-5 rounded-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
        <div>
          <span className="font-mono text-[#66645E] uppercase block mb-1">
            Role &amp; Mandate
          </span>
          <p className="font-medium text-[#1D1D1B]">
            {caseStudy.role || "Product & Analytical Contributor"}
          </p>
        </div>

        <div>
          <span className="font-mono text-[#66645E] uppercase block mb-1">
            Timeline
          </span>
          <p className="font-medium text-[#1D1D1B]">
            {caseStudy.period || "Project Period"}
          </p>
        </div>

        <div>
          <span className="font-mono text-[#66645E] uppercase block mb-1">
            Disciplines
          </span>
          <p className="font-medium text-[#1D1D1B] capitalize">
            {caseStudy.categories.join(" · ")}
          </p>
        </div>

        <div>
          <span className="font-mono text-[#66645E] uppercase block mb-1">
            Source &amp; Guardrails
          </span>
          <span className="inline-block font-mono text-[10px] text-[#A7472A] bg-[#F3F0E8] px-2 py-0.5 border border-[#C8C3B8] rounded">
            Anonymized / Verified
          </span>
        </div>
      </div>
    </header>
  );
}
