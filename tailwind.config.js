module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    screens: {
      'sm': '812px',
      // => @media (min-width: 576px) { ... }

      'md': '812px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',

      'xl': '1680px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  daisyui: {
    themes: ["valentine"],
  },
};
