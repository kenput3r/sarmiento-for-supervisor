const colors = require('tailwindcss/colors')
const formsPlugin = require('@tailwindcss/forms')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: { 'fluid-video': '56.25%' },
    },
    colors: {
      orange: {
        500: '#ea8329',
      },
      blue: {
        500: '#293782',
      },
      gray: colors.gray,
      indigo: colors.indigo,
      slate: colors.slate,
      white: colors.white,
    },
    screens: {
      'x-down': { max: '375px' },
      phones: { max: '500px' },
      notPhones: '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [formsPlugin],
}
