import { getAllLocalPosts } from "@/lib/content";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "pt";
  const q = searchParams.get("q")?.toLowerCase() || "";

  const posts = getAllLocalPosts(locale);

  interface SearchResult {
    title: string;
    slug: string;
    brief: string;
    tags: string[];
    publishedAt: string;
    coverImage: string | null;
  }

  let results: SearchResult[] = posts.map((p) => ({
    title: p.title,
    slug: p.slug,
    brief: p.brief,
    tags: p.tags?.map((t) => t.name) || [],
    publishedAt: p.publishedAt,
    coverImage: p.coverImage?.url || null,
  }));

  if (q) {
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brief.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({ results, total: results.length });
}
