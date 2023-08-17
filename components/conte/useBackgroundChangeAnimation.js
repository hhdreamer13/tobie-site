import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useBackgroundChangeAnimation = (bgSecRef) => {
  useLayoutEffect(() => {
    gsap.to(bgSecRef.current, {
      scrollTrigger: {
        trigger: bgSecRef.current,
        start: "400% top",
        end: "700% center",
        scrub: 1,
      },
      opacity: 1,
    });
  }, [bgSecRef]);
};

export default useBackgroundChangeAnimation;
