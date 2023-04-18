const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        light: 200,
        regular: 500,
        regular: 800,
      },
      //Using the Major-Second type scale - ref : https://typescale.com
      fontSize: {
        1: ".702rem",
        2: ".790rem",
        3: ".889rem",
        4: "1rem",
        5: "1.125rem",
        6: "1.266rem",
        7: "1.424rem",
        8: "1.602rem",
        9: "1.802rem",
        10: "2.027rem",
        11: "2.281rem",
        12: "2.566rem",
        13: "2.887rem",
        14: "3.247rem",
      },
      colors: {
        white: colors.white,
        black: colors.black,
        gradientPurple: {
          1: "#7C3EFF",
          2: "#E3B5FF",
        },
        blue: {
          200: "#699BFF",
          500: "#0041C1",
        },
        grey: {
          100: "#111111",
          200: "#414141",
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
    },
  },

  plugins: [],
};
