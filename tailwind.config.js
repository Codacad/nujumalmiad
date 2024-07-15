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
  plugins: [],
};
