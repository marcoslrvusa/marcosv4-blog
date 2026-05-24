import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "marcosv4.cloud — Tecnologia, AI e Estratégia",
    template: "%s — marcosv4.cloud",
  },
  description:
    "Análises sobre inteligência artificial, tecnologia, geopolítica e estratégia. Por Marcos Luciano, AI Lead na V4 Company.",
  openGraph: {
    title: "marcosv4.cloud",
    description: "Tecnologia, AI e Estratégia na Era dos Agentes",
    siteName: "marcosv4.cloud",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-v4-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
