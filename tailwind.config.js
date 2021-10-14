module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.scss",
    "./src/**/*.css"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3880d3',
        'gray-1': '#1D1F29',
        'gray-2': '#222431',
        'gray-3': '#272937',
        'gray-4': '#222431',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      backgroundOpacity: ['active'],
      textColor: ['disabled'],
      borderColor: ['active'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
