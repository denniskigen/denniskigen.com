const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "subtle-dark": "#1c1c1c",
        "very-grey": "#3a3a3a",
        "very-light": "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--inter-font)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
