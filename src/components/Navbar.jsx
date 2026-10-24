import { useState } from "react";
import { ME } from "../data";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home"); // highlighted link
  const [open, setOpen] = useState(false); // phone menu

  const go = (id) => {
    setActive(id);
    setOpen(false);
  };

  // active = amber text + amber underline, others = white
  const linkClass = (id) =>
    `border-b-2 pb-[6px] text-lg transition-colors hover:text-accent ${
      active === id ? "border-accent text-accent" : "border-transparent text-ink"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-bg/90 backdrop-blur">
      {/* content area is about 1360px wide, like the reference */}
      <nav className="mx-auto flex max-w-[1408px] items-center justify-between px-6 py-8">
        {/* Logo: 30px, extra bold */}
        <a href="#home" onClick={() => go("home")} className="text-3xl font-extrabold text-ink">
          {ME.name}
        </a>

        {/* Desktop menu: 50px between links */}
        <div className="hidden gap-[50px] md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => go(l.id)} className={linkClass(l.id)}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Phone menu button */}
        <button
          className="text-3xl text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Phone menu */}
      {open && (
        <div className="flex flex-col items-start gap-5 border-t border-line px-6 py-6 md:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => go(l.id)} className={linkClass(l.id)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;