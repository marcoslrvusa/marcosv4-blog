"use client";

import Link from "next/link";

const navLinks = [
  { label: "Artigos", href: "/" },
  { label: "Sobre", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-v4-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-v4-red">
            <span className="text-xs font-bold text-white">M</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-v4-gray-900">
            marcos<span className="text-v4-red">v4</span>
            <span className="text-v4-gray-300 font-normal">.cloud</span>
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-v4-gray-500 transition-colors hover:text-v4-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
