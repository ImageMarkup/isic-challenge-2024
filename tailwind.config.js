/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_includes/**/*.liquid',
    './_pages/**/*.liquid',
    './_pages/**/*.md',
    './_layouts/**/*.liquid',
    './_posts/*.md',
    './*.liquid',
    './*.md',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    logs: false,
    themes: ["corporate", "night"],
  },
}
