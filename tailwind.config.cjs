/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      boxShadow: {
        grayBoxShadow_4: "-4px 4px 0px rgb(15 23 42)",
        grayBoxShadow_10: "-10px 10px 0px rgb(15 23 42)",
      },
    },
  },
  plugins: [],
};
