import { ME, EDUCATION } from "../data";

// Small SVG icons. They use "currentColor", so the text color sets their color.
const CapIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 9L12 4 2 9l10 5 10-5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* ===== Title + small amber line + subtitle ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">Resume</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-muted">My education and a copy of my resume</p>

        {/* Download button. "download" makes the browser save the file */}
        <a
          href={ME.resume}
          download ="Govindhamma-Resume.pdf"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-[0.15em] text-bg transition hover:opacity-90"
        >
          Download Resume
        </a>
      </div>

      {/* ===== Heading with graduation cap icon ===== */}
      <div className="mt-16 flex items-center gap-3 text-accent">
        <CapIcon />
        <h3 className="text-2xl font-bold text-ink">Academic Education</h3>
      </div>

      {/* ===== One wide card per degree ===== */}
      <div className="mt-8 space-y-8">
        {EDUCATION.map((e) => (
          <article
            key={e.degree + e.period}
            // Phone: stacked. Desktop: text on the left, score circle on the right
            className="flex flex-col gap-10 rounded-3xl border border-accent/20 bg-[#1c1c1c] p-8 md:flex-row md:items-center md:justify-between md:p-10"
          >
            {/* ---------- LEFT: all the text ---------- */}
            <div className="max-w-3xl">
              {/* years with calendar icon (amber) */}
              <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                <CalendarIcon />
                {e.period}
              </p>

              <h4 className="mt-3 text-3xl font-bold text-ink">{e.degree}</h4>
              <p className="mt-3 text-xl text-ink">{e.branch}</p>

              {/* college with pin icon */}
              <p className="mt-3 flex items-center gap-2 text-base text-muted">
                <PinIcon />
                {e.college}, {e.location}
              </p>

              <p className="mt-5 text-base leading-7 text-muted">{e.description}</p>

              {/* Highlights list (hidden if empty) */}
              {e.highlights.length > 0 && (
                <>
                  <h5 className="mt-6 text-base font-semibold text-ink">Key Achievements:</h5>
                  <ul className="mt-3 space-y-2">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* ---------- RIGHT: score circle ---------- */}
            <div className="flex shrink-0 flex-col items-center md:mr-6">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#e8962a] text-bg shadow-lg shadow-accent/20 sm:h-40 sm:w-40">
                <span className="text-4xl font-extrabold">{e.score}</span>
                <span className="text-sm font-medium">{e.scoreLabel}</span>
              </div>
              <p className="mt-5 text-sm text-muted">{e.outOf}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resume;