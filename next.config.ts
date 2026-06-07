import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.hashnode.com" },
      { protocol: "https", hostname: "hashnode.com" },
      { protocol: "https", hostname: "www.hostinger.com" },
      { protocol: "https", hostname: "guiadohost.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "v0.app" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "openai.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
