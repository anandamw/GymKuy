/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem",
        // sm: '2rem',
        // lg: '4rem',
        // xl: "5rem",
        // "2xl": "2rem",
        // "3xl": "2rem",
        // "4xl": "10rem",
        // "5xl": "12rem",
        // "6xl": "14rem",
        // "7xl": "16rem",
        // "8xl": "18rem",
        // "9xl": "20rem",
        // "10xl": "24rem",
      },
    },
    extend: {
      colors: {

      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
