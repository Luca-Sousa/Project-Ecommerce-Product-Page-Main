/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorOrange: 'hsl(26, 100%, 55%)',
        colorPaleOrange: 'hsl(25, 100%, 94%)',
        colorVeryDarkBlue: 'hsl(220, 13%, 13%)',
        colorDarkGrayishBlue: 'hsl(219, 9%, 45%)',
        colorGrayishBlue: 'hsl(220, 14%, 75%)',
        colorLightGrayishBlue: 'hsl(223, 64%, 98%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorBlack: 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        KumbhSans: "Kumbh Sans"
      },
      height: {
        teste: "calc(100vh - 6rem)"
      },
      boxShadow: {
        default: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1320px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '549px' },
      '2xs': { 'max': '474px' },
      '3xs': { 'max': '410px' },
    }
  },
  plugins: [],
}

