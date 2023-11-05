/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      satisfy: ["Satisfy"],
      raleway: ["Raleway"],
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: ["dark"],
  },
};
