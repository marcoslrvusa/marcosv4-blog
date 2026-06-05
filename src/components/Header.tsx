"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";

const navLinks = [
  { label: "Artigos", href: "/" },
  { label: "Sobre", href: "/about" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover"
          />
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            marcosv4<span className="text-accent-emerald">:~$</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-emerald"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/marcoslrvieira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent-emerald"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground transition-colors hover:text-accent-emerald"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
