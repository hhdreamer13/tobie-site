/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
        nunito: ["var(--font-nunito-sans)"],
        mottona: ["var(--font-mottona)"],
        newspaper: ["var(--font-newspaper)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
