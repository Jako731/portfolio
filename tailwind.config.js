/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          50: '#fcf7ee',
          100: '#f6e9cf',
          200: '#ecd19b',
          300: '#e2b467',
          400: '#db9d47',
          500: '#d27e2e',
          600: '#b96026',
          700: '#9a4523',
          800: '#7e3822',
          900: '#682f1f',
          950: '#3b170d',
        },
      },
    },
  },
  plugins: [],
});
