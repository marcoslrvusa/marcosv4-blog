"use client";

import { Globe, Brain, TrendingUp, Layers, Briefcase, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link as I18nLink, usePathname, useRouter } from "@/i18n/navigation";
import NextLink from "next/link";
import LinkedInIcon from "@/components/LinkedInIcon";
import SearchModal from "@/components/SearchModal";

const locales = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const t = useTranslations("nav");
  const tConsulting = useTranslations("consulting");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [langOpen, setLangOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as Element).closest(".topics-dropdown")) setTopicsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-border bg-background/80 backdrop-blur-xl"
        : "bg-background/40 backdrop-blur-sm"
    }`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <I18nLink href="/" className="flex items-center gap-1.5 group shrink-0">
          <span className="font-mono text-base font-bold tracking-tight text-foreground">
            AI<span className="text-accent">:</span>First
          </span>
        </I18nLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <I18nLink
            href="/"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/" || (pathname !== "/about" && pathname !== "/consulting" && !pathname.startsWith("/topic"))
                ? "text-accent bg-accent-subtle"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("home")}
          </I18nLink>
          <I18nLink
            href="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/about"
                ? "text-accent bg-accent-subtle"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("about")}
          </I18nLink>
          <div className="topics-dropdown relative">
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                pathname.startsWith("/topic")
                  ? "text-accent bg-accent-subtle"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tópicos
              <svg className={`w-3 h-3 transition-transform ${topicsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {topicsOpen && (
              <div className="absolute left-0 top-10 min-w-[200px] rounded-xl border border-border bg-card p-1.5 shadow-2xl z-50">
                <NextLink href="/topic/ia" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Brain className="w-4 h-4 text-muted-foreground" /> {t("topics.ia")}
                </NextLink>
                <NextLink href="/topic/mercado" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" /> {t("topics.mercado")}
                </NextLink>
                <NextLink href="/topic/ai-search" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Layers className="w-4 h-4 text-muted-foreground" /> {t("topics.aiSearch")}
                </NextLink>
                <NextLink href="/topic/arquitetura" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Briefcase className="w-4 h-4 text-muted-foreground" /> {t("topics.arquitetura")}
                </NextLink>
              </div>
            )}
          </div>
          <I18nLink
            href="/consulting"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/consulting"
                ? "text-accent bg-accent-subtle"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tConsulting("nav")}
          </I18nLink>
        </nav>

        <div className="flex items-center gap-2">
          <SearchModal />

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[#3a3a52] hover:text-foreground"
            >
              <Globe className="h-3 w-3" />
              <span>{locale.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-10 min-w-[70px] rounded-lg border border-border bg-card p-1 z-50">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    className={`block w-full rounded-md px-3 py-1.5 text-left font-mono text-xs transition-colors hover:bg-accent-subtle ${
                      l.code === locale ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/marcoslrvieira"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            <I18nLink href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("home")}
            </I18nLink>
            <I18nLink href="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("about")}
            </I18nLink>
            <div className="border-t border-border/50 my-1" />
            <NextLink href="/topic/ia" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Brain className="w-4 h-4 text-muted-foreground" /> {t("topics.ia")}
            </NextLink>
            <NextLink href="/topic/mercado" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <TrendingUp className="w-4 h-4 text-muted-foreground" /> {t("topics.mercado")}
            </NextLink>
            <NextLink href="/topic/ai-search" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Layers className="w-4 h-4 text-muted-foreground" /> {t("topics.aiSearch")}
            </NextLink>
            <NextLink href="/topic/arquitetura" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Briefcase className="w-4 h-4 text-muted-foreground" /> {t("topics.arquitetura")}
            </NextLink>
            <div className="border-t border-border/50 my-1" />
            <I18nLink href="/consulting" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-foreground transition-colors">
              {tConsulting("nav")}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </I18nLink>
            <a
              href="https://linkedin.com/in/marcoslrvieira"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
