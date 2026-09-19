import { VerifiedFact } from "@/lib/content-schema";

interface MetricRailProps {
  facts: VerifiedFact[];
}

export function MetricRail({ facts }: MetricRailProps) {
  return (
    <div className="my-10 py-6 border-y border-[#C8C3B8]">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-[#A7472A] font-semibold">
          Verified Evidence Rail
        </span>
        <span className="font-mono text-[11px] text-[#66645E]">
          Source-backed metrics · CV verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-[#FAF8F2] border border-[#C8C3B8] p-4 rounded-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs text-[#66645E] uppercase font-mono tracking-wider">
                {fact.label}
              </span>
              <p className="font-serif text-2xl font-semibold text-[#1D1D1B] mt-1 tracking-tight">
                {fact.value}
              </p>
            </div>

            {fact.caveat && (
              <p className="text-xs text-[#66645E] mt-3 pt-2 border-t border-[#C8C3B8]/40 leading-snug">
                {fact.caveat}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
