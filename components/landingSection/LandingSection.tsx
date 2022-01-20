import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { planeVariants } from '../../src/animations/landingSection';
import MainTitle from './MainTitle';
import MyEmail from './MyEmail';
import ScrollDown from './ScrollDown';
import Subtitle from './Subtitle';

const HeroSection = () => {
  // animation ref
  const planeControls = useAnimation();
  const titleControls = useAnimation();
  const subTitleControls = useAnimation();
  const scrollDownControls = useAnimation();
  // state

  // plane animation start
  const planeAnimationSequence = async () => {
    await planeControls.start('animate');
    planeControls.start('whileInView');
    titleControls.start('animate');
    subTitleControls.start('animate');
    scrollDownControls.start('animate');
  };

  planeAnimationSequence();

  // title animation start

  return (
    <div className='flex w-full mx-24 mt-32'>
      {/* Left container */}
      <div className='flex flex-col w-1/2 items-start justify-center py-12 pl-32 relative'>
        <MainTitle controls={titleControls} />
        <Subtitle controls={subTitleControls} />
        {/* Email */}
        <MyEmail />
        {/* Scroll Down */}
        <ScrollDown />
      </div>
      {/* Right container */}
      <div
        className='flex flex-col w-1/2 items-center justify-center'
        // style={{ backgroundImage: 'url(/geo-bg.svg)' }}
      >
        <motion.div variants={planeVariants} initial='initial' animate={planeControls}>
          <Image src='/plane.svg' className='w-full' width={400} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
