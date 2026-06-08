import Image from "next/image"
import { Link as I18nLink } from "@/i18n/navigation"
import NewsletterForm from "@/components/NewsletterForm"
import { ArrowUpRight } from "lucide-react"

export default function Sidebar({
  locale,
}: {
  locale: string
}) {
  return (
    <aside className="flex flex-col gap-5">
      {/* Author card */}
      <div className="card p-5">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/profile.png"
            alt="Marcos Luciano"
            width={44}
            height={44}
            className="rounded-full ring-2 ring-border object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Marcos Luciano</p>
            <p className="text-xs text-muted-foreground">Infrastructure Engineer</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          Building what powers AI. From Brazil, for the world.
        </p>
        <I18nLink
          href="/consulting"
          className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-[#3a3a52] hover:text-foreground"
        >
          <span>Vamos Conversar</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
        </I18nLink>
      </div>

      {/* Newsletter */}
      <NewsletterForm locale={locale} />

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/marcoslrvieira"
        target="_blank"
        rel="noopener noreferrer"
        className="card flex items-center gap-3 px-5 py-4 group"
      >
        <div className="rounded-lg border border-border p-2">
          <svg className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">LinkedIn</p>
          <p className="text-xs text-muted-foreground">Conecte-se</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground transition-colors" />
      </a>
    </aside>
  )
}
