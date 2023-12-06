/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  'darkMode':'class',
  theme: {
    extend: {
      colors: {
        /*Objects colors Dark*/
        'dContainer':'#202328',
        'dBackground':'#16181C',
        'dBorder':'#ffffff40',
        'contrast':'#F47C7C',
        /*Objects colors Light*/
        'lContainer':'#FFF2F2',
        'lBackground':'#FAD4D4',
        'lBorder':'#ffffff40',
        /*Text colors Dark*/
        'dTextImp': '#FFF',
        'dTextPri':'#ffffffbe',
        'dTextNeu':'#ffffff7c',
        'dTextMut':'#ffffff48',
        /*Text colors Light*/
        'lTextImp': '#FFF',
        'lTextPri':'#232323',
        'lTextNeu':'#000',
        'lTextMut':'#696969',
      }
    },
  },
  plugins: [],
}
