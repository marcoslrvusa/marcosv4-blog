import { ExternalLink } from "lucide-react"

interface VideoBannerProps {
  src: string
  title?: string
}

export default function VideoBanner({ src, title }: VideoBannerProps) {
  return (
    <div className="mb-8 border border-dashed border-v4-red/40 rounded-xl overflow-hidden">
      <div className="bg-v4-red/5 p-4 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] text-v4-red/60 uppercase tracking-wider mb-1">
            Bônus Vercel & v0
          </p>
          <p className="text-sm font-semibold text-v4-red">
            Video tutorial em destaque
          </p>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-v4-red px-3 py-1.5 text-[10px] font-bold text-background transition-all hover:bg-v4-red/90"
        >
          <ExternalLink className="h-3 w-3" />
          Ver video
        </a>
      </div>
    </div>
  )
}
