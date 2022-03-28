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
        'business-spotlight-1': "url('https://i.ibb.co/fMQ1wf0/20130326-ehockstein-atlanta00120.jpg')",
        'business-spotlight-2': "url('https://i.ibb.co/dPsXhDx/20180503-AOberstadt-Seattle-18.jpg')",
      }),
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
