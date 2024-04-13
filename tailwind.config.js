/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif' ]

      }}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["garden", "dark", "light", "business", "autumn", "aqua", "corporate"],
  },
};
