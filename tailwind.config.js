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
        colorDarkGrayishBlue:'hsl(219, 9%, 45%)',
        colorGrayishBlue: 'hsl(220, 14%, 75%)',
        colorLightGrayishBlue: 'hsl(223, 64%, 98%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        // (with 75% opacity for lightbox background)
        colorBlack : 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        KumbhSans: "Kumbh Sans"
      },
      height: {
        teste: "calc(100vh - 6rem)"
      },
      boxShadow: {
        default: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      }
    },
  },
  plugins: [],
}

