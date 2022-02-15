module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
        },
        primaryDarkBG: {
          DEFAULT: '#0e1627',
        },
      },
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        400: '400ms',
      },
      width: {
        82: '20.5rem',
        84: '22rem',
        98: '25rem',
        100: '64rem',
      },
      spacing: {
        18: '12%',
      },
      screens: {
        ms: { max: '850px' },
      },
    },
  },
  plugins: [],
};

/*
dark:bg-primaryDarkBG

dark:text-gray-300

dark:text-primary-dark

dark:bg-slate-400 

dark:hover:text-slate-100 

*/
