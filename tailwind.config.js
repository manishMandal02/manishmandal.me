module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
  ],
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
        82: '21.4rem',
        98: '23.5rem',
        99: '34rem',
        100: '64rem',
        54: '13rem',
      },
      height: {
        54: '13rem',
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
