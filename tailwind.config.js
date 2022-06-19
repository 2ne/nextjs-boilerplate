module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    corePlugins: {
      textOpacity: false,
      backgroundOpacity: false,
      borderOpacity: false,
      divideOpacity: false,
      placeholderOpacity: false,
      ringOpacity: false,
    },
    fontSize: {
      'sm': ['1.1rem', {
        letterSpacing: '0.05em',
        lineHeight: '1.95rem',
      }],
      'base': ['1.5rem', {
        letterSpacing: '0.1em',
        lineHeight: '2rem',
      }],
      'xl': ['4.75rem', {
        letterSpacing: '0.0em',
        lineHeight: '4.45rem',
      }],
    },
    extend: {
      colors: {
        black: '#141414',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
