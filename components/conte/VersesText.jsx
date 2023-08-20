import { useRef } from "react";
import useTextAnimation from "./useTextAnimation";
import useVerseSequence from "./useVerseSequence";
import Image from "next/image";

const VersesText = ({ verse, bgImage, index, totalVerses }) => {
  const bgRef = useRef();
  const overlayRef = useRef();
  const textRef = useRef();

  // Calculate unique start and end points for scroll-trigger
  const textScrollStart = 600 + (3000 * index) / totalVerses + "% top";
  const textScrollEnd = 800 + (3000 * index) / totalVerses + "% center";

  const bgScrollStart = 350 + (3000 * index) / totalVerses + "% top";
  const bgScrollEnd = 500 + (3000 * (index + 1)) / totalVerses + "% top";

  // Use the text animation hook
  useTextAnimation(textRef, textScrollStart, textScrollEnd);
  useVerseSequence(bgRef, overlayRef, index, bgScrollStart, bgScrollEnd);

  return (
    <section className="fullscreenImage absolute">
      <Image
        ref={bgRef}
        src={bgImage}
        alt={`background Tobie ${index + 1}`}
        className="object-cover w-full h-full opacity-0"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 dark:bg-slate-950 bg-slate-100 opacity-0"
      ></div>
      <div
        ref={textRef}
        className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-10 px-2"
      >
        {verse.map((line, idx) => (
          <p
            key={idx}
            className="mb-4 h-fit font-literata w-3/5 text-3xl text-slate-950 md:text-5xl font-semibold dark:text-slate-100 drop-shadow-md"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default VersesText;
