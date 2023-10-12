import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const useTextAnimation = (textRef, scrollStart, scrollEnd) => {
  useLayoutEffect(() => {
    let tl;
    let st;

    if (textRef.current && textRef.current.textContent) {
      const st = new SplitType(textRef.current, { types: "words" });
      const words = st.words;

      gsap.set(words, { transformOrigin: "0% 50%" });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: scrollStart,
          end: scrollEnd,
          // markers: true,
          scrub: 1,
        },
      });

      tl.from(words, {
        autoAlpha: 0,
        y: 20,
        stagger: 0.1,
      }).to(words, {
        autoAlpha: 0,
        stagger: {
          each: 0.05,
          from: "start",
        },
        delay: 1,

        // stagger: 0.1,
      });
    }

    // Cleanup function:
    return () => {
      if (tl) {
        tl.kill(); // Kill the timeline
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill(); // Kill the scrollTrigger associated with the timeline
        }
      }
      if (st) {
        st.revert(); // Revert the SplitType changes
      }
    };
  }, [textRef, scrollStart, scrollEnd]);
};

export default useTextAnimation;
