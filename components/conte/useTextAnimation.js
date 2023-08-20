import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const useTextAnimation = (textRef, scrollStart, scrollEnd) => {
  useLayoutEffect(() => {
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
        opacity: 0,
        y: 20,
        stagger: 0.1,
      }).to(words, {
        opacity: 0,
        // xPercent: (pos, _, arr) =>
        //   pos < arr.length / 2
        //     ? Math.abs(pos - arr.length / 2) * gsap.utils.random(-20, -10)
        //     : Math.abs(pos - arr.length / 2) * gsap.utils.random(10, 20),
        // yPercent: "-40%",
        // rotationY: (pos, _, arr) =>
        //   pos > arr.length / 2
        //     ? Math.abs(pos - arr.length / 2) * -15
        //     : Math.abs(pos - arr.length / 2) * 15,
        // z: (pos, _, arr) =>
        //   Math.abs(pos - arr.length / 2)
        //     ? gsap.utils.random(-40, -20)
        //     : gsap.utils.random(20, 40),
        stagger: {
          each: 0.05,
          from: "end",
        },
        delay: 1,
        // stagger: 0.1,
      });
    }
  }, [textRef, scrollStart, scrollEnd]);
};

export default useTextAnimation;
