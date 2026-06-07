export function OpenAIIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" className="fill-current opacity-20" />
      <path d="M12 2L2 7v10l10-5V2z" className="fill-current opacity-40" />
      <path d="M12 7L7 9.5v5l5 2.5 5-2.5v-5L12 7z" className="fill-current" />
    </svg>
  )
}

export function AnthropicIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" className="stroke-current opacity-30" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" className="fill-current text-[13px] font-bold" fontFamily="system-ui">A</text>
    </svg>
  )
}

export function GoogleAIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 2z" className="fill-current" />
      <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 2z" className="fill-current opacity-30" transform="scale(0.7) translate(5,5)" />
    </svg>
  )
}

export function MetaAIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 22C6.5 16 2 12 2 8c0-3 2.5-5 5-5 2.5 0 4 1.5 5 4 1-2.5 2.5-4 5-4 2.5 0 5 2 5 5 0 4-4.5 8-10 14z" className="fill-current" fillOpacity="0.85" />
      <path d="M12 18c-3-3.5-6-6.5-6-9 0-1.5 1-2.5 2.5-2.5s2.5 1 3.5 2.5z" className="fill-background" />
    </svg>
  )
}

export function MistralIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4h4v4H4V4z" className="fill-current" />
      <path d="M16 4h4v4h-4V4z" className="fill-current" />
      <path d="M10 4h4v4h-4V4z" className="fill-current opacity-60" />
      <path d="M4 10h4v4H4v-4z" className="fill-current opacity-60" />
      <path d="M16 10h4v4h-4v-4z" className="fill-current opacity-60" />
      <path d="M10 10h4v4h-4v-4z" className="fill-current opacity-30" />
      <rect x="7" y="16" width="10" height="4" rx="1" className="fill-current" />
    </svg>
  )
}

export function CohereIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="5" className="fill-current" />
      <ellipse cx="12" cy="18" rx="7" ry="4" className="fill-current opacity-40" />
    </svg>
  )
}

export function DeepSeekIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h16M12 4v16" className="stroke-current stroke-[1.5]" />
      <circle cx="12" cy="12" r="2" className="fill-current" />
      <circle cx="12" cy="4" r="2" className="fill-current" />
      <circle cx="12" cy="20" r="2" className="fill-current" />
      <circle cx="4" cy="12" r="2" className="fill-current" />
      <circle cx="20" cy="12" r="2" className="fill-current" />
    </svg>
  )
}

export function MiniMaxIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4L12 12M20 4L12 12M4 20L12 12M20 20L12 12" className="stroke-current stroke-[1.5]" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" className="fill-current" />
    </svg>
  )
}

export function NexAGIIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" className="fill-current" />
      <circle cx="12" cy="12" r="8" className="stroke-current stroke-[1.5]" strokeDasharray="4 3" />
      <circle cx="5" cy="12" r="1.5" className="fill-current opacity-70" />
      <circle cx="19" cy="12" r="1.5" className="fill-current opacity-70" />
      <circle cx="12" cy="5" r="1.5" className="fill-current opacity-70" />
      <circle cx="12" cy="19" r="1.5" className="fill-current opacity-70" />
    </svg>
  )
}

export function MoonshotIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" className="stroke-current stroke-[1.5]" />
      <circle cx="14" cy="10" r="6" className="fill-current" />
      <circle cx="11" cy="11" r="3" className="fill-background" />
    </svg>
  )
}
