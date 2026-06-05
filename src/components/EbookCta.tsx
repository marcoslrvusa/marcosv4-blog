"use client";

import { BookOpen, Download } from "lucide-react";
import Link from "next/link";

export default function EbookCta({ locale = "pt" }: { locale?: string }) {
  const isPt = locale === "pt";
  const isEn = locale === "en";

  return (
    <div className="gradient-border rounded-xl p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10">
          <BookOpen className="h-7 w-7 text-accent-cyan" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground">
            {isPt ? "📘 Guia Grátis de AI Search" : isEn ? "📘 Free AI Search Guide" : "📘 Guía Gratis de AI Search"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {isPt
              ? "Aprenda como ser encontrado pelo ChatGPT, Perplexity e Google AI Overviews em 5 passos práticos. Baixe o PDF completo gratuitamente."
              : isEn
              ? "Learn how to get found by ChatGPT, Perplexity, and Google AI Overviews in 5 practical steps. Download the complete PDF for free."
              : "Aprende cómo ser encontrado por ChatGPT, Perplexity y Google AI Overviews en 5 pasos prácticos. Descarga el PDF completo gratis."}
          </p>
          <Link
            href={`/${locale === "pt" ? "" : locale}/ebook/ai-search-guide`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-accent-cyan/90"
          >
            <Download className="h-4 w-4" />
            {isPt ? "Baixar Grátis" : isEn ? "Download Free" : "Descargar Gratis"}
          </Link>
        </div>
      </div>
    </div>
  );
}
