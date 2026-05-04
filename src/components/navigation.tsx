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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-4 z-50 md:hidden text-white drop-shadow-md focus:outline-none hover:scale-110 transition-transform"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Menu</span>
        <div className="space-y-1.5">
          <span
            className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transform transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      <div
        className={cn(
          "fixed md:sticky top-0 left-0 z-50",
          "w-[260px] h-full bg-white/95 backdrop-blur-md border-r border-gray-200 transform shadow-2xl md:shadow-none",
          "transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-screen flex flex-col pt-16 md:pt-8 pb-8 px-4 gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-[#8B0000] text-2xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          
          <div className="px-4 mb-4 hidden md:block">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigation</h3>
          </div>

          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 group relative",
                  isActive
                    ? "bg-[#8B0000]/10 text-[#8B0000]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#8B0000]"
                )}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#8B0000] rounded-r-full" />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  );
}
