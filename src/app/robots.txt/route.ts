const BASE_URL = "https://marcosv4.cloud";

export async function GET() {
  const text = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
