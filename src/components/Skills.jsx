import { useEffect, useRef, useState } from "react";
import { SKILLS } from "../data";

function Skills() {
  const ref = useRef(null); // points to the <section>, so we can watch it
  const [show, setShow] = useState(false); // false = bars empty, true = bars filled

  // IntersectionObserver tells us when the section appears on screen.
  // At that moment we set show = true, and the bars animate from 0 to their percent.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <section ref={ref} id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* ===== Title + small amber line + subtitle ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink">Skills</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-muted">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* ===== Cards: 1 column phone, 2 tablet, 3 desktop ===== */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-accent/20 bg-[#1c1c1c] p-8"
          >
            {/* Card title + small underline */}
            <h3 className="text-xl font-semibold text-accent">{group.category}</h3>
            <div className="mb-8 mt-3 h-[3px] w-8 rounded-full bg-accent" />

            {/* One row per skill */}
            <div className="space-y-5">
              {group.items.map((s) => (
                <div key={s.name}>
                  {/* name (left) and percent (right) */}
                  <div className="mb-2 flex justify-between text-base">
                    <span className="font-medium text-ink">{s.name}</span>
                    <span className="text-sm text-muted">{s.percent}%</span>
                  </div>

                  {/* dark track */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/60">
                    {/* gradient fill. width goes 0 -> percent when show becomes true */}
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-[#e8962a] transition-all duration-1000 ease-out"
                      style={{ width: show ? `${s.percent}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;