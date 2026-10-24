import { useState } from "react";
import { ME } from "../data";

// Small SVG icons. They use "currentColor", so text-bg colors them black inside the amber box.
const svgProps = {
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const icons = {
  mail: (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: (
  <svg {...svgProps}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18a19.5 19.5 0 01-6-6A19.79 19.79 0 012.09 3.18 2 2 0 014.08 1h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.79a2 2 0 01-.45 2.11L8.06 8.89a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0122 16.92z" />
  </svg>
),
  pin: (
    <svg {...svgProps}>
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  linkedin: (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
    </svg>
  ),
  github: (
    <svg {...svgProps}>
      <path d="M9 19c-4 1.2-4-2-6-2.5m12 5v-3.5a3 3 0 00-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2A4.8 4.8 0 0018.700 4.700 4.500 4.500 0 0018.600 1.500S17.500 1.200 15 2.900a12 12 0 00-6 0C6.500 1.200 5.400 1.500 5.400 1.500A4.500 4.500 0 005.300 4.700 4.800 4.800 0 004 8c0 4.800 3 5.900 5.800 6.200A3 3 0 009 16.500V22" />
    </svg>
  ),
};

function Contact() {
  // Form values. useState keeps what the user types.
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // One function updates any field: the input's "name" tells which one.
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // On submit: open the visitor's email app with everything filled in.
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };

  // The contact cards on the left. href = where the click goes.
  const items = [
    { icon: "mail", label: "Email", value: ME.email, href: `mailto:${ME.email}` },
    {
  icon: "phone",label: "Phone",value: ME.phone, href: `tel:${ME.phone.replace(/\s/g, "")}`,},
    { icon: "pin", label: "Location", value: ME.location, href: "" },
    { icon: "linkedin", label: "LinkedIn", value: "Connect with me", href: ME.linkedin },
    { icon: "github", label: "GitHub", value: "See my code", href: ME.github },
  ];

  // Same style for all 3 inputs, so we write it once.
  const field =
    "w-full rounded-xl border border-line bg-black/40 px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* ===== Title + small amber line + subtitle ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">Contact</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-muted">
          Open to full-time roles in Chennai, Bangalore or remote
        </p>
      </div>

      {/* ===== 2 columns: info (left) | form (right). Phone: stacked ===== */}
      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        {/* ---------- LEFT: contact cards ---------- */}
        <div className="space-y-5">
          {items.map((it) => {
            // Same card, but a link <a> if it has an href, otherwise a plain <div>
            const Tag = it.href ? "a" : "div";
            return (
              <Tag
                key={it.label}
                href={it.href || undefined}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-accent/20 bg-[#1c1c1c] p-5 transition hover:border-accent"
              >
                {/* amber icon box */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#e8962a] text-bg">
                  {icons[it.icon]}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{it.label}</span>
                  <span className="block truncate font-medium text-ink">{it.value}</span>
                </span>
              </Tag>
            );
          })}
        </div>

        {/* ---------- RIGHT: message form ---------- */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-accent/20 bg-[#1c1c1c] p-8 sm:p-10"
        >
          <h3 className="text-xl font-semibold text-accent">Send me a message</h3>

          <input
            className={field}
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            className={field}
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className={field}
            name="message"
            rows={5}
            placeholder="Your message"
            aria-label="Your message"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="h-12 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-[0.15em] text-bg transition hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;