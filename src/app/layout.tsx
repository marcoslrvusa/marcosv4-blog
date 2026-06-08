import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ParticleBackground from "@/components/ParticleBackground";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcosv4.cloud"),
  icons: { shortcut: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="application/atom+xml"
          title="AI First — RSS Feed"
          href="/feed.xml"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EDL0F888PV" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EDL0F888PV', {
                page_title: document.title,
                page_location: window.location.href,
              });`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ParticleBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AI First — Marcos Luciano",
              url: "https://marcosv4.cloud",
              description: "Portal de inteligência artificial, AI Search (AEO/GEO), SEO estratégico e arquitetura de sistemas inteligentes.",
              inLanguage: ["pt", "en", "es"],
              author: {
                "@type": "Person",
                name: "Marcos Luciano",
                url: "https://marcosv4.cloud/about",
                jobTitle: "AI Lead & AI Search Specialist",
                sameAs: ["https://linkedin.com/in/marcoslrvieira"],
              },
            }),
          }}
        />
        <Providers>{children}</Providers>
        <BackToTop />
      </body>
    </html>
  );
}
