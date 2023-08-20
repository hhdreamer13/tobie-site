import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useScrollBgChange = (bgRefs) => {
  useLayoutEffect(() => {
    bgRefs.current.forEach((bgRef, index) => {
      if (bgRef) {
        gsap.to(bgRef, {
          scrollTrigger: {
            trigger: bgRef,
            start: `${400 + index * 500}% top`,
            end: `${700 + index * 500}% center`,
            markers: {
              startColor: "violet", // or any color you like
              endColor: "yellow", // or any color you like
              triggerColor: "blue", // or any color you like
            },
            scrub: 1,
          },
          opacity: 1,
          ease: "power2.inOut",
        });
      }
    });
  }, [bgRefs]);
};

export default useScrollBgChange;
