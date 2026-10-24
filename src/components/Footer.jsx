import { ME } from "../data";

// Links shown on the right side of the footer
const links = [
  { label: "GitHub", href: ME.github },
  { label: "LinkedIn", href: ME.linkedin },
  { label: "Email", href: `mailto:${ME.email}` },
];

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top row: name (left) and links (right). Phone: stacked */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="text-xl font-extrabold text-ink">
            {ME.name}
          </a>

          <ul className="flex gap-6 text-sm text-muted">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  // only open in a new tab for web links, not for mailto:
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="transition hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright. new Date().getFullYear() updates the year by itself */}
        <p className="mt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} {ME.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;