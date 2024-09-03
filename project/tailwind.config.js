/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      colors: {
        text: {
          light: "#0c0e16",
          dark: "#ffffff",
          secondary: {
            light: "#888eb0",
            dark: "#dfe3fa"
          },
          btn: {
            light: "#7E88C3",
            dark: "#888EB0"
          }
        },
        background: {
          light: "#f8f8fb",
          dark: "#141625",
          header: "#373b53",
          "new-invoice": {
            light: "#ffffff",
            dark: "#141625"
          },
          input: {
            light: "#ffffff",
            dark: "#252945"
          },
          btn: {
            light: "#F9FAFE",
            dark: "#252945"
          },
        },

      }
    },
  },
  plugins: [],
}