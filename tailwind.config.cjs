/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // see https://daisyui.com/docs/themes for avaible themes
  // daisyui: {
  //   themes: ["cupcake"],
  // },
};
