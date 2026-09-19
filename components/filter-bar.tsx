"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { WorkCategory } from "@/lib/content-schema";

interface FilterBarProps {
  currentFilter: string;
  counts: {
    all: number;
    product: number;
    strategy: number;
    analytics: number;
  };
}

const filters: Array<{ label: string; value: "all" | WorkCategory }> = [
  { label: "All Work", value: "all" },
  { label: "Product", value: "product" },
  { label: "Strategy & Diligence", value: "strategy" },
  { label: "Analytics & Models", value: "analytics" },
];

export function FilterBar({ currentFilter, counts }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("filter");
    } else {
      params.set("filter", value);
    }
    const query = params.toString();
    router.replace(`/work${query ? `?${query}` : ""}`, { scroll: false });
  };

  return (
    <div
      role="region"
      aria-label="Filter work items by discipline"
      className="my-8 pb-4 border-b border-[#C8C3B8] flex flex-wrap items-center gap-2"
    >
      <span className="font-mono text-xs uppercase tracking-wider text-[#66645E] mr-2">
        Filter by:
      </span>

      {filters.map((tab) => {
        const isActive =
          (tab.value === "all" && (!currentFilter || currentFilter === "all")) ||
          currentFilter === tab.value;

        const count =
          tab.value === "all"
            ? counts.all
            : counts[tab.value as keyof typeof counts];

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => handleFilterChange(tab.value)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A] ${
              isActive
                ? "bg-[#1D1D1B] text-[#FAF8F2] font-medium"
                : "bg-[#FAF8F2] text-[#1D1D1B] border border-[#C8C3B8] hover:border-[#1D1D1B]"
            }`}
            aria-pressed={isActive}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? "bg-[#FAF8F2]/20 text-[#FAF8F2]" : "bg-[#F3F0E8] text-[#66645E]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
