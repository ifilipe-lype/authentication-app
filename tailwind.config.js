const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          1: "#E0E0E0",
          2: "#F2F2F2",
          3: "#828282",
          4: "#4F4F4F",
          5: "#BDBDBD",
          6: "#333333",
          dark: "#252329",
        },
        blue: {
          1: "#2F80ED",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
