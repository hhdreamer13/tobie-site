import React, { useEffect } from "react";
import gsap from "gsap";

const LBranch = ({ className }) => {
  useEffect(() => {
    gsap.to(".gradient-stop", {
      stopOpacity: 1,
      duration: 4,
      ease: "expo.inOut",
      stagger: {
        each: 0.05,
        from: "start",
      },
      delay: 0.5,
    });
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 300.000000 164.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
          {[...Array(10).keys()].map((i) => (
            <>
              <stop
                className="gradient-stop"
                offset={`${i * 10}%`}
                style={{ stopColor: "#000", stopOpacity: 0 }}
              />
              <stop
                className="gradient-stop"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: "#000", stopOpacity: 0 }}
              />
              <stop
                className="gradient-stop"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: "#000", stopOpacity: 0 }}
              />
              <stop
                className="gradient-stop"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: "#000", stopOpacity: 0 }}
              />
              <stop
                className="gradient-stop"
                offset={`${i * 10 + 10}%`}
                style={{ stopColor: "#000", stopOpacity: 0 }}
              />
            </>
          ))}
        </linearGradient>
      </defs>
      <g
        transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)"
        fill="url(#grad1)"
        stroke="none"
      >
        <path d="M1818 1421 c4 -68 4 -69 -32 -101 -19 -18 -38 -40 -41 -50 -4 -12 -30 -22 -91 -35 -53 -11 -119 -35 -172 -61 -48 -24 -94 -44 -102 -44 -15 0 -62 29 -129 78 l-33 25 78 78 c43 43 76 81 73 83 -3 3 -40 -30 -83 -73 l-78 -79 -67 51 c-36 28 -100 66 -141 86 -67 32 -85 36 -172 39 l-98 4 -10 -27 c-5 -14 -10 -29 -10 -33 0 -4 36 -6 79 -4 89 4 169 -14 239 -55 90 -53 133 -190 76 -244 -20 -19 -37 -24 -82 -25 -31 -1 -98 -13 -149 -27 -66 -18 -129 -27 -233 -32 -161 -9 -222 -29 -228 -75 l-3 -25 23 28 c29 34 73 47 165 47 61 0 73 -3 73 -16 0 -26 -57 -114 -108 -166 -29 -30 -40 -48 -31 -48 22 0 119 105 154 165 16 28 30 52 31 53 4 5 188 51 191 48 4 -4 -88 -173 -123 -225 -41 -63 -21 -60 23 3 21 30 43 55 49 56 21 0 92 -88 105 -129 10 -34 9 -47 -5 -85 -16 -41 -98 -136 -117 -136 -10 0 -49 -83 -49 -105 0 -10 12 4 26 33 14 29 42 66 62 82 l37 30 8 -52 c12 -85 28 -83 21 4 -6 68 -5 78 16 106 46 62 27 149 -51 230 l-42 42 17 44 c9 25 34 64 55 88 35 39 43 43 77 40 25 -2 53 4 78 17 45 24 46 23 72 -49 14 -38 118 -272 143 -320 4 -8 41 -32 82 -52 84 -42 103 -63 160 -170 22 -43 42 -78 44 -78 5 0 -11 54 -25 81 -7 13 -29 50 -49 81 -32 51 -45 62 -118 98 -73 36 -83 45 -93 78 -7 20 -23 57 -36 81 -13 24 -23 45 -21 47 7 8 300 -101 362 -135 39 -21 121 -75 183 -121 113 -83 114 -83 169 -81 48 2 67 -4 131 -36 73 -37 78 -38 198 -41 151 -4 201 8 305 76 81 53 134 107 155 158 16 37 19 88 5 80 -5 -3 -8 -17 -8 -30 0 -36 -46 -109 -95 -151 -24 -20 -76 -53 -117 -73 -74 -37 -76 -37 -215 -40 l-141 -3 -85 41 c-75 37 -91 41 -132 36 -45 -6 -50 -4 -125 49 -43 31 -78 62 -78 68 0 8 24 12 70 13 39 1 77 2 85 3 19 1 133 71 127 78 -3 2 -34 -12 -70 -32 -59 -32 -71 -36 -112 -29 -27 4 -63 1 -90 -6 -41 -12 -45 -11 -87 18 -66 45 -114 67 -228 102 -169 52 -250 101 -250 151 0 9 -15 47 -34 84 -28 55 -32 73 -26 101 8 36 -3 99 -20 109 -13 8 -13 25 -1 25 5 0 53 -28 107 -61 206 -130 312 -164 483 -155 65 3 119 10 125 17 8 8 -1 10 -38 4 -92 -13 -208 -7 -271 13 -82 27 -125 45 -125 53 0 11 174 88 235 104 87 23 196 30 225 15 15 -8 88 -15 189 -19 162 -7 167 -8 217 -38 27 -16 66 -35 85 -41 52 -16 139 -25 139 -14 0 5 -26 12 -57 16 -58 7 -233 80 -233 98 0 19 131 68 248 92 142 30 186 32 267 11 85 -23 92 -12 8 13 -78 24 -138 27 -196 11 -20 -5 -75 -16 -122 -24 -67 -11 -104 -24 -172 -61 -78 -42 -96 -48 -163 -52 -55 -3 -97 2 -157 17 -45 12 -103 21 -130 21 l-48 1 50 45 c79 72 202 124 292 124 18 0 33 5 33 10 0 29 -145 -7 -274 -68 -5 -3 -7 2 -3 11 5 14 -12 89 -23 101 -3 3 -4 -26 -2 -63z"></path>
      </g>
    </svg>
  );
};

export default LBranch;
