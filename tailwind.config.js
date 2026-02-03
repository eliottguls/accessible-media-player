/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        swedish: {
          white: "#fefefe",
          cream: "#f9f7f2",
          sage: "#4a634e",
          blue: "#2c5282",
          grey: "#e5e3df",
          charcoal: "#1a1a1a",
          wood: "#8c5e3c",
        },
      },
    },
  },
  plugins: [],
};
