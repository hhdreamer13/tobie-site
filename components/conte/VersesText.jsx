import { useRef } from "react";
import useTextAnimation from "./useTextAnimation";

const VersesText = ({ verse, index, totalVerses }) => {
  const textRef = useRef();

  // Calculate unique start and end points for scroll-trigger
  const scrollStart = 600 + (4000 * index) / totalVerses + "% top";
  const scrollEnd = 850 + (4000 * index) / totalVerses + "% center";

  // Use the text animation hook
  useTextAnimation(textRef, scrollStart, scrollEnd);

  return (
    <section className="fullscreenImage absolute">
      <div
        ref={textRef}
        className="mx-auto flex h-full w-3/5 flex-col items-center justify-center gap-10 px-2"
      >
        <div className="">
          {verse.map((line, index) => (
            <p
              key={index}
              className="mb-4 h-fit font-literata text-3xl leading-loose text-slate-950 md:text-5xl font-semibold dark:text-slate-100 drop-shadow-md"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersesText;
