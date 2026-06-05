import { getAllLocalPosts } from "@/lib/content";
import { FileText } from "lucide-react";
import Link from "next/link";

function label(locale: string): string {
  if (locale === "en") return "Recent Posts";
  if (locale === "es") return "Artículos Recientes";
  return "Posts Recentes";
}

export default function RecentPosts({ locale = "pt" }: { locale?: string }) {
  const allPosts = getAllLocalPosts(locale);
  const recent = allPosts.slice(0, 5);

  if (recent.length === 0) return null;

  return (
    <div className="gradient-border rounded-xl">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <FileText className="h-3.5 w-3.5 text-accent-cyan" />
          <span>{label(locale)}</span>
        </div>
        <ul className="space-y-2.5">
          {recent.map((post) => {
            const date = new Date(post.publishedAt).toLocaleDateString(
              locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
              { day: "numeric", month: "short", year: "numeric" },
            );
            const prefix = locale === "pt" ? "" : `/${locale}`;
            return (
              <li key={post.slug}>
                <Link
                  href={`${prefix}/posts/${post.slug}`}
                  className="group block"
                >
                  <time className="font-mono text-[10px] text-muted-foreground">
                    {date}
                  </time>
                  <p className="mt-0.5 text-xs text-foreground transition-colors group-hover:text-accent-emerald line-clamp-2">
                    {post.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
