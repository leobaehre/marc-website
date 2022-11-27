/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 15s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          '0%, 100%': { },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      colors: {
        'vera-blue': '#004D9E',
        'vera-orange': '#EF8D37',
      },
    },
    
  },
  plugins: [],
}
