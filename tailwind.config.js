/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#da880a",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        aleo: ['"Aleo"', "serif"],
        alegreya: ['"Alegreya"', "serif"],
      },
      boxShadow: {
        primaryShadow: "0px 3px 0px #da880a",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-spinner": {
          "-moz-appearance": "textfield",
          "-webkit-appearance": "none",
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
      });
    },
  ],
};
