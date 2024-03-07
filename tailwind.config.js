/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        darkText: "#e5e7eb",
        darkBg: "#00171F",
        lightBg: "#FBFBFF"
      },
    },
  },
  plugins: [],
};
