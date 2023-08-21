import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const useLeafExitAnimation = () => {
  // Refs
  const group1Refs = useRef([]);
  const group2Refs = useRef([]);
  const group3Refs = useRef([]);
  const group4Refs = useRef([]);
  const group5Refs = useRef([]);

  useLayoutEffect(() => {
    // Create a GSAP context
    let ctx = gsap.context(() => {
      // animation helper function
      const animate = (
        groupRefs,
        end,
        xPercentPos = 50,
        xPercentNeg = -50,
        yPercentPos = 50,
        yPercentNeg = -50,
      ) => {
        groupRefs.current.forEach((leaf) => {
          if (leaf && leaf.dataset && leaf.dataset.position) {
            const position = leaf.dataset.position;
            let xPercent = 0;
            let yPercent = 0;

            // Define final direction of movement based on position
            if (position.includes("left")) {
              xPercent = xPercentNeg;
            } else if (position.includes("right")) {
              xPercent = xPercentPos;
            }

            if (position.includes("top")) {
              yPercent = yPercentNeg;
            } else if (position.includes("bottom")) {
              yPercent = yPercentPos;
            }

            gsap.to(leaf, {
              scrollTrigger: {
                trigger: leaf,
                start: "top top",
                end: end,
                scrub: 1,
                onUpdate: (self) => {
                  if (self.progress === 1) {
                    leaf.style.visibility = "hidden";
                  } else if (self.progress < 1) {
                    leaf.style.visibility = "visible";
                  }
                },
              },
              xPercent: xPercent,
              yPercent: yPercent,
              duration: 1,
            });
          }
        });
      };

      animate(group1Refs, "100% top", 65);
      animate(group2Refs, "200% top", 50, -50, 50, -100);
      animate(group3Refs, "250% top", 150);
      animate(group4Refs, "200% top", 80);
      animate(group5Refs, "300% top", 45);
    });

    return () => ctx.revert(); // Cleanup animations when component unmounts
  }, []);

  return { group1Refs, group2Refs, group3Refs, group4Refs, group5Refs };
};

export default useLeafExitAnimation;
