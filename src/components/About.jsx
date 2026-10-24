import { ABOUT } from "../data";

// Small helper: turns "I am a **Full Stack Developer**" into text with a bold white part.
// split("**") cuts the text at every "**", so every second piece is the bold one.
function RichText({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// The 2 icons, drawn as SVG. They use "currentColor", so text-accent colors them.
const icons = {
  check: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M8 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM8 13c-2.7 0-6 1.3-6 4v2h12v-2c0-2.7-3.3-4-6-4zm8 0c-.4 0-.8 0-1.2.1 1.3.9 2.2 2.2 2.2 3.9v2h5v-2c0-2.7-3.3-4-6-4z" />
    </svg>
  ),
};

function About() {
  return (
    // scroll-mt-24 = leaves space for the fixed navbar when the menu link scrolls here
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      {/* ===== Title with small amber line under it ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">About Me</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
      </div>

      {/* ===== Two cards. Phone: stacked. Desktop: left card wider than right ===== */}
      <div className="mt-14 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        {/* ---------- LEFT CARD: text + languages ---------- */}
        <div className="rounded-3xl border border-line bg-panel p-8 sm:p-10">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 text-base leading-8 text-muted sm:text-lg">
              <RichText text={p} />
            </p>
          ))}
        </div>

        {/* ---------- RIGHT CARD: key achievements ---------- */}
        <div className="rounded-3xl border border-line bg-panel p-8 sm:p-10">
          <h3 className="text-base font-bold uppercase tracking-wider text-ink">
            Key Achievements
          </h3>

          <div className="mt-8 space-y-8">
            {ABOUT.achievements.map((a) => (
              <div key={a.title} className="flex gap-4">
                {/* icon (amber) */}
                <span className="mt-0.5 shrink-0 text-accent">{icons[a.icon]}</span>
                <div>
                  <h4 className="text-lg font-semibold leading-snug text-ink">{a.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;