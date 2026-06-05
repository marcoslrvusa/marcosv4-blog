import Image from "next/image";
import LinkedInIcon from "./LinkedInIcon";

export default function AuthorCardSidebar({ locale = "pt" }: { locale?: string }) {
  return (
    <div className="gradient-border rounded-xl">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-accent-emerald/20 object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              Marcos Luciano
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              AI Lead @ V4 Company
            </p>
          </div>
        </div>
        <a
          href="https://linkedin.com/in/marcoslrvieira"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-accent-emerald/20 px-3 py-1.5 text-[11px] font-medium text-accent-emerald transition-all hover:bg-accent-emerald/10"
        >
          <LinkedInIcon className="h-3 w-3" />
          {locale === "en"
            ? "Connect"
            : locale === "es"
            ? "Conectar"
            : "Conectar"}
        </a>
      </div>
    </div>
  );
}
