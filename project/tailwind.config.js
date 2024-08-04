/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      colors:{
        text:{
          light:"#0c0e16",
          dark:"#ffffff",
          secondary:{
            light:"#888eb0",
            dark:"#dfe3fa"
          }
        },
        background:{
          light:"#f8f8fb",
          dark:"#141625",
          header: "#373b53",
          "new-invoice":{
            light:"#ffffff",
            dark:"#141625"
          }
        },

      }
    },
  },
  plugins: [],
}