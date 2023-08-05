import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useFormAnimation = (formRef) => {
  useLayoutEffect(() => {
    gsap.to(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "820% top",
        end: "950% center",
        scrub: 1,
      },
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    });
  }, [formRef]);
};

export default useFormAnimation;
