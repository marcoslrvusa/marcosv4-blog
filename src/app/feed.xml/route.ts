import { getAllLocalPosts } from "@/lib/content";

const BASE_URL = "https://marcosv4.cloud";

export async function GET() {
  const posts = getAllLocalPosts();

  const items = posts
    .map(
      (post) => `
    <entry>
      <title>${escapeXml(post.title)}</title>
      <link href="${BASE_URL}/posts/${post.slug}"/>
      <id>${BASE_URL}/posts/${post.slug}</id>
      <published>${new Date(post.publishedAt).toISOString()}</published>
      <updated>${new Date(post.publishedAt).toISOString()}</updated>
      <summary type="html">${escapeXml(post.brief)}</summary>
      <author>
        <name>Marcos Luciano</name>
      </author>
    </entry>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>marcosv4.cloud — AI & Arquitetura de Sistemas Inteligentes</title>
  <subtitle>Senior Media Buyer, AI & SEO Specialist. Escrevo sobre IA, arquitetura e mercado.</subtitle>
  <link href="${BASE_URL}/feed.xml" rel="self"/>
  <link href="${BASE_URL}" rel="alternate"/>
  <id>${BASE_URL}/</id>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>Marcos Luciano</name>
  </author>
${items}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}

function escapeXml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
