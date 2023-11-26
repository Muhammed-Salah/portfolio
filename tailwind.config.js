/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d0f26',
        secondary: '#EAC486',
        button: { hover: '#141639'}
      },
      backgroundImage: {
        'blue-gradient': "url('/src/assets/background.gif')",
        'pattern': "url('/src/assets/pattern.svg')",
      }

    },
  },
  plugins: [],
}

