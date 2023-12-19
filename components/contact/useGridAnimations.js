import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const isSafariWeb = () => {
  return (
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    !navigator.userAgent.includes("Mobile")
  );
};

const useGridAnimations = (gridRef) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    let lenis;

    // Lenis initialization
    if (!isSafariWeb()) {
      lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
        wrapper: document.body,
      });

      // GSAP ScrollTrigger integration with Lenis
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    }

    gsap.ticker.lagSmoothing(0);

    // Create gsap context
    let ctx = gsap.context(() => {
      const gridItems = [...gridRef.current.children];

      gridItems.forEach((item) => {
        const image = item.querySelector(".grid__item-img");
        const xPercentRandomVal = gsap.utils.random(-100, 100);

        gsap
          .timeline()
          .addLabel("start", 0)
          .set(
            image,
            {
              transformOrigin: `${xPercentRandomVal < 0 ? 0 : 100}% 100%`,
            },
            "start",
          )
          .to(
            image,
            {
              ease: "none",
              scale: 0,
              scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
            "start",
          )
          .to(
            item,
            {
              ease: "none",
              xPercent: xPercentRandomVal,
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            },
            "start",
          );
      });
    }, gridRef); // Passing gridRef to scope the animations to children of this ref

    // Cleanup the ScrollTrigger animations and lenis on component unmount using the revert method from the gsap context
    return () => {
      ctx.revert();
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [gridRef]);
};

export default useGridAnimations;
