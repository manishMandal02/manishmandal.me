import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const TechSystem = () => {
  const techStackContainerVariant = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 45,
        ease: 'linear',
      },
    },
  };

  const techStackVariant = {
    animate0: {
      // rotate: -360,s
    },
  };

  const jsLogo: string =
    'https://res.cloudinary.com/vastia/image/upload/v1642930174/portfolio/TechStack/5125114039554278920_1_uvsljb.png';

  const mernTech: string[] = [
    'https://res.cloudinary.com/vastia/image/upload/v1615998803/portfolio/TechStack/react_wpgmkr.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642861709/portfolio/TechStack/nextjs_noqhb8.svg',
    'https://res.cloudinary.com/vastia/image/upload/v1615998802/portfolio/TechStack/node-js_b2crs4.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642920970/portfolio/TechStack/express-1_pbocwy.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642923885/portfolio/TechStack/fgma-logo.svg_mfry7c.png',
    'https://res.cloudinary.com/vastia/image/upload/v1631982867/portfolio/TechStack/docker_u8iwmg.png',
    'https://res.cloudinary.com/vastia/image/upload/v1615998803/portfolio/TechStack/vs-code_qywr62.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642923744/portfolio/TechStack/tailwindcss_wjrmzx.svg',
  ];

  return (
    <div className='py-4 px-4 w-1/2 flex items-center justify-center -mr-12 mt z-30'>
      <div className='absolute linedBorder w-48 h-48 z-20 rounded-full'></div>
      <div className='absolute  w-28 h-28 z-20 rounded-full linedBorder'></div>
      {/* tech stacks */}
      <motion.div
        variants={techStackContainerVariant}
        initial='initial'
        animate='animate'
        className='bg-white flex items-center skew-y-12	 justify-center  border-2 border-dashed  border-slate-200 border-opacity-80 w-72 h-72 rounded-full relative '
      >
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 shadow-gray-200   w-14 h-14 rounded-full absolute -top-6 left-28 py-2 px-2`}
        >
          <Image src={mernTech[0]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 shadow-gray-200 z-20  w-14 h-14 rounded-full absolute top-2 left-4 py-2 px-2`}
        >
          <Image src={mernTech[6]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 w-14 z-20 h-14 rounded-full absolute top-28 -right-8 py-2 px-2`}
        >
          <Image src={mernTech[1]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-4 right-2 py-2 px-2`}
        >
          <Image src={mernTech[7]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-28 -left-7 py-2 px-2`}
        >
          <Image src={mernTech[2]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-52 left-2 py-2 px-2`}
        >
          <Image src={mernTech[5]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-64  left-28 py-2 px-2`}
        >
          <Image src={mernTech[3]} height={50} width={50} className='' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 z-20 w-14 h-14 rounded-full absolute top-52  left-56 py-2 px-2`}
        >
          <Image src={mernTech[4]} height={40} width={30} className=' ' />
        </motion.div>
      </motion.div>
      {/* JS in center */}
      <motion.div
        variants={techStackVariant}
        animate='animate0'
        className='bg-white flex items-center justify-center w-20 h-20 rounded-full absolute'
      >
        <Image src={jsLogo} layout='fill' className='z-20 rounded-full  object-cover object-center ' />
      </motion.div>
    </div>
  );
};

export default TechSystem;