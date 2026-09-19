import Image from "next/image";
import { Artifact } from "@/lib/content-schema";

interface ArtifactFigureProps {
  artifact: Artifact;
}

export function ArtifactFigure({ artifact }: ArtifactFigureProps) {
  const isDiagram = artifact.kind === "diagram";

  return (
    <figure className="my-10 bg-[#FAF8F2] border border-[#C8C3B8] p-3 sm:p-4 rounded-xs shadow-xs">
      <div className="relative w-full overflow-hidden bg-[#F3F0E8] border border-[#C8C3B8]/60 rounded-xs">
        {isDiagram ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={artifact.src}
              alt={artifact.alt}
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
            <Image
              src={artifact.src}
              alt={artifact.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </div>
        )}
      </div>

      <figcaption className="mt-3.5 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs">
        <p className="text-[#1D1D1B] leading-relaxed max-w-2xl font-normal">
          {artifact.caption}
        </p>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[#66645E] shrink-0">
          <span className="px-2 py-0.5 bg-[#F3F0E8] border border-[#C8C3B8] rounded text-[#A7472A]">
            {artifact.sourceLabel}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
