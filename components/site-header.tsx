"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { profile } from "@/content/profile";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#F3F0E8]/95 border-b border-[#C8C3B8]"
          : "bg-[#F3F0E8] border-b border-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
          >
            <span className="font-serif text-2xl tracking-tight text-[#1D1D1B] group-hover:text-[#A7472A] transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-xs text-[#66645E] tracking-normal">
              {profile.roleDescriptor}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {profile.routes.map((route) => {
              const isActive =
                route.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(route.href);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm tracking-wide transition-colors py-2 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A] ${
                    isActive
                      ? "text-[#1D1D1B] font-medium"
                      : "text-[#66645E] hover:text-[#1D1D1B]"
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A7472A]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#1D1D1B] border border-[#C8C3B8] rounded hover:border-[#1D1D1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7472A]"
          >
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Simple full-width below header) */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden border-b border-[#C8C3B8] bg-[#FAF8F2] shadow-sm animate-in fade-in duration-150"
        >
          <nav className="container-editorial py-6 flex flex-col gap-4" aria-label="Mobile Navigation">
            {profile.routes.map((route) => {
              const isActive =
                route.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(route.href);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-base py-2 border-b border-[#C8C3B8]/40 flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#A7472A] font-medium"
                      : "text-[#1D1D1B] hover:text-[#A7472A]"
                  }`}
                >
                  <span>{route.label}</span>
                  {isActive && (
                    <span className="font-mono text-xs text-[#A7472A]">● active</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
