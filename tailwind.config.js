/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['"Amatic SC"'],
        'abel': ['Abel']
      },
      colors: {
        primary: '#FCF7F8',
        secondary: '#42E2B8',
        dark: '#323031'
      }
    },
  },
  plugins: [],
}