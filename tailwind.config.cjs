/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          700: "#3f3f46",
          800: "#27272a",
          900: '#18181b',
          950: "#09090b",
        },
      }
    },
  },
  plugins: [],
});
