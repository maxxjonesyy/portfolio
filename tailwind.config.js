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
        accentText: "#4361ee",
        darkText: "#e5e7eb",
        darkBg: "#00171F",
        lightBg: "#FBFBFF",
      },
    },
  },
  plugins: [],
};
