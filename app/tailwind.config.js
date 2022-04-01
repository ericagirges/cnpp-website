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
        sbaLiteBlue: '#007dbc',
        sbaGreen: '#197e4e',
        sbaYellow: '#f1c400',
        sbaMustard: '#f1c410',
      },
      backgroundImage: (theme) => ({
        // Images for the Business Spotlight 1 & 2
        'business-spotlight-1': "url('https://i.ibb.co/w6mDdmL/Laan-Na-Thai.jpg')",
        'business-spotlight-2': "url('https://i.ibb.co/ZH0GXYv/Barwin-Aibesh-Aleppo-Kitchen.jpg')",
      }),
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
