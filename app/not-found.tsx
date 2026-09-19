import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36">
      <div className="container-editorial">
        <div className="max-w-2xl bg-[#FAF8F2] border border-[#C8C3B8] p-8 sm:p-12 rounded-sm shadow-xs">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
              Error 404 · Page Not Found
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] tracking-tight mb-4">
            This route does not exist.
          </h1>

          <p className="text-base text-[#66645E] leading-relaxed mb-8">
            The page you requested could not be located. It may have moved or been updated. You can return to the proof of work index or the homepage.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#C8C3B8]/60">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium rounded-sm hover:bg-[#A7472A] transition-colors"
            >
              <span>Explore Case Studies</span>
              <span className="ml-2 font-mono" aria-hidden="true">→</span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#C8C3B8] text-[#1D1D1B] text-sm font-medium rounded-sm hover:border-[#1D1D1B] transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
