import LinkedInIcon from "@/components/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-accent-emerald">$</span> echo &quot;Feito com ☕ por{" "}
          <a
            href="https://linkedin.com/in/marcoslrvieira"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-accent-emerald"
          >
            Marcos Luciano
          </a>
          &quot;
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/marcoslrvieira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent-emerald"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <span className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} marcosv4.cloud
          </span>
        </div>
      </div>
    </footer>
  );
}
