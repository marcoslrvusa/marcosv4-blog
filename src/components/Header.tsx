"use client";

import { Globe, Brain, TrendingUp, Layers, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link as I18nLink, usePathname, useRouter } from "@/i18n/navigation";
import NextLink from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as Element).closest(".topics-dropdown")) setTopicsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <I18nLink href="/" className="flex items-center gap-3 group">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-v4-red/20 object-cover"
          />
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            AI<tspan className="text-v4-red">:</tspan>First
          </span>
          </I18nLink>

        <nav className="flex items-center gap-3">
          <I18nLink
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-v4-red"
          >
            {t("home")}
          </I18nLink>
          <I18nLink
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-v4-red"
          >
            {t("about")}
          </I18nLink>
          <div className="topics-dropdown relative hidden sm:block">
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-v4-red"
            >
              Tópicos
            </button>
            {topicsOpen && (
              <div className="absolute right-0 top-6 min-w-[180px] rounded-xl border border-border bg-card p-2 shadow-2xl shadow-black/40 z-50">
                <NextLink href="/topic/ia" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Brain className="w-4 h-4 text-v4-red" /> {t("topics.ia")}
                </NextLink>
                <NextLink href="/topic/mercado" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <TrendingUp className="w-4 h-4 text-v4-red" /> {t("topics.mercado")}
                </NextLink>
                <NextLink href="/topic/ai-search" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Layers className="w-4 h-4 text-v4-red" /> {t("topics.aiSearch")}
                </NextLink>
                <NextLink href="/topic/arquitetura" onClick={() => setTopicsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-v4-red hover:bg-v4-red/5 transition-colors">
                  <Briefcase className="w-4 h-4 text-v4-red" /> {t("topics.arquitetura")}
                </NextLink>
              </div>
            )}
          </div>
          <I18nLink
            href="/consulting"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-v4-red"
          >
            {tConsulting("nav")}
          </I18nLink>

          <SearchModal />

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-v4-red/30 hover:text-v4-red"
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
                    className={`block w-full rounded-md px-3 py-1.5 text-left font-mono text-xs transition-colors hover:bg-v4-red/10 ${
                      l.code === locale
                        ? "text-v4-red"
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
            className="text-muted-foreground transition-colors hover:text-v4-red"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          
        </nav>
      </div>
    </header>
  );
}
