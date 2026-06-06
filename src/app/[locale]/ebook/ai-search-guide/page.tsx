import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import EbookClient from "./client";

function loadEbook(locale: string): string {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  const { marked } = require("marked");

  const filePath = path.join(process.cwd(), "content/ebooks", locale === "en" ? "en/ai-search-guide.md" : "pt/guia-ai-search.md");
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(raw);
    return marked.parse(content, { async: false });
  } catch {
    return "<p>Content not available.</p>";
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isPt = locale === "pt";
  const isEn = locale === "en";

  return {
    title: isPt ? "Guia de AI Search — AI First" : isEn ? "AI Search Guide — AI First" : "Guía de AI Search — AI First",
    description: isPt
      ? "Guia prático de AI Search: como ser encontrado pelo ChatGPT, Perplexity e Google AI Overviews."
      : isEn
      ? "Practical AI Search guide: how to get found by ChatGPT, Perplexity, and Google AI Overviews."
      : "Guía práctica de AI Search: cómo ser encontrado por ChatGPT, Perplexity y Google AI Overviews.",
  };
}

export default async function EbookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ebook" });
  const html = loadEbook(locale);

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-16">
        <Breadcrumbs items={[
          { label: "Home", href: `/${locale === "pt" ? "" : locale}` },
          { label: "Guia de AI Search" },
        ]} />
      </div>
      <EbookClient
        locale={locale}
      html={html}
      translations={{
        title: t("title"),
        description: t("description"),
        formTitle: t("formTitle"),
        formDescription: t("formDescription"),
        namePlaceholder: t("namePlaceholder"),
        emailPlaceholder: t("emailPlaceholder"),
        cta: t("cta"),
        success: t("success"),
        error: t("error"),
        previewNote: t("previewNote"),
        downloadReady: t("downloadReady"),
        printCta: t("printCta"),
      }}
    />
    </>
  );
}
