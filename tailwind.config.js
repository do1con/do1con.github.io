module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'SM': { 'max': '767px' },
        'MD': { 'max': '1023px' },
        'LG': { 'min': '1024px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/typography')],
};
