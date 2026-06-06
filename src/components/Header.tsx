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
        ? "border-b border-border bg-background/80 backdrop-blur-xl shadow-lg shadow-black/10"
        : "bg-background/40 backdrop-blur-sm"
    }`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <I18nLink href="/" className="flex items-center gap-1.5 group shrink-0">
          <span className="font-mono text-base font-bold tracking-tight text-foreground group-hover:text-v4-red transition-colors">
            AI<span className="text-v4-red">:</span>First
          </span>
          <span className="hidden sm:inline font-mono text-[9px] text-muted-foreground/50 tracking-widest uppercase ml-1.5">
            by Marcos Luciano
          </span>
        </I18nLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <I18nLink
            href="/"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/" || (pathname !== "/about" && pathname !== "/consulting" && !pathname.startsWith("/topic"))
                ? "text-v4-red bg-v4-red/5"
                : "text-muted-foreground hover:text-v4-red hover:bg-v4-red/5"
            }`}
          >
            {t("home")}
          </I18nLink>
          <I18nLink
            href="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/about"
                ? "text-v4-red bg-v4-red/5"
                : "text-muted-foreground hover:text-v4-red hover:bg-v4-red/5"
            }`}
          >
            {t("about")}
          </I18nLink>
          <div className="topics-dropdown relative">
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                pathname.startsWith("/topic")
                  ? "text-v4-red bg-v4-red/5"
                  : "text-muted-foreground hover:text-v4-red hover:bg-v4-red/5"
              }`}
            >
              Tópicos
              <svg className={`w-3 h-3 transition-transform ${topicsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {topicsOpen && (
              <div className="absolute left-0 top-10 min-w-[200px] rounded-xl border border-border bg-card p-1.5 shadow-2xl shadow-black/40 z-50">
                <NextLink href="/topic/ia" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Brain className="w-4 h-4 text-v4-red" /> {t("topics.ia")}
                </NextLink>
                <NextLink href="/topic/mercado" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <TrendingUp className="w-4 h-4 text-v4-red" /> {t("topics.mercado")}
                </NextLink>
                <NextLink href="/topic/ai-search" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Layers className="w-4 h-4 text-v4-red" /> {t("topics.aiSearch")}
                </NextLink>
                <NextLink href="/topic/arquitetura" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Briefcase className="w-4 h-4 text-v4-red" /> {t("topics.arquitetura")}
                </NextLink>
              </div>
            )}
          </div>
          <I18nLink
            href="/consulting"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              pathname === "/consulting"
                ? "text-v4-red bg-v4-red/5"
                : "text-muted-foreground hover:text-v4-red hover:bg-v4-red/5"
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
              className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-v4-red/30 hover:text-v4-red"
            >
              <Globe className="h-3 w-3" />
              <span className="hidden sm:inline">{locale.toUpperCase()}</span>
              <span className="sm:hidden">{locale.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-10 min-w-[70px] rounded-lg border border-border bg-card p-1 shadow-xl z-50">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    className={`block w-full rounded-md px-3 py-1.5 text-left font-mono text-xs transition-colors hover:bg-v4-red/10 ${
                      l.code === locale ? "text-v4-red" : "text-muted-foreground"
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
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground transition-colors hover:text-v4-red hover:bg-v4-red/5"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>

          {/* CTA Button */}
          <I18nLink
            href="/consulting"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-v4-red px-4 py-1.5 text-xs font-semibold text-background transition-all hover:bg-v4-red/90 hover:shadow-lg hover:shadow-v4-red/20"
          >
            {tConsulting("hero.cta")}
          </I18nLink>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors"
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
            <I18nLink href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              {t("home")}
            </I18nLink>
            <I18nLink href="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              {t("about")}
            </I18nLink>
            <div className="border-t border-border/50 my-1" />
            <NextLink href="/topic/ia" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              <Brain className="w-4 h-4 text-v4-red" /> {t("topics.ia")}
            </NextLink>
            <NextLink href="/topic/mercado" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              <TrendingUp className="w-4 h-4 text-v4-red" /> {t("topics.mercado")}
            </NextLink>
            <NextLink href="/topic/ai-search" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              <Layers className="w-4 h-4 text-v4-red" /> {t("topics.aiSearch")}
            </NextLink>
            <NextLink href="/topic/arquitetura" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
              <Briefcase className="w-4 h-4 text-v4-red" /> {t("topics.arquitetura")}
            </NextLink>
            <div className="border-t border-border/50 my-1" />
            <I18nLink href="/consulting" onClick={() => setMobileOpen(false)} className="flex items-center justify-between rounded-lg bg-v4-red/10 px-3 py-2.5 text-sm font-semibold text-v4-red transition-colors">
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
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors"
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
