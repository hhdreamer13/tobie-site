import React, { useLayoutEffect } from "react";
import gsap from "gsap";

const EBranch = ({ stopColor, animate }) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animate &&
        gsap.fromTo(
          "#svgMaskE",
          {
            attr: { r: 0 },
          },
          {
            attr: { r: 300 },
            duration: 3.7,
            ease: "power4.Out",
            delay: 1.2,
          },
        );
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <svg
      id="e-branch"
      data-name="Branch E"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 262 129.94"
      fill={stopColor}
    >
      <defs>
        <mask
          id="mask-e"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <circle
            id="svgMaskE"
            cx="-50"
            cy="100"
            r={animate ? "0" : "300"}
            fill="white"
          />
        </mask>
      </defs>
      <path
        mask="url(#mask-e)"
        d="M240.1,1.54c-14.4,3.1-28.9,12.5-47.2,30.7-5.9,5.8-11.7,10.8-13,11.1s-5.8,.9-10,1.5c-4.3,.6-12.9,3-19.8,5.6-15.4,5.7-20.6,6.8-28.3,5.5-7.2-1.1-17.1-5.5-16.6-7.2,.3-.7,3.8-3.6,7.9-6.3,4-2.8,8.5-6.7,9.8-8.8,1.9-2.9,3.6-4.1,7.5-5.2,2.7-.8,6.2-1.5,7.8-1.5s4.6-.9,6.8-2c2.5-1.3,5-1.8,7.2-1.5,2.8,.5,3,.4,1.1-.4-1.3-.6-2.3-1.5-2.3-2s2.6-3.3,5.8-6.1c4.3-4,4.9-4.8,2.6-3.6-1.8,.8-4.6,3.3-6.2,5.4-3.9,4.9-12,9.2-17.5,9.2-2.3,0-6.2,.9-8.6,2l-4.3,2,.4-3c.3-1.6,.1-3-.4-3-.4,0-.8,2.2-.8,4.8,0,5.6-.8,6.8-7.5,11.2-2.7,1.8-7.3,5.5-10.1,8.1-8.2,7.6-14.3,10.2-24.9,10.6-9.9,.4-32.5-3.3-33.2-5.3-.4-1.1,10.6-9.8,15.5-12.3,1.3-.7,7.2-2,13.2-3.1,13.1-2.2,18.1-4.7,22.9-11.5l3.5-5-6,6.1c-3.5,3.6-7.3,6.5-9.4,7.2-3.8,1.1-22.9,3.6-23.5,3-.2-.2,2.7-4.4,6.5-9.3,3.8-5,7-9.4,7-9.8,0-1.3-6.4,6.6-11.7,14.2-2.7,4.1-7,8.5-11.1,11.6-3.7,2.7-10.9,9.4-16.1,14.7-5.1,5.4-9.7,9.8-10.2,9.8-.4,0-.1-1.7,.8-3.8,2.9-6.9,4.3-13.7,4.3-21.7v-7.9l4.7-4.8c2.6-2.6,4.3-4.8,3.7-4.8-.5,0-3,2-5.4,4.5s-4.9,4.5-5.5,4.5c-2.4,0-6.7-6.1-8.6-12-1.5-5-1.7-7-.9-9.9,1.2-4.5,1.3-6.1,.1-6.1-1.8,0-2.4,9.1-1,14.9q1.8,7.6-1.6,7.3c-5.1-.6-12.4-4.3-15-7.6-1.6-2-2.5-2.5-2.5-1.5,0,4,8.6,9.1,17.5,10.4,3.2,.5,6.3,1.8,8.8,3.7,3.4,2.8,3.7,3.3,3.7,8.2,0,6.2-3,18.8-5.9,24.4l-2,3.9,2.5,2.4,2.6,2.4,3.1-3.5c1.6-1.9,5.2-5.9,7.8-8.8l4.8-5.2h6.8c3.7,0,10.3,.7,14.6,1.5s9.3,1.5,11.1,1.5c4.2,0,14.6,5.3,19.2,9.8,1.9,1.8,4.8,6,6.4,9.3,1.7,3.3,5.1,8.7,7.7,12.1,6.7,8.7,13.3,22,13.3,26.6,0,2.1-.9,5.4-1.9,7.5-1,2-1.5,3.7-.9,3.7,1.4,0,3.8-6.5,3.8-10.3,0-1.9,.3-3.7,.7-4,.3-.4,2.6,.5,5,1.9s4.9,2.3,5.6,2.1c.7-.3-1-1.4-3.8-2.7-6.6-2.8-8.1-4.4-11.7-11.5-1.7-3.3-4.4-7.9-6-10.3s-2.8-4.9-2.5-5.6,3.8-2,7.9-2.9c7.8-1.7,13.3-3.5,12.7-4.1-.7-.7-18.9,4.1-20.4,5.4-2,1.7-2.9,.8-7.4-7.3-4.6-8.4-10.5-14.7-16.2-17.2-4.5-2.1-4.3-3,.8-4,3.4-.6,10.6-4,14.3-6.6,1.2-.9,3.3-.5,9,1.6,4.1,1.4,10.4,2.9,14,3.2,5.9,.5,7.9,.1,21.6-4.5,8.4-2.8,18.3-5.6,22-6.2,3.8-.6,9-1.6,11.6-2.1,4.6-1.1,4.9-1,15.1,4.5,9.5,5.1,19.5,8.6,18.1,6.5-.3-.5-1.4-.9-2.5-.9-1.8,0-22.3-10.2-24.3-12-2.2-2.2,22.3-24.8,35.2-32.6,8.8-5.3,19.9-8.5,30.9-8.7,5.1-.1,9.3-.5,9.3-1,0-1.2-15-.6-21.9,.9Z"
      />
    </svg>
  );
};

export default EBranch;
