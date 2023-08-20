import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useVerseSequence = (bgRef, overlayRef, index, scrollStart, scrollEnd) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgRef.current,
        start: scrollStart,
        end: scrollEnd, // Extend the endpoint to accommodate the sequence.
        scrub: 1,
      },
    });

    tl.to(bgRef.current, {
      opacity: 1,
      duration: 2,
      ease: "sine.inOut",
    })
      .to(overlayRef.current, {
        opacity: 0.5,
        delay: 1, // Delay for the overlay to darken after bg is visible
        duration: 2,
        ease: "sine.inOut",
      })
      // Assuming the text animation starts here and ends later, so there's a gap in the timeline.
      .to(overlayRef.current, {
        opacity: 0,
        delay: 3, // Delay for the overlay to fade after text animation
        duration: 2,
        ease: "sine.inOut",
      })
      .to(bgRef.current, {
        opacity: 0,
        duration: 2,
        ease: "sine.inOut",
      });

    // Cleanup function:
    return () => {
      tl.kill(); // Kill the timeline
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill(); // Kill the scrollTrigger associated with the timeline
      }
    };
  }, [bgRef, overlayRef, index, scrollStart, scrollEnd]);
};

export default useVerseSequence;
