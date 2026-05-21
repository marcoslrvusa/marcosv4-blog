import LinkedInIcon from "@/components/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-gray-400">
          Feito com ☕ na{" "}
          <a
            href="https://v4company.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 transition-colors hover:text-v4-red"
          >
            V4 Company
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/marcosperetto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-v4-red"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <span className="text-xs text-gray-300">
            © {new Date().getFullYear()} marcosv4.cloud
          </span>
        </div>
      </div>
    </footer>
  );
}
