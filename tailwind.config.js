/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-texture': "url('/src/assets/All Images/Vector.png')",
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'Dark_01' : '#1A1919',
        'Dark_02' : '#474747',
        'Dark_03' : '#757575',
        'Dark_04' : '#A3A3A3',
        'Dark_05' : '#D1D1D1',
        'Dark_06' : '#E8E8E8',
        'Dark_07' : '#F4F4F4',
        'Grad_R'  : '#7E90FE',
        'Grad_L'  : '#9873FF',
      },
    },
  },
  plugins: [],
}
