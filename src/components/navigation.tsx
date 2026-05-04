"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaGoogle,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Thesis", href: "/thesis" },
  { name: "Industrial Attachment", href: "/industrial-attachment" },
  { name: "Projects", href: "/projects" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav aria-label="Main Navigation" className="flex-shrink-0">
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
          "w-[320px] h-screen bg-white/95 backdrop-blur-md border-r border-gray-200 transform shadow-2xl md:shadow-none",
          "transition-transform duration-500 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex-1 overflow-y-auto pt-16 md:pt-8 pb-8 px-6 no-scrollbar">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:hidden text-gray-500 hover:text-[#8B0000] text-2xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          
          {/* Persistent Profile Section */}
          <div className="flex flex-col items-center mb-8 border-b border-gray-100 pb-8">
            <div className="relative group overflow-hidden rounded-2xl ring-4 ring-gray-50 shadow-inner w-40 h-40 mb-4">
              <Image
                src="/abdullah.jpg"
                alt="Muhammad Abdullah"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="text-center space-y-1 w-full">
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                Muhammad Abdullah
              </h1>
              <p className="text-[15px] font-medium text-[#8B0000]">Adjunct Lecturer</p>
              <p className="text-xs text-gray-500 mt-2">Department of Mechanical Engineering</p>
              <p className="text-xs text-gray-500">BUET, Dhaka-1000</p>
            </div>

            {/* Socials */}
            <div className="mt-5 flex justify-center space-x-3">
              {[
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-19b729200", label: "LinkedIn" },
                { Icon: FaGithub, href: "https://github.com/", label: "GitHub" },
                { Icon: FaResearchgate, href: "https://www.researchgate.net/profile/Muhammad-Abdullah-360", label: "ResearchGate" },
                { Icon: FaGoogle, href: "https://scholar.google.com/", label: "Google Scholar" },
              ].map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#8B0000] hover:border-[#8B0000] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  <Icon className="text-lg" />
                </Link>
              ))}
            </div>
            
            {/* Contact Quick Links */}
            <div className="mt-6 w-full space-y-3">
              <a href="mailto:abdullah1810037@gmail.com" className="flex items-center text-xs text-gray-600 hover:text-[#8B0000] transition-colors bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <FaEnvelope className="mr-3 text-[#8B0000] text-sm" />
                <span className="truncate">abdullah1810037@gmail.com</span>
              </a>
              <a href="tel:+8801521707828" className="flex items-center text-xs text-gray-600 hover:text-[#8B0000] transition-colors bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <FaPhone className="mr-3 text-[#8B0000] text-sm" />
                <span>+880 1521707828</span>
              </a>
              <a href="https://docs.google.com/file/d/1cJvvlDo9BJJLOQ1v0zcVs-exFzutvdDc/edit?usp=docslist_api&filetype=msword" download className="flex items-center text-xs text-gray-600 hover:text-[#8B0000] transition-colors bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <FaFileAlt className="mr-3 text-[#8B0000] text-sm" />
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-4 mb-2">Navigation</h3>
          </div>

          <div className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 group relative",
                    isActive
                      ? "bg-[#8B0000]/10 text-[#8B0000]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#8B0000]"
                  )}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#8B0000] rounded-r-full" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
