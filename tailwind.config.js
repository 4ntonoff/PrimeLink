/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "onboarding-svg": "url('/src/assets/images/wavy-lines.svg')",
        "register-bg-1": "url('/src/assets/images/bg-1.jpg')",
        "register-bg-2": "url('/src/assets/images/bg-2.jpg')",
        "register-bg-3": "url('/src/assets/images/bg-3.jpg')",
        "register-bg-4": "url('/src/assets/images/bg-4.jpg')",
        "register-bg-5": "url('/src/assets/images/bg-5.jpg')",
      },
      colors: {
        backround: "#1B1B1F",
        "primary-blue": "#01bbca",
      },
    },
  },

  plugins: [],
};
