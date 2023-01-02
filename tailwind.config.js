/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3D387C",
          secondary: "#BFDBF7",
          accent: "#BFDBF7",
          neutral: "#191A3E",
          "base-100": "#FFFFFF",
          info: "#7dd3fc",
          success: "#a3e635",
          warning: "#fde047",
          error: "#ef4444",
        },
      },
      "lemonade",
    ],
  },
};
