import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

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
  };
  const titleAnimationSequence = async () => {
    await titleControls.start('animate');
    subTitleControls.start('animate');
    scrollDownControls.start('animate');
  };

  planeAnimationSequence();
  titleAnimationSequence();
  // title animation start

  return (
    <div
      className='flex w-screen mt-0  h-screen'
      // style={{ backgroundImage: 'url(/geo-bg.svg)', backgroundAttachment: 'fixed' }}
    >
      {/* Left container */}
      <div className='flex flex-col w-1/2 items-start justify-center py-12 ml-64 relative'>
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
          <Image src='/plane.svg' className='w-full' width={500} height={300} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
