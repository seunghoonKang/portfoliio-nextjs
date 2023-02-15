/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //lobster: ["var(--font-lobster)"],
        test: ["var(--font-lobster)", ...fontFamily.sans],
        notoSans: ["var(--font-notoSans)"],
      },
    },
  },
  plugins: [],
};
