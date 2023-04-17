const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontWeight: {
      light: 200,
      medium: 500,
      black: 900,
    },
    colors: {
      white: colors.white,
      black: colors.black,
      blue: {
        200: "#699BFF",
        500: "#0041C1",
      },
      grey: {
        900: "#0E0E0E",
        700: "#434343",
      },
      accent: {
        green: "#00A607",
        pink: "#8A00AD",
        dirtyGold: "#603F00",
        burntPink: "#49004F",
        300: "#24FF00",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
