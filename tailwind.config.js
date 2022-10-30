/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vera-blue': '#004D9E',
        'vera-orange': '#EF8D37',
      },
    },
    
  },
  plugins: [],
}
