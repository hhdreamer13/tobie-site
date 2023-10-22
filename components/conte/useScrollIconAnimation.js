import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

const useScrollIconAnimation = (scrollRef, bgAudioRef) => {
  useEffect(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.muted = true;
    }
  }, []);

  useEffect(() => {
    const primeAudio = () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.play().catch((error) => {
          console.warn("BG Audio play failed:", error);
        });
      }
      // Remove event listeners once audio is primed.
      window.removeEventListener("click", primeAudio);
      window.removeEventListener("keypress", primeAudio);
    };

    window.addEventListener("click", primeAudio);
    window.addEventListener("keypress", primeAudio);
  }, []);

  useLayoutEffect(() => {
    if (bgAudioRef.current && bgAudioRef.current.paused) {
      bgAudioRef.current.play().catch((error) => {
        console.warn("BG Audio play failed: ", error);
      });
      bgAudioRef.current.volume = 0.5;
    }

    if (!scrollRef.current) return;
    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "10% top", // when top of divRef is 10% from top of the viewport
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          if (self.progress === 1 && scrollRef.current.style) {
            scrollRef.current.style.visibility = "hidden";
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
