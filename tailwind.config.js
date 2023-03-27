/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Open Sans', 'sans-serif'],
      },
      colors:{
        'primary': '#2B0A57',
        'gray': '#F8F5FC',
        'white': '#FDFDFD',
        indigo: {
          900: '#200642'
        },
        slate:{
          100: '#FDFDFD',
          200: '#9C9C9C',
          300: '#2B0A57',
          400: '#413C3C',
          500: '#E9E9E9'
        },
        blue:{
          900: '#2B0A57'
        },
        gray:{
          700: '#F8F5FC'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
