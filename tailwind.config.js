/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3D387C",
          secondary: "#ec4899",
          accent: "#fdba74",
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
