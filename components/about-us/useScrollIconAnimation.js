import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useScrollIconAnimation = (scrollRef) => {
  useLayoutEffect(() => {
    if (!scrollRef.current) return;
    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "10% top", // when top of divRef is 10% from top of the viewport
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          if (self.progress === 1 && scrollRef.style) {
            scrollRef.style.visibility = "hidden";
          } else if (self.progress < 1 && scrollRef.style) {
            scrollRef.style.visibility = "visible";
          }
        },
        // markers: true,
      },
      autoAlpha: 0,
      duration: 1,
    });
  }, [scrollRef]);
};

export default useScrollIconAnimation;
