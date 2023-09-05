/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E7CBE0",
          100: "#D5B8CE",
          200: "#C2A4BC",
          300: "#B091AA",
          400: "#9D7E98",
          500: "#8B6B86",
          600: "#785774",
          700: "#654462",
          800: "#533150",
          900: "#411D3E",
          950: "#2E0A2C",
        },
      },
    },
  },
  plugins: [],
};
