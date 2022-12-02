/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'azo-sans-web': ['azo-sans-web', 'sans-serif'],
      'azo-sans-uber': ['azo-sans-uber', 'sans-serif'],
    },
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
      lineHeight: {
        '12': '3rem',
      }
    },
    
  },
  plugins: [],
}
