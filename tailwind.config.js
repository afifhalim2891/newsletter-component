/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        "tomato": "hsl(4, 100%, 67%)",
        "darkSlateGrey": "hsl(234, 29%, 20%)",
        "charcoalGrey": "hsl(235, 18%, 26%)",
      },
      fontFamily:{
        'sans':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

