import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useScrollBgOverlay = (overlayRefs) => {
  useLayoutEffect(() => {
    overlayRefs.current.forEach((overlay, index) => {
      if (overlay) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: overlay,
            markers: true,
            start: `${550 + index * 500}% top`,
            end: `${1000 + index * 500}% bottom`,
            scrub: 1,
          },
        });

        timeline
          .to(overlay, {
            opacity: 0.5, // Start transition
            duration: 1,
          })
          .to(overlay, {
            opacity: 0, // End transition
            duration: 1,
          });
      }
    });
  }, [overlayRefs]);
};

export default useScrollBgOverlay;
