import React from 'react';
import About from './About.tsx';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className=''>
      {/* <div
        className=' h-40 mt-20 w-full'
        style={{
          backgroundImage: 'url(/wave-top-bg.svg)',
          backgroundPosition: 'bottom',

          backgroundRepeat: 'repeat',
        }}
      ></div> */}
      <div
        className=' h-36 mt-20 w-full'
        style={{
          backgroundImage: 'url(/wave-bg.svg)',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      <div className='flex -mt-16 py-10 px-16'>
        <About />
        <TechSystem />
      </div>
    </div>
  );
};

export default AboutMe;
