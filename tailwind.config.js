module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3e2ddf',
        },
        primaryDark: {
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
        82: '22.5rem',
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
try as primary - text-indigo-500

dark:bg-primaryDark

dark:text-gray-300

dark:text-indigo-500

dark:bg-slate-400 

dark:

dark:hover:text-slate-100 

*/
