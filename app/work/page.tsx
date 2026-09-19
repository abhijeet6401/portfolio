import { Metadata } from "next";
import { Suspense } from "react";
import { caseStudies } from "@/content/work";
import { WorkCatalog } from "@/components/work-catalog";
import { generatePageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export const metadata: Metadata = generatePageMetadata({
  title: "Proof of Work · Case Studies",
  description:
    "A selection of product, strategy, and analytical work. Turning unclear questions into useful decisions and operating systems across Snabbit, Aequitas, Frost & Sullivan, India Accelerator, and independent builds.",
  path: "/work",
});

export default function WorkPage() {
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

        {/* Work Catalog with Suspense for URL searchParams */}
        <Suspense
          fallback={
            <div className="py-12 font-mono text-xs text-[#66645E]">
              Loading work items...
            </div>
          }
        >
          <WorkCatalog caseStudies={caseStudies} />
        </Suspense>

        {/* Source Note */}
        <div className="mt-16 pt-8 border-t border-[#C8C3B8]/60 text-xs font-mono text-[#66645E]">
          <p>
            * Case studies and metrics reflect real operating history. Proprietary data and client names are generalized or omitted for confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
