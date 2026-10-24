import { useEffect, useState } from "react";
import { ME } from "../data";

// Typing animation: types a word, waits, deletes it, then types the next one.
function useTypewriter(words, speed = 100, pause = 1500) {
  const [text, setText] = useState(""); // what is shown right now
  const [index, setIndex] = useState(0); // which word we are on
  const [deleting, setDeleting] = useState(false); // typing or deleting?

  useEffect(() => {
    const word = words[index % words.length];
    const finished = !deleting && text === word;

    // delay before the next step: long pause when the word is complete
    let delay = deleting ? speed / 2 : speed;
    if (finished) delay = pause;

    const timer = setTimeout(() => {
      if (finished) setDeleting(true); // start deleting
      else if (deleting && text === "") {
        setDeleting(false); // move to next word
        setIndex(index + 1);
      } else {
        // add or remove one letter
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer); // cleanup
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

function Hero() {
  const typedText = useTypewriter(ME.typed);

  return (
    <section id="home" className="flex min-h-screen items-center">
      {/* text block, centered on the page, text left aligned */}
      <div className="mx-auto w-full max-w-[560px] px-6">
        {/* HELLO! : 12px, bold, spaced letters */}
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Hello!
        </p>

        {/* Title: 40px on phone, 56px on desktop */}
        <h1 className="mt-4 text-[40px] font-extrabold leading-[1.2] text-ink lg:text-[56px]">
          I'm
          <br />
          <span className="text-accent">{ME.name}</span>
        </h1>

        {/* Typing line: 24px phone, 28px desktop. Fixed height so the page doesn't jump */}
        <p className="mt-5 h-10 text-2xl font-bold leading-10 text-ink sm:text-[28px]">
          {typedText}
        </p>

        {/* Static role line */}
        <p className="mt-4 text-2xl font-normal leading-10 text-ink sm:text-[28px]">
          {ME.role}
        </p>

        {/* Buttons: 48px tall pills */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.15em]">
          <a
            href={ME.resume}
            download
            className="flex h-12 items-center rounded-full bg-accent px-7 text-bg transition hover:opacity-90"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="flex h-12 items-center rounded-full border border-[#5a5a5a] px-7 text-ink transition hover:border-accent hover:text-accent"
          >
            My works
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;