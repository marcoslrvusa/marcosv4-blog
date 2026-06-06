"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Loader2, FileText, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface SearchResult {
  title: string;
  slug: string;
  brief: string;
  tags: string[];
  publishedAt: string;
  coverImage: string | null;
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenSearch() {
      setOpen((v) => !v);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("opencode-search", onOpenSearch);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("opencode-search", onOpenSearch);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setActiveIdx(-1);
      return;
    }
    setActiveIdx(-1);
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/posts?locale=${locale}&q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [query, locale]);

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && activeIdx >= 0) {
        const prefix = locale === "pt" ? "" : `/${locale}`;
        window.location.href = `${prefix}/posts/${results[activeIdx].slug}`;
        setOpen(false);
      }
    },
    [results, activeIdx, locale]
  );

  const prefix = locale === "pt" ? "" : `/${locale}`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-v4-red/30 hover:text-v4-red"
        aria-label="Search articles"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg animate-scale-in rounded-xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
                placeholder={
                  locale === "en"
                    ? "Search articles..."
                    : locale === "es"
                    ? "Buscar artículos..."
                    : "Buscar artigos..."
                }
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-2 max-h-80 overflow-y-auto">
              {loading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              )}

              {!loading && query && results.length === 0 && (
                <p className="py-8 text-center font-mono text-xs text-muted-foreground">
                  {locale === "en"
                    ? "No results found"
                    : locale === "es"
                    ? "Sin resultados"
                    : "Nenhum resultado encontrado"}
                </p>
              )}

              {!loading && results.length > 0 && (
                <ul className="space-y-0.5" role="listbox">
                  {results.map((r, i) => (
                    <li
                      key={r.slug}
                      role="option"
                      aria-selected={i === activeIdx}
                    >
                      <Link
                        href={`${prefix}/posts/${r.slug}`}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          i === activeIdx
                            ? "bg-v4-red/10 text-v4-red"
                            : "text-foreground hover:bg-card-hover"
                        }`}
                      >
                        <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium">{r.title}</p>
                          <p className="truncate text-xs text-muted-foreground">
                            {r.brief}
                          </p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {!query && !loading && (
                <p className="py-8 text-center font-mono text-[11px] text-muted-foreground">
                  {locale === "en"
                    ? "Type to search 40+ articles"
                    : locale === "es"
                    ? "Escribe para buscar 40+ artículos"
                    : "Digite para buscar 40+ artigos"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
