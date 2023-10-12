import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useVerseSequence = (bgRef, overlayRef, index, scrollStart, scrollEnd) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgRef.current,
        start: scrollStart,
        end: scrollEnd,
        scrub: 1,
      },
    });

    // Scale & Pan effect
    tl.to(bgRef.current, {
      scale: gsap.utils.random(1.2, 1.4), // Random zoom between 1.01x to 1.03x
      x: gsap.utils.random(-15, 15), // Adjust for desired panning range
      y: gsap.utils.random(-15, 15), // Adjust for desired panning range
      duration: 8, // Adjusted duration for smoother effect
      ease: "sine.inOut",
    });

    // Opacity effect
    tl.to(
      bgRef.current,
      {
        autoAlpha: 1,
        duration: 2,
        ease: "sine.inOut",
      },
      0,
    )
      .to(
        overlayRef.current,
        {
          autoAlpha: 0.5,
          duration: 2,
          ease: "sine.inOut",
        },
        2,
      )
      .to(
        overlayRef.current,
        {
          autoAlpha: 0,
          duration: 2,
          ease: "sine.inOut",
        },
        6,
      )
      .to(
        bgRef.current,
        {
          autoAlpha: 0,
          duration: 2,
          ease: "sine.inOut",
        },
        8,
      );

    // Cleanup function:
    return () => {
      tl.kill();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [bgRef, overlayRef, index, scrollStart, scrollEnd]);
};

export default useVerseSequence;
