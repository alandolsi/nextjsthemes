const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: {
          dark: "#000000",
          DEFAULT: "#007bff",
        },
        label: {
          dark: "#007bff",
          DEFAULT: "#ffffff",
        },
      }
    },
  },
  plugins: [],
}
