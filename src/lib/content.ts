import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Post } from "./types";

function postsDir(locale = "pt") {
  return path.join(process.cwd(), "content/posts", locale);
}

export function getAllLocalPosts(locale = "pt"): Post[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => parsePostFile(file, locale))
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getLocalPost(slug: string, locale = "pt"): Post | null {
  try {
    const dir = postsDir(locale);
    const file = fs.readdirSync(dir).find((f) => f.startsWith(slug));
    if (!file) return null;
    return parsePostFile(file, locale);
  } catch {
    return null;
  }
}

export function getAllLocalSlugs(locale = "pt"): string[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function parsePostFile(filename: string, locale = "pt"): Post | null {
  const filePath = path.join(postsDir(locale), filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const html = marked.parse(content, { async: false }) as string;

  return {
    id: filename.replace(/\.md$/, ""),
    title: data.title || "",
    brief: data.brief || "",
    slug: filename.replace(/\.md$/, ""),
    publishedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    content: { markdown: content, html },
    tags: data.tags
      ? data.tags.map((t: string) => ({ name: t, slug: t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-") }))
      : [],
    author: { name: "Marcos Luciano", profilePicture: null },
    coverImage: data.coverImage ? { url: data.coverImage } : null,
  };
}
