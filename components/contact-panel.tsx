"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="bg-[#FAF8F2] border border-[#C8C3B8] p-8 sm:p-12 rounded-sm shadow-xs max-w-3xl">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#A7472A]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#A7472A] font-semibold">
          Get in Touch
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] tracking-tight mb-4">
        If the work sounds relevant, write to me.
      </h2>

      <p className="text-base text-[#66645E] leading-relaxed mb-8">
        I am open to product roles, and to selected strategy or analytics roles where the work stays close to real decisions. The best note is a short one: what you are building, what is hard about it, and where you think I could help.
      </p>

      {/* Direct Contact Action Row */}
      <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-[#C8C3B8]/60">
        <a
          href={`mailto:${profile.email}?subject=Product%20Role%20Discussion%20-%20Abhijeet%20Kumar`}
          className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1D1D1B] text-[#FAF8F2] text-sm font-medium rounded-sm hover:bg-[#A7472A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
        >
          <span>Email Abhijeet</span>
          <span className="ml-2 font-mono" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center px-5 py-3.5 border border-[#C8C3B8] bg-[#FAF8F2] text-[#1D1D1B] text-sm font-mono rounded-sm hover:border-[#1D1D1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
        >
          {copied ? "✓ Copied to clipboard" : `Copy: ${profile.email}`}
        </button>
      </div>

      {/* CV Request & Channels */}
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
        <div>
          <span className="font-mono text-xs uppercase text-[#A7472A] font-semibold block mb-2">
            Curriculum Vitae
          </span>
          <p className="text-[#66645E] text-xs leading-relaxed mb-3">
            Role-specific CVs (Product Management, Strategy/Finance, and Data Analytics) are available upon request to protect client and research confidentiality.
          </p>
          <a
            href={`mailto:${profile.email}?subject=CV%20Request%20-%20Abhijeet%20Kumar`}
            className="inline-flex items-center text-xs font-mono text-[#A7472A] hover:underline"
          >
            Request specific CV track →
          </a>
        </div>

        <div>
          <span className="font-mono text-xs uppercase text-[#A7472A] font-semibold block mb-2">
            Verified Profiles &amp; Locations
          </span>
          <ul className="space-y-1.5 text-xs text-[#66645E]">
            <li>
              <strong className="text-[#1D1D1B]">Location:</strong> Across India (Kharagpur / Bengaluru / Mumbai / Delhi NCR)
            </li>
            <li>
              <strong className="text-[#1D1D1B]">Graduation:</strong> 2027 (IIT Kharagpur)
            </li>
            <li>
              <strong className="text-[#1D1D1B]">Code:</strong>{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D1D1B] hover:text-[#A7472A] underline"
              >
                GitHub Profile ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
