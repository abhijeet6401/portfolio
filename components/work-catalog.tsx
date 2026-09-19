"use client";

import { useSearchParams } from "next/navigation";
import { CaseStudy, WorkCategory } from "@/lib/content-schema";
import { WorkIndexItem } from "@/components/work-index-item";
import { FilterBar } from "@/components/filter-bar";

interface WorkCatalogProps {
  caseStudies: CaseStudy[];
}

export function WorkCatalog({ caseStudies }: WorkCatalogProps) {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  const counts = {
    all: caseStudies.length,
    product: caseStudies.filter((c) => c.categories.includes("product")).length,
    strategy: caseStudies.filter((c) => c.categories.includes("strategy")).length,
    analytics: caseStudies.filter((c) => c.categories.includes("analytics")).length,
  };

  const filteredStudies = caseStudies
    .filter((study) => {
      if (!currentFilter || currentFilter === "all") return true;
      return study.categories.includes(currentFilter as WorkCategory);
    })
    .sort((a, b) => {
      const aHasProd = a.categories.includes("product") ? 1 : 0;
      const bHasProd = b.categories.includes("product") ? 1 : 0;
      return bHasProd - aHasProd;
    });

  return (
    <>
      <FilterBar currentFilter={currentFilter} counts={counts} />

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
    </>
  );
}
