import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/work";
import { CaseStudyHeader } from "@/components/case-study-header";
import { MetricRail } from "@/components/metric-rail";
import { ArtifactFigure } from "@/components/artifact-figure";
import { NextCase } from "@/components/next-case";
import { generatePageMetadata, getBreadcrumbJsonLd } from "@/lib/metadata";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return generatePageMetadata({
    title: `${study.organization} — ${study.title}`,
    description: `${study.oneLineProblem} ${study.deck}`,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  const nextStudy = study.nextSlug
    ? caseStudies.find((c) => c.slug === study.nextSlug)
    : undefined;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
    { name: study.organization, item: `/work/${study.slug}` },
  ];

  return (
    <article className="py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <div className="container-editorial">
        {/* Header with Title, Deck, and Metadata Box */}
        <CaseStudyHeader caseStudy={study} />

        {/* Verified Metric Rail */}
        {study.verifiedFacts && study.verifiedFacts.length > 0 && (
          <MetricRail facts={study.verifiedFacts} />
        )}

        {/* Reading Column for Narrative Sections */}
        <div className="reading-column mx-auto mt-12 space-y-16">
          {study.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-3 mb-4 pb-2 border-b border-[#C8C3B8]/50">
                <span className="font-mono text-xs text-[#A7472A] font-semibold">
                  0{idx + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] tracking-tight">
                  {section.heading}
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#1D1D1B] leading-relaxed font-normal">
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[#1D1D1B]/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Artifacts if present in section */}
              {section.artifacts && section.artifacts.length > 0 && (
                <div className="mt-8 space-y-8">
                  {section.artifacts.map((artifact, aIdx) => (
                    <ArtifactFigure key={aIdx} artifact={artifact} />
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Confidentiality Footer Note */}
          {study.confidentialityNote && (
            <div className="p-4 bg-[#FAF8F2] border border-[#C8C3B8] rounded-xs text-xs font-mono text-[#66645E] leading-relaxed">
              <span className="text-[#A7472A] font-semibold block mb-1">
                Confidentiality &amp; Source Disclaimer
              </span>
              {study.confidentialityNote}
            </div>
          )}

          {/* Next Case Study Navigation */}
          <NextCase nextCaseStudy={nextStudy} />
        </div>
      </div>
    </article>
  );
}
