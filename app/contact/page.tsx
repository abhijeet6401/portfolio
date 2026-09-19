import { Metadata } from "next";
import { ContactPanel } from "@/components/contact-panel";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact & Availability · Abhijeet Kumar",
  description:
    "Get in touch with Abhijeet Kumar. Open to Product, Strategy/Consulting, and Analytics roles across India. Graduating in 2027 from IIT Kharagpur.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Availability &amp; Inquiries
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1D1D1B] tracking-tight mb-4">
            Direct Contact
          </h1>

          <p className="text-lg sm:text-xl text-[#66645E] leading-relaxed">
            Graduating in 2027 from IIT Kharagpur. Open to Product Management, Strategy, and Analytics opportunities across India.
          </p>
        </div>

        <ContactPanel />
      </div>
    </div>
  );
}
