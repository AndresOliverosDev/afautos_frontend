/** @type {import('tailwindcss').Config} */

/** Function of Styles Material Tailwind */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  // prettier.config.js
  tailwindConfig: './styles/tailwind.config.js',
  
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /*Background Dark*/
        "bg-dark": "#1B1C1E",
        "ctn-primary-dark": "#130046",
        "ctn-secondary-dark": "#110030",
        /** Background Light */
        "bg-light": "#E0E0E0",
        "ctn-primary-light": "#f8f8f9",
        "ctn-secondary-light": "#0E0027",
        /** Dark Colors */
        "color-primary-dark": "#4F2D8E",
        "color-hover-dark": "#FFFFFF19",
        "color-active-dark": "#b3cde0",
        "color-disable-dark": "#03396c",
        /** Light Colors */
        "color-primary-light": "#9B81E1",
        "color-hover-light": "#000",
        "color-active-light": "#b3cde0",
        "color-disable-light": "#03396c",
      },
    },
  },
  plugins: [],
});
