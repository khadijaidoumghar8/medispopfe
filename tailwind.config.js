/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#274C77",
        secondary: "#6096BA",
        hover: "#A3CEF1",
        background: "#E7ECEF",
        textgray: "#8B8C89",
      },
      fontFamily: {
        title: ["Abhaya Libre", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};