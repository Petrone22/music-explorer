/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular"],
      },
      spacing: {
        300: "250px",
      },
    },
  },
  plugins: [],
};
