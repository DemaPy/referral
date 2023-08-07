/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      violet: "#8343EB",
      white: "#ffffff",
      green: "#CCFF98",
      orange: "#F3925C",
      dark_grey: "#5F5F60",
      grey: "#A8A8A8",
      black: "#1A1A1C",
    },
    extend: {
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        red_hat: ['Red Hat Display', 'sans-serif']
      },
      maxWidth: {
        "10xl": "90rem"
      }
    },
  },
  plugins: [],
};
