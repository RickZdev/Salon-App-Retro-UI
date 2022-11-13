/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ['#FFF', '#F5F6F6', '#DEDEE0'],
        base: ['#1B1B1B', '#727272', '#FCFCFC'],
        secondary: ['#61C0BF', '#E0C3F6', '#FCC5B3']
      },
      fontFamily: {
        SFProDisplayBold: 'SFProDisplay-Bold',
        SFProDisplaySemiBold: 'SFProDisplay-SemiBold',
        SFProDisplayMedium: 'SFProDisplay-Medium',
        SFProDisplayRegular: 'SFProDisplay-Regular',
      }
    },
  },
  plugins: [],
}
