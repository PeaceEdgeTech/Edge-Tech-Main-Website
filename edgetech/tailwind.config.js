/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'check': ['8rem'],
    },
    extend: {
     keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0rem)' },
        '100%': { transform: 'translateX(37rem)' },
        'infinite':true,
      }
     }
    },
  },
  plugins: [],
}