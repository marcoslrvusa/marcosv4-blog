"use client";

import Link from "next/link";
import { Newspaper } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";

const navLinks = [
  { label: "Artigos", href: "/" },
  { label: "Sobre", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Newspaper className="h-5 w-5 text-v4-red" />
          <span className="text-sm font-bold tracking-tight text-gray-900">
            marcos<span className="text-v4-red">v4</span>
            <span className="text-gray-400 font-normal">.cloud</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-v4-red"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/marcosperetto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-v4-red"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
