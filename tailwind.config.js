/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkText: "#EFECEC",
        darkBg: "#262626",
        lightText: "#545454",
        lightBg: "#f5f5f5",
        accent: "#8A61FF",
        darkTile: "#2b2b2b",
        lightTile: "#ebebeb",
      },
    },
  },
  plugins: [],
};
