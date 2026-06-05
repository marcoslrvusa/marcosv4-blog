"use client";

import { Search } from "lucide-react";

export default function HeroSearch({ locale = "pt" }: { locale?: string }) {
  return (
    <div className="gradient-border rounded-xl">
      <button
        onClick={() => document.dispatchEvent(new CustomEvent("opencode-search"))}
        className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm text-muted-foreground"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">
          {locale === "en" ? "Search 40+ articles about AI..." : locale === "es" ? "Buscar 40+ artículos sobre IA..." : "Buscar 40+ artigos sobre IA..."}
        </span>
        <kbd className="hidden rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}
