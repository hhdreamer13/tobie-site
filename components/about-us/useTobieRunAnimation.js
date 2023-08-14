import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const useTobieRunAnimation = (tobieRef, bgRef, frameCount, images, lenis) => {
  const tobie = { frame: 0 }; // Object to keep track of the current frame

  const calculateSourceRect = () => {
    if (!bgRef.current) return [0, 0, 0, 0]; // Default values when bgRef.current is null

    const bgAspectRatio =
      bgRef.current.naturalWidth / bgRef.current.naturalHeight;
    const viewportAspectRatio = window.innerWidth / window.innerHeight;

    let sx, sy, sWidth, sHeight;

    if (viewportAspectRatio > bgAspectRatio) {
      // Width is fitting, height is being cropped
      sWidth = bgRef.current.naturalWidth;
      sHeight = bgRef.current.naturalWidth / viewportAspectRatio;
      sx = 0;
      sy = (bgRef.current.naturalHeight - sHeight) / 2;
    } else {
      // Height is fitting, width is being cropped
      sHeight = bgRef.current.naturalHeight;
      sWidth = bgRef.current.naturalHeight * viewportAspectRatio;
      sx = (bgRef.current.naturalWidth - sWidth) / 2;
      sy = 0;
    }

    return [sx, sy, sWidth, sHeight];
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      const canvas = tobieRef.current;
      canvas.width = bgRef.current.width;
      canvas.height = bgRef.current.height;
    };

    // Initial setting
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgRef]);

  //   Animating Tobie run
  useLayoutEffect(() => {
    // Create our context
    let ctx = gsap.context(() => {
      if (tobieRef.current) {
        const canvas = tobieRef.current;
        const context = canvas.getContext("2d");

        canvas.width = bgRef.current.width;
        canvas.height = bgRef.current.height;

        // Animate the image sequence with GSAP
        gsap.to(tobie, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: tobieRef.current,
            scrub: 1,
            start: "top top",
            end: "400% bottom",
            //   markers: true,
          },
          onUpdate: () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            const [sx, sy, sWidth, sHeight] = calculateSourceRect();
            if (images[tobie.frame]) {
              context.drawImage(
                images[tobie.frame],
                sx,
                sy,
                sWidth,
                sHeight,
                0,
                0,
                canvas.width,
                canvas.height,
              );
            }
          },
        });
      }
    });

    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tobieRef, bgRef]);
};

export default useTobieRunAnimation;
