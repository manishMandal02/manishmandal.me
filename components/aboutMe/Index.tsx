import React from 'react';
import About from './About';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className='  overflow-x-hidden'>
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
      <div className='flex justify-between -mt-16 py-10 h-96 px-16'>
        <About />
        <TechSystem />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dicta magnam labore assumenda nemo
        consequuntur asperiores ducimus adipisci facere odio, repudiandae ipsum dignissimos delectus in ea
        debitis enim quo a!
      </p>
    </div>
  );
};

export default AboutMe;
