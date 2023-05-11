import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { techStackContainerVariant } from '../../src/animations/landingSection';

const TechSystem = () => {
  const techStackVariant = {
    animate0: {
      // rotate: -360,s
    },
  };

  const tsLogo: string =
    'https://res.cloudinary.com/mandal/image/upload/v1683794394/portfolio/TechStack/typescript_cljttk.png';

  const techStack: string[] = [
    'https://res.cloudinary.com/mandal/image/upload/v1615998803/portfolio/TechStack/react_wpgmkr.png',
    'https://res.cloudinary.com/mandal/image/upload/v1642861709/portfolio/TechStack/nextjs_noqhb8.svg',
    'https://res.cloudinary.com/mandal/image/upload/v1615998802/portfolio/TechStack/node-js_b2crs4.png',
    'https://res.cloudinary.com/mandal/image/upload/v1642920970/portfolio/TechStack/express-1_pbocwy.png',
    'https://res.cloudinary.com/mandal/image/upload/v1642923885/portfolio/TechStack/fgma-logo.svg_mfry7c.png',
    'https://res.cloudinary.com/mandal/image/upload/v1631982867/portfolio/TechStack/docker_u8iwmg.png',
    'https://res.cloudinary.com/mandal/image/upload/v1615998803/portfolio/TechStack/vs-code_qywr62.png',
    'https://res.cloudinary.com/mandal/image/upload/v1642923744/portfolio/TechStack/tailwindcss_wjrmzx.svg',
  ];

  return (
    <div className='py-4 px-4 w-1/2 ms:w-full flex items-center justify-center -mr-12 ms:mr-0 ms:mt-28 z-30'>
      <div className='absolute dark:opacity-20 dark:border-2 dark:border-dashed  dark:border-slate-200 linedBorder w-48 h-48 z-20 rounded-full opacity-10 '></div>
      <div className='absolute dark:opacity-20 dark:border-2 dark:border-dashed  dark:border-slate-200 w-28 h-28 z-20 rounded-full linedBorder opacity-10 '></div>
      {/* tech stacks */}
      <motion.div
        variants={techStackContainerVariant}
        initial='initial'
        animate='animate'
        className='bg-white  dark:bg-primaryDarkBG flex items-center skew-y-12	 justify-center  border-2 border-dashed  border-slate-200 border-opacity-80  dark:border-opacity-20 w-72 h-72 rounded-full relative '
      >
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 shadow-gray-200   w-14 h-14 rounded-full absolute -top-6 left-28 py-2 px-2`}
        >
          <Image alt={techStack[0]} src={techStack[0]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 shadow-gray-200 z-20  w-14 h-14 rounded-full absolute top-2 left-4 py-2 px-2`}
        >
          <Image alt={techStack[6]} src={techStack[6]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 w-14 z-20 h-14 rounded-full absolute top-28 -right-8 py-2 px-2`}
        >
          <Image alt={techStack[1]} src={techStack[1]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-4 right-2 py-2 px-2`}
        >
          <Image alt={techStack[7]} src={techStack[7]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-28 -left-7 py-2 px-2`}
        >
          <Image alt={techStack[2]} src={techStack[2]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-52 left-2 py-2 px-2`}
        >
          <Image alt={techStack[5]} src={techStack[5]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-64  left-28 py-2 px-2`}
        >
          <Image alt={techStack[3]} src={techStack[3]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-52  left-56 py-2 px-2`}
        >
          <Image alt={techStack[4]} src={techStack[4]} height={40} width={30} className=' ' />
        </motion.div>
      </motion.div>
      {/* JS in center */}
      <motion.div
        variants={techStackVariant}
        animate='animate0'
        className='bg-white dark:bg-gray-100 flex items-center justify-center w-16 h-16 rounded-full absolute'
      >
        <Image
          alt={'javascript logo'}
          src={tsLogo}
          fill
          className='z-20 rounded-full  object-cover object-center p-2'
        />
      </motion.div>
    </div>
  );
};

export default TechSystem;
