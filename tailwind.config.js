/** @type {import('tailwindcss').Config} */

/** Function of Styles Material Tailwind */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /*Background Dark*/
        "bg-dark": "#1B1C1E",
        "ctn-primary-dark": "#1e1b4b",
        "ctn-secondary-dark": "#222",
        /** Background Light */
        "bg-light": "#E0E0E0",
        "ctn-primary-light": "#f8f8f9",
        "ctn-secondary-light": "#EFEFF0",
        /** Dark Colors */
        "color-primary-dark": "#005b96",
        "color-hover-dark": "#6497b1",
        "color-active-dark": "#b3cde0",
        "color-disable-dark": "#03396c",
        /*Text colors Light*/
        "text-primary-light": "#0a0a0a",
        lTextPri: "#1D1C1C",
        lTextNeu: "#2c2c2c",
        lTextMut: "#454444",
        /*Text colors Dark*/
        "text-primary-dark": "#FAFAFA",
        dTextPri: "#E0E0E0",
        dTextNeu: "#9E9E9E",
        dTextMut: "#616161",
      },
    },
  },
  plugins: [],
});
