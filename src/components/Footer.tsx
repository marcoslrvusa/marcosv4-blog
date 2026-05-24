export default function Footer() {
  return (
    <footer className="border-t border-v4-gray-100">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
        <p className="text-xs text-v4-gray-400">
          Feito na{" "}
          <a
            href="https://v4company.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-v4-gray-700 transition-colors hover:text-v4-red"
          >
            V4 Company
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/marcosperetto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-v4-gray-400 transition-colors hover:text-v4-red"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <span className="text-[10px] text-v4-gray-300">
            © {new Date().getFullYear()} marcosv4.cloud
          </span>
        </div>
      </div>
    </footer>
  );
}
