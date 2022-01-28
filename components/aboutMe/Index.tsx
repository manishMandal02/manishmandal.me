import React from 'react';
import About from './About';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className='overflow-x-hidden'>
      <div
        className='relative h-32  w-full '
        style={{
          backgroundImage: 'url(/wave-bg.svg)',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      <div className=' relative flex justify-around mt-20 my-10   px-16 overflow-hidden '>
        <About />
        <TechSystem />
      </div>
    </div>
  );
};

export default AboutMe;
