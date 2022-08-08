module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xss': '.7rem',
        'tiny': '.8rem'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      padding: {
        '3.5': '.85rem'
      },
      boxShadow: {
        'full': '0 0 15px rgb(0 0 0 / 0.25)',
        'button': '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f',
        'base': '0.05em 0.05em 0.75em rgb(0 0 0 / 15%)',
        'tiny': '0.05em 0.05em 0.2em rgb(0 0 0 / 20%)',
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
          lg: "975px"
      },
    },
  },
}
