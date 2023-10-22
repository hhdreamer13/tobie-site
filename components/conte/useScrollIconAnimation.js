import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useScrollIconAnimation = (scrollRef, bgAudioRef) => {
  useLayoutEffect(() => {
    if (!scrollRef.current) return;
    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "10% top", // when top of divRef is 10% from top of the viewport
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          if (self.progress === 1 && scrollRef.current.style) {
            scrollRef.current.style.visibility = "hidden";
            // Function to start the background audio

            if (bgAudioRef.current && !bgAudioRef.current.playing) {
              bgAudioRef.current.play();
              bgAudioRef.current.volume = 0.5; // Set volume to 50%
            }
          } else if (self.progress < 1 && scrollRef.style) {
            scrollRef.style.visibility = "visible";
          }
        },
        // markers: true,
      },
      autoAlpha: 0,
      duration: 1,
    });
  }, [scrollRef, bgAudioRef]);
};

export default useScrollIconAnimation;
