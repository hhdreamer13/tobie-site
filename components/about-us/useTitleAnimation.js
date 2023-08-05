import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useTitleAnimation = (titleRef) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "200% top",
          end: "400% bottom",
          scrub: 1,
        },
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      });

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "400% top",
          end: "700% bottom",
          scrub: 1,
        },
        top: "-30vh",
        color: "white",
        fontSize: "4rem",
        lineHeight: "2em",
        duration: 3,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert(); // cleanup
  }, [titleRef]);
};

export default useTitleAnimation;
