const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ManropeVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#4b7dff",
          100: "#4173ff",
          200: "#3769ff",
          300: "#2d5fff",
          400: "#2355ff",
          500: "#194bfb",
          600: "#0f41f1",
          700: "#003cbe",
          800: "#002ddd",
          900: "#0023d3",
        },
      },
    },
    transitionTimingFunction: {
      spring: "cubic-bezier(.25,1.6,.5,.8)",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
