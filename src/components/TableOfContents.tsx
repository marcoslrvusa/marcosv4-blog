"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({
  items,
  locale = "pt",
}: {
  items: TocItem[];
  locale?: string;
}) {
  const [activeId, setActiveId] = useState<string>("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }

  if (items.length === 0) return null;

  const label =
    locale === "en" ? "In This Article" : locale === "es" ? "En Este Artículo" : "Neste Artigo";

  return (
    <div className="gradient-border rounded-xl">
      <div className="p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          <ListTree className="h-3.5 w-3.5 text-accent-emerald" />
          <span>{label}</span>
          <svg
            className={`ml-auto h-3 w-3 transition-transform duration-200 ${collapsed ? "-rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {!collapsed && (
          <nav className="mt-3 space-y-0.5">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left text-xs transition-all duration-200 hover:text-accent-emerald ${
                  item.level === 3 ? "pl-4" : ""
                } ${
                  activeId === item.id
                    ? "font-medium text-accent-emerald"
                    : "text-muted-foreground"
                }`}
              >
                {item.text}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
