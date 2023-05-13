import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { techStackContainerVariant } from '../../src/animations/landingSection';

type TechStack = {
  id: number;
  name: string;
  icon: string;
  pos: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
};

const TechSystem = () => {
  const techStackVariant = {
    animate0: {
      // rotate: -360,s
    },
  };

  const tsLogo: string =
    'https://res.cloudinary.com/mandal/image/upload/v1683794394/portfolio/TechStack/typescript_cljttk.png';

  const techStack: TechStack[] = [
    {
      id: 1,
      name: 'React',
      pos: { top: '-1.5rem', left: '7rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1615998803/portfolio/TechStack/react_wpgmkr.png',
    },

    {
      id: 2,
      name: 'Next',
      pos: { top: '1rem', right: '1rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1642861709/portfolio/TechStack/nextjs_noqhb8.svg',
    },
    {
      id: 3,
      name: 'Tailwind',
      pos: { top: '7rem', right: '-1.5rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1642923744/portfolio/TechStack/tailwindcss_wjrmzx.svg',
    },
    {
      id: 4,
      name: 'Figma',
      pos: { bottom: '1.5rem', right: '.75rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1642923885/portfolio/TechStack/fgma-logo.svg_mfry7c.png',
    },
    {
      id: 5,
      name: 'Node',
      pos: { bottom: '-1.5rem', right: '7.5rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1615998802/portfolio/TechStack/node-js_b2crs4.png',
    },
    {
      id: 6,
      name: 'MongoDB',
      pos: { bottom: '1.5rem', left: '.75rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1615998802/portfolio/TechStack/mongodb_zijusk.png',
    },

    {
      id: 7,
      name: 'AWS',
      pos: { top: '7rem', left: '-1.5rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1683961864/portfolio/TechStack/aws_logo.png',
    },
    {
      id: 8,
      name: 'Serverless Framework',
      pos: { top: '1.5rem', left: '.75rem' },
      icon: 'https://res.cloudinary.com/mandal/image/upload/v1683962348/portfolio/TechStack/serverless-framework.png',
    },
    // {
    //   id: 11,
    //   name: 'Docker',
    //   pos: { top: '13rem', left: '14rem' },
    //   icon: 'https://res.cloudinary.com/mandal/image/upload/v1631982867/portfolio/TechStack/docker_u8iwmg.png',
    // },
  ];

  return (
    <div className='py-4 px-4 w-1/2 ms:w-full flex items-center justify-center -mr-12 ms:mr-0 ms:mt-28  z-30'>
      <div className='absolute dark:opacity-20 dark:border-2 dark:border-dashed  dark:border-slate-200 linedBorder w-48 h-48 z-20 rounded-full opacity-10 '></div>
      <div className='absolute dark:opacity-20 dark:border-2 dark:border-dashed  dark:border-slate-200 w-28 h-28 z-20 rounded-full linedBorder opacity-10 '></div>
      <motion.div
        variants={techStackContainerVariant}
        initial='initial'
        animate='animate'
        className='bg-white  dark:bg-primaryDarkBG flex items-center skew-y-12	 justify-center  border-2 border-dashed  border-slate-200 border-opacity-80  dark:border-opacity-20 w-72 h-72 rounded-full relative '
      >
        {/* tech stacks */}
        {techStack.map((stack, i) => (
          <motion.div
            key={stack.id}
            className={`bg-white dark:bg-gray-100 flex items-center justify-center shadowPlane0 z-20 shadow-gray-200   w-12 h-12 rounded-full ${
              stack.name === 'MongoDB' ? 'py-3 px-3' : stack.name === 'Figma' ? 'py-3.5 px-3.5' : 'py-2 px-2'
            } absolute `}
            style={{ ...stack.pos }}
          >
            <Image alt={stack.name} src={stack.icon} height={50} width={50} />
          </motion.div>
        ))}
      </motion.div>
      {/* JS in center */}
      <motion.div
        variants={techStackVariant}
        animate='animate0'
        className='bg-white dark:bg-gray-100 flex items-center justify-center w-16 h-16 rounded-full  absolute'
      >
        <Image alt={'javascript logo'} src={tsLogo} fill className='z-20  object-cover object-center p-2.5' />
      </motion.div>
    </div>
  );
};

export default TechSystem;
