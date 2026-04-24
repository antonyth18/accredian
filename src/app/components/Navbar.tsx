"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Stats", href: "#stats" },
  { name: "Clients", href: "#clients" },
  { name: "Accredian Edge", href: "#accredian-edge" },
  { name: "CAT", href: "#cat" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQs", href: "#faqs" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    
    handleHashChange();
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-[#2563EB] leading-none">
            accredian
          </div>
          <div className="text-[#64748B] text-[11px] leading-tight mt-1">
            credentials that matter
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${
                activeHash === link.href
                  ? "text-[#2563EB] underline decoration-2 underline-offset-8"
                  : "text-[#0F172A]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0F172A] hover:text-[#2563EB] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveHash(link.href);
                  setIsOpen(false);
                }}
                className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${
                  activeHash === link.href
                    ? "text-[#2563EB] underline decoration-2 underline-offset-4"
                    : "text-[#0F172A]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
