"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import LinkedInIcon from "@/components/LinkedInIcon";

const locales = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
  }

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
            AI<tspan className="text-accent-emerald">:</tspan>First
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-emerald"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-emerald"
          >
            {t("about")}
          </Link>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent-emerald/30 hover:text-accent-emerald"
            >
              <Globe className="h-3 w-3" />
              {locale.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 min-w-[80px] rounded-lg border border-border bg-card p-1 shadow-xl">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    className={`block w-full rounded-md px-3 py-1.5 text-left font-mono text-xs transition-colors hover:bg-accent-emerald/10 ${
                      l.code === locale
                        ? "text-accent-emerald"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

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
              aria-label="Toggle theme"
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
