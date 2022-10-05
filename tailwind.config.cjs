/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // see https://daisyui.com/docs/themes for available themes
  // list only used theme reduces css bundle size
  daisyui: {
    themes: ["cupcake"],
  },
};
