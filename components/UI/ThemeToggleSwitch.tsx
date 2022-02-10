import React, { useEffect, useState } from 'react';

const ThemeToggleSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  //   device theme
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
    }
  }, []);

  //   toggle theme

  const toggleTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    toggleTheme(isDark);
  }, [isDark]);

  return (
    <div
      className='relative top-10 right-10 w-20 ms:w-16 h-10 ms:h-8 cursor-pointer'
      onClick={() => setIsDark((prev) => !prev)}
    >
      <div
        className={`  w-full  h-full rounded-full transition-all duration-500 cursor-pointer bg-cover ${
          isDark ? 'bg-left' : 'bg-center'
        }`}
        style={{
          backgroundImage: `url("https://res.cloudinary.com/vastia/image/upload/v1644491008/portfolio/${
            isDark ? 'dark' : 'light'
          }-mode.png")`,
        }}
      ></div>
      <div
        className={`absolute top-0   ${
          isDark ? 'translate-x-full' : 'translate-x-0'
        }   w-10 ms:w-8 h-10 ms:h-8 ${
          isDark ? 'bg-gray-200' : 'bg-yellow-300'
        } rounded-full  z-10 transition-all duration-500`}
      ></div>
    </div>
  );
};

export default ThemeToggleSwitch;
