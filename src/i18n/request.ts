import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import ptMessages from "../messages/pt.json";
import enMessages from "../messages/en.json";
import esMessages from "../messages/es.json";

const allMessages = { pt: ptMessages, en: enMessages, es: esMessages };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "pt" | "en" | "es")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: allMessages[locale as keyof typeof allMessages],
  };
});
