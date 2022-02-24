module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sbaBlue: '#002e6d',
        sbaRed: '#cc0000',
        sbaGray: '#969696',
        sbaLiteBlue: '#07dbc',
        sbaGreen: '#197e4e',
        sbaYellow: '#f1c400',
        sbaMustard: '#f1c410'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
