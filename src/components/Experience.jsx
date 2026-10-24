import { EXPERIENCE } from "../data";

function Experience() {
  return (
    // max-w-6xl = wider than before, so two cards fit side by side
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* ===== Title + small amber line + subtitle ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">Experience</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-muted">Where I have worked and what I built</p>
      </div>

      {/* ===== Cards grid =====
          Phone: 1 column (stacked). From md screens up: 2 columns (side by side).
          Cards in the same row automatically get the same height. */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {EXPERIENCE.map((job) => (
          <div
            key={job.role + job.period}
            className="flex flex-col rounded-3xl border border-accent/20 bg-[#1c1c1c] p-8"
          >
            {/* Badge (Full-time / Internship) + dates on one row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {job.type && (
                <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-bg">
                  {job.type}
                </span>
              )}
              <span className="rounded-full border border-line px-4 py-1 text-sm text-muted">
                {job.period}
              </span>
            </div>

            {/* Role, company, location */}
            <h3 className="mt-6 text-xl font-semibold text-accent">{job.role}</h3>
            <p className="mt-1 text-lg font-medium text-ink">{job.company}</p>
            <p className="mt-1 text-sm text-muted">{job.location}</p>

            {/* Small note (only shows if you wrote one) */}
            {job.note && <p className="mt-4 text-sm italic text-muted">{job.note}</p>}

            {/* Bullet points */}
            <ul className="mt-6 space-y-3">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-base leading-7 text-muted">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Tech chips. mt-auto pushes them to the bottom so both cards line up */}
            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {job.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;