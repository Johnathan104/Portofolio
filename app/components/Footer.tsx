function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-tertiary/20 border-dashed mt-12">
      <div className="max-w-[800px] mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        {/* left: identity */}
        <div className="flex flex-col gap-2">
          <h2 className="mono-text font-bold text-lg text-tertiary">James</h2>
          <p className="text-sm text-tertiary/60 max-w-[32ch]">
            Full-stack developer focused on building clean, practical software.
          </p>
        </div>

        {/* right: contact / socials */}
        <div className="flex flex-col gap-2">
          <span className="tag eyebrow text-xs text-tertiary/50">Connect</span>
          <div className="flex gap-3">
            <a
              href="https://github.com/Johnathan104"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-tertiary/30 text-tertiary/70 hover:bg-tertiary hover:text-dark transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/james-956b25257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-tertiary/30 text-tertiary/70 hover:bg-tertiary hover:text-dark transition-colors"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-tertiary/10 border-dashed py-4 text-center">
        <p className="mono-text text-xs text-tertiary/40">
          © {new Date().getFullYear()} James. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  )
}