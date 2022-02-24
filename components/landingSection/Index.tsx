import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { planeVariants } from '../../src/animations/landingSection';
import MainTitle from './MainTitle';
import MyEmail from './MyEmail';
import ScrollDown from './ScrollDown';
import Subtitle from './Subtitle';

import planeSvg from '../../public/plane.svg';

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
    <div className='flex w-screen -mt-12 ms:mt-12 h-screen ms: relative'>
      {/* Left container */}
      <div className='flex flex-col w-1/2 ms:w-full items-start justify-center py-12 ms:py-8 mt-12 ms:-mt-16 ml-52 ms:ml-4 relative'>
        <MainTitle controls={titleControls} />
        <Subtitle controls={subTitleControls} />
        {/* Email */}
        <MyEmail />
        {/* Scroll Down */}
        <ScrollDown />
      </div>
      {/* Right container */}
      {/*  Above 850px */}
      <div className='ms:hidden flex w-1/2 items-center justify-center'>
        <motion.div variants={planeVariants} initial='initial' animate={planeControls}>
          <Image src={planeSvg} className='w-full' />
        </motion.div>
      </div>
      {/* Below 850px */}
      <div className='hidden ms:flex w-full items-center justify-center absolute top-16'>
        <motion.div className='w-2/4' variants={planeVariants} initial='initial' animate={planeControls}>
          <Image src={planeSvg} className='' />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
