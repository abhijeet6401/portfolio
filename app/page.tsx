import Link from "next/link";
import { EditorialHero } from "@/components/editorial-hero";
import { PathwayRow } from "@/components/pathway-row";
import { WorkIndexItem } from "@/components/work-index-item";
import { PhotoStrip } from "@/components/photo-strip";
import { Timeline } from "@/components/timeline";
import { caseStudies } from "@/content/work";

export default function HomePage() {
  // Feature the 4 flagship case studies in exact requested order
  const featuredCases = [
    caseStudies.find((c) => c.slug === "snabbit")!,
    caseStudies.find((c) => c.slug === "aequitas")!,
    caseStudies.find((c) => c.slug === "frost-sullivan")!,
    caseStudies.find((c) => c.slug === "india-accelerator")!,
  ].filter(Boolean);

  return (
    <div>
      {/* 1. Hero */}
      <EditorialHero />

      {/* 2. Operating Pathways */}
      <PathwayRow />

      {/* 3. Selected Work */}
      <section className="py-20 md:py-28 border-b border-[#C8C3B8]">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-4 border-b border-[#C8C3B8]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
                Proof of Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] mt-1">
                Selected Case Studies
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[#A7472A] hover:underline mt-2 md:mt-0"
            >
              <span>View all 8 case studies &amp; notes</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="flex flex-col">
            {featuredCases.map((cs, idx) => (
              <WorkIndexItem key={cs.slug} caseStudy={cs} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center sm:text-left">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#C8C3B8] bg-[#FAF8F2] text-[#1D1D1B] text-sm font-medium rounded-sm hover:border-[#1D1D1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
            >
              <span>Explore all case studies &amp; independent builds</span>
              <span className="ml-2 font-mono" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. In the Field (Documentary Photo Strip) */}
      <PhotoStrip />

      {/* 5. Builder Timeline */}
      <Timeline />

      {/* 6. Closing Statement */}
      <section className="py-24 md:py-32 bg-[#FAF8F2] border-b border-[#C8C3B8]">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
                Looking Forward
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1D1D1B] leading-tight tracking-tight mb-6">
              The work I want next
            </h2>

            <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed mb-10">
              I am looking for product roles where field reality matters, the problem is still taking shape, and analysis has to lead to action. I am also open to strategy and analytics roles built around the same kind of judgment.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium tracking-wide rounded-sm hover:bg-[#A7472A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
            >
              <span>Get in touch</span>
              <span className="ml-2 font-mono" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
