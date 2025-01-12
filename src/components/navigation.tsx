"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Thesis", href: "/thesis" },
  { name: "Industrial Attachment", href: "/industrial-attachment" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav aria-label="Main Navigation">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Menu</span>
        <div className="space-y-1">
          <span
            className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      <div
        className={cn(
          "fixed md:sticky top-0 left-0 z-50",
          "w-[250px] h-full bg-[#8B0000] transform",
          "transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-screen flex flex-col bg-[#8B0000]">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end md:hidden text-white text-xl px-4 py-2"
            aria-label="Close menu"
          >
            ×
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-6 py-3 text-white text-lg font-medium transition-colors",
                "border-b border-[#A80000]",
                "bg-gradient-to-r from-[#8B0000] to-[#A80000]",
                "hover:bg-[#750000] hover:from-[#750000] hover:to-[#750000]",
                pathname === link.href &&
                  "bg-[#750000] from-[#750000] to-[#750000]"
              )}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
