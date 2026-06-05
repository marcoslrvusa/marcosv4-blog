import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    title: {
      default: `${t("title")} — ${t("subtitle")}`,
      template: `%s — ${t("title")}`,
    },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      type: "website",
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_ES",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcos Luciano",
  alternateName: "Marcos Luciano Vieira",
  jobTitle: "AI Lead, AI & SEO Specialist",
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
