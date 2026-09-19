import Link from "next/link";
import { timelineItems } from "@/content/timeline";

export function Timeline() {
  return (
    <section className="py-20 md:py-28 border-b border-[#C8C3B8]">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-4 border-b border-[#C8C3B8]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Chronology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] mt-1">
              Builder Timeline
            </h2>
          </div>
          <p className="font-mono text-xs text-[#66645E] mt-2 md:mt-0">
            Verified roles, projects, and execution records in reverse chronological order.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#C8C3B8] ml-3 md:ml-4 pl-6 md:pl-10 space-y-12">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF8F2] border-2 border-[#A7472A] transition-transform group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="bg-[#FAF8F2]/60 border border-[#C8C3B8] p-6 rounded-sm transition-colors group-hover:bg-[#FAF8F2]">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#C8C3B8]/40 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#A7472A] text-[#FAF8F2] rounded-xs">
                      {item.year}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#1D1D1B]">
                      {item.organization}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#66645E]">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-sm sm:text-base font-medium text-[#1D1D1B]">
                    {item.role}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#66645E] px-2 py-0.5 border border-[#C8C3B8] rounded bg-[#F3F0E8]">
                    {item.discipline}
                  </span>
                </div>

                <p className="text-sm text-[#66645E] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Verified Facts Chips */}
                {item.verifiedFacts && item.verifiedFacts.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#C8C3B8]/30">
                    {item.verifiedFacts.map((fact, fIdx) => (
                      <span
                        key={fIdx}
                        className="font-mono text-[11px] text-[#1D1D1B] bg-[#F3F0E8] border border-[#C8C3B8] px-2 py-0.5 rounded-xs"
                      >
                        ✓ {fact}
                      </span>
                    ))}
                  </div>
                )}

                {item.link && (
                  <div className="mt-4 pt-2">
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-xs font-mono font-medium text-[#A7472A] hover:underline"
                    >
                      View related case study →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
