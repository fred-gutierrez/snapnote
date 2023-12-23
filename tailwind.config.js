/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-custom": "#1f1f1f",
      },
      spacing: {
        112: "28rem",
        46: "11.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
