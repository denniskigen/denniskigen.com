/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "var(--font-geist-sans)"],
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
