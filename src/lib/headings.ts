import type { TocItem } from "@/components/TableOfContents";

export function extractHeadings(html: string): TocItem[] {
  const items: TocItem[] = [];
  const regex = /<h([23])\s[^>]*?id=["']([^"']+)["'][^>]*>(.*?)<\/h[23]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    const text = match[3].replace(/<[^>]+>/g, "").trim();
    items.push({ id, text, level });
  }

  if (items.length > 0) return items;

  const fallbackRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  while ((match = fallbackRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    items.push({ id, text, level });
  }

  return items;
}
