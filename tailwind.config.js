module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          4: "#828282",
          5: "#BDBDBD",
          6: "#333333",
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
