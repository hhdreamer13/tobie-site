/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
        literata: ["var(--font-literata)"],
        mottona: ["var(--font-mottona)"],
        newspaper: ["var(--font-newspaper)"],
        sueEllen: ["var(--font-sue-ellen)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, theme, addBase }) {
      addBase({
        ":root": {
          "--color-main": theme("colors.slate.950"), // light theme colors
          "--bg-main": theme("colors.gray.50"), // light theme colors
        },
        ".dark": {
          "--color-main": theme("colors.slate.50"), // dark theme colors
          "--bg-main": theme("colors.slate.950"), // dark theme colors
        },
      });
      addUtilities(
        {
          ".text-main": {
            color: "var(--color-main)",
          },
          ".bg-main": {
            backgroundColor: "var(--bg-main)",
          },
        },
        ["dark"],
      );
    }),
  ],
};
