/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkText: "#EFECEC",
        lightText: "#545454",
        accent: "#8A61FF",
        darkTile: "#2b2b2b",
        lightTile: "#ebebeb",
      },
      backgroundImage: {
        lightBg:
          "linear-gradient(to top, rgb(240, 240, 240), rgb(255, 255, 255))",
        darkBg: "linear-gradient(to top, rgb(36, 36, 36), rgb(36, 36, 45))",
      },

      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 2s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-out": {
          "0%": { opacity: "100%" },
          "75%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
