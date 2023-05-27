/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: { 
     extend: {
      colors: {
        backgroundColor: '#fffefefe',
        customBlue: '#025EFE',
        navyBlue: '#1E2954',
        customOrange:'#F69F1B',
        customRed: '#EB001B',
        ash: '#F0F0F1',
        cardNumberColor: '#B7BDCC',
        lightestBlue: '#535766',
        lightBlue: '#ECF3FE',
      },
    },},
  variants: {},
  plugins: [],
};




