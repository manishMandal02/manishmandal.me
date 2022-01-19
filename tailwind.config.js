module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B1AF8',
        },
      },
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
