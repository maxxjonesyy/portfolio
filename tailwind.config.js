/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accentText: "#4361ee",
        darkText: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
