import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C8C3B8] bg-[#F3F0E8] mt-24 py-16 text-[#1D1D1B]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#C8C3B8]/60">
          {/* Column 1: Identity & Positioning */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <span className="font-serif text-2xl tracking-tight font-medium">
              {profile.name}
            </span>
            <p className="text-base text-[#66645E] max-w-md leading-relaxed">
              Product builder working across user problems, operations, strategy, and data.
            </p>
            <p className="font-mono text-xs text-[#66645E] mt-2">
              {profile.availabilityNote}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A7472A] font-semibold mb-1">
              Index
            </span>
            {profile.routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm text-[#1D1D1B] hover:text-[#A7472A] transition-colors py-0.5"
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact & Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A7472A] font-semibold mb-1">
              Direct
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[#1D1D1B] hover:text-[#A7472A] transition-colors py-0.5"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1D1D1B] hover:text-[#A7472A] transition-colors py-0.5"
            >
              GitHub ↗
            </a>
            <Link
              href="/contact"
              className="text-sm text-[#A7472A] hover:underline font-medium mt-1"
            >
              Request CV ↗
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Source Note & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#66645E]">
          <p className="max-w-2xl leading-relaxed">
            {profile.confidentialityNote}
          </p>
          <p className="font-mono whitespace-nowrap">
            © {currentYear} {profile.name} · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
