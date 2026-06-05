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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="alternate"
          type="application/atom+xml"
          title="AI First — RSS Feed"
          href="/feed.xml"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ParticleBackground />
        <Providers>{children}</Providers>
        <BackToTop />
      </body>
    </html>
  );
}
