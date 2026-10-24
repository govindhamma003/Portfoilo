// src/components/ResumeButton.jsx
// Two buttons: one opens the resume in a new tab, one downloads it.

// Files in /public are served from the site root, so the path starts with "/"
const RESUME_PATH = "/Govindhamma_Resume.pdf"; // must match the file name in public/ exactly (case-sensitive on Vercel)

function ResumeButton() {
  return (
    <div className="flex gap-4">
      {/* View in a new tab */}
      <a
        href={RESUME_PATH}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-accent px-6 py-2 font-semibold text-bg"
      >
        View Resume
      </a>

      {/* Download directly */}
      <a
        href={RESUME_PATH}
        download="Govindhamma_Resume.pdf"
        className="rounded-full border border-accent px-6 py-2 font-semibold text-accent"
      >
        Download Resume
      </a>
    </div>
  );
}

export default ResumeButton;