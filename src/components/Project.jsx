import { PROJECTS } from "../data";

// The 3 icons, drawn as SVG. They use "currentColor", so text-bg colors them black.
const icons = {
  code: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.4A8 8 0 1121 12z" />
    </svg>
  ),
};

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* ===== Title + small amber line + subtitle ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">Projects</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-muted">Things I have built</p>
      </div>

      {/* ===== Cards: 1 column phone, 2 tablet, 3 desktop ===== */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          // flex-col so the footer can stick to the bottom of every card
          <article
            key={p.title}
            className="flex flex-col rounded-3xl border border-accent/20 bg-[#1c1c1c] p-8"
          >
            {/* Amber icon box */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#e8962a] text-bg shadow-lg shadow-accent/20">
              {icons[p.icon]}
            </div>

            {/* Title + amber subtitle */}
            <h3 className="mt-6 text-2xl font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 font-medium text-accent">{p.subtitle}</p>

            {/* Description */}
            <p className="mt-4 text-base leading-7 text-muted">{p.description}</p>

            {/* Key features */}
            <h4 className="mt-6 text-base font-semibold text-ink">Key Features:</h4>
            <ul className="mt-3 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech chips */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-line bg-black/40 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Links (only show if you set them in data.js) */}
            {(p.live || p.code) && (
              <div className="mt-6 flex gap-3 text-sm font-semibold">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-accent px-5 py-2 text-bg hover:opacity-90"
                  >
                    Live demo
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-5 py-2 text-ink hover:border-accent hover:text-accent"
                  >
                    Source code
                  </a>
                )}
              </div>
            )}

            {/* Footer: status (left) and category (right). mt-auto pushes it to the bottom */}
            <div className="mt-auto flex items-center justify-between border-t border-accent/20 pt-5 text-sm text-muted">
              <span className="mt-6 flex items-center gap-2 pt-0">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                {p.status}
              </span>
              <span className="mt-6">{p.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;