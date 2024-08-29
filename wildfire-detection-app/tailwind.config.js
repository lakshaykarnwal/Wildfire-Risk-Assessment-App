/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#02435c',
        primary: '#FFFFFF', // White color for contrast
      },
    },
  },
  plugins: [],
}
