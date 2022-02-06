import React from 'react';
import Divider from '../UI/Divider';
import About from './About';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className='overflow-x-hidden ms:-mt-10'>
      <Divider />
      <div className=' relative flex ms:flex-col-reverse justify-around ms:justify-start mt-20 ms:mt-4 my-10 px-16 ms:px-4 overflow-hidden '>
        <About />
        <TechSystem />
      </div>
    </div>
  );
};

export default AboutMe;
