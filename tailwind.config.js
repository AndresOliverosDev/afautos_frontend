/** @type {import('tailwindcss').Config} */

/** Function of Styles Material Tailwind */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /*Objects colors Dark*/
        'dContainer':'#202328',
        'dBackground':'#16181C',
        'dHover':'#16181c3d',
        'dBorder':'#ffffff40',
        /*Contrast*/
        'lContrast':'#F47C7C',
        'dContrastSec':'#d22e2e',
        'dContrast':'#ff8fa3',
        /*Objects colors Light*/
        'lContainer':'#FFF2F2',
        'lBackground':'#FFF2F2',
        'lBorder':'#ffffff40',
        /*Text colors Light*/
        'lTextImp': '#0a0a0a',
        'lTextPri':'#1D1C1C',
        'lTextNeu':'#2c2c2c',
        'lTextMut':'#454444',
        /*Text colors Dark*/
        'dTextImp': '#FAFAFA',
        'dTextPri':'#E0E0E0',
        'dTextNeu':'#9E9E9E',
        'dTextMut':'#616161',
      }
    },
  },
  plugins: [],
});