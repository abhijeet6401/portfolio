import Link from "next/link";

interface PathwayItem {
  type: "Primary" | "Secondary";
  number: string;
  heading: string;
  copy: string;
  links: Array<{ label: string; href: string }>;
}

const pathways: PathwayItem[] = [
  {
    type: "Primary",
    number: "01",
    heading: "Product",
    copy: "Finding the real constraint, choosing what to build, and staying close to how the work behaves in the field.",
    links: [
      { label: "Snabbit", href: "/work/snabbit" },
      { label: "Aequitas", href: "/work/aequitas" },
      { label: "JobHunt Agent", href: "/work/jobhunt-agent" },
    ],
  },
  {
    type: "Secondary",
    number: "02",
    heading: "Strategy / Consulting",
    copy: "Structuring ambiguous questions, testing assumptions, and making a clear recommendation.",
    links: [
      { label: "Frost & Sullivan", href: "/work/frost-sullivan" },
      { label: "India Accelerator", href: "/work/india-accelerator" },
      { label: "3one4 Capital", href: "/work/3one4-capital" },
    ],
  },
  {
    type: "Secondary",
    number: "03",
    heading: "Analytics",
    copy: "Using models and measurement to improve a decision, not to decorate it.",
    links: [
      { label: "Amex Ranking", href: "/work/amex-offer-ranking" },
      { label: "Forecasting", href: "/work/frost-sullivan" },
      { label: "Equity Theses", href: "/work/research-competitions" },
    ],
  },
];

export function PathwayRow() {
  return (
    <section className="py-20 md:py-24 border-b border-[#C8C3B8]">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-4 border-b border-[#C8C3B8]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
            Operating Pathways
          </span>
          <p className="text-sm text-[#66645E] mt-1 md:mt-0 font-mono">
            Product-led · Grounded in commercial and analytical judgment
          </p>
        </div>

        {/* Pathway Rows */}
        <div className="divide-y divide-[#C8C3B8]">
          {pathways.map((path) => {
            const isPrimary = path.type === "Primary";
            return (
              <div
                key={path.number}
                className={`py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline transition-colors ${
                  isPrimary
                    ? "bg-[#FAF8F2]/60 -mx-4 px-4 rounded-sm"
                    : "hover:bg-[#FAF8F2]/30 -mx-4 px-4"
                }`}
              >
                {/* Meta / Index */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-mono text-sm text-[#A7472A] font-semibold">
                    {path.number}
                  </span>
                  <div>
                    <h2
                      className={`font-serif tracking-tight text-[#1D1D1B] ${
                        isPrimary
                          ? "text-2xl sm:text-3xl font-semibold"
                          : "text-xl sm:text-2xl font-normal"
                      }`}
                    >
                      {path.heading}
                    </h2>
                    {isPrimary && (
                      <span className="inline-block mt-1 font-mono text-[11px] uppercase tracking-wider text-[#A7472A] bg-[#FAF8F2] px-2 py-0.5 border border-[#C8C3B8] rounded">
                        Primary Discipline
                      </span>
                    )}
                  </div>
                </div>

                {/* Narrative Copy */}
                <div className="lg:col-span-5">
                  <p
                    className={`leading-relaxed text-[#1D1D1B] ${
                      isPrimary ? "text-base sm:text-lg" : "text-sm sm:text-base text-[#66645E]"
                    }`}
                  >
                    “{path.copy}”
                  </p>
                </div>

                {/* Evidence Links */}
                <div className="lg:col-span-4 flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-end">
                  <span className="font-mono text-xs text-[#66645E] uppercase tracking-wider w-full lg:w-auto lg:hidden">
                    Evidence:
                  </span>
                  {path.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group inline-flex items-center text-sm font-medium text-[#1D1D1B] hover:text-[#A7472A] transition-colors underline decoration-[#C8C3B8] underline-offset-4 hover:decoration-[#A7472A]"
                    >
                      <span>{link.label}</span>
                      <span className="ml-1 text-xs text-[#A7472A] transition-transform group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
