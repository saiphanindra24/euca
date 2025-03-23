/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
        serif: ["Merriweather", "serif"],
        mono: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
}

