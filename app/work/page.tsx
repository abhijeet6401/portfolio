import { Metadata } from "next";
import { Suspense } from "react";
import { caseStudies } from "@/content/work";
import { WorkIndexItem } from "@/components/work-index-item";
import { FilterBar } from "@/components/filter-bar";
import { WorkCategory } from "@/lib/content-schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Proof of Work · Case Studies",
  description:
    "A selection of product, strategy, and analytical work. Turning unclear questions into useful decisions and operating systems across Snabbit, Aequitas, Frost & Sullivan, India Accelerator, and independent builds.",
  path: "/work",
});

interface WorkPageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const resolvedParams = await searchParams;
  const currentFilter = resolvedParams?.filter || "all";

  // Compute counts
  const counts = {
    all: caseStudies.length,
    product: caseStudies.filter((c) => c.categories.includes("product")).length,
    strategy: caseStudies.filter((c) => c.categories.includes("strategy")).length,
    analytics: caseStudies.filter((c) => c.categories.includes("analytics")).length,
  };

  // Filter and sort so that product cases lead by default
  const filteredStudies = caseStudies
    .filter((study) => {
      if (!currentFilter || currentFilter === "all") return true;
      return study.categories.includes(currentFilter as WorkCategory);
    })
    .sort((a, b) => {
      // Product entries appear first by default
      const aHasProd = a.categories.includes("product") ? 1 : 0;
      const bHasProd = b.categories.includes("product") ? 1 : 0;
      return bHasProd - aHasProd;
    });

  return (
    <div className="py-12 md:py-20">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Selected Projects &amp; Diligence
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1D1D1B] tracking-tight mb-6">
            Proof of Work
          </h1>

          <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed">
            A selection of product, strategy, and analytical work. The common thread is turning an unclear question into a useful decision or operating system.
          </p>
        </div>

        {/* Filter Bar */}
        <Suspense fallback={<div className="h-12 border-b border-[#C8C3B8]" />}>
          <FilterBar currentFilter={currentFilter} counts={counts} />
        </Suspense>

        {/* Case Studies List */}
        <div className="flex flex-col mt-6">
          {filteredStudies.length > 0 ? (
            filteredStudies.map((cs, idx) => (
              <WorkIndexItem key={cs.slug} caseStudy={cs} index={idx} />
            ))
          ) : (
            <div className="py-16 text-center text-[#66645E] font-mono text-sm">
              No case studies match this filter.
            </div>
          )}
        </div>

        {/* Source Note */}
        <div className="mt-16 pt-8 border-t border-[#C8C3B8]/60 text-xs font-mono text-[#66645E]">
          <p>
            * All figures, metrics, and outcomes are verified against approved CV materials. Anonymized where client or diligence confidentiality requires.
          </p>
        </div>
      </div>
    </div>
  );
}
