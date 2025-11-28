/** @type {import('tailwindcss'). Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#FFFFFF",
          surface: "#F8F9FA",
          text: "#202124",
          textSecondary: "#5F6368",
          primary: "#1A73E8",
          hover: "#E8F0FE",
          border: "#DADCE0",
        },
        dark: {
          bg: "#202124",
          surface: "#303134",
          text: "#E8EAED",
          textSecondary: "#9AA0A6",
          primary: "#8AB4F8",
          hover: "#394457",
          border: "#5F6368",
        },
        accent: {
          blue: "#1A73E8",
          red: "#EA4335",
          yellow: "#FBBC04",
          green: "#34A853",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        signature: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
