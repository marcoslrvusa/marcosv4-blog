import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: {
    default: "marcosv4.cloud — AI & Arquitetura de Sistemas Inteligentes",
    template: "%s — marcosv4.cloud",
  },
  description:
    "Senior Media Buyer, AI & SEO Specialist com 12+ anos de experiência. Escrevo sobre inteligência artificial, arquitetura de sistemas AI, cases Nvidia/Microsoft/Google/OpenAI e o mercado de IA no Brasil.",
  openGraph: {
    title: "marcosv4.cloud",
    description: "Senior Media Buyer, AI & SEO Specialist | Maior autoridade em IA do Brasil",
    siteName: "marcosv4.cloud",
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcos Luciano",
  alternateName: "Marcos Luciano Vieira",
  jobTitle: "Senior Media Buyer, AI & SEO Specialist",
  worksFor: { "@type": "Organization", name: "V4 Company" },
  url: "https://marcosv4.cloud",
  sameAs: ["https://linkedin.com/in/marcoslrvieira"],
  knowsAbout: [
    "Inteligência Artificial",
    "Machine Learning",
    "AI Search",
    "SEO",
    "Performance Marketing",
    "Arquitetura de Sistemas AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="marcosv4.cloud — RSS Feed"
          href="/feed.xml"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
