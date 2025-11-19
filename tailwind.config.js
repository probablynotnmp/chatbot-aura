/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00', // Inker Orange
        secondary: '#000000', // Black
        accent: '#FFFFFF', // White
        dark: '#1A1A1A', // Dark Gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font
      }
    },
  },
  plugins: [],
}
