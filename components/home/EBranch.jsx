import React, { Fragment, useLayoutEffect } from "react";
import gsap from "gsap";

const EBranch = ({ stopColor, animate }) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animate &&
        gsap.to(".gradient-stop-e", {
          stopOpacity: 1,
          duration: 3.5,
          ease: "expo.inOut",
          stagger: {
            each: 0.05,
            from: "start",
          },
        });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <svg
      viewBox="0 0 300.000000 164.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          {[...Array(10).keys()].map((i) => (
            <Fragment key={i}>
              <stop
                className="gradient-stop-e"
                offset={`${i * 10}%`}
                style={{ stopColor: stopColor, stopOpacity: animate ? 0 : 1 }}
              />
              <stop
                className="gradient-stop-e"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: stopColor, stopOpacity: animate ? 0 : 1 }}
              />
              <stop
                className="gradient-stop-e"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: stopColor, stopOpacity: animate ? 0 : 1 }}
              />
              <stop
                className="gradient-stop-e"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: stopColor, stopOpacity: animate ? 0 : 1 }}
              />
              <stop
                className="gradient-stop-e"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: stopColor, stopOpacity: animate ? 0 : 1 }}
              />
            </Fragment>
          ))}
        </linearGradient>
      </defs>
      <g
        transform="translate(0.000000,219.000000) scale(0.100000,-0.100000)"
        fill="url(#grad2)"
        stroke="none"
      >
        <path d="M2621 1704 c-144 -31 -289 -125 -472 -307 -59 -58 -117 -108 -130 -111 -13 -3 -58 -9 -100 -15 -43 -6 -129 -30 -198 -56 -154 -57 -206 -68 -283 -55 -72 11 -171 55 -166 72 3 7 38 36 79 63 40 28 85 67 98 88 19 29 36 41 75 52 27 8 62 15 78 15 16 0 46 9 68 20 25 13 50 18 72 15 28 -5 30 -4 11 4 -13 6 -23 15 -23 20 0 5 26 33 58 61 43 40 49 48 26 36 -18 -8 -46 -33 -62 -54 -39 -49 -120 -92 -175 -92 -23 0 -62 -9 -86 -20 l-43 -20 4 30 c3 16 1 30 -4 30 -4 0 -8 -22 -8 -48 0 -56 -8 -68 -75 -112 -27 -18 -73 -55 -101 -81 -82 -76 -143 -102 -249 -106 -99 -4 -325 33 -332 53 -4 11 106 98 155 123 13 7 72 20 132 31 131 22 181 47 229 115 l35 50 -60 -61 c-35 -36 -73 -65 -94 -72 -38 -11 -229 -36 -235 -30 -2 2 27 44 65 93 38 50 70 94 70 98 0 13 -64 -66 -117 -142 -27 -41 -70 -85 -111 -116 -37 -27 -109 -94 -161 -147 -51 -54 -97 -98 -102 -98 -4 0 -1 17 8 38 29 69 43 137 43 217 l0 79 47 48 c26 26 43 48 37 48 -5 0 -30 -20 -54 -45 -24 -25 -49 -45 -55 -45 -24 0 -67 61 -86 120 -15 50 -17 70 -9 99 12 45 13 61 1 61 -18 0 -24 -91 -10 -149 18 -76 18 -76 -16 -73 -51 6 -124 43 -150 76 -16 20 -25 25 -25 15 0 -40 86 -91 175 -104 32 -5 63 -18 88 -37 34 -28 37 -33 37 -82 0 -62 -30 -188 -59 -244 l-20 -39 25 -24 26 -24 31 35 c16 19 52 59 78 88 l48 52 68 0 c37 0 103 -7 146 -15 43 -8 93 -15 111 -15 42 0 146 -53 192 -98 19 -18 48 -60 64 -93 17 -33 51 -87 77 -121 67 -87 133 -220 133 -266 0 -21 -9 -54 -19 -75 -10 -20 -15 -37 -9 -37 14 0 38 65 38 103 0 19 3 37 7 40 3 4 26 -5 50 -19 24 -14 49 -23 56 -21 7 3 -10 14 -38 27 -66 28 -81 44 -117 115 -17 33 -44 79 -60 103 -16 24 -28 49 -25 56 3 7 38 20 79 29 78 17 133 35 127 41 -7 7 -189 -41 -204 -54 -20 -17 -29 -8 -74 73 -46 84 -105 147 -162 172 -45 21 -43 30 8 40 34 6 106 40 143 66 12 9 33 5 90 -16 41 -14 104 -29 140 -32 59 -5 79 -1 216 45 84 28 183 56 220 62 38 6 90 16 116 21 46 11 49 10 151 -45 95 -51 195 -86 181 -65 -3 5 -14 9 -25 9 -18 0 -223 102 -243 120 -22 22 223 248 352 326 88 53 199 85 309 87 51 1 93 5 93 10 0 12 -150 6 -219 -9z"></path>
      </g>
    </svg>
  );
};

export default EBranch;
