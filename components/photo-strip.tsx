import Image from "next/image";

export function PhotoStrip() {
  const images = [
    {
      src: "/images/warehouse-fieldwork.jpg",
      alt: "Auditing warehouse floor and SKU bins with scanner and laptop",
      caption: "Learning how the operation behaves before proposing what it needs.",
      aspect: "aspect-[16/10]",
      colSpan: "lg:col-span-5",
    },
    {
      src: "/images/snabbit-desk-builder.jpg",
      alt: "Working at the Snabbit operations desk in Bengaluru",
      caption: "Seeing product promise and daily telemetry meet in the real world.",
      aspect: "aspect-[4/5]",
      colSpan: "lg:col-span-3",
    },
    {
      src: "/images/warehouse-fieldwork.jpg",
      alt: "Cross-functional operations coordination and inventory management",
      caption: "Most good work is cross-functional before it is presentable.",
      aspect: "aspect-[16/10]",
      colSpan: "lg:col-span-4",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#C8C3B8]">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-4 border-b border-[#C8C3B8]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Field Realities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] mt-1">
              In the Field
            </h2>
          </div>
          <p className="font-mono text-xs text-[#66645E] mt-2 md:mt-0 max-w-sm">
            Documentary evidence from operations, dispatch desks, and warehouse floors.
          </p>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`${img.colSpan} flex flex-col bg-[#FAF8F2] p-2.5 border border-[#C8C3B8] rounded-sm shadow-xs`}
            >
              <div className={`relative ${img.aspect} w-full overflow-hidden bg-[#F3F0E8] rounded-[2px]`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-3 px-1 text-xs text-[#66645E] leading-normal flex items-start justify-between gap-2">
                <span>{img.caption}</span>
                <span className="font-mono text-[10px] text-[#A7472A] font-medium whitespace-nowrap">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
