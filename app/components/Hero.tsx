
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" strokeLinecap="round" />
      <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19h16" strokeLinecap="round" />
    </svg>
  );
}

function Hero(){
  return(
  <div className="hero shadow-lg border-secondary border">
    <div className="hero-columns flex gap-8 ">
      {/* left side */}
      <div className="flex-1 rounded-sm w-fit flex flex-col items-start p-4">
        <div className="photo-frame">
          <div className="rounded-full border-dark border w-[100px] h-[100px] overflow-hidden">
            <img src={`${process.env.basePath}/images/work(1).jpeg`} alt="work_pic" width={100} height={100} />
          </div>
        </div>

        <h1 className="font-bold text-3xl w-fit mt-4 text-ink">James</h1>
        <span className="role-label role-chip w-fit">Web Developer</span>

        <div className="flex gap-3 mt-4">
          <a
            href="https://github.com/Johnathan104"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-secondary text-secondary hover:bg-dark hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/james-956b25257/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-secondary text-secondary hover:bg-dark hover:text-white transition-colors"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="flex-2 divider flex-1 p-4 flex flex-col border-secondary">
        <span className="tag eyebrow text-dark/70">Portfolio</span>
        <h1 className="font-bold text-3xl w-fit mt-1 text-ink">Web developer</h1>
        <span className="tag eyebrow text-dark/70">Frontend and Backend Developer</span>
        <p className="text-dark text-sm mt-4">
          Passionate web developer eager to learn and grow in the field. 
          Skilled in Both Frontend and Backend development, with a strong foundation in Javascript and React.
          Eager to learn new technologies and frameworks.
        </p>

        <button
          className="cta group mt-6 self-start relative flex items-center gap-2 rounded-full text-white px-6 py-3 text-sm font-medium overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_20px_-6px_rgba(35,76,106,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(35,76,106,0.75)]"
          style={{ backgroundImage: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" }}
        >
          <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-[-20deg] transition-transform duration-500 group-hover:translate-x-full" />
          <span className="relative flex items-center gap-2">
            <span className="transition-transform duration-200 group-hover:translate-y-0.5">
              <DownloadIcon />
            </span>
            Download CV
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero