import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Timeline } from "@/components/timeline";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Abhijeet Kumar · Product Builder",
  description:
    "A builder shaped by operations, finance, and data. Undergraduate at IIT Kharagpur graduating in 2027, working across product management, operations, and analytical strategy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#C8C3B8]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Background &amp; Direction
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1D1D1B] tracking-tight mb-8">
            A builder shaped by operations, finance, and data.
          </h1>

          {/* 250-350 word editorial narrative */}
          <div className="space-y-6 text-base sm:text-lg text-[#1D1D1B] leading-relaxed font-normal">
            <p>
              I am an undergraduate at IIT Kharagpur pursuing a B.S. in Economics with a minor in Mathematics &amp; Computing and a micro-specialization in Artificial Intelligence. My work has traversed high-frequency service operations, institutional investment research, commercial demand forecasting, early-stage venture diligence, and autonomous builder projects.
            </p>

            <p>
              Across these environments, my advantage is not simply having touched multiple disciplines. It is the ability to translate between them: turning chaotic warehouse realities and technician edge cases into product roadmaps, translating $23M+ in multi-country transaction data into inventory commitments, and grounding early-stage venture hype into disciplined unit economic judgment.
            </p>

            <p>
              I am most drawn to problems where digital systems meet messy physical constraints. In on-demand services, software cannot fix disorganized warehouse bins or unrealistic dispatch windows; the real product work requires embedding directly with operators, tracking daily telemetry, and shipping interventions that survive contact with reality.
            </p>

            <p>
              Graduating in 2027, I am focused on Product Management and builder roles where field reality matters, the problem is still taking shape, and analysis must directly lead to operating decisions. I am also open to strategy and analytics roles built around the same standard of execution.
            </p>
          </div>

          {/* Key Facts Summary */}
          <div className="mt-10 p-6 bg-[#FAF8F2] border border-[#C8C3B8] rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="text-[#66645E] block uppercase mb-1">
                Education
              </span>
              <p className="font-medium text-[#1D1D1B]">
                IIT Kharagpur · 2027
              </p>
              <p className="text-[11px] text-[#66645E] mt-0.5">
                B.S. Economics · Math &amp; AI
              </p>
            </div>

            <div>
              <span className="text-[#66645E] block uppercase mb-1">
                Availability
              </span>
              <p className="font-medium text-[#1D1D1B]">
                Roles Across India
              </p>
              <p className="text-[11px] text-[#66645E] mt-0.5">
                Product · Strategy · Analytics
              </p>
            </div>

            <div>
              <span className="text-[#66645E] block uppercase mb-1">
                Direct Contact
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-[#A7472A] hover:underline"
              >
                {profile.email}
              </a>
              <p className="text-[11px] text-[#66645E] mt-0.5">
                CVs available on request
              </p>
            </div>
          </div>
        </div>

        {/* Human Documentary Photo Sequence */}
        <div className="max-w-4xl my-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#C8C3B8]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Documentary Texture
            </span>
            <span className="font-mono text-xs text-[#66645E]">
              Fieldwork · Operations Desk · Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <figure className="bg-[#FAF8F2] border border-[#C8C3B8] p-3 rounded-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F0E8]">
                <Image
                  src="/images/snabbit-desk-builder.jpg"
                  alt="Abhijeet Kumar working at desk in Snabbit office"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-[50%_35%]"
                />
              </div>
              <figcaption className="mt-3 px-1 text-xs text-[#66645E] leading-normal flex items-start justify-between gap-2">
                <span>
                  Operations workstation at Snabbit: coordinating service quality and category launches.
                </span>
                <span className="font-mono text-[10px] text-[#A7472A]">
                  2026
                </span>
              </figcaption>
            </figure>

            <figure className="bg-[#FAF8F2] border border-[#C8C3B8] p-3 rounded-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F0E8]">
                <Image
                  src="/images/warehouse-fieldwork.jpg"
                  alt="Warehouse inventory checking and scanning operations on the floor"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 px-1 text-xs text-[#66645E] leading-normal flex items-start justify-between gap-2">
                <span>
                  Warehouse inventory floor: auditing SKU bins and scanner variance directly with operators.
                </span>
                <span className="font-mono text-[10px] text-[#A7472A]">
                  Fieldwork
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Builder Timeline */}
        <Timeline />

        {/* Contact CTA */}
        <div className="max-w-3xl mt-20 pt-8 border-t border-[#C8C3B8]">
          <h2 className="font-serif text-3xl text-[#1D1D1B] tracking-tight mb-4">
            Interested in working together?
          </h2>
          <p className="text-base text-[#66645E] leading-relaxed mb-6">
            If you are building products or operating models where ground reality matters, let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium rounded-sm hover:bg-[#A7472A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
          >
            <span>Get in touch with Abhijeet</span>
            <span className="ml-2 font-mono" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
