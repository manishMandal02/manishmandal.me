import React from 'react';
import About from './About';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* <div
        className=' h-40 mt-20 w-full'
        style={{
          backgroundImage: 'url(/wave-top-bg.svg)',
          backgroundPosition: 'bottom',

          backgroundRepeat: 'repeat',
        }}
      ></div> */}
      <div
        className='relative h-36  w-full '
        style={{
          backgroundImage: 'url(/wave-bg.svg)',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'transparent',
        }}
      ></div>
      <div className=' relative flex justify-around my-10 py-10 h-96 px-16 overflow-hidden '>
        <About />
        <TechSystem />
      </div>
    </div>
  );
};

export default AboutMe;
