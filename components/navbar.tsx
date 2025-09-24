"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>("#home");

  useEffect(() => {
    // initialize hash on mount
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash || "#home");
    }
    const onHashChange = () => {
      setCurrentHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isActive = (href: string) => {
    // support homepage without hash
    if (href === "#home") {
      return pathname === "/" && (currentHash === "" || currentHash === "#home");
    }
    return currentHash === href;
  };

  const linkBase = "neo-btn";
  const linkActive = "neo-btn--active";
  return (
    <div
        className="bg-[#e8e8e8] fixed p-4 md:px-10 xl:px-30 shadow-lg flex justify-between items-center montserrat text-lg z-10 w-full"
    >
      <div className="flex items-center space-x-4">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-[#37353E]">JMBS</h1>
      </div>
      {/* Desktop nav */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-10 text-[#37353E]">
          <li>
            <a
              href="#home"
              className={`inline-flex ${linkBase} ${isActive("#home") ? linkActive : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`inline-flex ${linkBase} ${isActive("#about") ? linkActive : ""}`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`inline-flex ${linkBase} ${isActive("#projects") ? linkActive : ""}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`inline-flex ${linkBase} ${isActive("#contact") ? linkActive : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile menu toggle */}
      <button
        aria-label="Toggle menu"
        className={`lg:hidden inline-flex ${linkBase} ${isMenuOpen ? linkActive : ""}`}
        onClick={() => setIsMenuOpen(v => !v)}
      >
        {isMenuOpen ? (
          // Close icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18" stroke="#37353E" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 6L6 18" stroke="#37353E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="#37353E" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 12H21" stroke="#37353E" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="#37353E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      {/* Mobile dropdown */}
      <div
        className={
          `absolute top-full left-0 w-full bg-[#e8e8e8] lg:hidden shadow-lg overflow-hidden ` +
          `transition-all duration-300 ease-out transform origin-top ` +
          (isMenuOpen ? `opacity-100 translate-y-0 max-h-96` : `opacity-0 -translate-y-2 max-h-0 pointer-events-none`)
        }
        aria-hidden={!isMenuOpen}
      >
          <ul className="flex flex-col items-stretch space-y-4 p-4 text-[#37353E]">
            <li className="w-full">
              <a
                href="#home"
                className={`flex ${linkBase} w-full justify-center text-center ${isActive("#home") ? linkActive : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                href="#about"
                className={`flex ${linkBase} w-full justify-center text-center ${isActive("#about") ? linkActive : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </a>
            </li>
            <li className="w-full">
              <a
                href="#projects"
                className={`flex ${linkBase} w-full justify-center text-center ${isActive("#projects") ? linkActive : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="w-full">
              <a
                href="#contact"
                className={`flex ${linkBase} w-full justify-center text-center ${isActive("#contact") ? linkActive : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
