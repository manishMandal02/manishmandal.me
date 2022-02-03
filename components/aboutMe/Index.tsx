import React from 'react';
import Divider from '../UI/Divider';
import About from './About';
import TechSystem from './TechSystem';

const AboutMe = () => {
  return (
    <div className='overflow-x-hidden'>
      <Divider />
      <div className=' relative flex justify-around mt-20 my-10 px-16 overflow-hidden '>
        <About />
        <TechSystem />
      </div>
    </div>
  );
};

export default AboutMe;
